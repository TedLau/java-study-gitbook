const e=JSON.parse('{"key":"v-2dcb4c8f","path":"/db/mysql/mysql-x-optimize-bigtable-action.html","title":"大表优化过程","lang":"zh-CN","frontmatter":{"description":"1. 场景问题 有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务 2. 方案概述 方案一：优化现有mysql数据库; 优点：不影响现有业务，源程序不需要修改代码，成本低 缺点：有优化瓶颈，数据量过亿就玩不动了 方案二：升级数据库类型; 换一种100%兼容mysql的数据库 优点：不影...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-x-optimize-bigtable-action.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"大表优化过程"}],["meta",{"property":"og:description","content":"1. 场景问题 有个用户操作记录表6个月的数据量近2000万，保留最近一年的数据量达到4000万，查询速度极慢，日常卡死。严重影响业务 2. 方案概述 方案一：优化现有mysql数据库; 优点：不影响现有业务，源程序不需要修改代码，成本低 缺点：有优化瓶颈，数据量过亿就玩不动了 方案二：升级数据库类型; 换一种100%兼容mysql的数据库 优点：不影..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 场景问题","slug":"_1-场景问题","link":"#_1-场景问题","children":[]},{"level":2,"title":"2. 方案概述","slug":"_2-方案概述","link":"#_2-方案概述","children":[]},{"level":2,"title":"3. 方案一：优化现有mysql数据库（重点）","slug":"_3-方案一-优化现有mysql数据库-重点","link":"#_3-方案一-优化现有mysql数据库-重点","children":[{"level":3,"title":"总结：","slug":"总结","link":"#总结","children":[]},{"level":3,"title":"3.1 数据库设计和表创建表时就要考虑性能","slug":"_3-1-数据库设计和表创建表时就要考虑性能","link":"#_3-1-数据库设计和表创建表时就要考虑性能","children":[]},{"level":3,"title":"3.2 sql的编写需要注意的优化","slug":"_3-2-sql的编写需要注意的优化","link":"#_3-2-sql的编写需要注意的优化","children":[]},{"level":3,"title":"3.3 分区","slug":"_3-3-分区","link":"#_3-3-分区","children":[]},{"level":3,"title":"3.4 分表","slug":"_3-4-分表","link":"#_3-4-分表","children":[]},{"level":3,"title":"3.5 分库","slug":"_3-5-分库","link":"#_3-5-分库","children":[]}]},{"level":2,"title":"4. 方案二：升级数据库，换一个100%兼容mysql的数据库","slug":"_4-方案二-升级数据库-换一个100-兼容mysql的数据库","link":"#_4-方案二-升级数据库-换一个100-兼容mysql的数据库","children":[]},{"level":2,"title":"5. 方案三详细说明：去掉mysql，换大数据引擎处理数据","slug":"_5-方案三详细说明-去掉mysql-换大数据引擎处理数据","link":"#_5-方案三详细说明-去掉mysql-换大数据引擎处理数据","children":[]},{"level":2,"title":"面试真题","slug":"面试真题","link":"#面试真题","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":10.7,"words":3211},"filePathRelative":"db/mysql/mysql-x-optimize-bigtable-action.md","localizedDate":"2022年9月9日","autoDesc":true}');export{e as data};