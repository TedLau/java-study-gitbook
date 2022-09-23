const e=JSON.parse('{"key":"v-78a6eeab","path":"/dependencies/spring/spring-x-framework-ioc.html","title":"Spring\u57FA\u7840- Spring\u6838\u5FC3\u4E4B\u63A7\u5236\u53CD\u8F6C(IOC)","lang":"zh-CN","frontmatter":{"order":30,"category":["Spring"],"summary":"Spring\u57FA\u7840- Spring\u6838\u5FC3\u4E4B\u63A7\u5236\u53CD\u8F6C(IOC) \\"\u5728Spring\u57FA\u7840 - Spring\u7B80\u5355\u4F8B\u5B50\u5F15\u5165Spring\u7684\u6838\u5FC3\u4E2D\u5411\u4F60\u5C55\u793A\u4E86IoC\u7684\u57FA\u7840\u542B\u4E49\uFF0C\u540C\u65F6\u4EE5\u6B64\u53D1\u6563\u4E86\u4E00\u4E9BIoC\u76F8\u5173\u77E5\u8BC6\u70B9; \u672C\u8282\u5C06\u5728\u6B64\u57FA\u7840\u4E0A\u8FDB\u4E00\u6B65\u89E3\u8BFBIOC\u7684\u542B\u4E49\u4EE5\u53CAIOC\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\\" 1. \u5F15\u5165 \\" \u6211\u4EEC\u5728Spring\u57FA\u7840 - Spring\u7B80\u5355\u4F8B\u5B50\u5F15\u5165Spring\u7684\u6838\u5FC3\u4E2D\u5411\u4F60\u5C55\u793A\u4E86Io","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/spring/spring-x-framework-ioc.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Spring\u57FA\u7840- Spring\u6838\u5FC3\u4E4B\u63A7\u5236\u53CD\u8F6C(IOC)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T09:13:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T09:13:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5F15\u5165","slug":"_1-\u5F15\u5165","link":"#_1-\u5F15\u5165","children":[]},{"level":2,"title":"2. \u5982\u4F55\u7406\u89E3IoC","slug":"_2-\u5982\u4F55\u7406\u89E3ioc","link":"#_2-\u5982\u4F55\u7406\u89E3ioc","children":[{"level":3,"title":"2.1 Spring Bean\u662F\u4EC0\u4E48","slug":"_2-1-spring-bean\u662F\u4EC0\u4E48","link":"#_2-1-spring-bean\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"2.2 IoC\u662F\u4EC0\u4E48","slug":"_2-2-ioc\u662F\u4EC0\u4E48","link":"#_2-2-ioc\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"2.3 IoC\u80FD\u505A\u4EC0\u4E48","slug":"_2-3-ioc\u80FD\u505A\u4EC0\u4E48","link":"#_2-3-ioc\u80FD\u505A\u4EC0\u4E48","children":[]},{"level":3,"title":"2.4 IoC\u548CDI\u662F\u4EC0\u4E48\u5173\u7CFB","slug":"_2-4-ioc\u548Cdi\u662F\u4EC0\u4E48\u5173\u7CFB","link":"#_2-4-ioc\u548Cdi\u662F\u4EC0\u4E48\u5173\u7CFB","children":[]}]},{"level":2,"title":"3. Ioc \u914D\u7F6E\u7684\u4E09\u79CD\u65B9\u5F0F","slug":"_3-ioc-\u914D\u7F6E\u7684\u4E09\u79CD\u65B9\u5F0F","link":"#_3-ioc-\u914D\u7F6E\u7684\u4E09\u79CD\u65B9\u5F0F","children":[{"level":3,"title":"3.1 xml \u914D\u7F6E","slug":"_3-1-xml-\u914D\u7F6E","link":"#_3-1-xml-\u914D\u7F6E","children":[]},{"level":3,"title":"3.2 Java \u914D\u7F6E","slug":"_3-2-java-\u914D\u7F6E","link":"#_3-2-java-\u914D\u7F6E","children":[]},{"level":3,"title":"3.3 \u6CE8\u89E3\u914D\u7F6E","slug":"_3-3-\u6CE8\u89E3\u914D\u7F6E","link":"#_3-3-\u6CE8\u89E3\u914D\u7F6E","children":[]}]},{"level":2,"title":"4. \u4F9D\u8D56\u6CE8\u5165\u7684\u4E09\u79CD\u65B9\u5F0F","slug":"_4-\u4F9D\u8D56\u6CE8\u5165\u7684\u4E09\u79CD\u65B9\u5F0F","link":"#_4-\u4F9D\u8D56\u6CE8\u5165\u7684\u4E09\u79CD\u65B9\u5F0F","children":[{"level":3,"title":"4.1 setter\u65B9\u5F0F","slug":"_4-1-setter\u65B9\u5F0F","link":"#_4-1-setter\u65B9\u5F0F","children":[]},{"level":3,"title":"4.2 \u6784\u9020\u51FD\u6570","slug":"_4-2-\u6784\u9020\u51FD\u6570","link":"#_4-2-\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"4.3 \u6210\u5458\u53D8\u91CF/ \u63A5\u53E3\u6CE8\u5165","slug":"_4-3-\u6210\u5458\u53D8\u91CF-\u63A5\u53E3\u6CE8\u5165","link":"#_4-3-\u6210\u5458\u53D8\u91CF-\u63A5\u53E3\u6CE8\u5165","children":[]}]},{"level":2,"title":"5. IoC\u548CDI\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","slug":"_5-ioc\u548Cdi\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","link":"#_5-ioc\u548Cdi\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","children":[{"level":3,"title":"5.1 \u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F\uFF1F","slug":"_5-1-\u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F","link":"#_5-1-\u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F","children":[]},{"level":3,"title":"5.2 \u6211\u5728\u4F7F\u7528\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F\u65F6\u6CE8\u5165\u4E86\u592A\u591A\u7684\u7C7B\u5BFC\u81F4Bad Smell\u600E\u4E48\u529E\uFF1F","slug":"_5-2-\u6211\u5728\u4F7F\u7528\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F\u65F6\u6CE8\u5165\u4E86\u592A\u591A\u7684\u7C7B\u5BFC\u81F4bad-smell\u600E\u4E48\u529E","link":"#_5-2-\u6211\u5728\u4F7F\u7528\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F\u65F6\u6CE8\u5165\u4E86\u592A\u591A\u7684\u7C7B\u5BFC\u81F4bad-smell\u600E\u4E48\u529E","children":[]},{"level":3,"title":"5.3 @Autowired\u548C@Resource\u4EE5\u53CA@Inject\u7B49\u6CE8\u89E3\u6CE8\u5165\u6709\u4F55\u533A\u522B\uFF1F","slug":"_5-3-autowired\u548C-resource\u4EE5\u53CA-inject\u7B49\u6CE8\u89E3\u6CE8\u5165\u6709\u4F55\u533A\u522B","link":"#_5-3-autowired\u548C-resource\u4EE5\u53CA-inject\u7B49\u6CE8\u89E3\u6CE8\u5165\u6709\u4F55\u533A\u522B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663146813000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":18.48,"words":5544},"filePathRelative":"dependencies/spring/spring-x-framework-ioc.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};