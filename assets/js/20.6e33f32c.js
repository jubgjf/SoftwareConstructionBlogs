(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(a,s,t){"use strict";t.r(s);var e=t(18),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"面向复用的软件构造技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向复用的软件构造技术"}},[a._v("#")]),a._v(" 面向复用的软件构造技术")]),a._v(" "),t("h2",{attrs:{id:"复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复用"}},[a._v("#")]),a._v(" 复用")]),a._v(" "),t("blockquote",[t("p",[a._v("接口 <- 抽象类 <- 一般类")])]),a._v(" "),t("ul",[t("li",[a._v("面向复用编程：开发可复用软件")]),a._v(" "),t("li",[a._v("基于复用编程：利用可复用软件搭建应用")])]),a._v(" "),t("p",[a._v("两种复用的开发成本高，性能不佳")]),a._v(" "),t("h2",{attrs:{id:"衡量可复用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#衡量可复用性"}},[a._v("#")]),a._v(" 衡量可复用性")]),a._v(" "),t("p",[a._v("复用的机会和代价")]),a._v(" "),t("h2",{attrs:{id:"复用模块的层次和形态学模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复用模块的层次和形态学模式"}},[a._v("#")]),a._v(" 复用模块的层次和形态学模式")]),a._v(" "),t("h3",{attrs:{id:"种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[a._v("#")]),a._v(" 种类")]),a._v(" "),t("ul",[t("li",[a._v("白盒复用：源码可见，直接复制已有代码进行修改定制")]),a._v(" "),t("li",[a._v("黑河服用：只能用 API 调用")])]),a._v(" "),t("h3",{attrs:{id:"源码层级服用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码层级服用"}},[a._v("#")]),a._v(" 源码层级服用")]),a._v(" "),t("p",[a._v("直接复制已有代码进行修改定制")]),a._v(" "),t("h3",{attrs:{id:"模块层级复用-类-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块层级复用-类-接口"}},[a._v("#")]),a._v(" 模块层级复用：类/接口")]),a._v(" "),t("ul",[t("li",[a._v("继承")]),a._v(" "),t("li",[a._v("委托")])]),a._v(" "),t("h3",{attrs:{id:"库层级复用-api-包-库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#库层级复用-api-包-库"}},[a._v("#")]),a._v(" 库层级复用：API/包/库")]),a._v(" "),t("ul",[t("li",[a._v("库：开发者调用库的代码")]),a._v(" "),t("li",[a._v("Framework：Framework调用开发者的代码")])]),a._v(" "),t("h3",{attrs:{id:"系统级复用-framework框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统级复用-framework框架"}},[a._v("#")]),a._v(" 系统级复用：Framework框架")]),a._v(" "),t("ul",[t("li",[a._v("白盒框架：代码层面的继承")]),a._v(" "),t("li",[a._v("黑河框架：实现特定的接口/委托")])]),a._v(" "),t("h2",{attrs:{id:"设计可复用的类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计可复用的类"}},[a._v("#")]),a._v(" 设计可复用的类")]),a._v(" "),t("h3",{attrs:{id:"行为子类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为子类型"}},[a._v("#")]),a._v(" 行为子类型")]),a._v(" "),t("p",[a._v("子类型多态：客户端可用统一的方式处理不同类型的对象")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/ch9_subtype.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"里氏替换原则-lsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则-lsp"}},[a._v("#")]),a._v(" 里氏替换原则 LSP")]),a._v(" "),t("p",[a._v("如果对每一个类型为 S 的对象 o1，都有类型为 T 的对象 o2 ，使得以 T 定义的所有程序 P，在所有的对象 o1 都代换成 o2 时，程序 P 的行为没有发生变化，那么类型 T 是类型 S 的子类型。")]),a._v(" "),t("blockquote",[t("p",[a._v("师傅别念了")])]),a._v(" "),t("ol",[t("li",[a._v("子类需要实现父类的所有抽象方法")]),a._v(" "),t("li",[a._v("子类可以增加方法，但不可以删")]),a._v(" "),t("li",[a._v("子类重写方法时，必须用童谣类型的参数")]),a._v(" "),t("li",[a._v("子类重写方法时，不能抛出额外的异常")]),a._v(" "),t("li",[a._v("子类的 spec 不变或要求更强（更强的不变量，更弱的前置条件，更强的后置条件）")]),a._v(" "),t("li",[a._v("子类型方法参数：逆变\n"),t("ul",[t("li",[a._v("逆变 Contra-variance：指类型变弱（如 String 变成 Object）")]),a._v(" "),t("li",[a._v("Java 中不允许参数逆变，遇到这种情况会当作 overload 重载处理")])])]),a._v(" "),t("li",[a._v("子类型方法返回值：协变\n"),t("ul",[t("li",[a._v("协变 Co-variance：指类型变强（如 Object 变成 String）")])])]),a._v(" "),t("li",[a._v("异常类型：协变")])]),a._v(" "),t("h3",{attrs:{id:"类型擦除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型擦除"}},[a._v("#")]),a._v(" 类型擦除")]),a._v(" "),t("p",[a._v("类型擦除：编译代码之后，编译器丢弃参数的类型信息，因此类型信息在运行时不可用")]),a._v(" "),t("p",[a._v("因此，泛型不是协变的")]),a._v(" "),t("p",[t("code",[a._v("List<String>")]),a._v(" 不是 "),t("code",[a._v("List<Object>")]),a._v(" 的子类型")]),a._v(" "),t("p",[a._v("所以，下边代码会报错")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" myInts "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" myNums "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" myInts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 报错")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"泛型通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型通配符"}},[a._v("#")]),a._v(" 泛型通配符")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[a._v("<> super A")]),a._v("：下限通配符")]),a._v(" "),t("li",[t("code",[a._v("<> extends A")]),a._v("：上限通配符")])]),a._v(" "),t("p",[a._v("子类型：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("List<Number>")]),a._v(" 是 "),t("code",[a._v("List<?>")]),a._v(" 的子类型")]),a._v(" "),t("li",[t("code",[a._v("List<Number>")]),a._v(" 是 "),t("code",[a._v("List<? extends Object>")]),a._v(" 的子类型")]),a._v(" "),t("li",[t("code",[a._v("List<Object>")]),a._v(" 是 "),t("code",[a._v("List<? super String>")]),a._v(" 的子类型")])]),a._v(" "),t("h3",{attrs:{id:"委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#委托"}},[a._v("#")]),a._v(" 委托")]),a._v(" "),t("p",[a._v("一个对象请求另一个对象的功能")]),a._v(" "),t("ul",[t("li",[a._v("显性委托")]),a._v(" "),t("li",[a._v("隐性委托")])]),a._v(" "),t("p",[a._v("使用情况：子类只用父类的一小部分方法，可以用委托而不是继承")]),a._v(" "),t("h3",{attrs:{id:"复合重用原则-crp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复合重用原则-crp"}},[a._v("#")]),a._v(" 复合重用原则 CRP")]),a._v(" "),t("p",[a._v("通过组合来实现多态和复用")]),a._v(" "),t("p",[a._v("例子1：")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/ch9_crp_example.png",alt:""}})]),a._v(" "),t("p",[a._v("例子2：")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/ch9_crp_duck_example_1.png.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"images/ch9_crp_duck_example_2.png.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);