# 软件测试与测试优先的编程

## 编写测试策略文档

例子

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