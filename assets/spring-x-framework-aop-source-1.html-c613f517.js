const e=JSON.parse('{"key":"v-2321cc40","path":"/dependencies/spring/spring-x-framework-aop-source-1.html","title":"Spring进阶 - Spring AOP实现原理详解之AOP切面的实现","lang":"zh-CN","frontmatter":{"order":100,"category":["Spring"],"description":"前文，我们分析了Spring IOC的初始化过程和Bean的生命周期等，而Spring AOP也是基于IOC的Bean加载来实现的。本文主要介绍Spring AOP原理解析的切面实现过程（将切面类的所有切面方法根据使用的注解生成对应Advice，并将Advice连同切入点匹配器和切面类等信息一并封装到Advisor，为后续交给代理增强实现做准备的过程）...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring/spring-x-framework-aop-source-1.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring AOP实现原理详解之AOP切面的实现"}],["meta",{"property":"og:description","content":"前文，我们分析了Spring IOC的初始化过程和Bean的生命周期等，而Spring AOP也是基于IOC的Bean加载来实现的。本文主要介绍Spring AOP原理解析的切面实现过程（将切面类的所有切面方法根据使用的注解生成对应Advice，并将Advice连同切入点匹配器和切面类等信息一并封装到Advisor，为后续交给代理增强实现做准备的过程）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. aop配置标签的解析","slug":"_2-aop配置标签的解析","link":"#_2-aop配置标签的解析","children":[{"level":3,"title":"2.1 config配置标签的解析","slug":"_2-1-config配置标签的解析","link":"#_2-1-config配置标签的解析","children":[]},{"level":3,"title":"2.2 aspectj-autoproxy配置标签的解析","slug":"_2-2-aspectj-autoproxy配置标签的解析","link":"#_2-2-aspectj-autoproxy配置标签的解析","children":[]}]},{"level":2,"title":"3. 注解切面代理创建类(AnnotationAwareAspectJAutoProxyCreator)","slug":"_3-注解切面代理创建类-annotationawareaspectjautoproxycreator","link":"#_3-注解切面代理创建类-annotationawareaspectjautoproxycreator","children":[{"level":3,"title":"3.1 postProcessBeforeInstantiation","slug":"_3-1-postprocessbeforeinstantiation","link":"#_3-1-postprocessbeforeinstantiation","children":[]},{"level":3,"title":"3.2 postProcessAfterInitialization","slug":"_3-2-postprocessafterinitialization","link":"#_3-2-postprocessafterinitialization","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11.25,"words":3376},"filePathRelative":"dependencies/spring/spring-x-framework-aop-source-1.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
