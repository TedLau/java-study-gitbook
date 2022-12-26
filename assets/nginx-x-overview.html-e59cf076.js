const l=JSON.parse('{"key":"v-006065d8","path":"/deploy/nginx/nginx-x-overview.html","title":"Nginx从入门到实践","lang":"zh-CN","frontmatter":{"order":10,"category":["Nginx"],"description":"image-20220724221108300 1. Nginx 介绍 Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 Nginx 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/nginx/nginx-x-overview.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Nginx从入门到实践"}],["meta",{"property":"og:description","content":"image-20220724221108300 1. Nginx 介绍 Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 Nginx 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. Nginx 介绍","slug":"_1-nginx-介绍","link":"#_1-nginx-介绍","children":[]},{"level":2,"title":"2. 相关概念","slug":"_2-相关概念","link":"#_2-相关概念","children":[{"level":3,"title":"2.1 简单请求和非简单请求","slug":"_2-1-简单请求和非简单请求","link":"#_2-1-简单请求和非简单请求","children":[]},{"level":3,"title":"2.2 跨域","slug":"_2-2-跨域","link":"#_2-2-跨域","children":[]},{"level":3,"title":"2.3 正向代理和反向代理","slug":"_2-3-正向代理和反向代理","link":"#_2-3-正向代理和反向代理","children":[]},{"level":3,"title":"2.4 负载均衡","slug":"_2-4-负载均衡","link":"#_2-4-负载均衡","children":[]},{"level":3,"title":"2.5 动静分离","slug":"_2-5-动静分离","link":"#_2-5-动静分离","children":[]}]},{"level":2,"title":"3. Nginx 快速安装","slug":"_3-nginx-快速安装","link":"#_3-nginx-快速安装","children":[{"level":3,"title":"3.1 安装","slug":"_3-1-安装","link":"#_3-1-安装","children":[]},{"level":3,"title":"3.2 相关文件夹","slug":"_3-2-相关文件夹","link":"#_3-2-相关文件夹","children":[]},{"level":3,"title":"3.3 跑起来康康","slug":"_3-3-跑起来康康","link":"#_3-3-跑起来康康","children":[]}]},{"level":2,"title":"4. Nginx 操作常用命令","slug":"_4-nginx-操作常用命令","link":"#_4-nginx-操作常用命令","children":[]},{"level":2,"title":"5. Nginx 配置语法","slug":"_5-nginx-配置语法","link":"#_5-nginx-配置语法","children":[{"level":3,"title":"5.1 典型配置","slug":"_5-1-典型配置","link":"#_5-1-典型配置","children":[]},{"level":3,"title":"5.2 全局变量","slug":"_5-2-全局变量","link":"#_5-2-全局变量","children":[]}]},{"level":2,"title":"6. 设置二级域名虚拟主机","slug":"_6-设置二级域名虚拟主机","link":"#_6-设置二级域名虚拟主机","children":[]},{"level":2,"title":"7. 配置反向代理","slug":"_7-配置反向代理","link":"#_7-配置反向代理","children":[]},{"level":2,"title":"8. 跨域 CORS 配置","slug":"_8-跨域-cors-配置","link":"#_8-跨域-cors-配置","children":[{"level":3,"title":"8.1 使用反向代理解决跨域","slug":"_8-1-使用反向代理解决跨域","link":"#_8-1-使用反向代理解决跨域","children":[]},{"level":3,"title":"8.2 配置 header 解决跨域","slug":"_8-2-配置-header-解决跨域","link":"#_8-2-配置-header-解决跨域","children":[]}]},{"level":2,"title":"9. 开启 gzip 压缩","slug":"_9-开启-gzip-压缩","link":"#_9-开启-gzip-压缩","children":[{"level":3,"title":"9.1 Nginx 配置 gzip","slug":"_9-1-nginx-配置-gzip","link":"#_9-1-nginx-配置-gzip","children":[]},{"level":3,"title":"9.2 Webpack 的 gzip 配置","slug":"_9-2-webpack-的-gzip-配置","link":"#_9-2-webpack-的-gzip-配置","children":[]}]},{"level":2,"title":"10. 配置负载均衡","slug":"_10-配置负载均衡","link":"#_10-配置负载均衡","children":[]},{"level":2,"title":"11. 配置动静分离","slug":"_11-配置动静分离","link":"#_11-配置动静分离","children":[]},{"level":2,"title":"12. 配置高可用集群（双机热备）","slug":"_12-配置高可用集群-双机热备","link":"#_12-配置高可用集群-双机热备","children":[]},{"level":2,"title":"13. 适配 PC 或移动设备","slug":"_13-适配-pc-或移动设备","link":"#_13-适配-pc-或移动设备","children":[]},{"level":2,"title":"14. 配置 HTTPS","slug":"_14-配置-https","link":"#_14-配置-https","children":[]},{"level":2,"title":"15. 一些常用技巧","slug":"_15-一些常用技巧","link":"#_15-一些常用技巧","children":[{"level":3,"title":"15.1 静态服务","slug":"_15-1-静态服务","link":"#_15-1-静态服务","children":[]},{"level":3,"title":"15.2 图片防盗链","slug":"_15-2-图片防盗链","link":"#_15-2-图片防盗链","children":[]},{"level":3,"title":"15.3 请求过滤","slug":"_15-3-请求过滤","link":"#_15-3-请求过滤","children":[]},{"level":3,"title":"15.4 配置图片、字体等静态文件缓存","slug":"_15-4-配置图片、字体等静态文件缓存","link":"#_15-4-配置图片、字体等静态文件缓存","children":[]},{"level":3,"title":"15.5 单页面项目 history 路由配置","slug":"_15-5-单页面项目-history-路由配置","link":"#_15-5-单页面项目-history-路由配置","children":[]},{"level":3,"title":"15.6 HTTP 请求转发到 HTTPS","slug":"_15-6-http-请求转发到-https","link":"#_15-6-http-请求转发到-https","children":[]},{"level":3,"title":"15.7 泛域名路径分离","slug":"_15-7-泛域名路径分离","link":"#_15-7-泛域名路径分离","children":[]},{"level":3,"title":"15.8 泛域名转发","slug":"_15-8-泛域名转发","link":"#_15-8-泛域名转发","children":[]}]},{"level":2,"title":"16. 最佳实践","slug":"_16-最佳实践","link":"#_16-最佳实践","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663336369000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":35.56,"words":10668},"filePathRelative":"deploy/nginx/nginx-x-overview.md","localizedDate":"2022年9月16日","autoDesc":true}');export{l as data};
