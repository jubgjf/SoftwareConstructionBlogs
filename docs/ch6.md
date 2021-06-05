# 抽象数据类型 ADT

## 类型和操作的分类

### 可变与不可变

如：`Data` 可变，`StringBuilder` 可变，而 `String` 不可变

### 操作

- 创建者 creator
    - 创建一个该类型的新对象。一个创建者可能会接受一个对象作为参数，但是这个对象的类型不能是它创建对象对应的类型
    - `t* -> T`
    - 通常用构造函数实现，例如 `new ArrayList()`，但是有的构造体是静态方法（类方法），例如 `Arrays.asList()` 和 `String.valueOf`，这样的静态方法也称为 ***工厂方法***
- 生产者 producer
    - 通过接受同类型的对象创建新的对象。例如，`String` 类里面的 `concat` 方法就是一个生产者，它接受两个字符串然后据此产生一个新的字符串
    - `T+, t* -> T`
- 观察者 observer
    - 接受一个同类型的对象然后返回一个不同类型的对象/值。例如 `List` 的 `size` 方法，它返回一个 `int`
    - `T+, t* -> t`
- 改造者 mutator
    - 改变对象的内容，例如 `List` 的 `add` 方法，它会在列表中添加一个元素
    - `T+, t* -> void | t | T`
    - 一个没有返回值的方法 ***一定有副作用***

> 其中 T 代表抽象类型本身；t 代表其他的类型；+ 代表这个参数可能出现一次或多次；* 代表这个参数可能出现零次或多次

## 抽象类型是通过它的操作定义的

对于类型 T 来说，它的操作集合和规格说明完全定义和构造了它的特性

## 设计抽象类型

### 设计规则

- 设计少量，简单，可以组合实现强大功能的操作而非设计很多复杂的操作
- 充分地考虑到用户的需求，也就是说，用户可以用这个操作集合做他们可能想做的计算
- 抽象类型可以是通用的：例如，列表、集合，或者图。或者它可以是适用于特定领域的：一个街道的地图，一个员工数据库，一个电话簿等等。但是一个抽象类型不能兼有上述二者的特性

## 表示独立性 RI

表示独立性：ADT 的使用和它的内部表示（实际的数据结构和实现）无关，内部表示的改变将对外部的代码没有影响

### 例子

一个 ADT 如下：

```java
/**
 * Represents a family that lives in a household together.
 * A family always has at least one person in it.
 * Families are mutable.
 */
class Family {
    // the people in the family, sorted from oldest to youngest, with no duplicates.
    public List<Person> people;

    /**
     * @return a list containing all the members of the family, with no duplicates.
     */
    public List<Person> getMembers() {
        return people;
    }
}
```

使用者的代码如下：

```java
void client1(Family f) {
    // get youngest person in the family
    Person baby = f.people.get(f.people.size()-1);
    ...
}
```

这个 ADT 的设计不符合 RI，因为 `client1` 依赖于 `Family` 的数据表示(`List`)

当 `Family` 使用 `Set` 替代 `List` 时，`client1` 将触发静态检查错误

### 代码分析

- 规格说明（specification）
- 数据表示（representation）
- 具体实现（implementation）

```java
/**
 * Represents a family that lives in a household together.
 * A family always has at least one person in it.
 * Families are mutable.                  -> specification
 */
class Family {                            -> specification
    // the people in the family, sorted from oldest to youngest, with no duplicates.
    public List<Person> people;           -> representation

    /**
     * @return a list containing all the members of the family, with no duplicates.
     */                                   -> specification
    public List<Person> getMembers() {    -> specification
        return people;                    -> implementation
    }
}
```

## 不变量

> 总是要假设 client 有“恶意”破坏 ADT 的不变量

### 表示暴露 Rep exposure

指的是类外部的代码可以直接修改类内部存储的数据

解决方法：防御性复制

```java
public Date getTimestamp() {
    return new Date(timestamp.getTime());
}
```

更进一步：防御性创建

```java
public Tweet(String author, String text, Date timestamp) {
    this.author = author;
    this.text = text;
    this.timestamp = new Date(timestamp.getTime());
}
```

## 表示不变性 RI 和抽象函数 AF

### 表示空间和抽象空间

![](images/ch6_R_A.png)

- 开发者关注 R，使用者关注 A

### 抽象函数

$$ AF: R \rightarrow A $$

- 满射
    - 每一个 A 中元素都有对应的 R 元素，而且可能对应不止一个
- 未必单射
    - 有些 R 中元素可能没有对应的 A 元素（因为部分值不合法）

### 表示不变量

$$ RI: R \rightarrow boolean $$

对于表示值 $r$，当且仅当 $r$ 被 $AF$ 映射到了 $A$，$RI(r)$ 为真

RI 可以看作是一个条件，描述了什么是“合法”的值

表示域和抽象域都不能决定 AF 和 RI，即使是同样的抽象域和表示域以及同样的表示不变量，也可能有不同的解释方法/抽象函数

![](images/ch6_RI.png)

表示不变量和抽象函数都应该在表示***声明后***注释出来：

```java
public class CharSet {
    private String s;
    // Rep invariant:
    //   s contains no repeated characters
    // Abstraction function:
    //   AF(s) = {s[i] | 0 <= i < s.length()}
    ...
}
```

### 检查表示不变量

- 示例

    ```java
    // Check that the rep invariant is true
    // *** Warning: this does nothing unless you turn on assertion checking
    // by passing -enableassertions to Java
    private void checkRep() {
        assert denominator > 0;
        assert gcd(Math.abs(numerator), denominator) == 1;
    }
    ```

- 使用原则：
    - 在每一次创建或改变数据的操作之后都调用 `checkRep()`
    - 在 `checkRep()` 中，应该显示检查某个变量的非空 `assert s != null`

### RI 和 AF 的注释规范

- 对于 RI
    - 说明什么区域是合法的，以及什么使得这个区域合法/不合法
- 对于 AF
    - 说明抽象域表示了什么，并且明确说明一个输入和一个输出是怎么对应的