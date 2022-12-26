import{_ as a,W as e,X as i,Y as n,$ as t,a0 as l,D as o}from"./framework-0cf5f349.js";const p={},c=l(`<h1 id="es详解-索引-索引管理详解" tabindex="-1"><a class="header-anchor" href="#es详解-索引-索引管理详解" aria-hidden="true">#</a> ES详解 - 索引：索引管理详解</h1><blockquote><p>了解基本使用后，我们从索引操作的角度看看如何对索引进行管理。</p></blockquote><h2 id="_1-索引管理的引入" tabindex="-1"><a class="header-anchor" href="#_1-索引管理的引入" aria-hidden="true">#</a> 1. 索引管理的引入</h2><p>我们在前文中增加文档时，如下的语句会动态创建一个customer的index：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;John Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而这个index实际上已经自动创建了它里面的字段（name）的类型。我们不妨看下它自动创建的mapping：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么如果我们需要对这个建立索引的过程做更多的控制：比如想要确保这个索引有数量适中的主分片，并且在我们索引任何数据之前，分析器和映射已经被建立好。那么就会引入两点：第一个<strong>禁止自动创建索引</strong>，第二个是<strong>手动创建索引</strong>。</p><ul><li>禁止自动创建索引</li></ul><p>可以通过在 config/elasticsearch.yml 的每个节点下添加下面的配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>action.auto_create_index: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动创建索引就是接下来文章的内容。</p><h2 id="_2-索引的格式" tabindex="-1"><a class="header-anchor" href="#_2-索引的格式" aria-hidden="true">#</a> 2. 索引的格式</h2><p>在请求体里面传入设置或类型映射，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /my_index
<span class="token punctuation">{</span>
    <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. any settings <span class="token punctuation">..</span>. <span class="token punctuation">}</span>,
    <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. any properties <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>settings</strong>: 用来设置分片,副本等配置信息</li><li><strong>mappings</strong>: 字段映射，类型等 <ul><li><strong>properties</strong>: 由于type在后续版本中会被Deprecated, 所以无需被type嵌套</li></ul></li></ul><h2 id="_3-索引管理操作" tabindex="-1"><a class="header-anchor" href="#_3-索引管理操作" aria-hidden="true">#</a> 3. 索引管理操作</h2><blockquote><p>我们通过kibana的devtool来学习索引的管理操作。</p></blockquote><h3 id="_3-1-创建索引" tabindex="-1"><a class="header-anchor" href="#_3-1-创建索引" aria-hidden="true">#</a> 3.1 创建索引</h3><p>我们创建一个user 索引<code>test-index-users</code>，其中包含三个属性：name，age, remarks; 存储在一个分片一个副本上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /test-index-users
<span class="token punctuation">{</span>
  <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;number_of_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
		<span class="token string">&quot;number_of_replicas&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>,
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
        <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;keyword&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
            <span class="token string">&quot;ignore_above&quot;</span><span class="token builtin class-name">:</span> <span class="token number">256</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;remarks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804220348876.png" alt="image-20220804220348876" tabindex="0" loading="lazy"><figcaption>image-20220804220348876</figcaption></figure><ul><li><strong>插入测试数据</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>post /test-index-users/_doc
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;zhangsan&quot;</span>,
  <span class="token string">&quot;age&quot;</span>:18,
  <span class="token string">&quot;remarks&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;hello world&quot;</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804220620567.png" alt="image-20220804220620567" tabindex="0" loading="lazy"><figcaption>image-20220804220620567</figcaption></figure><ul><li>查看数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /test-index-users/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804220806547.png" alt="image-20220804220806547" tabindex="0" loading="lazy"><figcaption>image-20220804220806547</figcaption></figure><ul><li>我们再<strong>测试下不匹配的数据类型</strong>(age)：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /test-index-users/_doc
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test user&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;error_age&quot;</span>,
  <span class="token string">&quot;remarks&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;hello eeee&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到无法类型不匹配的错误：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804220942671.png" alt="image-20220804220942671" tabindex="0" loading="lazy"><figcaption>image-20220804220942671</figcaption></figure><h3 id="_3-2-修改索引" tabindex="-1"><a class="header-anchor" href="#_3-2-修改索引" aria-hidden="true">#</a> 3.2 修改索引</h3><p>查看刚才的索引,<code>curl &#39;localhost:9200/_cat/indices?v&#39; | grep users</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yellow <span class="token function">open</span> test-index-users                          LSaIB57XSC6uVtGQHoPYxQ <span class="token number">1</span> <span class="token number">1</span>     <span class="token number">1</span>    <span class="token number">0</span>   <span class="token number">4</span>.4kb   <span class="token number">4</span>.4kb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们注意到刚创建的索引的状态是yellow的，因为我测试的环境是单点环境，无法创建副本，但是在上述<code>number_of_replicas</code>配置中设置了副本数是1； 所以在这个时候我们需要修改索引的配置。</p><p>修改副本数量为0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /test-index-users/_settings
<span class="token punctuation">{</span>
  <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number_of_replicas&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221203156.png" alt="image-20220804221203156" tabindex="0" loading="lazy"><figcaption>image-20220804221203156</figcaption></figure><p>再次查看状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>green <span class="token function">open</span> test-index-users                          LSaIB57XSC6uVtGQHoPYxQ <span class="token number">1</span> <span class="token number">1</span>     <span class="token number">1</span>    <span class="token number">0</span>   <span class="token number">4</span>.4kb   <span class="token number">4</span>.4kb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-打开-关闭索引" tabindex="-1"><a class="header-anchor" href="#_3-3-打开-关闭索引" aria-hidden="true">#</a> 3.3 打开/关闭索引</h3><ul><li><p><strong>关闭索引</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /test-index-users/_close
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>一旦索引被关闭，那么这个索引只能显示元数据信息，<strong>不能够进行读写操作</strong>。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221359572.png" alt="image-20220804221359572" tabindex="0" loading="lazy"><figcaption>image-20220804221359572</figcaption></figure><p>当关闭以后，再插入数据时：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221616801.png" alt="image-20220804221616801" tabindex="0" loading="lazy"><figcaption>image-20220804221616801</figcaption></figure><ul><li><strong>打开索引</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221707621.png" alt="image-20220804221707621" tabindex="0" loading="lazy"><figcaption>image-20220804221707621</figcaption></figure><p>打开后又可以重新写数据了</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221723173.png" alt="image-20220804221723173" tabindex="0" loading="lazy"><figcaption>image-20220804221723173</figcaption></figure><h3 id="_3-4-删除索引" tabindex="-1"><a class="header-anchor" href="#_3-4-删除索引" aria-hidden="true">#</a> 3.4 删除索引</h3><p>最后我们将创建的test-index-users删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DELETE /test-index-users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804221813596.png" alt="image-20220804221813596" tabindex="0" loading="lazy"><figcaption>image-20220804221813596</figcaption></figure><h3 id="_3-5-查看索引" tabindex="-1"><a class="header-anchor" href="#_3-5-查看索引" aria-hidden="true">#</a> 3.5 查看索引</h3><p>由于test-index-users被删除，所以我们看下之前bank的索引的信息</p><ul><li><strong>mapping</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804222117904.png" alt="image-20220804222117904" tabindex="0" loading="lazy"><figcaption>image-20220804222117904</figcaption></figure><ul><li><strong>settings</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804222140597.png" alt="image-20220804222140597" tabindex="0" loading="lazy"><figcaption>image-20220804222140597</figcaption></figure><h2 id="_4-kibana管理索引" tabindex="-1"><a class="header-anchor" href="#_4-kibana管理索引" aria-hidden="true">#</a> 4. Kibana管理索引</h2><p>在Kibana如下路径，我们可以查看和管理索引</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220804222249667.png" alt="image-20220804222249667" tabindex="0" loading="lazy"><figcaption>image-20220804222249667</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,68),u={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-x-index-mapping.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"ES详解 - 索引：索引管理详解",-1);function d(g,m){const s=o("ExternalLinkIcon");return e(),i("div",null,[c,n("p",null,[n("a",u,[r,t(s)])])])}const v=a(p,[["render",d],["__file","elasticsearch-x-index-mapping.html.vue"]]);export{v as default};
