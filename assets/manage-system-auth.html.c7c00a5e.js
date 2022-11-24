const e=JSON.parse('{"key":"v-747957c3","path":"/arch/manage-system/manage-system-auth.html","title":"\u540E\u53F0\u7BA1\u7406 - \u7528\u6237\u8BA4\u8BC1SaToken","lang":"zh-CN","frontmatter":{"order":1030,"category":["\u540E\u53F0\u7BA1\u7406"],"summary":"\u540E\u53F0\u7BA1\u7406 - \u7528\u6237\u8BA4\u8BC1SaToken 1. \u5177\u4F53\u5B9E\u73B0 1.1 \u7528\u6237\u767B\u5F55 \u9879\u76EE\u91C7\u7528\u524D\u540E\u7AEF\u5206\u79BB\u67B6\u6784\uFF08\u65E0 Cookie \u6A21\u5F0F\uFF09 \\"\u6240\u8C13 Cookie \uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u7279\u6B8A\u7684header\u53C2\u6570\u800C\u5DF2\uFF0C \u800C\u65E2\u7136\u5B83\u53EA\u662F\u4E00\u4E2A header \u53C2\u6570\uFF0C\u6211\u4EEC\u5C31\u80FD\u624B\u52A8\u6A21\u62DF\u5B9E\u73B0\u5B83\uFF0C\u4ECE\u800C\u5B8C\u6210\u9274\u6743\u64CD\u4F5C\u3002\\" \u540E\u7AEF\u5C06 token \u8FD4\u56DE\u5230\u524D\u7AEF; 1. \u9996\u5148\u8C03\u7528 StpUtil.login(id) ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/manage-system/manage-system-auth.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u540E\u53F0\u7BA1\u7406 - \u7528\u6237\u8BA4\u8BC1SaToken"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-24T16:02:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-11-24T16:02:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5177\u4F53\u5B9E\u73B0","slug":"_1-\u5177\u4F53\u5B9E\u73B0","link":"#_1-\u5177\u4F53\u5B9E\u73B0","children":[{"level":3,"title":"1.1 \u7528\u6237\u767B\u5F55","slug":"_1-1-\u7528\u6237\u767B\u5F55","link":"#_1-1-\u7528\u6237\u767B\u5F55","children":[]},{"level":3,"title":"1.2 \u6743\u9650\u8BA4\u8BC1","slug":"_1-2-\u6743\u9650\u8BA4\u8BC1","link":"#_1-2-\u6743\u9650\u8BA4\u8BC1","children":[]},{"level":3,"title":"1.3 \u5FAE\u670D\u52A1 - \u7F51\u5173\u7EDF\u4E00\u9274\u6743","slug":"_1-3-\u5FAE\u670D\u52A1-\u7F51\u5173\u7EDF\u4E00\u9274\u6743","link":"#_1-3-\u5FAE\u670D\u52A1-\u7F51\u5173\u7EDF\u4E00\u9274\u6743","children":[]},{"level":3,"title":"1.4 \u5FAE\u670D\u52A1 - \u5185\u90E8\u670D\u52A1\u5916\u7F51\u9694\u79BB\uFF08\u7F51\u5173\u8F6C\u53D1\u9274\u6743)","slug":"_1-4-\u5FAE\u670D\u52A1-\u5185\u90E8\u670D\u52A1\u5916\u7F51\u9694\u79BB-\u7F51\u5173\u8F6C\u53D1\u9274\u6743","link":"#_1-4-\u5FAE\u670D\u52A1-\u5185\u90E8\u670D\u52A1\u5916\u7F51\u9694\u79BB-\u7F51\u5173\u8F6C\u53D1\u9274\u6743","children":[]},{"level":3,"title":"1.5 \u5355\u70B9\u767B\u5F55\u6A21\u5757","slug":"_1-5-\u5355\u70B9\u767B\u5F55\u6A21\u5757","link":"#_1-5-\u5355\u70B9\u767B\u5F55\u6A21\u5757","children":[]}]},{"level":2,"title":"2. redis \u5B58\u50A8\u7684\u6570\u636E","slug":"_2-redis-\u5B58\u50A8\u7684\u6570\u636E","link":"#_2-redis-\u5B58\u50A8\u7684\u6570\u636E","children":[{"level":3,"title":"2.1 \u6839\u636Etoken \u53D6\u7528\u6237id","slug":"_2-1-\u6839\u636Etoken-\u53D6\u7528\u6237id","link":"#_2-1-\u6839\u636Etoken-\u53D6\u7528\u6237id","children":[]},{"level":3,"title":"2.2 \u6839\u636Etoken \u53D6\u7528\u6237\u4FE1\u606F","slug":"_2-2-\u6839\u636Etoken-\u53D6\u7528\u6237\u4FE1\u606F","link":"#_2-2-\u6839\u636Etoken-\u53D6\u7528\u6237\u4FE1\u606F","children":[]},{"level":3,"title":"2.3 \u6839\u636E\u7528\u6237id\u3001\u53D6token\u4FE1\u606F","slug":"_2-3-\u6839\u636E\u7528\u6237id\u3001\u53D6token\u4FE1\u606F","link":"#_2-3-\u6839\u636E\u7528\u6237id\u3001\u53D6token\u4FE1\u606F","children":[]},{"level":3,"title":"2.4 \u6700\u540E\u767B\u9646\u65F6\u95F4 last-activity","slug":"_2-4-\u6700\u540E\u767B\u9646\u65F6\u95F4-last-activity","link":"#_2-4-\u6700\u540E\u767B\u9646\u65F6\u95F4-last-activity","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1669216046000,"updatedTime":1669305755000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":8.48,"words":2545},"filePathRelative":"arch/manage-system/manage-system-auth.md","localizedDate":"2022\u5E7411\u670823\u65E5"}');export{e as data};
