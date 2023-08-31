const e=JSON.parse('{"key":"v-77c7f0b5","path":"/java/collection/java-map-HashMap_HashSet.html","title":"Map - HashSet & HashMap 源码解析","lang":"zh-CN","frontmatter":{"order":110,"category":["Java"],"description":"1. Java7 HashMap 1.1 概述 之所以把HashSet和HashMap放在一起讲解，是因为二者在Java里有着相同的实现，前者仅仅是对后者做了一层包装，也就是说HashSet里面有一个HashMap(适配器模式)。因此本文将重点分析HashMap。 HashMap实现了Map接口，即允许放入key为`null的元素，也允许插入value...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java/collection/java-map-HashMap_HashSet.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Map - HashSet & HashMap 源码解析"}],["meta",{"property":"og:description","content":"1. Java7 HashMap 1.1 概述 之所以把HashSet和HashMap放在一起讲解，是因为二者在Java里有着相同的实现，前者仅仅是对后者做了一层包装，也就是说HashSet里面有一个HashMap(适配器模式)。因此本文将重点分析HashMap。 HashMap实现了Map接口，即允许放入key为`null的元素，也允许插入value..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Java7 HashMap","slug":"_1-java7-hashmap","link":"#_1-java7-hashmap","children":[{"level":3,"title":"1.1 概述","slug":"_1-1-概述","link":"#_1-1-概述","children":[]},{"level":3,"title":"1.2 get()","slug":"_1-2-get","link":"#_1-2-get","children":[]},{"level":3,"title":"1.3 put()","slug":"_1-3-put","link":"#_1-3-put","children":[]},{"level":3,"title":"1.4 remove()","slug":"_1-4-remove","link":"#_1-4-remove","children":[]}]},{"level":2,"title":"2. Java8 HashMap","slug":"_2-java8-hashmap","link":"#_2-java8-hashmap","children":[{"level":3,"title":"2.1 put 过程分析","slug":"_2-1-put-过程分析","link":"#_2-1-put-过程分析","children":[]},{"level":3,"title":"2.2 数组扩容","slug":"_2-2-数组扩容","link":"#_2-2-数组扩容","children":[]},{"level":3,"title":"2.3 get 过程分析","slug":"_2-3-get-过程分析","link":"#_2-3-get-过程分析","children":[]}]},{"level":2,"title":"3. HashSet","slug":"_3-hashset","link":"#_3-hashset","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.1,"words":3029},"filePathRelative":"java/collection/java-map-HashMap&HashSet.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
