(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{380:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"抽象数据类型-adt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型-adt"}},[t._v("#")]),t._v(" 抽象数据类型 ADT")]),t._v(" "),a("h2",{attrs:{id:"类型和操作的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型和操作的分类"}},[t._v("#")]),t._v(" 类型和操作的分类")]),t._v(" "),a("h3",{attrs:{id:"可变与不可变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可变与不可变"}},[t._v("#")]),t._v(" 可变与不可变")]),t._v(" "),a("p",[t._v("如："),a("code",[t._v("Data")]),t._v(" 可变，"),a("code",[t._v("StringBuilder")]),t._v(" 可变，而 "),a("code",[t._v("String")]),t._v(" 不可变")]),t._v(" "),a("h3",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("ul",[a("li",[t._v("创建者 creator\n"),a("ul",[a("li",[t._v("创建一个该类型的新对象。一个创建者可能会接受一个对象作为参数，但是这个对象的类型不能是它创建对象对应的类型")]),t._v(" "),a("li",[a("code",[t._v("t* -> T")])]),t._v(" "),a("li",[t._v("通常用构造函数实现，例如 "),a("code",[t._v("new ArrayList()")]),t._v("，但是有的构造体是静态方法（类方法），例如 "),a("code",[t._v("Arrays.asList()")]),t._v(" 和 "),a("code",[t._v("String.valueOf")]),t._v("，这样的静态方法也称为 "),a("em",[a("strong",[t._v("工厂方法")])])])])]),t._v(" "),a("li",[t._v("生产者 producer\n"),a("ul",[a("li",[t._v("通过接受同类型的对象创建新的对象。例如，"),a("code",[t._v("String")]),t._v(" 类里面的 "),a("code",[t._v("concat")]),t._v(" 方法就是一个生产者，它接受两个字符串然后据此产生一个新的字符串")]),t._v(" "),a("li",[a("code",[t._v("T+, t* -> T")])])])]),t._v(" "),a("li",[t._v("观察者 observer\n"),a("ul",[a("li",[t._v("接受一个同类型的对象然后返回一个不同类型的对象/值。例如 "),a("code",[t._v("List")]),t._v(" 的 "),a("code",[t._v("size")]),t._v(" 方法，它返回一个 "),a("code",[t._v("int")])]),t._v(" "),a("li",[a("code",[t._v("T+, t* -> t")])])])]),t._v(" "),a("li",[t._v("改造者 mutator\n"),a("ul",[a("li",[t._v("改变对象的内容，例如 "),a("code",[t._v("List")]),t._v(" 的 "),a("code",[t._v("add")]),t._v(" 方法，它会在列表中添加一个元素")]),t._v(" "),a("li",[a("code",[t._v("T+, t* -> void | t | T")])]),t._v(" "),a("li",[t._v("一个没有返回值的方法 "),a("em",[a("strong",[t._v("一定有副作用")])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("其中 T 代表抽象类型本身；t 代表其他的类型；+ 代表这个参数可能出现一次或多次；* 代表这个参数可能出现零次或多次")])]),t._v(" "),a("h2",{attrs:{id:"抽象类型是通过它的操作定义的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类型是通过它的操作定义的"}},[t._v("#")]),t._v(" 抽象类型是通过它的操作定义的")]),t._v(" "),a("p",[t._v("对于类型 T 来说，它的操作集合和规格说明完全定义和构造了它的特性")]),t._v(" "),a("h2",{attrs:{id:"设计抽象类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计抽象类型"}},[t._v("#")]),t._v(" 设计抽象类型")]),t._v(" "),a("h3",{attrs:{id:"设计规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计规则"}},[t._v("#")]),t._v(" 设计规则")]),t._v(" "),a("ul",[a("li",[t._v("设计少量，简单，可以组合实现强大功能的操作而非设计很多复杂的操作")]),t._v(" "),a("li",[t._v("充分地考虑到用户的需求，也就是说，用户可以用这个操作集合做他们可能想做的计算")]),t._v(" "),a("li",[t._v("抽象类型可以是通用的：例如，列表、集合，或者图。或者它可以是适用于特定领域的：一个街道的地图，一个员工数据库，一个电话簿等等。但是一个抽象类型不能兼有上述二者的特性")])]),t._v(" "),a("h2",{attrs:{id:"表示独立性-ri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示独立性-ri"}},[t._v("#")]),t._v(" 表示独立性 RI")]),t._v(" "),a("p",[t._v("表示独立性：ADT 的使用和它的内部表示（实际的数据结构和实现）无关，内部表示的改变将对外部的代码没有影响")]),t._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[t._v("一个 ADT 如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Represents a family that lives in a household together.\n * A family always has at least one person in it.\n * Families are mutable.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Family")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the people in the family, sorted from oldest to youngest, with no duplicates.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return a list containing all the members of the family, with no duplicates.\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMembers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("使用者的代码如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("client1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Family")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get youngest person in the family")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" baby "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这个 ADT 的设计不符合 RI，因为 "),a("code",[t._v("client1")]),t._v(" 依赖于 "),a("code",[t._v("Family")]),t._v(" 的数据表示("),a("code",[t._v("List")]),t._v(")")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("Family")]),t._v(" 使用 "),a("code",[t._v("Set")]),t._v(" 替代 "),a("code",[t._v("List")]),t._v(" 时，"),a("code",[t._v("client1")]),t._v(" 将触发静态检查错误")]),t._v(" "),a("h3",{attrs:{id:"代码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码分析"}},[t._v("#")]),t._v(" 代码分析")]),t._v(" "),a("ul",[a("li",[t._v("规格说明（specification）")]),t._v(" "),a("li",[t._v("数据表示（representation）")]),t._v(" "),a("li",[t._v("具体实现（implementation）")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Represents a family that lives in a household together.\n * A family always has at least one person in it.\n * Families are mutable.                  -> specification\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Family")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" specification\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the people in the family, sorted from oldest to youngest, with no duplicates.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" representation\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return a list containing all the members of the family, with no duplicates.\n     */")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" specification\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMembers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" specification\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" implementation\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"不变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不变量"}},[t._v("#")]),t._v(" 不变量")]),t._v(" "),a("blockquote",[a("p",[t._v("总是要假设 client 有“恶意”破坏 ADT 的不变量")])]),t._v(" "),a("h3",{attrs:{id:"表示暴露-rep-exposure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示暴露-rep-exposure"}},[t._v("#")]),t._v(" 表示暴露 Rep exposure")]),t._v(" "),a("p",[t._v("指的是类外部的代码可以直接修改类内部存储的数据")]),t._v(" "),a("p",[t._v("解决方法：防御性复制")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTimestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("更进一步：防御性创建")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tweet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"表示不变性-ri-和抽象函数-af"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示不变性-ri-和抽象函数-af"}},[t._v("#")]),t._v(" 表示不变性 RI 和抽象函数 AF")]),t._v(" "),a("h3",{attrs:{id:"表示空间和抽象空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示空间和抽象空间"}},[t._v("#")]),t._v(" 表示空间和抽象空间")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/ch6_R_A.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("开发者关注 R，使用者关注 A")])]),t._v(" "),a("h3",{attrs:{id:"抽象函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象函数"}},[t._v("#")]),t._v(" 抽象函数")]),t._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("A")]),a("mi",[t._v("F")]),a("mo",[t._v(":")]),a("mi",[t._v("R")]),a("mo",[t._v("→")]),a("mi",[t._v("A")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v(" AF: R \\rightarrow A ")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(":")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("→")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("A")])])])])])])],1),a("ul",[a("li",[t._v("满射\n"),a("ul",[a("li",[t._v("每一个 A 中元素都有对应的 R 元素，而且可能对应不止一个")])])]),t._v(" "),a("li",[t._v("未必单射\n"),a("ul",[a("li",[t._v("有些 R 中元素可能没有对应的 A 元素（因为部分值不合法）")])])])]),t._v(" "),a("h3",{attrs:{id:"表示不变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示不变量"}},[t._v("#")]),t._v(" 表示不变量")]),t._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("R")]),a("mi",[t._v("I")]),a("mo",[t._v(":")]),a("mi",[t._v("R")]),a("mo",[t._v("→")]),a("mi",[t._v("b")]),a("mi",[t._v("o")]),a("mi",[t._v("o")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("a")]),a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v(" RI: R \\rightarrow boolean ")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07847em"}},[t._v("I")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(":")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("→")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("b")]),a("span",{staticClass:"mord mathdefault"},[t._v("o")]),a("span",{staticClass:"mord mathdefault"},[t._v("o")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mord mathdefault"},[t._v("a")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")])])])])])])],1),a("p",[t._v("对于表示值 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("r")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("r")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])]),t._v("，当且仅当 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("r")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("r")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])]),t._v(" 被 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("A")]),a("mi",[t._v("F")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("AF")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("A")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")])])])])]),t._v(" 映射到了 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("A")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("A")])])])])]),t._v("，"),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("R")]),a("mi",[t._v("I")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("r")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("RI(r)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07847em"}},[t._v("I")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 为真")],1),t._v(" "),a("p",[t._v("RI 可以看作是一个条件，描述了什么是“合法”的值")]),t._v(" "),a("p",[t._v("表示域和抽象域都不能决定 AF 和 RI，即使是同样的抽象域和表示域以及同样的表示不变量，也可能有不同的解释方法/抽象函数")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/ch6_RI.png",alt:""}})]),t._v(" "),a("p",[t._v("表示不变量和抽象函数都应该在表示 "),a("em",[a("strong",[t._v("声明后")])]),t._v(" 注释出来：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharSet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rep invariant:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   s contains no repeated characters")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Abstraction function:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   AF(s) = {s[i] | 0 <= i < s.length()}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"检查表示不变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查表示不变量"}},[t._v("#")]),t._v(" 检查表示不变量")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check that the rep invariant is true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *** Warning: this does nothing unless you turn on assertion checking")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// by passing -enableassertions to Java")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkRep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" denominator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" denominator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用原则：")]),t._v(" "),a("ul",[a("li",[t._v("在每一次创建或改变数据的操作之后都调用 "),a("code",[t._v("checkRep()")])]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("checkRep()")]),t._v(" 中，应该显示检查某个变量的非空 "),a("code",[t._v("assert s != null")])])])])]),t._v(" "),a("h3",{attrs:{id:"ri-和-af-的注释规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ri-和-af-的注释规范"}},[t._v("#")]),t._v(" RI 和 AF 的注释规范")]),t._v(" "),a("ul",[a("li",[t._v("对于 RI\n"),a("ul",[a("li",[t._v("说明什么区域是合法的，以及什么使得这个区域合法/不合法")])])]),t._v(" "),a("li",[t._v("对于 AF\n"),a("ul",[a("li",[t._v("说明抽象域表示了什么，并且明确说明一个输入和一个输出是怎么对应的")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);