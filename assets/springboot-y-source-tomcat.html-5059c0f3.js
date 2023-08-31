const e=JSON.parse('{"key":"v-7f98070a","path":"/dependencies/spring-boot/springboot-y-source-tomcat.html","title":"SpringBoot进阶 - SpringBoot嵌入式Tomcat的自动配置原理","lang":"zh-CN","frontmatter":{"order":80,"category":["Spring","SpringBoot"],"description":"1. 准备 我们知道SpringBoot的自动装配的秘密在org.springframework.boot.autoconfigure包下的spring.factories文件中，而嵌入Tomcat的原理就在这个文件中加载的一个配置类：org.springframework.boot.autoconfigure.web.servlet.ServletW...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/spring-boot/springboot-y-source-tomcat.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"SpringBoot进阶 - SpringBoot嵌入式Tomcat的自动配置原理"}],["meta",{"property":"og:description","content":"1. 准备 我们知道SpringBoot的自动装配的秘密在org.springframework.boot.autoconfigure包下的spring.factories文件中，而嵌入Tomcat的原理就在这个文件中加载的一个配置类：org.springframework.boot.autoconfigure.web.servlet.ServletW..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 准备","slug":"_1-准备","link":"#_1-准备","children":[{"level":3,"title":"1.1 相关注解","slug":"_1-1-相关注解","link":"#_1-1-相关注解","children":[]},{"level":3,"title":"1.2 @Import引入4个类","slug":"_1-2-import引入4个类","link":"#_1-2-import引入4个类","children":[]},{"level":3,"title":"1.2.2.1 starter-web的默认容器","slug":"_1-2-2-1-starter-web的默认容器","link":"#_1-2-2-1-starter-web的默认容器","children":[]},{"level":3,"title":"1.3 注入了两个类","slug":"_1-3-注入了两个类","link":"#_1-3-注入了两个类","children":[]}]},{"level":2,"title":"2. 启动流程","slug":"_2-启动流程","link":"#_2-启动流程","children":[{"level":3,"title":"2.1 启动入口 onRefresh","slug":"_2-1-启动入口-onrefresh","link":"#_2-1-启动入口-onrefresh","children":[]},{"level":3,"title":"2.2 createWebServer启动Tomcat","slug":"_2-2-createwebserver启动tomcat","link":"#_2-2-createwebserver启动tomcat","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.12,"words":1535},"filePathRelative":"dependencies/spring-boot/springboot-y-source-tomcat.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};