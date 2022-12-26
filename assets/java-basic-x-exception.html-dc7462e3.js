const e=JSON.parse('{"key":"v-5bab045f","path":"/java/base/java-basic-x-exception.html","title":"Java 基础 - 异常机制详解","lang":"zh-CN","frontmatter":{"order":60,"category":["Java"],"description":"Java异常是Java提供的一种识别及响应错误的一致性机制，java异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性。本文综合多篇文章后，总结了Java 异常的相关知识，希望可以提升你对Java中异常的认知效率。 1. 异常的层次结构 异常指不期而至的各种状况，如：文件找不到、网络连接失败、非法参数等。异常是一...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/base/java-basic-x-exception.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 基础 - 异常机制详解"}],["meta",{"property":"og:description","content":"Java异常是Java提供的一种识别及响应错误的一致性机制，java异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性。本文综合多篇文章后，总结了Java 异常的相关知识，希望可以提升你对Java中异常的认知效率。 1. 异常的层次结构 异常指不期而至的各种状况，如：文件找不到、网络连接失败、非法参数等。异常是一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 异常的层次结构","slug":"_1-异常的层次结构","link":"#_1-异常的层次结构","children":[{"level":3,"title":"1.1 Throwable","slug":"_1-1-throwable","link":"#_1-1-throwable","children":[]},{"level":3,"title":"1.2 Error（错误）","slug":"_1-2-error-错误","link":"#_1-2-error-错误","children":[]},{"level":3,"title":"1.3 Exception（异常）","slug":"_1-3-exception-异常","link":"#_1-3-exception-异常","children":[]},{"level":3,"title":"1.4 可查的异常（checked exceptions）和不可查的异常（unchecked exceptions）","slug":"_1-4-可查的异常-checked-exceptions-和不可查的异常-unchecked-exceptions","link":"#_1-4-可查的异常-checked-exceptions-和不可查的异常-unchecked-exceptions","children":[]}]},{"level":2,"title":"2. 异常基础","slug":"_2-异常基础","link":"#_2-异常基础","children":[{"level":3,"title":"2.1 异常关键字","slug":"_2-1-异常关键字","link":"#_2-1-异常关键字","children":[]},{"level":3,"title":"2.2 异常的申明(throws)","slug":"_2-2-异常的申明-throws","link":"#_2-2-异常的申明-throws","children":[]},{"level":3,"title":"2.3 异常的抛出(throw)","slug":"_2-3-异常的抛出-throw","link":"#_2-3-异常的抛出-throw","children":[]},{"level":3,"title":"2.4 异常的自定义","slug":"_2-4-异常的自定义","link":"#_2-4-异常的自定义","children":[]},{"level":3,"title":"2.5 异常的捕获","slug":"_2-5-异常的捕获","link":"#_2-5-异常的捕获","children":[]},{"level":3,"title":"2.6 异常基础总结","slug":"_2-6-异常基础总结","link":"#_2-6-异常基础总结","children":[]},{"level":3,"title":"2.7 常用的异常","slug":"_2-7-常用的异常","link":"#_2-7-常用的异常","children":[]}]},{"level":2,"title":"3. 异常实践","slug":"_3-异常实践","link":"#_3-异常实践","children":[{"level":3,"title":"3.1 只针对不正常的情况才使用异常","slug":"_3-1-只针对不正常的情况才使用异常","link":"#_3-1-只针对不正常的情况才使用异常","children":[]},{"level":3,"title":"3.2 在 finally 块中清理资源或者使用 try-with-resource 语句","slug":"_3-2-在-finally-块中清理资源或者使用-try-with-resource-语句","link":"#_3-2-在-finally-块中清理资源或者使用-try-with-resource-语句","children":[]},{"level":3,"title":"3.3 尽量使用标准的异常","slug":"_3-3-尽量使用标准的异常","link":"#_3-3-尽量使用标准的异常","children":[]},{"level":3,"title":"3.4 对异常进行文档说明","slug":"_3-4-对异常进行文档说明","link":"#_3-4-对异常进行文档说明","children":[]},{"level":3,"title":"3.5 优先捕获最具体的异常","slug":"_3-5-优先捕获最具体的异常","link":"#_3-5-优先捕获最具体的异常","children":[]},{"level":3,"title":"3.6 不要捕获 Throwable 类","slug":"_3-6-不要捕获-throwable-类","link":"#_3-6-不要捕获-throwable-类","children":[]},{"level":3,"title":"3.7 不要忽略异常","slug":"_3-7-不要忽略异常","link":"#_3-7-不要忽略异常","children":[]},{"level":3,"title":"3.8 不要记录并抛出异常","slug":"_3-8-不要记录并抛出异常","link":"#_3-8-不要记录并抛出异常","children":[]},{"level":3,"title":"3.9 包装异常时不要抛弃原始的异常","slug":"_3-9-包装异常时不要抛弃原始的异常","link":"#_3-9-包装异常时不要抛弃原始的异常","children":[]},{"level":3,"title":"3.10 不要使用异常控制程序的流程","slug":"_3-10-不要使用异常控制程序的流程","link":"#_3-10-不要使用异常控制程序的流程","children":[]},{"level":3,"title":"3.11 不要在finally块中使用return。","slug":"_3-11-不要在finally块中使用return。","link":"#_3-11-不要在finally块中使用return。","children":[]}]},{"level":2,"title":"4. 深入理解异常","slug":"_4-深入理解异常","link":"#_4-深入理解异常","children":[{"level":3,"title":"4.1 JVM处理异常的机制？","slug":"_4-1-jvm处理异常的机制","link":"#_4-1-jvm处理异常的机制","children":[]},{"level":3,"title":"4.2 异常是否耗时？为什么会耗时？","slug":"_4-2-异常是否耗时-为什么会耗时","link":"#_4-2-异常是否耗时-为什么会耗时","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":29.5,"words":8850},"filePathRelative":"java/base/java-basic-x-exception.md","localizedDate":"2022年9月3日","autoDesc":true}');export{e as data};
