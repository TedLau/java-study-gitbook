import{_ as e,W as i,X as a,a0 as s}from"./framework-0cf5f349.js";const d={},r=s(`<h1 id="redis大数据查询还不如直接查数据库" tabindex="-1"><a class="header-anchor" href="#redis大数据查询还不如直接查数据库" aria-hidden="true">#</a> redis大数据查询还不如直接查数据库</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>我们字典表数据会根据 字典名 存redis 作为缓存使用，但是字典并不单单有我们系统中新增的。还包括<code>国标 </code>的字典表。如 民族代码，职业代码，行政区划代码。这些国标字典表是单独存表的（我们以T_开头）</p><p>为了保持逻辑一致，我们在service 层通过表前缀 <code>T_ </code> 区分是系统字典表还是 国标字典表。转成统一的数据结构返回。其中会将字典表的数据存储在redis 中</p><h2 id="_2-问题" tabindex="-1"><a class="header-anchor" href="#_2-问题" aria-hidden="true">#</a> 2. 问题</h2><p>在一次系统测试过程中发现业务接口响应时间长。排查发现是redis 查询 <code>全国行政区划代码</code> 慢，</p><ul><li>redis查询 <code>全国行政区划代码</code> 花费：200ms</li><li>直接查询数据库 花费10ms</li></ul><h2 id="_3-排查定位" tabindex="-1"><a class="header-anchor" href="#_3-排查定位" aria-hidden="true">#</a> 3. 排查定位</h2><h3 id="_3-1-redis-慢日志" tabindex="-1"><a class="header-anchor" href="#_3-1-redis-慢日志" aria-hidden="true">#</a> 3.1 redis 慢日志</h3><p>通过查询慢日志定位redis 中哪些key 操作的慢</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SLOWLOG get <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628173939773.png" alt="image-20220628173939773" tabindex="0" loading="lazy"><figcaption>image-20220628173939773</figcaption></figure><p>我们可以看到行政区划代码redis 中查询花费了10ms，再加上网络传输和数据格式组装就更久了</p><h3 id="_3-2-redis-查询bigkeys" tabindex="-1"><a class="header-anchor" href="#_3-2-redis-查询bigkeys" aria-hidden="true">#</a> 3.2 redis 查询bigkeys</h3><p>查询bigkeys 信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli -h 192.168.0.1 -p 6379 -a &quot;xxxx&quot; --bigkeys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628174234793.png" alt="image-20220628174234793" tabindex="0" loading="lazy"><figcaption>image-20220628174234793</figcaption></figure><p>我们可以看到行政区划就占了0.6M 大小。已经非常大了</p><h2 id="_4-解决方案" tabindex="-1"><a class="header-anchor" href="#_4-解决方案" aria-hidden="true">#</a> 4. 解决方案</h2><p>根据实际业务需求，行政区划代码其实基本不变，我们可以将他放在前端或者服务端内存中做一级缓存就可以了。（ps：redis 属于二级缓存）</p><h2 id="_5-大bigkeys-怎么办" tabindex="-1"><a class="header-anchor" href="#_5-大bigkeys-怎么办" aria-hidden="true">#</a> 5. 大bigkeys 怎么办</h2><p>这里有两点可以优化：</p><ul><li>业务应用尽量避免写入 bigkey</li><li>如果你使用的 Redis 是 4.0 以上版本，用 UNLINK 命令替代 DEL，此命令可以把释放 key 内存的操作，放到后台线程中去执行，从而降低对 Redis 的影响</li><li>如果你使用的 Redis 是 6.0 以上版本，可以开启 lazy-free 机制（lazyfree-lazy-user-del = yes），在执行 DEL 命令时，释放内存也会放到后台线程中执行</li></ul><p>但即便可以使用方案 2，我也不建议你在实例中存入 bigkey。</p><p>这是因为 bigkey 在很多场景下，依旧会产生性能问题。例如，bigkey 在分片集群模式下，对于数据的迁移也会有性能影响，以及我后面即将讲到的数据过期、数据淘汰、透明大页，都会受到 bigkey 的影响。</p>`,25),n=[r];function l(c,t){return i(),a("div",null,n)}const o=e(d,[["render",l],["__file","redis-bigdata-slow-problem.html.vue"]]);export{o as default};
