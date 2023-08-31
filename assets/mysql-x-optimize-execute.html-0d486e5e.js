const e=JSON.parse('{"key":"v-ce331ba2","path":"/db/mysql/mysql-x-optimize-execute.html","title":"MySQL - 一条SQL语句执行过程","lang":"zh-CN","frontmatter":{"order":340,"category":["Mysql","数据库"],"description":"本文会分析一个sql 语句在MySQL中的执行流程，包括 sql的查询在Mysql内部会怎么流转; sql语句的更新是怎么完成的; 分析之前会先看Mysql的基础架构 知道Mysql由哪些组件组成; 这些组件有什么作用; 可以帮助我们解决什么问题; 1. MySQL 基础架构分析 1.1 MySQL 基本架构概览 下图是Mysql 的一个简要架构图，从...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/mysql/mysql-x-optimize-execute.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - 一条SQL语句执行过程"}],["meta",{"property":"og:description","content":"本文会分析一个sql 语句在MySQL中的执行流程，包括 sql的查询在Mysql内部会怎么流转; sql语句的更新是怎么完成的; 分析之前会先看Mysql的基础架构 知道Mysql由哪些组件组成; 这些组件有什么作用; 可以帮助我们解决什么问题; 1. MySQL 基础架构分析 1.1 MySQL 基本架构概览 下图是Mysql 的一个简要架构图，从..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.  MySQL 基础架构分析","slug":"_1-mysql-基础架构分析","link":"#_1-mysql-基础架构分析","children":[{"level":3,"title":"1.1 MySQL 基本架构概览","slug":"_1-1-mysql-基本架构概览","link":"#_1-1-mysql-基本架构概览","children":[]},{"level":3,"title":"1.2 Server 层基本组件介绍","slug":"_1-2-server-层基本组件介绍","link":"#_1-2-server-层基本组件介绍","children":[]}]},{"level":2,"title":"2. 语法分析","slug":"_2-语法分析","link":"#_2-语法分析","children":[{"level":3,"title":"2.1 查询语句","slug":"_2-1-查询语句","link":"#_2-1-查询语句","children":[]},{"level":3,"title":"2.2 更新语句","slug":"_2-2-更新语句","link":"#_2-2-更新语句","children":[]}]},{"level":2,"title":"3. 为什么要用两个日志模块","slug":"_3-为什么要用两个日志模块","link":"#_3-为什么要用两个日志模块","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.23,"words":3069},"filePathRelative":"db/mysql/mysql-x-optimize-execute.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
