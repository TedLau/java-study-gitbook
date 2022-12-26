const e=JSON.parse('{"key":"v-027a4a68","path":"/db/mysql/sql-mysql-engine.html","title":"MySQL - 存储引擎","lang":"zh-CN","frontmatter":{"order":30,"category":["数据库","Mysql"],"description":"本文主要介绍MySQL中的存储引擎。 1. InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。 实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)防止幻影读。 主索引是聚簇...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/sql-mysql-engine.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - 存储引擎"}],["meta",{"property":"og:description","content":"本文主要介绍MySQL中的存储引擎。 1. InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。 实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)防止幻影读。 主索引是聚簇..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. InnoDB","slug":"_1-innodb","link":"#_1-innodb","children":[]},{"level":2,"title":"2. MyISAM","slug":"_2-myisam","link":"#_2-myisam","children":[]},{"level":2,"title":"3. 比较","slug":"_3-比较","link":"#_3-比较","children":[]},{"level":2,"title":"4. 查看存储引擎","slug":"_4-查看存储引擎","link":"#_4-查看存储引擎","children":[{"level":3,"title":"4.1 查看MySQL提供的所有存储引擎","slug":"_4-1-查看mysql提供的所有存储引擎","link":"#_4-1-查看mysql提供的所有存储引擎","children":[]},{"level":3,"title":"4.2 查看MySQL 当前默认的存储引擎","slug":"_4-2-查看mysql-当前默认的存储引擎","link":"#_4-2-查看mysql-当前默认的存储引擎","children":[]},{"level":3,"title":"4.3 查看表的存储引擎","slug":"_4-3-查看表的存储引擎","link":"#_4-3-查看表的存储引擎","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663512377000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":2.73,"words":819},"filePathRelative":"db/mysql/sql-mysql-engine.md","localizedDate":"2022年9月18日","autoDesc":true}');export{e as data};
