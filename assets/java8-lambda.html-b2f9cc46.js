const l=JSON.parse('{"key":"v-637dd38e","path":"/java/java8/java8-lambda.html","title":"Java8-函数编程(lambda表达式)","lang":"zh-CN","frontmatter":{"order":10,"category":["Java"],"description":"我们关心的是如何写出好代码，而不是符合函数编程风格的代码。 1. 函数编程简介 在Java世界里面，面向对象还是主流思想，对于习惯了面向对象编程的开发者来说，抽象的概念并不陌生。面向对象编程是对数据进行抽象，而函数式编程是对行为进行抽象。现实世界中，数据和行为并存，程序也是如此，因此这两种编程方式我们都得学。 这种新的抽象方式还有其他好处。很多人不总是...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/java8/java8-lambda.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java8-函数编程(lambda表达式)"}],["meta",{"property":"og:description","content":"我们关心的是如何写出好代码，而不是符合函数编程风格的代码。 1. 函数编程简介 在Java世界里面，面向对象还是主流思想，对于习惯了面向对象编程的开发者来说，抽象的概念并不陌生。面向对象编程是对数据进行抽象，而函数式编程是对行为进行抽象。现实世界中，数据和行为并存，程序也是如此，因此这两种编程方式我们都得学。 这种新的抽象方式还有其他好处。很多人不总是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 函数编程简介","slug":"_1-函数编程简介","link":"#_1-函数编程简介","children":[]},{"level":2,"title":"2. lambda表达式","slug":"_2-lambda表达式","link":"#_2-lambda表达式","children":[{"level":3,"title":"2.1 引入Lambda表达式的初衷","slug":"_2-1-引入lambda表达式的初衷","link":"#_2-1-引入lambda表达式的初衷","children":[]},{"level":3,"title":"2.2 优点","slug":"_2-2-优点","link":"#_2-2-优点","children":[]},{"level":3,"title":"2.3 缺点","slug":"_2-3-缺点","link":"#_2-3-缺点","children":[]},{"level":3,"title":"2.4 其他","slug":"_2-4-其他","link":"#_2-4-其他","children":[]}]},{"level":2,"title":"3. 基本概念","slug":"_3-基本概念","link":"#_3-基本概念","children":[{"level":3,"title":"3.1 使用Lambda表达式的前提","slug":"_3-1-使用lambda表达式的前提","link":"#_3-1-使用lambda表达式的前提","children":[]},{"level":3,"title":"3.2 函数式接口","slug":"_3-2-函数式接口","link":"#_3-2-函数式接口","children":[]},{"level":3,"title":"3.2 接口默认方法","slug":"_3-2-接口默认方法","link":"#_3-2-接口默认方法","children":[]}]},{"level":2,"title":"4. Lambda表达式的重要特征","slug":"_4-lambda表达式的重要特征","link":"#_4-lambda表达式的重要特征","children":[{"level":3,"title":"4.1 lambda 语法","slug":"_4-1-lambda-语法","link":"#_4-1-lambda-语法","children":[]},{"level":3,"title":"4.2 方法引用","slug":"_4-2-方法引用","link":"#_4-2-方法引用","children":[]}]},{"level":2,"title":"5. Stream操作分类","slug":"_5-stream操作分类","link":"#_5-stream操作分类","children":[{"level":3,"title":"3.1 惰性求值方法","slug":"_3-1-惰性求值方法","link":"#_3-1-惰性求值方法","children":[]},{"level":3,"title":"3.2 及早求值方法","slug":"_3-2-及早求值方法","link":"#_3-2-及早求值方法","children":[]}]},{"level":2,"title":"6. stream & parallelStream","slug":"_6-stream-parallelstream","link":"#_6-stream-parallelstream","children":[{"level":3,"title":"6.1 stream & parallelStream","slug":"_6-1-stream-parallelstream","link":"#_6-1-stream-parallelstream","children":[]},{"level":3,"title":"6.2 parallelStream原理:","slug":"_6-2-parallelstream原理","link":"#_6-2-parallelstream原理","children":[]},{"level":3,"title":"6.3 stream与parallelStream性能测试对比","slug":"_6-3-stream与parallelstream性能测试对比","link":"#_6-3-stream与parallelstream性能测试对比","children":[]},{"level":3,"title":"6.4 Stream中常用方法如下:","slug":"_6-4-stream中常用方法如下","link":"#_6-4-stream中常用方法如下","children":[]}]},{"level":2,"title":"7. 常用例子","slug":"_7-常用例子","link":"#_7-常用例子","children":[{"level":3,"title":"7.1 匿名类简写","slug":"_7-1-匿名类简写","link":"#_7-1-匿名类简写","children":[]},{"level":3,"title":"7.2 forEach","slug":"_7-2-foreach","link":"#_7-2-foreach","children":[]},{"level":3,"title":"7.3 方法引用","slug":"_7-3-方法引用","link":"#_7-3-方法引用","children":[]},{"level":3,"title":"7.4 Filter & Predicate","slug":"_7-4-filter-predicate","link":"#_7-4-filter-predicate","children":[]},{"level":3,"title":"7.5 Map&Reduce","slug":"_7-5-map-reduce","link":"#_7-5-map-reduce","children":[]},{"level":3,"title":"7.6 Collectors","slug":"_7-6-collectors","link":"#_7-6-collectors","children":[]},{"level":3,"title":"7.7 flatMap","slug":"_7-7-flatmap","link":"#_7-7-flatmap","children":[]},{"level":3,"title":"7.8 distinct","slug":"_7-8-distinct","link":"#_7-8-distinct","children":[]},{"level":3,"title":"7.9 count","slug":"_7-9-count","link":"#_7-9-count","children":[]},{"level":3,"title":"7.10 Match","slug":"_7-10-match","link":"#_7-10-match","children":[]},{"level":3,"title":"7.11 min,max,summaryStatistics","slug":"_7-11-min-max-summarystatistics","link":"#_7-11-min-max-summarystatistics","children":[]},{"level":3,"title":"7.12 peek","slug":"_7-12-peek","link":"#_7-12-peek","children":[]}]},{"level":2,"title":"8. 一些例子","slug":"_8-一些例子","link":"#_8-一些例子","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":18.01,"words":5404},"filePathRelative":"java/java8/java8-lambda.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};