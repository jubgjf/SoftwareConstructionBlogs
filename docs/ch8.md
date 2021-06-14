# 第八章

## 相等

### `==` 和 `.equals()`

`==` 比较的是索引，是两个对象的指向是否相等

`.equals()` 在 `Object` 类中定义为：

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

看似和 `==` 相同，但是经常在字类中会重写 `.equals()` 方法，如 `String` 类中：

```java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```

比较的就是两个对象的值相等