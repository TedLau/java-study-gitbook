const e=JSON.parse('{"key":"v-155880a6","path":"/db/mysql/mysql-x-optimize-slow.html","title":"MySQL - 慢查询优化思路与案例","lang":"zh-CN","frontmatter":{"order":230,"category":["Mysql","数据库"],"description":"1. 建索引的几大原则 1. 最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、` 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。 2. =和in可以乱序，比如a = 1 and b = 2 and c = 3 建...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-x-optimize-slow.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - 慢查询优化思路与案例"}],["meta",{"property":"og:description","content":"1. 建索引的几大原则 1. 最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、` 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。 2. =和in可以乱序，比如a = 1 and b = 2 and c = 3 建..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 建索引的几大原则","slug":"_1-建索引的几大原则","link":"#_1-建索引的几大原则","children":[]},{"level":2,"title":"2. 优化步骤- explain命令","slug":"_2-优化步骤-explain命令","link":"#_2-优化步骤-explain命令","children":[]},{"level":2,"title":"3. 慢查询优化案例","slug":"_3-慢查询优化案例","link":"#_3-慢查询优化案例","children":[{"level":3,"title":"3.1 复杂语句写法（优化sql）","slug":"_3-1-复杂语句写法-优化sql","link":"#_3-1-复杂语句写法-优化sql","children":[]},{"level":3,"title":"3.2 明确应用场景（区分度低加索引）","slug":"_3-2-明确应用场景-区分度低加索引","link":"#_3-2-明确应用场景-区分度低加索引","children":[]},{"level":3,"title":"3.3 无法优化的语句(对大数据量排序导致的问题)","slug":"_3-3-无法优化的语句-对大数据量排序导致的问题","link":"#_3-3-无法优化的语句-对大数据量排序导致的问题","children":[]},{"level":3,"title":"3.4 联合索引","slug":"_3-4-联合索引","link":"#_3-4-联合索引","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":4}]},"readingTime":{"minutes":11.48,"words":3445},"filePathRelative":"db/mysql/mysql-x-optimize-slow.md","localizedDate":"2022年9月9日","autoDesc":true}');export{e as data};
