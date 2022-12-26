const e=JSON.parse('{"key":"v-a496a214","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-shrink.html","title":"Druid源码学习（五）-DruidDataSource的shrink过程","lang":"zh-CN","frontmatter":{"description":"1. 简介 shrink方法是DestroyTask线程中回收连接的具体执行方法。 2. shrink方法 2.1 首先获得锁： 2.2 判断初始化状态是否完成 要判断初始化状态是否完成，如果采用异步初始化，可能DestoryTask线程已经启动，但是连接池还没有初始化完成。 2.3 对连接池中的连接进行遍历 之后对连接池中的连接进行遍历，connec...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/database-connection-pool/dbcp-y-druid-source-shrink.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Druid源码学习（五）-DruidDataSource的shrink过程"}],["meta",{"property":"og:description","content":"1. 简介 shrink方法是DestroyTask线程中回收连接的具体执行方法。 2. shrink方法 2.1 首先获得锁： 2.2 判断初始化状态是否完成 要判断初始化状态是否完成，如果采用异步初始化，可能DestoryTask线程已经启动，但是连接池还没有初始化完成。 2.3 对连接池中的连接进行遍历 之后对连接池中的连接进行遍历，connec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. shrink方法","slug":"_2-shrink方法","link":"#_2-shrink方法","children":[{"level":3,"title":"2.1 首先获得锁：","slug":"_2-1-首先获得锁","link":"#_2-1-首先获得锁","children":[]},{"level":3,"title":"2.2 判断初始化状态是否完成","slug":"_2-2-判断初始化状态是否完成","link":"#_2-2-判断初始化状态是否完成","children":[]},{"level":3,"title":"2.3 对连接池中的连接进行遍历","slug":"_2-3-对连接池中的连接进行遍历","link":"#_2-3-对连接池中的连接进行遍历","children":[]},{"level":3,"title":"2.4 进入checkTime逻辑","slug":"_2-4-进入checktime逻辑","link":"#_2-4-进入checktime逻辑","children":[]},{"level":3,"title":"2.5 checkTime为false","slug":"_2-5-checktime为false","link":"#_2-5-checktime为false","children":[]},{"level":3,"title":"2.6 removeCount的处理","slug":"_2-6-removecount的处理","link":"#_2-6-removecount的处理","children":[]},{"level":3,"title":"2.7 解锁","slug":"_2-7-解锁","link":"#_2-7-解锁","children":[]},{"level":3,"title":"2.8 evict的连接处理","slug":"_2-8-evict的连接处理","link":"#_2-8-evict的连接处理","children":[]},{"level":3,"title":"2.9 keepAliveCount连接处理","slug":"_2-9-keepalivecount连接处理","link":"#_2-9-keepalivecount连接处理","children":[]},{"level":3,"title":"2.10 keepAlive状态，且连接池中的连接加上被使用的连接仍然小于minIdle","slug":"_2-10-keepalive状态-且连接池中的连接加上被使用的连接仍然小于minidle","link":"#_2-10-keepalive状态-且连接池中的连接加上被使用的连接仍然小于minidle","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":5.31,"words":1592},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-shrink.md","localizedDate":"2022年9月14日","autoDesc":true}');export{e as data};
