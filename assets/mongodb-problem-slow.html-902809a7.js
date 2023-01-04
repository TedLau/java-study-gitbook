const o=JSON.parse('{"key":"v-17299a0c","path":"/db/mongodb/mongodb-problem-slow.html","title":"mongodb大数据量查询慢问题","lang":"zh-CN","frontmatter":{"description":"1. 背景 我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉 但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。 经过一系列的排查大致可以从几个方面入手 2. 解决 2.1 降低mongodb 版本 原本spring-boo...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mongodb/mongodb-problem-slow.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"mongodb大数据量查询慢问题"}],["meta",{"property":"og:description","content":"1. 背景 我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉 但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。 经过一系列的排查大致可以从几个方面入手 2. 解决 2.1 降低mongodb 版本 原本spring-boo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 解决","slug":"_2-解决","link":"#_2-解决","children":[{"level":3,"title":"2.1 降低mongodb 版本","slug":"_2-1-降低mongodb-版本","link":"#_2-1-降低mongodb-版本","children":[]},{"level":3,"title":"2.2 MongoRepository 替换为MongoTemplate.cursor 形式","slug":"_2-2-mongorepository-替换为mongotemplate-cursor-形式","link":"#_2-2-mongorepository-替换为mongotemplate-cursor-形式","children":[]}]}],"git":{"createdTime":1662707287000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":0.76,"words":229},"filePathRelative":"db/mongodb/mongodb-problem-slow.md","localizedDate":"2022年9月9日","autoDesc":true}');export{o as data};