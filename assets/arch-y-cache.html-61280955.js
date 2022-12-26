const e=JSON.parse('{"key":"v-281ebc04","path":"/arch/base/arch-y-cache.html","title":"系统高并发-缓存","lang":"zh-CN","frontmatter":{"order":61,"category":["架构"],"description":"高并发实现的三板斧：缓存，限流和降级。缓存在高并发系统中有者极其广阔的应用，需要重点掌握，本文重点介绍下缓存及其实现。 1. 缓存简介 随着互联网的普及，内容信息越来越复杂，用户数和访问量越来越大，我们的应用需要支撑更多的并发量，同时我们的应用服务器和数据库服务器所做的计算也越来越多。但是往往我们的应用服务器资源是有限的，且技术变革是缓慢的，数据库每秒...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/base/arch-y-cache.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"系统高并发-缓存"}],["meta",{"property":"og:description","content":"高并发实现的三板斧：缓存，限流和降级。缓存在高并发系统中有者极其广阔的应用，需要重点掌握，本文重点介绍下缓存及其实现。 1. 缓存简介 随着互联网的普及，内容信息越来越复杂，用户数和访问量越来越大，我们的应用需要支撑更多的并发量，同时我们的应用服务器和数据库服务器所做的计算也越来越多。但是往往我们的应用服务器资源是有限的，且技术变革是缓慢的，数据库每秒..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 缓存简介","slug":"_1-缓存简介","link":"#_1-缓存简介","children":[{"level":3,"title":"1.1 关键词-命中率","slug":"_1-1-关键词-命中率","link":"#_1-1-关键词-命中率","children":[]},{"level":3,"title":"1.2 缓存介质","slug":"_1-2-缓存介质","link":"#_1-2-缓存介质","children":[]},{"level":3,"title":"1.3 缓存淘汰算法","slug":"_1-3-缓存淘汰算法","link":"#_1-3-缓存淘汰算法","children":[]},{"level":3,"title":"1.4 哪里用了缓存","slug":"_1-4-哪里用了缓存","link":"#_1-4-哪里用了缓存","children":[]}]},{"level":2,"title":"2. 缓存应用和实现","slug":"_2-缓存应用和实现","link":"#_2-缓存应用和实现","children":[{"level":3,"title":"2.1 缓存实现-本地缓存","slug":"_2-1-缓存实现-本地缓存","link":"#_2-1-缓存实现-本地缓存","children":[]},{"level":3,"title":"2.2 Ehcache","slug":"_2-2-ehcache","link":"#_2-2-ehcache","children":[]},{"level":3,"title":"2.3 Guava Cache","slug":"_2-3-guava-cache","link":"#_2-3-guava-cache","children":[]},{"level":3,"title":"2.4 缓存实现 - 分布式缓存","slug":"_2-4-缓存实现-分布式缓存","link":"#_2-4-缓存实现-分布式缓存","children":[]},{"level":3,"title":"2.5 缓存实现方式 - 注解方式","slug":"_2-5-缓存实现方式-注解方式","link":"#_2-5-缓存实现方式-注解方式","children":[]}]},{"level":2,"title":"3.高并发缓存问题","slug":"_3-高并发缓存问题","link":"#_3-高并发缓存问题","children":[{"level":3,"title":"3.1 缓存一致性问题","slug":"_3-1-缓存一致性问题","link":"#_3-1-缓存一致性问题","children":[]},{"level":3,"title":"3.2 缓存并发问题","slug":"_3-2-缓存并发问题","link":"#_3-2-缓存并发问题","children":[]},{"level":3,"title":"3.3 缓存穿透问题","slug":"_3-3-缓存穿透问题","link":"#_3-3-缓存穿透问题","children":[]},{"level":3,"title":"3.4 缓存抖动问题","slug":"_3-4-缓存抖动问题","link":"#_3-4-缓存抖动问题","children":[]},{"level":3,"title":"3.5 缓存雪崩问题","slug":"_3-5-缓存雪崩问题","link":"#_3-5-缓存雪崩问题","children":[]}]},{"level":2,"title":"4. 合理利用缓存","slug":"_4-合理利用缓存","link":"#_4-合理利用缓存","children":[{"level":3,"title":"4.1 频繁修改的数据","slug":"_4-1-频繁修改的数据","link":"#_4-1-频繁修改的数据","children":[]},{"level":3,"title":"4.2 没有热点的访问","slug":"_4-2-没有热点的访问","link":"#_4-2-没有热点的访问","children":[]},{"level":3,"title":"4.3 数据不一致与脏读","slug":"_4-3-数据不一致与脏读","link":"#_4-3-数据不一致与脏读","children":[]},{"level":3,"title":"4.4 缓存可用性","slug":"_4-4-缓存可用性","link":"#_4-4-缓存可用性","children":[]},{"level":3,"title":"4.5 缓存预热（warm up）","slug":"_4-5-缓存预热-warm-up","link":"#_4-5-缓存预热-warm-up","children":[]},{"level":3,"title":"4.6 避免缓存穿透","slug":"_4-6-避免缓存穿透","link":"#_4-6-避免缓存穿透","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":6}]},"readingTime":{"minutes":37.83,"words":11349},"filePathRelative":"arch/base/arch-y-cache.md","localizedDate":"2022年9月3日","autoDesc":true}');export{e as data};
