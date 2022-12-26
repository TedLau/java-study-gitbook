const l=JSON.parse('{"key":"v-148259d2","path":"/arch/base/arch-x-pattern-2.html","title":"架构-理解架构的模式2","lang":"zh-CN","frontmatter":{"order":42,"category":["架构"],"description":"革命尚未成功，同志们还需努力。需要多揣摩揣摩 TIP 本文整理自朱晔的互联网架构实践心得 (https://www.cnblogs.com/lovecindywang/p/9670356.html), 他是结合了 微软给出的云架构的一些模式的基础上加入他自己的理解来总结互联网架构中具体的一些模式。 朱晔：设计模式是前人通过大量的实践总结出来的一些经验总...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/base/arch-x-pattern-2.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"架构-理解架构的模式2"}],["meta",{"property":"og:description","content":"革命尚未成功，同志们还需努力。需要多揣摩揣摩 TIP 本文整理自朱晔的互联网架构实践心得 (https://www.cnblogs.com/lovecindywang/p/9670356.html), 他是结合了 微软给出的云架构的一些模式的基础上加入他自己的理解来总结互联网架构中具体的一些模式。 朱晔：设计模式是前人通过大量的实践总结出来的一些经验总..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"管理和监控","slug":"管理和监控","link":"#管理和监控","children":[{"level":3,"title":"1. 大使模式：创建代表消费者服务或应用程序发送网络请求的帮助服务","slug":"_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务","link":"#_1-大使模式-创建代表消费者服务或应用程序发送网络请求的帮助服务","children":[]},{"level":3,"title":"2. 反腐模式：在现代应用程序和遗留系统之间实现装饰或适配器层","slug":"_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层","link":"#_2-反腐模式-在现代应用程序和遗留系统之间实现装饰或适配器层","children":[]},{"level":3,"title":"3. 外部配置存储：将应用程序部署包中的配置信息移动到中心化的位置","slug":"_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置","link":"#_3-外部配置存储-将应用程序部署包中的配置信息移动到中心化的位置","children":[]},{"level":3,"title":"4. 网关聚合模式：使用网关将多个单独的请求聚合到一个请求中","slug":"_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中","link":"#_4-网关聚合模式-使用网关将多个单独的请求聚合到一个请求中","children":[]},{"level":3,"title":"5. 网关卸压模式：把共享或特定的服务功能放到网关代理","slug":"_5-网关卸压模式-把共享或特定的服务功能放到网关代理","link":"#_5-网关卸压模式-把共享或特定的服务功能放到网关代理","children":[]},{"level":3,"title":"6. 网关路由模式：使用单个端点将请求路由到多个服务","slug":"_6-网关路由模式-使用单个端点将请求路由到多个服务","link":"#_6-网关路由模式-使用单个端点将请求路由到多个服务","children":[]},{"level":3,"title":"7. 健康端点监控模式：在应用程序中执行功能检查，外部工具可以定期通过暴露的端点访问","slug":"_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问","link":"#_7-健康端点监控模式-在应用程序中执行功能检查-外部工具可以定期通过暴露的端点访问","children":[]},{"level":3,"title":"8. 绞杀者模式：通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","slug":"_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","link":"#_8-绞杀者模式-通过使用新的应用程序和服务逐渐替换特定功能部件来逐步迁移旧系统","children":[]}]},{"level":2,"title":"性能和可扩展性","slug":"性能和可扩展性","link":"#性能和可扩展性","children":[{"level":3,"title":"9. 缓存辅助模式：按需将数据从数据存储加载到缓存中","slug":"_9-缓存辅助模式-按需将数据从数据存储加载到缓存中","link":"#_9-缓存辅助模式-按需将数据从数据存储加载到缓存中","children":[]},{"level":3,"title":"10. 命令和查询责任分离模式：通过使用单独的接口来分离读取数据和更新数据的操作","slug":"_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作","link":"#_10-命令和查询责任分离模式-通过使用单独的接口来分离读取数据和更新数据的操作","children":[]},{"level":3,"title":"11. 事件溯源模式：使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","slug":"_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","link":"#_11-事件溯源模式-使用仅追加存储去记录描述对域中的数据采取的操作的完整系列事件","children":[]},{"level":3,"title":"12. 物化视图模式：针对所需的查询操作，当数据没有理想地格式化时，在一个或多个数据存储中的数据上生成预填充视图","slug":"_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图","link":"#_12-物化视图模式-针对所需的查询操作-当数据没有理想地格式化时-在一个或多个数据存储中的数据上生成预填充视图","children":[]},{"level":3,"title":"13. 基于队列的负载均衡模式：使用一个队列作为任务和服务之间的缓冲区，平滑间歇性重负载","slug":"_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载","link":"#_13-基于队列的负载均衡模式-使用一个队列作为任务和服务之间的缓冲区-平滑间歇性重负载","children":[]},{"level":3,"title":"14. 优先级队列模式：确定发送到服务的请求的优先级，使得具有较高优先级的请求更快地被接收和处理","slug":"_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理","link":"#_14-优先级队列模式-确定发送到服务的请求的优先级-使得具有较高优先级的请求更快地被接收和处理","children":[]},{"level":3,"title":"15. 限流模式：控制应用程序，个人租户或整个服务的实例消耗的资源","slug":"_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源","link":"#_15-限流模式-控制应用程序-个人租户或整个服务的实例消耗的资源","children":[]}]},{"level":2,"title":"数据管理模式","slug":"数据管理模式","link":"#数据管理模式","children":[{"level":3,"title":"16. 分片模式：将数据存储区划分为一组水平分区或分片","slug":"_16-分片模式-将数据存储区划分为一组水平分区或分片","link":"#_16-分片模式-将数据存储区划分为一组水平分区或分片","children":[]},{"level":3,"title":"17. 静态内容托管模式：将静态内容部署到基于云的存储服务，可以将它们直接传递给客户端","slug":"_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端","link":"#_17-静态内容托管模式-将静态内容部署到基于云的存储服务-可以将它们直接传递给客户端","children":[]},{"level":3,"title":"18. 索引表模式：为查询经常引用的数据存储区中的字段创建索引","slug":"_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引","link":"#_18-索引表模式-为查询经常引用的数据存储区中的字段创建索引","children":[]}]},{"level":2,"title":"设计和实现模式","slug":"设计和实现模式","link":"#设计和实现模式","children":[{"level":3,"title":"19. 前端专用的后端模式：通过使用单独的接口来分离读取数据和更新数据的操作","slug":"_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作","link":"#_19-前端专用的后端模式-通过使用单独的接口来分离读取数据和更新数据的操作","children":[]},{"level":3,"title":"20. 计算资源整合模式：将多个任务或操作整合到单个计算单元中","slug":"_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中","link":"#_20-计算资源整合模式-将多个任务或操作整合到单个计算单元中","children":[]},{"level":3,"title":"21. 选举模式：通过选举一个实例作为负责管理其它实例的负责人，来协调分布式应用程序中的协作任务实例集合执行的操作","slug":"_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作","link":"#_21-选举模式-通过选举一个实例作为负责管理其它实例的负责人-来协调分布式应用程序中的协作任务实例集合执行的操作","children":[]},{"level":3,"title":"22. 管道和过滤器模式：将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","slug":"_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","link":"#_22-管道和过滤器模式-将需要执行复杂处理的任务分解成可以重复使用的一系列单独的元素","children":[]}]},{"level":2,"title":"消息模式","slug":"消息模式","link":"#消息模式","children":[{"level":3,"title":"23. 竞争消费者模式：使用多个并发消费者来处理在同一消息通道上接收的消息","slug":"_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息","link":"#_23-竞争消费者模式-使用多个并发消费者来处理在同一消息通道上接收的消息","children":[]},{"level":3,"title":"24. 重试模式：在应用程序尝试连接到服务或网络资源遇到预期的临时故障时，让程序通过透明地重试以前失败的操作来处理","slug":"_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理","link":"#_24-重试模式-在应用程序尝试连接到服务或网络资源遇到预期的临时故障时-让程序通过透明地重试以前失败的操作来处理","children":[]},{"level":3,"title":"25. 调度、代理、主管模式：在一组分布式服务和其它远程资源之间协调一组操作","slug":"_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作","link":"#_25-调度、代理、主管模式-在一组分布式服务和其它远程资源之间协调一组操作","children":[]}]},{"level":2,"title":"弹性模式","slug":"弹性模式","link":"#弹性模式","children":[{"level":3,"title":"26. 舱壁模式：将应用程序的元素隔离到池中，如果其中一个失败，其它的将继续运行","slug":"_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行","link":"#_26-舱壁模式-将应用程序的元素隔离到池中-如果其中一个失败-其它的将继续运行","children":[]},{"level":3,"title":"27. 断路器模式：连接到远程服务或资源时, 处理可能需要花费时间来修复的故障","slug":"_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障","link":"#_27-断路器模式-连接到远程服务或资源时-处理可能需要花费时间来修复的故障","children":[]},{"level":3,"title":"28. 事务补偿模式：撤消通过一系列步骤执行的工作，它们一起定义最终一致的操作","slug":"_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作","link":"#_28-事务补偿模式-撤消通过一系列步骤执行的工作-它们一起定义最终一致的操作","children":[]}]},{"level":2,"title":"安全模式","slug":"安全模式","link":"#安全模式","children":[{"level":3,"title":"29. 代客密钥模式：使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","slug":"_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","link":"#_29-代客密钥模式-使用向客户端提供对特定资源或服务的有限直接访问权限的令牌或密钥","children":[]},{"level":3,"title":"30. 联合身份模式：将认证委托给外部身份提供者","slug":"_30-联合身份模式-将认证委托给外部身份提供者","link":"#_30-联合身份模式-将认证委托给外部身份提供者","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":4}]},"readingTime":{"minutes":37.04,"words":11111},"filePathRelative":"arch/base/arch-x-pattern-2.md","localizedDate":"2022年9月3日","autoDesc":true}');export{l as data};
