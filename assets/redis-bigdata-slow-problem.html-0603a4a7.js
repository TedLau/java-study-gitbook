const e=JSON.parse('{"key":"v-8d9d2a26","path":"/think/deepImpression/redis-bigdata-slow-problem.html","title":"redis大数据查询还不如直接查数据库","lang":"zh-CN","frontmatter":{"description":"1. 背景 我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括国标 的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头） 为了保持逻辑一致，我们在service 层通过表前缀 T_ 区分是系统字典表还是 国标字典表。转成统一的数据结构返回。其中会将字典表的数据存储...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/think/deepImpression/redis-bigdata-slow-problem.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"redis大数据查询还不如直接查数据库"}],["meta",{"property":"og:description","content":"1. 背景 我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括国标 的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头） 为了保持逻辑一致，我们在service 层通过表前缀 T_ 区分是系统字典表还是 国标字典表。转成统一的数据结构返回。其中会将字典表的数据存储..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 问题","slug":"_2-问题","link":"#_2-问题","children":[]},{"level":2,"title":"3. 排查定位","slug":"_3-排查定位","link":"#_3-排查定位","children":[{"level":3,"title":"3.1 redis 慢日志","slug":"_3-1-redis-慢日志","link":"#_3-1-redis-慢日志","children":[]},{"level":3,"title":"3.2 redis 查询bigkeys","slug":"_3-2-redis-查询bigkeys","link":"#_3-2-redis-查询bigkeys","children":[]}]},{"level":2,"title":"4. 解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]},{"level":2,"title":"5. 大bigkeys 怎么办","slug":"_5-大bigkeys-怎么办","link":"#_5-大bigkeys-怎么办","children":[]}],"git":{"createdTime":1662131722000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"think/deepImpression/redis-bigdata-slow-problem.md","localizedDate":"2022年9月2日","autoDesc":true}');export{e as data};
