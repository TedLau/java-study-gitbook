const t=JSON.parse('{"key":"v-4cf7952f","path":"/deploy/mq-rabbitmq/rabbitmq-y-manange-vhost.html","title":"RabbitMQ管理 - 多租户与权限：vhost","lang":"zh-CN","frontmatter":{"order":410,"category":["RabbitMQ","MQ"],"description":"1. 简介 每一个 RabbitMQ 服务器都能创建 虚拟的消息服务器，称之为 虚拟主机（virtual host），简称 vhost。 vhost 本质上是一个独立的小型 RabbitMQ 服务器，拥有自己独立的队列、交换器、绑定关系等，并且 拥有自己独立的权限。 vhost 可避免队列和交换器等命名冲突，vhost 之间是绝对隔离的，无法将 vho...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/deploy/mq-rabbitmq/rabbitmq-y-manange-vhost.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ管理 - 多租户与权限：vhost"}],["meta",{"property":"og:description","content":"1. 简介 每一个 RabbitMQ 服务器都能创建 虚拟的消息服务器，称之为 虚拟主机（virtual host），简称 vhost。 vhost 本质上是一个独立的小型 RabbitMQ 服务器，拥有自己独立的队列、交换器、绑定关系等，并且 拥有自己独立的权限。 vhost 可避免队列和交换器等命名冲突，vhost 之间是绝对隔离的，无法将 vho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 创建 vhost：add_host","slug":"_2-创建-vhost-add-host","link":"#_2-创建-vhost-add-host","children":[]},{"level":2,"title":"3. vhost 查看：list_vhosts","slug":"_3-vhost-查看-list-vhosts","link":"#_3-vhost-查看-list-vhosts","children":[]},{"level":2,"title":"4. 删除 vhost：delete_host","slug":"_4-删除-vhost-delete-host","link":"#_4-删除-vhost-delete-host","children":[]},{"level":2,"title":"5. 权限授予：set_permissions","slug":"_5-权限授予-set-permissions","link":"#_5-权限授予-set-permissions","children":[]},{"level":2,"title":"6. vhost 权限查看：list_permissions","slug":"_6-vhost-权限查看-list-permissions","link":"#_6-vhost-权限查看-list-permissions","children":[]},{"level":2,"title":"7. 用户权限查看：list_user_permissions","slug":"_7-用户权限查看-list-user-permissions","link":"#_7-用户权限查看-list-user-permissions","children":[]},{"level":2,"title":"8. 清除权限：clear_permissions","slug":"_8-清除权限-clear-permissions","link":"#_8-清除权限-clear-permissions","children":[]},{"level":2,"title":"9. rabbitmqctl 标准语法","slug":"_9-rabbitmqctl-标准语法","link":"#_9-rabbitmqctl-标准语法","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.48,"words":1344},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-y-manange-vhost.md","localizedDate":"2023年2月20日","autoDesc":true}');export{t as data};
