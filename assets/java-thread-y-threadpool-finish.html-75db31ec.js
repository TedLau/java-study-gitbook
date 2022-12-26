const e=JSON.parse('{"key":"v-a0508c08","path":"/java/thread/java-thread-y-threadpool-finish.html","title":"线程池执行完所有任务后再执行主线程方案","lang":"zh-CN","frontmatter":{"description":"1. 背景 之前有个业务需要将多份pdf转成图片，最早我们是将pdf按顺序一张张转换。但是转换时间实在太长。 改进流程一：; 将pdf转图片做成异步处理，速度是快了，但是并不知道什么时候结束。查看图片时图片都为空 改进流程二：; 使用CountDownLatch监听线程池是否全部执行完成，执行完成后才返回 2.解决方案 image-2021090120...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/java-thread-y-threadpool-finish.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"线程池执行完所有任务后再执行主线程方案"}],["meta",{"property":"og:description","content":"1. 背景 之前有个业务需要将多份pdf转成图片，最早我们是将pdf按顺序一张张转换。但是转换时间实在太长。 改进流程一：; 将pdf转图片做成异步处理，速度是快了，但是并不知道什么时候结束。查看图片时图片都为空 改进流程二：; 使用CountDownLatch监听线程池是否全部执行完成，执行完成后才返回 2.解决方案 image-2021090120..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2.解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663146813000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":1.02,"words":306},"filePathRelative":"java/thread/java-thread-y-threadpool-finish.md","localizedDate":"2022年9月14日","autoDesc":true}');export{e as data};
