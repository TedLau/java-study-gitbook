const l=JSON.parse('{"key":"v-5ce2a3a2","path":"/java/base/java-basic-lan-sum.html","title":"Java 基础 - 图谱 & Q/A","lang":"zh-CN","frontmatter":{"order":30,"description":"1. 知识体系 java_basic 2. Q&A 2.1 Java 中应该使用什么数据类型来代表价格? 如果不是特别关心内存和性能的话，使用BigDecimal，否则使用预定义精度的 double 类型。 2.2 怎么将 byte 转换为 String? 可以使用 String 接收 byte[] 参数的构造器来进行转换，需要注意的点是要使用的正确的...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/base/java-basic-lan-sum.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 基础 - 图谱 & Q/A"}],["meta",{"property":"og:description","content":"1. 知识体系 java_basic 2. Q&A 2.1 Java 中应该使用什么数据类型来代表价格? 如果不是特别关心内存和性能的话，使用BigDecimal，否则使用预定义精度的 double 类型。 2.2 怎么将 byte 转换为 String? 可以使用 String 接收 byte[] 参数的构造器来进行转换，需要注意的点是要使用的正确的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 知识体系","slug":"_1-知识体系","link":"#_1-知识体系","children":[]},{"level":2,"title":"2. Q&A","slug":"_2-q-a","link":"#_2-q-a","children":[{"level":3,"title":"2.1 Java 中应该使用什么数据类型来代表价格?","slug":"_2-1-java-中应该使用什么数据类型来代表价格","link":"#_2-1-java-中应该使用什么数据类型来代表价格","children":[]},{"level":3,"title":"2.2 怎么将 byte 转换为 String?","slug":"_2-2-怎么将-byte-转换为-string","link":"#_2-2-怎么将-byte-转换为-string","children":[]},{"level":3,"title":"2.3 Java 中怎样将 bytes 转换为 long 类型?","slug":"_2-3-java-中怎样将-bytes-转换为-long-类型","link":"#_2-3-java-中怎样将-bytes-转换为-long-类型","children":[]},{"level":3,"title":"2.4 我们能将 int 强制转换为 byte 类型的变量吗? 如果该值大于 byte 类型的范围，将会出现什么现象?","slug":"_2-4-我们能将-int-强制转换为-byte-类型的变量吗-如果该值大于-byte-类型的范围-将会出现什么现象","link":"#_2-4-我们能将-int-强制转换为-byte-类型的变量吗-如果该值大于-byte-类型的范围-将会出现什么现象","children":[]},{"level":3,"title":"2.5 存在两个类，B 继承 A，C 继承 B，我们能将 B 转换为 C 么? 如 C = (C) B；","slug":"_2-5-存在两个类-b-继承-a-c-继承-b-我们能将-b-转换为-c-么-如-c-c-b","link":"#_2-5-存在两个类-b-继承-a-c-继承-b-我们能将-b-转换为-c-么-如-c-c-b","children":[]},{"level":3,"title":"2.6 哪个类包含 clone 方法? 是 Cloneable 还是 Object?","slug":"_2-6-哪个类包含-clone-方法-是-cloneable-还是-object","link":"#_2-6-哪个类包含-clone-方法-是-cloneable-还是-object","children":[]},{"level":3,"title":"2.7  Java 中 ++ 操作符是线程安全的吗?","slug":"_2-7-java-中-操作符是线程安全的吗","link":"#_2-7-java-中-操作符是线程安全的吗","children":[]},{"level":3,"title":"2.8 a = a + b 与 a += b 的区别","slug":"_2-8-a-a-b-与-a-b-的区别","link":"#_2-8-a-a-b-与-a-b-的区别","children":[]},{"level":3,"title":"2.9 我能在不进行强制转换的情况下将一个 double 值赋值给 long 类型的变量吗?","slug":"_2-9-我能在不进行强制转换的情况下将一个-double-值赋值给-long-类型的变量吗","link":"#_2-9-我能在不进行强制转换的情况下将一个-double-值赋值给-long-类型的变量吗","children":[]},{"level":3,"title":"2.10 3*0.1 == 0.3 将会返回什么? true 还是 false?","slug":"_2-10-3-0-1-0-3-将会返回什么-true-还是-false","link":"#_2-10-3-0-1-0-3-将会返回什么-true-还是-false","children":[]},{"level":3,"title":"2.11 int 和 Integer 哪个会占用更多的内存?","slug":"_2-11-int-和-integer-哪个会占用更多的内存","link":"#_2-11-int-和-integer-哪个会占用更多的内存","children":[]},{"level":3,"title":"2.12 为什么 Java 中的 String 是不可变的(Immutable)?","slug":"_2-12-为什么-java-中的-string-是不可变的-immutable","link":"#_2-12-为什么-java-中的-string-是不可变的-immutable","children":[]},{"level":3,"title":"2.13 我们能在 Switch 中使用 String 吗?","slug":"_2-13-我们能在-switch-中使用-string-吗","link":"#_2-13-我们能在-switch-中使用-string-吗","children":[]},{"level":3,"title":"2.14 Java 中的构造器链是什么?","slug":"_2-14-java-中的构造器链是什么","link":"#_2-14-java-中的构造器链是什么","children":[]},{"level":3,"title":"2.15 枚举类","slug":"_2-15-枚举类","link":"#_2-15-枚举类","children":[]},{"level":3,"title":"2.16 什么是不可变对象(immutable object)? Java 中怎么创建一个不可变对象?","slug":"_2-16-什么是不可变对象-immutable-object-java-中怎么创建一个不可变对象","link":"#_2-16-什么是不可变对象-immutable-object-java-中怎么创建一个不可变对象","children":[]},{"level":3,"title":"2.17 我们能创建一个包含可变对象的不可变对象吗?","slug":"_2-17-我们能创建一个包含可变对象的不可变对象吗","link":"#_2-17-我们能创建一个包含可变对象的不可变对象吗","children":[]},{"level":3,"title":"2.18 有没有可能两个不相等的对象有相同的 hashcode?","slug":"_2-18-有没有可能两个不相等的对象有相同的-hashcode","link":"#_2-18-有没有可能两个不相等的对象有相同的-hashcode","children":[]},{"level":3,"title":"2.19 两个相同的对象会有不同的 hash code 吗?","slug":"_2-19-两个相同的对象会有不同的-hash-code-吗","link":"#_2-19-两个相同的对象会有不同的-hash-code-吗","children":[]},{"level":3,"title":"2.20 我们可以在 hashcode() 中使用随机数字吗?","slug":"_2-20-我们可以在-hashcode-中使用随机数字吗","link":"#_2-20-我们可以在-hashcode-中使用随机数字吗","children":[]},{"level":3,"title":"2.21 Java 中，Comparator 与 Comparable 有什么不同?","slug":"_2-21-java-中-comparator-与-comparable-有什么不同","link":"#_2-21-java-中-comparator-与-comparable-有什么不同","children":[]},{"level":3,"title":"2.22 为什么在重写 equals 方法的时候需要重写 hashCode 方法?","slug":"_2-22-为什么在重写-equals-方法的时候需要重写-hashcode-方法","link":"#_2-22-为什么在重写-equals-方法的时候需要重写-hashcode-方法","children":[]},{"level":3,"title":"2.23 “a==b”和”a.equals(b)”有什么区别?","slug":"_2-23-a-b-和-a-equals-b-有什么区别","link":"#_2-23-a-b-和-a-equals-b-有什么区别","children":[]},{"level":3,"title":"2.24 a.hashCode() 有什么用? 与 a.equals(b) 有什么关系?","slug":"_2-24-a-hashcode-有什么用-与-a-equals-b-有什么关系","link":"#_2-24-a-hashcode-有什么用-与-a-equals-b-有什么关系","children":[]},{"level":3,"title":"2.25 final、finalize 和 finally 的不同之处?","slug":"_2-25-final、finalize-和-finally-的不同之处","link":"#_2-25-final、finalize-和-finally-的不同之处","children":[]},{"level":3,"title":"2.26 Java 中的编译期常量是什么? 使用它又什么风险?","slug":"_2-26-java-中的编译期常量是什么-使用它又什么风险","link":"#_2-26-java-中的编译期常量是什么-使用它又什么风险","children":[]},{"level":3,"title":"2.27 静态内部类与顶级类有什么区别?","slug":"_2-27-静态内部类与顶级类有什么区别","link":"#_2-27-静态内部类与顶级类有什么区别","children":[]},{"level":3,"title":"2.28 Java 中，Serializable 与 Externalizable 的区别?","slug":"_2-28-java-中-serializable-与-externalizable-的区别","link":"#_2-28-java-中-serializable-与-externalizable-的区别","children":[]},{"level":3,"title":"2.29 说出 JDK 1.7 中的三个新特性?","slug":"_2-29-说出-jdk-1-7-中的三个新特性","link":"#_2-29-说出-jdk-1-7-中的三个新特性","children":[]},{"level":3,"title":"2.30 说出 5 个 JDK 1.8 引入的新特性?","slug":"_2-30-说出-5-个-jdk-1-8-引入的新特性","link":"#_2-30-说出-5-个-jdk-1-8-引入的新特性","children":[]},{"level":3,"title":"2.31 接口是什么? 为什么要使用接口而不是直接使用具体类?","slug":"_2-31-接口是什么-为什么要使用接口而不是直接使用具体类","link":"#_2-31-接口是什么-为什么要使用接口而不是直接使用具体类","children":[]},{"level":3,"title":"2.32 Java 中，抽象类与接口之间有什么不同?","slug":"_2-32-java-中-抽象类与接口之间有什么不同","link":"#_2-32-java-中-抽象类与接口之间有什么不同","children":[]},{"level":3,"title":"2.33 Object有哪些公用方法?","slug":"_2-33-object有哪些公用方法","link":"#_2-33-object有哪些公用方法","children":[]},{"level":3,"title":"2.34 equals与==的区别","slug":"_2-34-equals与-的区别","link":"#_2-34-equals与-的区别","children":[]},{"level":3,"title":"2.35 String、StringBuffer与StringBuilder的区别","slug":"_2-35-string、stringbuffer与stringbuilder的区别","link":"#_2-35-string、stringbuffer与stringbuilder的区别","children":[]},{"level":3,"title":"2.36 switch能否用String做参数","slug":"_2-36-switch能否用string做参数","link":"#_2-36-switch能否用string做参数","children":[]},{"level":3,"title":"2.37 接口与抽象类","slug":"_2-37-接口与抽象类","link":"#_2-37-接口与抽象类","children":[]},{"level":3,"title":"2.38 抽象类和最终类","slug":"_2-38-抽象类和最终类","link":"#_2-38-抽象类和最终类","children":[]},{"level":3,"title":"2.39 异常","slug":"_2-39-异常","link":"#_2-39-异常","children":[]},{"level":3,"title":"2.40 关于finally","slug":"_2-40-关于finally","link":"#_2-40-关于finally","children":[]},{"level":3,"title":"2.41 受检查异常和运行时异常","slug":"_2-41-受检查异常和运行时异常","link":"#_2-41-受检查异常和运行时异常","children":[]},{"level":3,"title":"2.42 super出现在父类的子类中。有三种存在方式","slug":"_2-42-super出现在父类的子类中。有三种存在方式","link":"#_2-42-super出现在父类的子类中。有三种存在方式","children":[]},{"level":3,"title":"2.43 this() & super()在构造方法中的区别","slug":"_2-43-this-super-在构造方法中的区别","link":"#_2-43-this-super-在构造方法中的区别","children":[]},{"level":3,"title":"2.44 构造内部类和静态内部类对象","slug":"_2-44-构造内部类和静态内部类对象","link":"#_2-44-构造内部类和静态内部类对象","children":[]},{"level":3,"title":"2.45 序列化","slug":"_2-45-序列化","link":"#_2-45-序列化","children":[]},{"level":3,"title":"2.46 Java移位运算符","slug":"_2-46-java移位运算符","link":"#_2-46-java移位运算符","children":[]},{"level":3,"title":"2.47 形参&实参","slug":"_2-47-形参-实参","link":"#_2-47-形参-实参","children":[]},{"level":3,"title":"2.48 局部变量为什么要初始化","slug":"_2-48-局部变量为什么要初始化","link":"#_2-48-局部变量为什么要初始化","children":[]},{"level":3,"title":"2.49 Java语言的鲁棒性","slug":"_2-49-java语言的鲁棒性","link":"#_2-49-java语言的鲁棒性","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":18.5,"words":5550},"filePathRelative":"java/base/java-basic-lan-sum.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};