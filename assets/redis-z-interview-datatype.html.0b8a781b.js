const e=JSON.parse('{"key":"v-5b169898","path":"/db/redis/redis-z-interview-datatype.html","title":"Redis\u9762\u8BD5-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784","lang":"zh-CN","frontmatter":{"order":40,"category":["\u6570\u636E\u5E93","\u7F13\u5B58"],"summary":"Redis\u9762\u8BD5-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784 1 Redis \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\uFF1F 5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u662F\uFF1AString\u3001List\u3001Set\u3001Zset\u3001Hash\u3002; \u7ED3\u6784\u7C7B\u578B \u7ED3\u6784\u5B58\u50A8\u7684\u503C \u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B ---------------- ------------------------------------------ ------------------------","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/redis-z-interview-datatype.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u9762\u8BD5-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 Redis \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\uFF1F","slug":"_1-redis-\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B","children":[]},{"level":2,"title":"2 \u8C08\u8C08Redis \u7684\u5BF9\u8C61\u673A\u5236\uFF08redisObject)\uFF1F","slug":"_2-\u8C08\u8C08redis-\u7684\u5BF9\u8C61\u673A\u5236-redisobject","children":[]},{"level":2,"title":"3 Redis \u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF1F","slug":"_3-redis-\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784","children":[]},{"level":2,"title":"4 \u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds\uFF1F","slug":"_4-\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds","children":[]},{"level":2,"title":"5 Redis \u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11\uFF1F","slug":"_5-redis-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11","children":[]},{"level":2,"title":"6 \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream\uFF1F","slug":"_6-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream","children":[]},{"level":2,"title":"7 Redis Stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F\uFF1F","slug":"_7-redis-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F","children":[]},{"level":2,"title":"8 Redis Stream\u6D88\u606FID\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898\uFF1F","slug":"_8-redis-stream\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898","children":[]},{"level":2,"title":"9 Redis Stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898?","slug":"_9-redis-stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898","children":[]},{"level":2,"title":"10 Redis Steam \u574F\u6D88\u606F\u95EE\u9898\uFF0C\u6B7B\u4FE1\u95EE\u9898?","slug":"_10-redis-steam-\u574F\u6D88\u606F\u95EE\u9898-\u6B7B\u4FE1\u95EE\u9898","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.84,"words":2951},"filePathRelative":"db/redis/redis-z-interview-datatype.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};