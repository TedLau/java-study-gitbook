const e=JSON.parse('{"key":"v-0339ec38","path":"/dependencies/mybatis/mybatis-z-pageHelper-source.html","title":"Mybatis-PageHelper源码分析","lang":"zh-CN","frontmatter":{"description":"1. 背景 项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。 分页插件，我们项目中是采用Mybatis-PageHelper ，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码 2. 分页插件实现原理与基础 2.1 拦截器 Mybatis 提供了拦截器接口Interceptor(org.apa...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/mybatis/mybatis-z-pageHelper-source.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Mybatis-PageHelper源码分析"}],["meta",{"property":"og:description","content":"1. 背景 项目中分页是非常常见的需求，在项目中我们一般集成第三方的分页插件，避免在业务层嵌入过多业务代码。 分页插件，我们项目中是采用Mybatis-PageHelper ，作为一款轻量级的插件，源码应该不难，我们就来分析分析他的源码 2. 分页插件实现原理与基础 2.1 拦截器 Mybatis 提供了拦截器接口Interceptor(org.apa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 分页插件实现原理与基础","slug":"_2-分页插件实现原理与基础","link":"#_2-分页插件实现原理与基础","children":[{"level":3,"title":"2.1 拦截器","slug":"_2-1-拦截器","link":"#_2-1-拦截器","children":[]},{"level":3,"title":"2.2 拦截器签名","slug":"_2-2-拦截器签名","link":"#_2-2-拦截器签名","children":[]}]},{"level":2,"title":"3. PageHelper源码实现","slug":"_3-pagehelper源码实现","link":"#_3-pagehelper源码实现","children":[{"level":3,"title":"3.1 拦截器与拦截器签名","slug":"_3-1-拦截器与拦截器签名","link":"#_3-1-拦截器与拦截器签名","children":[]},{"level":3,"title":"3.2 获取拦截参数","slug":"_3-2-获取拦截参数","link":"#_3-2-获取拦截参数","children":[]},{"level":3,"title":"3.3 分页判断","slug":"_3-3-分页判断","link":"#_3-3-分页判断","children":[]},{"level":3,"title":"3.4 计算总数","slug":"_3-4-计算总数","link":"#_3-4-计算总数","children":[]},{"level":3,"title":"3.5 分页查询","slug":"_3-5-分页查询","link":"#_3-5-分页查询","children":[]},{"level":3,"title":"3.6 添加order by 语句","slug":"_3-6-添加order-by-语句","link":"#_3-6-添加order-by-语句","children":[]}]},{"level":2,"title":"4. Dialect 方言接口","slug":"_4-dialect-方言接口","link":"#_4-dialect-方言接口","children":[{"level":3,"title":"4.1 dialect 接口","slug":"_4-1-dialect-接口","link":"#_4-1-dialect-接口","children":[]},{"level":3,"title":"4.2 dialect 实例","slug":"_4-2-dialect-实例","link":"#_4-2-dialect-实例","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1150},"filePathRelative":"dependencies/mybatis/mybatis-z-pageHelper-source.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
