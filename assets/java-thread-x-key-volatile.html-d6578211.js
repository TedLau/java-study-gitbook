const l=JSON.parse('{"key":"v-6dbf2df1","path":"/java/thread/java-thread-x-key-volatile.html","title":"关键字: volatile","lang":"zh-CN","frontmatter":{"order":120,"category":["Java","并发"],"description":"Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如synchronized、`volatile、final、concurren包等 1. 简介 volatile通常被比喻成\\"轻量级的synchronized\\"，也是Java并发编程中比较重要的一个关键字。和synchronized不同，volatil...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/java-thread-x-key-volatile.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"关键字: volatile"}],["meta",{"property":"og:description","content":"Java语言为了解决并发编程中存在的原子性、可见性和有序性问题，提供了一系列和并发处理相关的关键字，比如synchronized、`volatile、final、concurren包等 1. 简介 volatile通常被比喻成\\"轻量级的synchronized\\"，也是Java并发编程中比较重要的一个关键字。和synchronized不同，volatil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 作用","slug":"_1-1-作用","link":"#_1-1-作用","children":[]}]},{"level":2,"title":"2. 用法","slug":"_2-用法","link":"#_2-用法","children":[]},{"level":2,"title":"3. volatile的原理","slug":"_3-volatile的原理","link":"#_3-volatile的原理","children":[{"level":3,"title":"3.1 缓存一致性协议","slug":"_3-1-缓存一致性协议","link":"#_3-1-缓存一致性协议","children":[]},{"level":3,"title":"3.2 原理总结","slug":"_3-2-原理总结","link":"#_3-2-原理总结","children":[]}]},{"level":2,"title":"4. volatile 与并发问题","slug":"_4-volatile-与并发问题","link":"#_4-volatile-与并发问题","children":[{"level":3,"title":"4.1 volatile与可见性","slug":"_4-1-volatile与可见性","link":"#_4-1-volatile与可见性","children":[]},{"level":3,"title":"4.2 volatile与有序性","slug":"_4-2-volatile与有序性","link":"#_4-2-volatile与有序性","children":[]},{"level":3,"title":"4.3 volatile与原子性","slug":"_4-3-volatile与原子性","link":"#_4-3-volatile与原子性","children":[]}]},{"level":2,"title":"5. volatile的原理和实现机制","slug":"_5-volatile的原理和实现机制","link":"#_5-volatile的原理和实现机制","children":[]},{"level":2,"title":"6. volatile 使用场景","slug":"_6-volatile-使用场景","link":"#_6-volatile-使用场景","children":[{"level":3,"title":"6.1 场景实例1：状态标记","slug":"_6-1-场景实例1-状态标记","link":"#_6-1-场景实例1-状态标记","children":[]},{"level":3,"title":"6.2 单例模式双层校验锁","slug":"_6-2-单例模式双层校验锁","link":"#_6-2-单例模式双层校验锁","children":[]}]},{"level":2,"title":"7. volatile和原子性的例子","slug":"_7-volatile和原子性的例子","link":"#_7-volatile和原子性的例子","children":[]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663146813000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":6}]},"readingTime":{"minutes":7.55,"words":2264},"filePathRelative":"java/thread/java-thread-x-key-volatile.md","localizedDate":"2022年9月14日","autoDesc":true}');export{l as data};
