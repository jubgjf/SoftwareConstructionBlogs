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

## P1

这是一道关于幻方的题，通过这部分学习了一种奇数阶幻方构造法即 [Siamese 算法](https://zh.wikipedia.org/wiki/%E5%B9%BB%E6%96%B9#%E5%A5%87%E6%95%B0%E9%98%B6%E5%B9%BB%E6%96%B9%E6%9E%84%E9%80%A0%E6%B3%95)，算法流程如下：

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

