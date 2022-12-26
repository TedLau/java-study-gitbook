const e=JSON.parse('{"key":"v-47bd7701","path":"/java/io/java-io-model.html","title":"IO 模型 - Unix IO 模型","lang":"zh-CN","frontmatter":{"order":70,"category":["Java","IO"],"description":"本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。 1. Unix IO 模型简介 一个输入操作通常包括两个阶段: 等待数据准备好; 从内核向进程复制数据; 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/io/java-io-model.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"IO 模型 - Unix IO 模型"}],["meta",{"property":"og:description","content":"本文主要简要介绍 Unix I/O 5种模型，并对5大模型比较，并重点为后续章节解释IO多路复用做铺垫。 1. Unix IO 模型简介 一个输入操作通常包括两个阶段: 等待数据准备好; 从内核向进程复制数据; 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待分组到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. Unix IO 模型简介","slug":"_1-unix-io-模型简介","link":"#_1-unix-io-模型简介","children":[{"level":3,"title":"1.1 阻塞式 I/O","slug":"_1-1-阻塞式-i-o","link":"#_1-1-阻塞式-i-o","children":[]},{"level":3,"title":"1.2 非阻塞式 I/O","slug":"_1-2-非阻塞式-i-o","link":"#_1-2-非阻塞式-i-o","children":[]},{"level":3,"title":"1.3 I/O 复用","slug":"_1-3-i-o-复用","link":"#_1-3-i-o-复用","children":[]},{"level":3,"title":"1.4 信号驱动 I/O","slug":"_1-4-信号驱动-i-o","link":"#_1-4-信号驱动-i-o","children":[]},{"level":3,"title":"1.5 异步 I/O","slug":"_1-5-异步-i-o","link":"#_1-5-异步-i-o","children":[]}]},{"level":2,"title":"2. I/O 模型比较","slug":"_2-i-o-模型比较","link":"#_2-i-o-模型比较","children":[{"level":3,"title":"2.1 同步 I/O 与异步 I/O","slug":"_2-1-同步-i-o-与异步-i-o","link":"#_2-1-同步-i-o-与异步-i-o","children":[]},{"level":3,"title":"2.2 五大 I/O 模型比较","slug":"_2-2-五大-i-o-模型比较","link":"#_2-2-五大-i-o-模型比较","children":[]}]},{"level":2,"title":"3. IO多路复用","slug":"_3-io多路复用","link":"#_3-io多路复用","children":[{"level":3,"title":"3.1 IO多路复用工作模式","slug":"_3-1-io多路复用工作模式","link":"#_3-1-io多路复用工作模式","children":[]},{"level":3,"title":"3.2 应用场景","slug":"_3-2-应用场景","link":"#_3-2-应用场景","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":6.26,"words":1878},"filePathRelative":"java/io/java-io-model.md","localizedDate":"2022年9月3日","autoDesc":true}');export{e as data};
