# Fundamental Java Programming and Testing

## 项目配置

> 实验指导书推荐使用 Eclipse 作为 Java IDE，此处使用 IntelliJ IDEA 代替 Eclipse

### 建立项目

选择建立 Maven 项目，以便于下一步目录结构配置

![建立 Maven 项目](images/lab1_create_maven_project.jpg)

### 目录结构配置

由于需要按照实验指导书配置类似如下的目录结构：

```
Lab1-1190200703
├── src
│   ├── P1
│   │   ├── txt
│   │   │   ├── 1.txt
│   │   │   ├── ...
│   │   │   └── 5.txt
│   │   └── MagicSquare.java
│   └── P2
├── test
│   └── P1
├── lib
└── doc
```

所以在 `pom.xml` 中添加以下配置选项：

```xml
<build>
    <sourceDirectory>
        src/P1
    </sourceDirectory>
    <testSourceDirectory>
        test/P1
    </testSourceDirectory>
</build>
```

使得 IDEA 成功识别实验所需的目录结构