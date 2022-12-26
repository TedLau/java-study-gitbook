const e=JSON.parse('{"key":"v-a1a5e566","path":"/deploy/jenkins/jenkins-x-sharedlib.html","title":"Jenkins共享库编写与使用","lang":"zh-CN","frontmatter":{"description":"1. 背景 如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可以在所有的 Pipeline 中...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/jenkins/jenkins-x-sharedlib.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Jenkins共享库编写与使用"}],["meta",{"property":"og:description","content":"1. 背景 如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可以在所有的 Pipeline 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 共享库是什么？","slug":"_2-共享库是什么","link":"#_2-共享库是什么","children":[]},{"level":2,"title":"3. 共享库内容","slug":"_3-共享库内容","link":"#_3-共享库内容","children":[{"level":3,"title":"3.1 vars 下的steps","slug":"_3-1-vars-下的steps","link":"#_3-1-vars-下的steps","children":[]},{"level":3,"title":"3.2 src下的通用代码（通常放帮助类）","slug":"_3-2-src下的通用代码-通常放帮助类","link":"#_3-2-src下的通用代码-通常放帮助类","children":[]}]},{"level":2,"title":"4. 示例","slug":"_4-示例","link":"#_4-示例","children":[{"level":3,"title":"4.1 步骤1：vars的steps示例","slug":"_4-1-步骤1-vars的steps示例","link":"#_4-1-步骤1-vars的steps示例","children":[]},{"level":3,"title":"4.2 步骤2：src 的通用代码示例","slug":"_4-2-步骤2-src-的通用代码示例","link":"#_4-2-步骤2-src-的通用代码示例","children":[]},{"level":3,"title":"4.3 完整的代码目录如下所示：","slug":"_4-3-完整的代码目录如下所示","link":"#_4-3-完整的代码目录如下所示","children":[]},{"level":3,"title":"4.4 上传代码到git","slug":"_4-4-上传代码到git","link":"#_4-4-上传代码到git","children":[]},{"level":3,"title":"4.5 Jenkins 添加共享库","slug":"_4-5-jenkins-添加共享库","link":"#_4-5-jenkins-添加共享库","children":[]},{"level":3,"title":"4.6 新建流水线项目","slug":"_4-6-新建流水线项目","link":"#_4-6-新建流水线项目","children":[]},{"level":3,"title":"4.7 构建输出","slug":"_4-7-构建输出","link":"#_4-7-构建输出","children":[]}]},{"level":2,"title":"5. 参考文章","slug":"_5-参考文章","link":"#_5-参考文章","children":[]}],"git":{"createdTime":1663230492000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":3.73,"words":1120},"filePathRelative":"deploy/jenkins/jenkins-x-sharedlib.md","localizedDate":"2022年9月15日","autoDesc":true}');export{e as data};
