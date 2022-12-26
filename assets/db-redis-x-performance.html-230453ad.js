const e=JSON.parse('{"key":"v-1aba85f3","path":"/db/redis/db-redis-x-performance.html","title":"Redis进阶 - 性能调优：Redis性能调优详解","lang":"zh-CN","frontmatter":{"order":350,"category":["数据库","Redis"],"description":"Redis 的性能问题，涉及到的知识点非常广，几乎涵盖了 CPU、内存、网络、甚至磁盘的方方面面；同时还需要对上文中一些基础或底层有详细的了解。 1. 前言 Redis 作为优秀的内存数据库，其拥有非常高的性能，单个实例的 OPS 能够达到 10W 左右。但也正因此如此，当我们在使用 Redis 时，如果发现操作延迟变大的情况，就会与我们的预期不符。 ...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/db-redis-x-performance.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis进阶 - 性能调优：Redis性能调优详解"}],["meta",{"property":"og:description","content":"Redis 的性能问题，涉及到的知识点非常广，几乎涵盖了 CPU、内存、网络、甚至磁盘的方方面面；同时还需要对上文中一些基础或底层有详细的了解。 1. 前言 Redis 作为优秀的内存数据库，其拥有非常高的性能，单个实例的 OPS 能够达到 10W 左右。但也正因此如此，当我们在使用 Redis 时，如果发现操作延迟变大的情况，就会与我们的预期不符。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. Redis真的变慢了吗？","slug":"_2-redis真的变慢了吗","link":"#_2-redis真的变慢了吗","children":[{"level":3,"title":"2.1 什么是基准性能？","slug":"_2-1-什么是基准性能","link":"#_2-1-什么是基准性能","children":[]},{"level":3,"title":"2.2 具体如何做？","slug":"_2-2-具体如何做","link":"#_2-2-具体如何做","children":[]}]},{"level":2,"title":"3. 使用复杂度过高的命令","slug":"_3-使用复杂度过高的命令","link":"#_3-使用复杂度过高的命令","children":[]},{"level":2,"title":"4. 操作bigkey","slug":"_4-操作bigkey","link":"#_4-操作bigkey","children":[{"level":3,"title":"4.1 查看bigkey 的分布情况","slug":"_4-1-查看bigkey-的分布情况","link":"#_4-1-查看bigkey-的分布情况","children":[]},{"level":3,"title":"4.2 解决方案","slug":"_4-2-解决方案","link":"#_4-2-解决方案","children":[]}]},{"level":2,"title":"5. 集中过期","slug":"_5-集中过期","link":"#_5-集中过期","children":[{"level":3,"title":"5.1 为什么集中过期会导致 Redis 延迟变大？","slug":"_5-1-为什么集中过期会导致-redis-延迟变大","link":"#_5-1-为什么集中过期会导致-redis-延迟变大","children":[]},{"level":3,"title":"5.2 那遇到这种情况，如何分析和排查？","slug":"_5-2-那遇到这种情况-如何分析和排查","link":"#_5-2-那遇到这种情况-如何分析和排查","children":[]},{"level":3,"title":"5.3 规避问题","slug":"_5-3-规避问题","link":"#_5-3-规避问题","children":[]}]},{"level":2,"title":"6. 实例内存达到上限","slug":"_6-实例内存达到上限","link":"#_6-实例内存达到上限","children":[{"level":3,"title":"6.1 问题原因","slug":"_6-1-问题原因","link":"#_6-1-问题原因","children":[]},{"level":3,"title":"6.2 解决","slug":"_6-2-解决","link":"#_6-2-解决","children":[]}]},{"level":2,"title":"7. fork耗时严重","slug":"_7-fork耗时严重","link":"#_7-fork耗时严重","children":[{"level":3,"title":"7.1 优化方案","slug":"_7-1-优化方案","link":"#_7-1-优化方案","children":[]}]},{"level":2,"title":"8. 开启内存大页","slug":"_8-开启内存大页","link":"#_8-开启内存大页","children":[{"level":3,"title":"8.1 什么是内存大页？","slug":"_8-1-什么是内存大页","link":"#_8-1-什么是内存大页","children":[]},{"level":3,"title":"8.2 这对 Redis 会有什么影响呢？","slug":"_8-2-这对-redis-会有什么影响呢","link":"#_8-2-这对-redis-会有什么影响呢","children":[]},{"level":3,"title":"8.3 那如何解决这个问题？","slug":"_8-3-那如何解决这个问题","link":"#_8-3-那如何解决这个问题","children":[]}]},{"level":2,"title":"9. 开启AOF","slug":"_9-开启aof","link":"#_9-开启aof","children":[]},{"level":2,"title":"10. 绑定CPU","slug":"_10-绑定cpu","link":"#_10-绑定cpu","children":[{"level":3,"title":"10.1 为什么？","slug":"_10-1-为什么","link":"#_10-1-为什么","children":[]},{"level":3,"title":"10.2 那如何解决这个问题呢？","slug":"_10-2-那如何解决这个问题呢","link":"#_10-2-那如何解决这个问题呢","children":[]},{"level":3,"title":"10.3 如何再进一步优化？","slug":"_10-3-如何再进一步优化","link":"#_10-3-如何再进一步优化","children":[]}]},{"level":2,"title":"11. 使用Swap","slug":"_11-使用swap","link":"#_11-使用swap","children":[]},{"level":2,"title":"12. 碎片整理","slug":"_12-碎片整理","link":"#_12-碎片整理","children":[]},{"level":2,"title":"13. 网络带宽过载","slug":"_13-网络带宽过载","link":"#_13-网络带宽过载","children":[]},{"level":2,"title":"14. 其他原因","slug":"_14-其他原因","link":"#_14-其他原因","children":[]},{"level":2,"title":"15. 总结","slug":"_15-总结","link":"#_15-总结","children":[]},{"level":2,"title":"16. 后记","slug":"_16-后记","link":"#_16-后记","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":6}]},"readingTime":{"minutes":40.77,"words":12232},"filePathRelative":"db/redis/db-redis-x-performance.md","localizedDate":"2022年9月9日","autoDesc":true}');export{e as data};
