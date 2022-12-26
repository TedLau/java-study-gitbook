const e=JSON.parse('{"key":"v-7e78de6c","path":"/db/mysql/sql-mysql-transaction.html","title":"MySQL - 事务","lang":"zh-CN","frontmatter":{"order":40,"category":["数据库","Mysql"],"description":"1. 什么是事务 事务就是逻辑上的一组操作，要么都执行，要么都不执行 1.1 案例 事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作 将小明的余额减少1000元; 将小红的余额增加1000元; 万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。 事务就是保证这两个关键操作...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/sql-mysql-transaction.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - 事务"}],["meta",{"property":"og:description","content":"1. 什么是事务 事务就是逻辑上的一组操作，要么都执行，要么都不执行 1.1 案例 事务最经典例子转账：假设小明要给小红转账1000元，这个转账会涉及到两个关键操作 将小明的余额减少1000元; 将小红的余额增加1000元; 万一在这两个操作之间突然出现错误比如银行系统奔溃，导致小明余额减少而小红的余额没有增加，这就不对了。 事务就是保证这两个关键操作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 什么是事务","slug":"_1-什么是事务","link":"#_1-什么是事务","children":[{"level":3,"title":"1.1 案例","slug":"_1-1-案例","link":"#_1-1-案例","children":[]}]},{"level":2,"title":"2. 事务的四大特性（ACID）","slug":"_2-事务的四大特性-acid","link":"#_2-事务的四大特性-acid","children":[{"level":3,"title":"2.1 数据库是如何保证ACID的","slug":"_2-1-数据库是如何保证acid的","link":"#_2-1-数据库是如何保证acid的","children":[]}]},{"level":2,"title":"3. 并发事务带来哪些问题","slug":"_3-并发事务带来哪些问题","link":"#_3-并发事务带来哪些问题","children":[{"level":3,"title":"3.1 不可重复读和幻读区别","slug":"_3-1-不可重复读和幻读区别","link":"#_3-1-不可重复读和幻读区别","children":[]}]},{"level":2,"title":"4. 事务隔离级别有哪些","slug":"_4-事务隔离级别有哪些","link":"#_4-事务隔离级别有哪些","children":[]},{"level":2,"title":"5. 隔离级别案例","slug":"_5-隔离级别案例","link":"#_5-隔离级别案例","children":[]},{"level":2,"title":"6. MySQL innoDB 的隔离级别","slug":"_6-mysql-innodb-的隔离级别","link":"#_6-mysql-innodb-的隔离级别","children":[{"level":3,"title":"5.1 InnoDB 的 REPEATABLE-READ为什么可以避免幻读","slug":"_5-1-innodb-的-repeatable-read为什么可以避免幻读","link":"#_5-1-innodb-的-repeatable-read为什么可以避免幻读","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663512377000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":4}]},"readingTime":{"minutes":7.21,"words":2162},"filePathRelative":"db/mysql/sql-mysql-transaction.md","localizedDate":"2022年9月18日","autoDesc":true}');export{e as data};
