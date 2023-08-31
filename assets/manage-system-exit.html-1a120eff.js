const e=JSON.parse('{"key":"v-687793e6","path":"/arch/manage-system/manage-system-exit.html","title":"进程优雅退出功能&实现思路","lang":"zh-CN","frontmatter":{"description":"1. 背景 我们在linux 环境经常使用 kill -9 PID 来关闭进程。但是kill -9 pid 的方式是强制将某个进程杀掉。但是这种方式非常暴力，相当于突然断电，可能会导致 缓存中的数据尚未持久化到磁盘中，导致数据丢失; 正在进行文件的write操作，没有更新完成，突然退出，导致文件损坏；; 线程的消息队列中尚有接收到的请求消息还没来得及处...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/arch/manage-system/manage-system-exit.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"进程优雅退出功能&实现思路"}],["meta",{"property":"og:description","content":"1. 背景 我们在linux 环境经常使用 kill -9 PID 来关闭进程。但是kill -9 pid 的方式是强制将某个进程杀掉。但是这种方式非常暴力，相当于突然断电，可能会导致 缓存中的数据尚未持久化到磁盘中，导致数据丢失; 正在进行文件的write操作，没有更新完成，突然退出，导致文件损坏；; 线程的消息队列中尚有接收到的请求消息还没来得及处..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. JAVA优雅退出（理论）","slug":"_2-java优雅退出-理论","link":"#_2-java优雅退出-理论","children":[]},{"level":2,"title":"3. 项目优雅退出实战","slug":"_3-项目优雅退出实战","link":"#_3-项目优雅退出实战","children":[{"level":3,"title":"3.1 使用kill PID 关闭进程","slug":"_3-1-使用kill-pid-关闭进程","link":"#_3-1-使用kill-pid-关闭进程","children":[]},{"level":3,"title":"3.2 监听退出","slug":"_3-2-监听退出","link":"#_3-2-监听退出","children":[]},{"level":3,"title":"3.3 停止线程池","slug":"_3-3-停止线程池","link":"#_3-3-停止线程池","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.88,"words":865},"filePathRelative":"arch/manage-system/manage-system-exit.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
