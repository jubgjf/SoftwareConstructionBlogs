# Fundamental Java Programming and Testing

## IDE 选择

> 实验指导书推荐使用 Eclipse 作为 Java IDE，此处使用 IntelliJ IDEA 代替 Eclipse

## 建立项目

选择建立 Java 模块项目，以便于下一步目录结构配置

![建立 Java 模块项目](images/lab1_new_project.jpg)

## 目录结构配置

根据实验指导书，需要按照实验指导书配置类似如下的目录结构：

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

在任意目录处右键选择 “将目录标记为”，可以选择 `源根`、`测试源根`等：

![标记选项](images/lab1_mark_dir_as.jpg)

通过此方式，可将 `src/P1` 设置为 `源根`、将 `test/P1` 设置为 `测试源根`

## 奇数阶幻方构造

P1
是一道关于幻方的题，通过这部分学习了一种奇数阶幻方构造法即 [Siamese 算法](https://zh.wikipedia.org/wiki/%E5%B9%BB%E6%96%B9#%E5%A5%87%E6%95%B0%E9%98%B6%E5%B9%BB%E6%96%B9%E6%9E%84%E9%80%A0%E6%B3%95)，算法流程如下：

1. 把 $1$ 放置在第一行的中间
2. 顺序将 $2, 3, ...$ 等数放在右上方格中
3. 当右上方格出界的时候，则由另一边进入
4. 当右上方格中已经填有数，则把数填入正下方的方格中
5. 按照以上步骤直到填写完所有 $N^{2}$ 个方格

> 由于幻方的对称性，也可以把右上改为右下、左上以及左下等方位

以一个 $5$ 阶幻方为例：

$$ \Large \left[
\begin{matrix} . & . & . \\ . & . & . \\ . & . & . \end{matrix} \right]
$$

把 $1$ 放置在第一行的中间：

$$ \Large \left[
\begin{matrix} . & \textcolor{green}{1} & . \\ . & . & . \\ . & . & . \end{matrix} \right]
$$

把 $2$ 放置在 $1$ 的右上，由于上侧出界了，所以从下侧进入：

$$ \Large \left[
\begin{matrix} . & 1 & . \\ . & . & . \\ . & . & \textcolor{green}{2} \end{matrix} \right]
$$

把 $3$ 放置在 $2$ 的右上，由于右侧出界了，所以从左侧进入：

$$ \Large \left[
\begin{matrix} . & 1 & . \\ \textcolor{green}{3} & . & . \\ . & . & 2 \end{matrix} \right]
$$

把 $4$ 放置在 $3$ 的右上，由于右上已经填了 $1$ ，所以将 $4$ 填在当前位置的正下方：

$$ \Large \left[
\begin{matrix} . & \textcolor{red}{1} & . \\ 3 & . & . \\ . & . & 2 \end{matrix} \right]
$$

$$ \Large \left[
\begin{matrix} . & \textcolor{red}{1} & . \\ 3 & . & . \\ \textcolor{green}{4} & . & 2 \end{matrix} \right]
$$

重复上述过程，直到幻方填满：

$$ \Large \left[
\begin{matrix} . & 1 & . \\ 3 & \textcolor{green}{5} & . \\ 4 & . & 2 \end{matrix} \right]
$$

$$ \Large \left[
\begin{matrix} . & 1 & \textcolor{green}{6} \\ 3 & 5 & . \\ 4 & . & 2 \end{matrix} \right]
$$

$$ \Large \left[
\begin{matrix} . & 1 & 6 \\ 3 & 5 & \textcolor{green}{7} \\ 4 & . & 2 \end{matrix} \right]
$$

$$ \Large \left[
\begin{matrix} \textcolor{green}{8} & 1 & 6 \\ 3 & 5 & 7 \\ 4 & . & 2 \end{matrix} \right]
$$

$$ \Large \left[
\begin{matrix} 8 & 1 & 6 \\ 3 & 5 & 7 \\ 4 & \textcolor{green}{9} & 2 \end{matrix} \right]
$$

## 向量偏转角问题

### 问题概述

P2 的 Problem 6: Calculating bearings 是一道有关向量顺时针偏转角的问题

给定一个向量的起始点 A，以及从 y 轴正方向顺时针旋转到这个向量的角度

![](images/lab1_bearing_point_A.png)

再给定另一个点 B

![](images/lab1_bearing_point_AB.png)

求这个向量顺时针旋转到 B，需要旋转的角度

### 解决思路

由余弦定理，两个向量 $\vec a$ 和 $\vec b$ 之间的夹角 $\alpha (0 \le \alpha \le \pi)$ 如下：

$$ \Large \alpha = \arccos(\frac{\vec a \cdot \vec b}{|\vec a| \cdot |\vec b|}) $$

由于这个角在 $0$ 和 $\pi$ 之间，所以需要使用向量外积确定实际的角是在 $0$ 和 $\pi$ 之间还是 $\pi$ 和 $2\pi$ 之间

> 高中学的向量外积全忘了 :cry: ，这里从头推导一遍

将平面向量拆成坐标形式

$$ \Large \vec a \times \vec b = (a_x \vec i + a_y \vec j) \times (b_x \vec i + b_y \vec j)$$

打开括号，得

$$ \Large \vec a \times \vec b = a_x \vec i \times b_x \vec i + a_x \vec i \times b_y \vec j + a_y \vec j \times b_x
\vec i + a_y \vec j \times b_y \vec j $$

根据

$$ \Large \vec i \times \vec i = \vec 0 \\ \vec j \times \vec j = \vec 0 \\ \vec i \times \vec j = \vec k \\ \vec
j\times \vec i = - \vec k $$

可得

$$ \Large \vec a \times \vec b = (a_x b_y - a_y b_x) \times \vec k $$

所以当

$$ \Large a_x b_y - a_y b_x < 0 $$

时，是 $\vec a$ 顺时针转到 $\vec b$，故

$$ \Large 0 < \alpha < \pi$$

而当

$$ \Large a_x b_y - a_y b_x > 0 $$

时，是 $\vec a$ 逆时针转到 $\vec b$，故

$$ \Large \pi < \alpha < 2\pi $$

最后，当

$$ \Large a_x b_y - a_y b_x = 0 $$

时，$\vec a$ 和 $\vec b$ 共线，此时有

$$ \Large \alpha = 0 $$

或

$$ \Large \alpha = \pi $$

而这两种情况是余弦定理能够区分的

## 凸包问题

P2 的 Problem 7: Convex hulls 是凸包问题，采用的思路如下：

1. 点集如图所示

![](images/lab1_convexhulls_init.png)

2. 初始点是最左上方的点，初始方向向右

![](images/lab1_convexhulls_first_point.png)

3. 以当前的点为轴，依次计算从当前方向到其余各个点的顺时针偏转角

![](images/lab1_convexhulls_first_point_calc_bearing.png)

4. 从所有偏转角中，取出偏转角最小的角对应的点

![](images/lab1_convexhulls_first_point_choose_next.png)

5. 以这个点为轴，以此时的向量方向为基准，再次搜索偏转角最小的点

![](images/lab1_convexhulls_second_point.png)

6. 不断循环，直到回到初始点

![](images/lab1_convexhulls_result.png)

## 命令行编译运行项目

> 由于在编写代码时使用的是 IDEA 的一键运行功能，不能确定相同的代码在不同 IDE 下是否可以正常运行，所以学习了一下 Java 的命令行编译方法

### 寻找命令

在 IDEA 中运行 P1 的 MagicSquare 时，运行窗口输出如下：

![](images/lab1_IDEA_run_magicsquare.png)

可以看到第一行折叠的黄色命令就是编译时 IDEA 自动为我们输入的编译命令：

```powershell
C:\Users\guanj\.jdks\corretto-1.8.0_292\bin\java.exe "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA\lib\idea_rt.jar=51715:C:\Program Files\JetBrains\IntelliJ IDEA\bin" -Dfile.encoding=UTF-8 -classpath C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\charsets.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\access-bridge-64.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\cldrdata.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\dnsns.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\jaccess.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\jfxrt.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\localedata.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\nashorn.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\sunec.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\sunjce_provider.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\sunmscapi.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\sunpkcs11.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\ext\zipfs.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\jce.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\jfr.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\jfxswt.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\jsse.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\management-agent.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\resources.jar;C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\rt.jar;D:\Code\SoftwareConstruction\Lab-1\out\production\Lab-1;D:\Code\SoftwareConstruction\Lab-1\lib\junit-4.13.1.jar;D:\Code\SoftwareConstruction\Lab-1\lib\hamcrest-core-1.3.jar MagicSquare
```

直接复制上述命令到 powershell 中是可以运行成功的，但是这个命令里有太多绝对路径了。所以先简单学习一下 Java 命令行编译方法，再尝试修改绝对路径为相对路径

### 命令行编译基础

假设有如下代码：

```java
/**
 * HelloWorld.java
 */
public class HelloWorld {
    public static void main(String []args) {
       System.out.println("Hello World");
    }
}
```

首先用 `javac` 将 `.java` 编译为 `.class`

```powershell
javac HelloWorld.java
```

再用 `java` 运行 `.class` 即可

```powershell
java HelloWorld
```

- `-classpath` 选项用于引入外部 jar 库，例如

    > 需要注意的是，多个 jar 库需要用分号 `;` 间隔开
    
    ```powershell
    javac -classpath "./lib/A.jar;./lib/B.jar" HelloWorld.java
    ```

- `-encoding` 选项用于指定文件编码，这里使用 `utf8`

    ```powershell
    javac -encoding utf8 HelloWorld.java
    ```

- `-d` 选项用于指定生成的 `.class` 文件的存放位置，例如

    ```powershell
    javac -d ./out HelloWorld.java
    ```

- `-javaagent` 选项是帮助开发人员进行运行、调试的。经测试不加此选项也可正常运行

### 修改命令

1. 命令中第一部分

    ```powershell
    C:\Users\guanj\.jdks\corretto-1.8.0_292\bin\java.exe
    ```

    本应该是运行 `.class` 的命令，观察原命令可发现其中的 `-classpath` 中有一个

    ```
    D:\Code\SoftwareConstruction\Lab-1\out\production\Lab-1
    ```
    
    查看这个目录
    
    ![](images/lab1_IDEA_run_magicsquare_out.png)
    
    可知这里存放的就是 `.class` 文件。推测 IDEA 是将 `javac` 和 `java` 两个命令合并了

2. 命令中第二部分

    ```
    -javaagent:C:\Program Files\JetBrains\IntelliJ IDEA\lib\idea_rt.jar=51715:C:\Program Files\JetBrains\IntelliJ IDEA\bin
    ```
    
    是 `-javaagent` 选项，可以删去

3. 命令中第三部分

    ```
    -Dfile.encoding=UTF-8
    ```
    
    是指定文件编码，这里我用
    
    ```
    -encoding utf8
    ```
    
    代替

4. 命令中的第四部分

    ```
    -classpath C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\charsets.jar;...
    ```
    
    是外部库，可以看到这些库都放在
    
    ```
    C:\Users\guanj\.jdks\corretto-1.8.0_292\jre\lib\
    ```
    
    之中。于是手动查找这些库，将它们复制到 `Lab1-1190200703/lib/` 中
    
    于是这部分可以改为
    
    ```
    -classpath .\lib\charsets.jar;...
    ```
    
    注意到刚才发现的 `javac` 和 `java` 命令合并的问题，所以拆分之后的两个 `-classpath` 如下
    
    ```
    javac ... -classpath .\lib\charsets.jar;...
    ```
    
    ```
    java ... -classpath .\out;.\lib\charsets.jar;...
    ```

5. 综上，修改后的命令如下：

    ```powershell
    # P1.ps1
    
    mkdir out/P1
    javac -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar" ./src/P1/*.java ./src/P1/exception/*.java -encoding utf8 -d ./out/P1
    java -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar;./out/P1" MagicSquare
    ```
   
    P2 和 P3 同理：

    ```powershell
    # P2.ps1
    
    mkdir out/P2
    javac -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar" ./src/P2/rules/*.java ./src/P2/turtle/*.java -encoding utf8 -d ./out/P2
    java -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar;./out/P2" turtle.TurtleSoup
    ```

    ```powershell
    # P3.ps1
    
    mkdir out/P3
    javac -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar" ./src/P3/*.java ./src/P3/exception/*.java -encoding utf8 -d ./out/P3
    java -classpath "./lib/charsets.jar;./lib/access-bridge-64.jar;./lib/cldrdata.jar;./lib/dnsns.jar;./lib/jaccess.jar;./lib/jfxrt.jar;./lib/localedata.jar;./lib/nashorn.jar;./lib/sunec.jar;./lib/sunjce_provider.jar;./lib/sunmscapi.jar;./lib/sunpkcs11.jar;./lib/zipfs.jar;./lib/jce.jar;./lib/jfr.jar;./lib/jfxswt.jar;./lib/jsse.jar;./lib/management-agent.jar;./lib/resources.jar;./lib/rt.jar;./lib/junit-4.13.1.jar;./lib/hamcrest-core-1.3.jar;./out/P3" Main
    ```

    用 powershell 执行脚本，即可运行程序

    ![](images/lab1_cmd_run_turtle.png)

> 费了好大劲做完这三个脚本之后发现，我的 Lab1 项目在 Eclipse 上可以完美运行
> 
> 可恶！:sob: :sob: :sob: 
