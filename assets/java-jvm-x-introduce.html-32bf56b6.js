const e=JSON.parse('{"key":"v-c35eedb8","path":"/java/jvm/java-jvm-x-introduce.html","title":"JVM 基础 - Java 内存模型引入","lang":"zh-CN","frontmatter":{"order":60,"category":["Java","JVM"],"description":"很多人都无法区分Java内存模型和JVM内存结构，以及Java内存模型与物理内存之间的关系。本文从堆栈角度引入JMM，然后介绍JMM和物理内存之间的关系, 为后面JMM详解, JVM 内存结构详解, Java 对象模型详解等铺垫。 0. Java内存模型是什么 Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/jvm/java-jvm-x-introduce.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"JVM 基础 - Java 内存模型引入"}],["meta",{"property":"og:description","content":"很多人都无法区分Java内存模型和JVM内存结构，以及Java内存模型与物理内存之间的关系。本文从堆栈角度引入JMM，然后介绍JMM和物理内存之间的关系, 为后面JMM详解, JVM 内存结构详解, Java 对象模型详解等铺垫。 0. Java内存模型是什么 Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. Java内存模型是什么","slug":"_0-java内存模型是什么","link":"#_0-java内存模型是什么","children":[]},{"level":2,"title":"1. JMM引入","slug":"_1-jmm引入","link":"#_1-jmm引入","children":[{"level":3,"title":"1.1 从堆栈说起","slug":"_1-1-从堆栈说起","link":"#_1-1-从堆栈说起","children":[]},{"level":3,"title":"1.2 堆栈里面放了什么?","slug":"_1-2-堆栈里面放了什么","link":"#_1-2-堆栈里面放了什么","children":[]},{"level":3,"title":"1.3 线程栈如何访问堆上对象?","slug":"_1-3-线程栈如何访问堆上对象","link":"#_1-3-线程栈如何访问堆上对象","children":[]},{"level":3,"title":"1.4 线程栈访问堆示例","slug":"_1-4-线程栈访问堆示例","link":"#_1-4-线程栈访问堆示例","children":[]}]},{"level":2,"title":"2. JMM与硬件内存结构关系","slug":"_2-jmm与硬件内存结构关系","link":"#_2-jmm与硬件内存结构关系","children":[{"level":3,"title":"2.1 硬件内存结构简介","slug":"_2-1-硬件内存结构简介","link":"#_2-1-硬件内存结构简介","children":[]},{"level":3,"title":"2.2 JMM与硬件内存连接 - 引入","slug":"_2-2-jmm与硬件内存连接-引入","link":"#_2-2-jmm与硬件内存连接-引入","children":[]},{"level":3,"title":"2.3 JMM与硬件内存连接 - 对象共享后的可见性","slug":"_2-3-jmm与硬件内存连接-对象共享后的可见性","link":"#_2-3-jmm与硬件内存连接-对象共享后的可见性","children":[]},{"level":3,"title":"2.4 JMM与硬件内存连接 - 竞态条件","slug":"_2-4-jmm与硬件内存连接-竞态条件","link":"#_2-4-jmm与硬件内存连接-竞态条件","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11.5,"words":3450},"filePathRelative":"java/jvm/java-jvm-x-introduce.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
