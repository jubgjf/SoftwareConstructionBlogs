# 数据类型与类型检验

## 可变性与不变性

### 示例代码1

运行到第 3 行时的状态：

```java {3}
public class Main {
    public static void main(String[] args) {
        Integer a = 1;
        Integer b = a;
        b++;
}
```

<p align="center">
    <img src="images/ch4_immut_example_1_3.png"/>
</p>

运行到第 4 行时的状态：

```java {4}
public class Main {
    public static void main(String[] args) {
        Integer a = 1;
        Integer b = a;
        b++;
}
```

<p align="center">
    <img src="images/ch4_immut_example_1_4.png"/>
</p>

运行到第 5 行时的状态：

```java {5}
public class Main {
    public static void main(String[] args) {
        Integer a = 1;
        Integer b = a;
        b++;
}
```

<p align="center">
    <img src="images/ch4_immut_example_1_5.png"/>
</p>

### 示例代码2

运行到第 3 行时的状态：

```java {3}
public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        s += " world";
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_2_3.png"/>
</p>

运行到第 4 行时的状态：

```java {4}
public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        s += " world";
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_2_4.png"/>
</p>

### 示例代码3

运行到第 14 行时的状态：

```java {14}
public class Main {
    public static void changeStringBuffer(
            StringBuffer python1,
            StringBuffer python2
    ) {
        python1.append(" world");
        python2 = python1;
    }

    public static void main(String[] args) {
        StringBuffer java1 = new StringBuffer("Hello java1");
        StringBuffer java2 = new StringBuffer("Hello java2");

        changeStringBuffer(java1, java2);
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_3_14.png"/>
</p>

运行到第 5 行时的状态：

```java {5}
public class Main {
    public static void changeStringBuffer(
            StringBuffer python1,
            StringBuffer python2
    ) {
        python1.append(" world");
        python2 = python1;
    }

    public static void main(String[] args) {
        StringBuffer java1 = new StringBuffer("Hello java1");
        StringBuffer java2 = new StringBuffer("Hello java2");

        changeStringBuffer(java1, java2);
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_3_5.png"/>
</p>

运行到第 6 行时的状态：

```java {6}
public class Main {
    public static void changeStringBuffer(
            StringBuffer python1,
            StringBuffer python2
    ) {
        python1.append(" world");
        python2 = python1;
    }

    public static void main(String[] args) {
        StringBuffer java1 = new StringBuffer("Hello java1");
        StringBuffer java2 = new StringBuffer("Hello java2");

        changeStringBuffer(java1, java2);
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_3_6.png"/>
</p>

运行到第 7 行时的状态：

```java {7}
public class Main {
    public static void changeStringBuffer(
            StringBuffer python1,
            StringBuffer python2
    ) {
        python1.append(" world");
        python2 = python1;
    }

    public static void main(String[] args) {
        StringBuffer java1 = new StringBuffer("Hello java1");
        StringBuffer java2 = new StringBuffer("Hello java2");

        changeStringBuffer(java1, java2);
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_3_7.png"/>
</p>

返回之后的状态：

```java {15}
public class Main {
    public static void changeStringBuffer(
            StringBuffer python1,
            StringBuffer python2
    ) {
        python1.append(" world");
        python2 = python1;
    }

    public static void main(String[] args) {
        StringBuffer java1 = new StringBuffer("Hello java1");
        StringBuffer java2 = new StringBuffer("Hello java2");

        changeStringBuffer(java1, java2);
    }
}
```

<p align="center">
    <img src="images/ch4_immut_example_3_15.png"/>
</p>

### 不可变类型

不可变类型 | 可变类型
:-: | :-:
所有原始类型及其包装 |
`java.time` | `Date`
`List`, `ArrayList` | `Collections.unmodifiableList`
`Set`, `HashSet` | `Collections.unmodifiableSet`
`Map`, `HashMap` | `Collections.unmodifiableMap`

虽然号称是不可变，但也仅仅是包装了一下可变的 `List`, `Set`, `Map`，不太靠谱，例如

```java
List<String> l = new ArrayList();
List<String> ul = Collections.unmodifiableList(l);
```

此时两个列表都是空列表，如果

```java
ul.add("hello world");
```

确实会报错，但是如果

```java
l.add("hello world");
```

则不会报错。而且因为 `l` 和 `ul` 指向了同一个地址，所以 `ul` 也被改了
