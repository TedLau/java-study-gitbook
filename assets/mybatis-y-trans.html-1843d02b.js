const t=JSON.parse('{"key":"v-42f365c8","path":"/dependencies/mybatis/mybatis-y-trans.html","title":"MyBatis详解 - 事务管理机制","lang":"zh-CN","frontmatter":{"order":120,"category":["MyBatis"],"description":"本文主要介绍MyBatis事务管理相关的使用和机制。 1. 概述 对数据库的事务而言，应该具有以下几点：创建（create）、提交（commit）、回滚（rollback）、关闭（close）。对应地，MyBatis将事务抽象成了Transaction接口： image-20220730215527746 MyBatis的事务管理分为两种形式： 使用J...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/mybatis/mybatis-y-trans.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MyBatis详解 - 事务管理机制"}],["meta",{"property":"og:description","content":"本文主要介绍MyBatis事务管理相关的使用和机制。 1. 概述 对数据库的事务而言，应该具有以下几点：创建（create）、提交（commit）、回滚（rollback）、关闭（close）。对应地，MyBatis将事务抽象成了Transaction接口： image-20220730215527746 MyBatis的事务管理分为两种形式： 使用J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 官网关于事务配置的内容","slug":"_2-官网关于事务配置的内容","link":"#_2-官网关于事务配置的内容","children":[]},{"level":2,"title":"3. 事务的配置、创建和使用","slug":"_3-事务的配置、创建和使用","link":"#_3-事务的配置、创建和使用","children":[{"level":3,"title":"3.1 事务的配置","slug":"_3-1-事务的配置","link":"#_3-1-事务的配置","children":[]},{"level":3,"title":"3.2 事务工厂的创建","slug":"_3-2-事务工厂的创建","link":"#_3-2-事务工厂的创建","children":[]},{"level":3,"title":"3.3 事务工厂TransactionFactory","slug":"_3-3-事务工厂transactionfactory","link":"#_3-3-事务工厂transactionfactory","children":[]},{"level":3,"title":"3.4 事务Transaction的创建","slug":"_3-4-事务transaction的创建","link":"#_3-4-事务transaction的创建","children":[]},{"level":3,"title":"3.5 JdbcTransaction","slug":"_3-5-jdbctransaction","link":"#_3-5-jdbctransaction","children":[]},{"level":3,"title":"3.6 ManagedTransaction","slug":"_3-6-managedtransaction","link":"#_3-6-managedtransaction","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":4}]},"readingTime":{"minutes":7.67,"words":2300},"filePathRelative":"dependencies/mybatis/mybatis-y-trans.md","localizedDate":"2022年9月14日","autoDesc":true}');export{t as data};
