const e=JSON.parse('{"key":"v-8b37fde2","path":"/deploy/nginx/nginx-x-forbidden403.html","title":"四种解决Nginx出现403 forbidden 报错的方法","lang":"zh-CN","frontmatter":{"description":"1.背景：访问时报403 nginx 访问静态资源文件提示 image-20190908163131411 于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报错如下： 2. 解决方式 2.1 方式1：由于启动用户和nginx工作用户不一致所致 1. 查看nginx启...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/nginx/nginx-x-forbidden403.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"四种解决Nginx出现403 forbidden 报错的方法"}],["meta",{"property":"og:description","content":"1.背景：访问时报403 nginx 访问静态资源文件提示 image-20190908163131411 于是查看nginx日志，路径为/var/log/nginx/error.log。打开日志发现报错Permission denied，详细报错如下： 2. 解决方式 2.1 方式1：由于启动用户和nginx工作用户不一致所致 1. 查看nginx启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1.背景：访问时报403","slug":"_1-背景-访问时报403","link":"#_1-背景-访问时报403","children":[]},{"level":2,"title":"2. 解决方式","slug":"_2-解决方式","link":"#_2-解决方式","children":[{"level":3,"title":"2.1 方式1：由于启动用户和nginx工作用户不一致所致","slug":"_2-1-方式1-由于启动用户和nginx工作用户不一致所致","link":"#_2-1-方式1-由于启动用户和nginx工作用户不一致所致","children":[]},{"level":3,"title":"2.2  方式2：权限问题，如果nginx没有web目录的操作权限，也会出现403错误。","slug":"_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。","link":"#_2-2-方式2-权限问题-如果nginx没有web目录的操作权限-也会出现403错误。","children":[]},{"level":3,"title":"2.4 方式4：SELinux设置为开启状态（enabled）的原因。","slug":"_2-4-方式4-selinux设置为开启状态-enabled-的原因。","link":"#_2-4-方式4-selinux设置为开启状态-enabled-的原因。","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663230492000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"deploy/nginx/nginx-x-forbidden403.md","localizedDate":"2022年9月15日","autoDesc":true}');export{e as data};