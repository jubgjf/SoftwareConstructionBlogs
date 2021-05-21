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

