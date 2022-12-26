const e=JSON.parse('{"key":"v-1f68b428","path":"/develop/security/dev-security-x-injection.html","title":"开发安全 - 注入攻击详解","lang":"zh-CN","frontmatter":{"order":10,"category":["开发","安全"],"description":"注入攻击最为常见的攻击方式，作为开发而言必须完全避免; 本文会介绍常见的几种注入方式，比如：SQL 注入, xPath 注入, 命令注入, LDAP注入, CLRF注入, Host头注入, Email头注入等等，总结来看其本质其实是一样的，且防御措施也大同小异，具体看下面的内容。 攻击者使用恶意代码注入系统，欺骗服务器执行恶意命令 1. SQL 注入 ...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/develop/security/dev-security-x-injection.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"开发安全 - 注入攻击详解"}],["meta",{"property":"og:description","content":"注入攻击最为常见的攻击方式，作为开发而言必须完全避免; 本文会介绍常见的几种注入方式，比如：SQL 注入, xPath 注入, 命令注入, LDAP注入, CLRF注入, Host头注入, Email头注入等等，总结来看其本质其实是一样的，且防御措施也大同小异，具体看下面的内容。 攻击者使用恶意代码注入系统，欺骗服务器执行恶意命令 1. SQL 注入 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. SQL 注入","slug":"_1-sql-注入","link":"#_1-sql-注入","children":[{"level":3,"title":"1.1 什么样的SQL会造成攻击?","slug":"_1-1-什么样的sql会造成攻击","link":"#_1-1-什么样的sql会造成攻击","children":[]},{"level":3,"title":"1.2 如何防御?","slug":"_1-2-如何防御","link":"#_1-2-如何防御","children":[]}]},{"level":2,"title":"2. xPath 注入","slug":"_2-xpath-注入","link":"#_2-xpath-注入","children":[{"level":3,"title":"2.1 xPath是怎么工作的?","slug":"_2-1-xpath是怎么工作的","link":"#_2-1-xpath是怎么工作的","children":[]},{"level":3,"title":"2.2 如何攻击的?","slug":"_2-2-如何攻击的","link":"#_2-2-如何攻击的","children":[]},{"level":3,"title":"2.3 如何防御?","slug":"_2-3-如何防御","link":"#_2-3-如何防御","children":[]}]},{"level":2,"title":"3. 命令注入","slug":"_3-命令注入","link":"#_3-命令注入","children":[{"level":3,"title":"3.1 什么是命令注入","slug":"_3-1-什么是命令注入","link":"#_3-1-什么是命令注入","children":[]},{"level":3,"title":"3.2 命令注入的场景","slug":"_3-2-命令注入的场景","link":"#_3-2-命令注入的场景","children":[]},{"level":3,"title":"3.3 常见注入方式","slug":"_3-3-常见注入方式","link":"#_3-3-常见注入方式","children":[]},{"level":3,"title":"3.4 一般如何防御呢","slug":"_3-4-一般如何防御呢","link":"#_3-4-一般如何防御呢","children":[]}]},{"level":2,"title":"4. LDAP注入","slug":"_4-ldap注入","link":"#_4-ldap注入","children":[{"level":3,"title":"4.1 LDAP简介","slug":"_4-1-ldap简介","link":"#_4-1-ldap简介","children":[]},{"level":3,"title":"4.2 LDAP注入场景","slug":"_4-2-ldap注入场景","link":"#_4-2-ldap注入场景","children":[]},{"level":3,"title":"4.3 学习更多LDAP攻防","slug":"_4-3-学习更多ldap攻防","link":"#_4-3-学习更多ldap攻防","children":[]}]},{"level":2,"title":"5. CLRF注入","slug":"_5-clrf注入","link":"#_5-clrf注入","children":[]},{"level":2,"title":"6. Host头注入","slug":"_6-host头注入","link":"#_6-host头注入","children":[]},{"level":2,"title":"7. Email头注入","slug":"_7-email头注入","link":"#_7-email头注入","children":[]},{"level":2,"title":"8. XXE","slug":"_8-xxe","link":"#_8-xxe","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663308292000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":6}]},"readingTime":{"minutes":10.2,"words":3059},"filePathRelative":"develop/security/dev-security-x-injection.md","localizedDate":"2022年9月16日","autoDesc":true}');export{e as data};
