const e=JSON.parse('{"key":"v-82f12232","path":"/dependencies/mybatis/mybatis-y-plugin-page.html","title":"MyBatis详解 - 插件之分页机制","lang":"zh-CN","frontmatter":{"order":100,"category":["MyBatis"],"description":"Mybatis的分页功能很弱，它是基于内存的分页（查出所有记录再按偏移量和limit取结果），在大数据量的情况下这样的分页基本上是没有用的。本文基于插件，通过拦截StatementHandler重写sql语句，实现数据库的物理分页。 1. 准备 1.1 为什么在StatementHandler拦截 在前面章节介绍了一次sqlsession的完整执行过程...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/mybatis/mybatis-y-plugin-page.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MyBatis详解 - 插件之分页机制"}],["meta",{"property":"og:description","content":"Mybatis的分页功能很弱，它是基于内存的分页（查出所有记录再按偏移量和limit取结果），在大数据量的情况下这样的分页基本上是没有用的。本文基于插件，通过拦截StatementHandler重写sql语句，实现数据库的物理分页。 1. 准备 1.1 为什么在StatementHandler拦截 在前面章节介绍了一次sqlsession的完整执行过程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 准备","slug":"_1-准备","link":"#_1-准备","children":[{"level":3,"title":"1.1 为什么在StatementHandler拦截","slug":"_1-1-为什么在statementhandler拦截","link":"#_1-1-为什么在statementhandler拦截","children":[]},{"level":3,"title":"1.2 MetaObject简介","slug":"_1-2-metaobject简介","link":"#_1-2-metaobject简介","children":[]}]},{"level":2,"title":"2. 拦截器签名","slug":"_2-拦截器签名","link":"#_2-拦截器签名","children":[]},{"level":2,"title":"3. intercept实现","slug":"_3-intercept实现","link":"#_3-intercept实现","children":[]},{"level":2,"title":"4. sql重写","slug":"_4-sql重写","link":"#_4-sql重写","children":[]},{"level":2,"title":"5. 分页参数重写","slug":"_5-分页参数重写","link":"#_5-分页参数重写","children":[]},{"level":2,"title":"6. plugin实现","slug":"_6-plugin实现","link":"#_6-plugin实现","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":4}]},"readingTime":{"minutes":5.3,"words":1591},"filePathRelative":"dependencies/mybatis/mybatis-y-plugin-page.md","localizedDate":"2022年9月14日","autoDesc":true}');export{e as data};