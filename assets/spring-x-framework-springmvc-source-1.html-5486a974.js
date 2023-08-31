const e=JSON.parse('{"key":"v-cb4102ea","path":"/dependencies/spring/spring-x-framework-springmvc-source-1.html","title":"Spring进阶 - SpringMVC实现原理之DispatcherServlet的初始化过程","lang":"zh-CN","frontmatter":{"order":160,"category":["Spring"],"description":"前文我们有了IOC的源码基础以及SpringMVC的基础，我们便可以进一步深入理解SpringMVC主要实现原理，包含DispatcherServlet的初始化过程和DispatcherServlet处理请求的过程的源码解析。本文是第一篇：DispatcherServlet的初始化过程的源码解析。 1. DispatcherServlet和Applic...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring/spring-x-framework-springmvc-source-1.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - SpringMVC实现原理之DispatcherServlet的初始化过程"}],["meta",{"property":"og:description","content":"前文我们有了IOC的源码基础以及SpringMVC的基础，我们便可以进一步深入理解SpringMVC主要实现原理，包含DispatcherServlet的初始化过程和DispatcherServlet处理请求的过程的源码解析。本文是第一篇：DispatcherServlet的初始化过程的源码解析。 1. DispatcherServlet和Applic..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. DispatcherServlet和ApplicationContext有何关系？","slug":"_1-dispatcherservlet和applicationcontext有何关系","link":"#_1-dispatcherservlet和applicationcontext有何关系","children":[]},{"level":2,"title":"2. DispatcherServlet是如何初始化的？","slug":"_2-dispatcherservlet是如何初始化的","link":"#_2-dispatcherservlet是如何初始化的","children":[{"level":3,"title":"2.1 init","slug":"_2-1-init","link":"#_2-1-init","children":[]},{"level":3,"title":"2.2 initWebApplicationContext","slug":"_2-2-initwebapplicationcontext","link":"#_2-2-initwebapplicationcontext","children":[]},{"level":3,"title":"2.3 refresh","slug":"_2-3-refresh","link":"#_2-3-refresh","children":[]},{"level":3,"title":"2.4 initHanlderxxx","slug":"_2-4-inithanlderxxx","link":"#_2-4-inithanlderxxx","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.95,"words":3286},"filePathRelative":"dependencies/spring/spring-x-framework-springmvc-source-1.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};