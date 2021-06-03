# 软件测试与测试优先的编程

## 边界值分析

大量的错误发生在输入域的边界而非中央

合理的测试用例分布：

1. 略低于最小值
2. 最小值
3. 略高于最小值
4. 正常值
5. 略低于最大值
6. 最大值
7. 略高于最大值

![](images/ch2_boundary_test.png)

## 白盒测试

黑盒测试|白盒测试
:-:|:-:
不考虑内部实现|考虑内部实现细节

## 覆盖率测试

- 测试效果：路径覆盖 > 分支覆盖 > 语句覆盖
- 测试难度：路径覆盖 > 分支覆盖 > 语句覆盖
- 覆盖率要求
    - 工业上通常要求 100% 语句覆盖，除非有极少见的不可达语句
    - 100% 的分支覆盖更加艰难
    - 100% 的路径覆盖几乎不可能
    
## 自动化测试和回归测试

### 自动化测试

自动调用被测函数、自动判定测试结果、自动计算覆盖度

并非自动生成测试用例。测试用例还需要我们自己编写

### 回归测试

一旦程序被修改，重新执行之前的所有测试

## 编写测试策略文档

测试策略

```java
/*
 * Testing strategy
 * 
 * Partition the inputs as follows:
 * text.length():           0, 1, > 1
 * start:                   0, 1, text.length()
 *                          text.length() - 1,
 *                          1 < start < text.length(),
 * text.length() - start:   0, 1, even > 1, odd > 1
 * 
 * Include even- and odd-length reversals because
 * only odd has a middle element that doesn't move.
 * 
 * Exhaustive Cartesian coverage of partitions.
 */
```

测试方法注释

```java
// covers test.length() = 0,
//        start = 0 = text.length(),
//        text.length()-start = 0
@Test public void testEmpty() {
    assertEquals("", reverseEnd("", 0));
}
```
