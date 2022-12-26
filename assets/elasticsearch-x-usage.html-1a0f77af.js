import{_ as i,W as l,X as o,Y as n,Z as s,$ as e,a0 as t,D as c}from"./framework-0cf5f349.js";const p={},u=t(`<h1 id="es详解-入门-查询和聚合的基础使用" tabindex="-1"><a class="header-anchor" href="#es详解-入门-查询和聚合的基础使用" aria-hidden="true">#</a> ES详解 - 入门：查询和聚合的基础使用</h1><blockquote><p>安装完ElasticSearch 和 Kibana后，为了快速上手，我们通过官网GitHub提供的一个数据进行入门学习，主要包括<strong>查询数据</strong>和<strong>聚合数据</strong>。</p></blockquote><h2 id="_1-入门-从索引文档开始" tabindex="-1"><a class="header-anchor" href="#_1-入门-从索引文档开始" aria-hidden="true">#</a> 1. 入门：从索引文档开始</h2><ul><li>索引一个文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;John Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便测试，我们使用kibana的dev tool来进行学习测试：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803213004882.png" alt="image-20220803213004882" tabindex="0" loading="lazy"><figcaption>image-20220803213004882</figcaption></figure><p>查询刚才插入的文档</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803213228322.png" alt="image-20220803213228322" tabindex="0" loading="lazy"><figcaption>image-20220803213228322</figcaption></figure><h2 id="_2-学习准备-批量索引文档" tabindex="-1"><a class="header-anchor" href="#_2-学习准备-批量索引文档" aria-hidden="true">#</a> 2. 学习准备：批量索引文档</h2><blockquote><p>ES 还提供了批量操作，比如这里我们可以使用批量操作来插入一些数据，供我们在后面学习使用。</p></blockquote><p>使用批量来批处理文档操作比单独提交请求要快得多，因为它减少了网络往返。</p><ul><li><strong>下载测试数据</strong></li></ul>`,13),r={href:"https://raw.githubusercontent.com/elastic/elasticsearch/master/docs/src/test/resources/accounts.json",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>最新版本已经改了，可以在7.11以前的 版本上下载</p></blockquote><p>数据的格式如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">16623</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bradshaw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mckenzie&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;244 Columbus Place&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Euron&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bradshawmckenzie@euron.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hobucken&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CO&quot;</span>
<span class="token punctuation">}</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>批量插入数据</strong></li></ul><p>将accounts.json拷贝至指定目录，我这里放在<code>/opt/</code>下面,</p><p>然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-XPOST</span> <span class="token string">&quot;localhost:9200/bank/_bulk?pretty&amp;refresh&quot;</span> --data-binary <span class="token string">&quot;@/opt/accounts.json&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>查看状态</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>elasticsearch@pdai-centos root<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token string">&quot;localhost:9200/_cat/indices?v=true&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> bank
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>  <span class="token number">1524</span>  <span class="token number">100</span>  <span class="token number">1524</span>    <span class="token number">0</span>     <span class="token number">0</span>   119k      <span class="token number">0</span> --:--:-- --:--:-- --:--:--  124k
yellow <span class="token function">open</span>   bank                            yq3eSlAWRMO2Td0Sl769rQ   <span class="token number">1</span>   <span class="token number">1</span>       <span class="token number">1000</span>            <span class="token number">0</span>    <span class="token number">379</span>.2kb        <span class="token number">379</span>.2kb
<span class="token punctuation">[</span>elasticsearch@pdai-centos root<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-查询数据" tabindex="-1"><a class="header-anchor" href="#_3-查询数据" aria-hidden="true">#</a> 3. 查询数据</h2><blockquote><p>我们通过kibana来进行查询测试。</p></blockquote><h3 id="_3-1-查询所有" tabindex="-1"><a class="header-anchor" href="#_3-1-查询所有" aria-hidden="true">#</a> 3.1 查询所有</h3><p><code>match_all</code>表示查询所有的数据，<code>sort</code>即按照什么字段排序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;account_number&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803215859516.png" alt="image-20220803215859516" tabindex="0" loading="lazy"><figcaption>image-20220803215859516</figcaption></figure><p>相关字段解释</p><ul><li><code>took</code> – Elasticsearch运行查询所花费的时间（以毫秒为单位）</li><li><code>timed_out</code> –搜索请求是否超时</li><li><code>_shards</code> - 搜索了多少个碎片，以及成功，失败或跳过了多少个碎片的细目分类。</li><li><code>max_score</code> – 找到的最相关文档的分数</li><li><code>hits.total.value</code> - 找到了多少个匹配的文档</li><li><code>hits.sort</code> - 文档的排序位置（不按相关性得分排序时）</li><li><code>hits._score</code> - 文档的相关性得分（使用match_all时不适用）</li></ul><h3 id="_3-2-分页查询-from-size" tabindex="-1"><a class="header-anchor" href="#_3-2-分页查询-from-size" aria-hidden="true">#</a> 3.2 分页查询(from+size)</h3><p>本质上就是from和size两个字段</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;account_number&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803220845044.png" alt="image-20220803220845044" tabindex="0" loading="lazy"><figcaption>image-20220803220845044</figcaption></figure><h3 id="_3-3-指定字段查询-match" tabindex="-1"><a class="header-anchor" href="#_3-3-指定字段查询-match" aria-hidden="true">#</a> 3.3 指定字段查询：match</h3><p>如果要在字段中搜索特定字词，可以使用<code>match</code>; 如下语句将查询address 字段中包含 mill 或者 lane的数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill lane&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803221133118.png" alt="image-20220803221133118" tabindex="0" loading="lazy"><figcaption>image-20220803221133118</figcaption></figure><p>（由于ES底层是按照分词索引的，所以上述查询结果是address 字段中包含 mill 或者 lane的数据）</p><h3 id="_3-4-查询段落匹配-match-phrase" tabindex="-1"><a class="header-anchor" href="#_3-4-查询段落匹配-match-phrase" aria-hidden="true">#</a> 3.4 查询段落匹配：match_phrase</h3><p>如果我们希望查询的条件是 address字段中包含 &quot;mill lane&quot;，则可以使用<code>match_phrase</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_phrase&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill lane&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803221339869.png" alt="image-20220803221339869" tabindex="0" loading="lazy"><figcaption>image-20220803221339869</figcaption></figure><h3 id="_3-5-多条件查询-bool" tabindex="-1"><a class="header-anchor" href="#_3-5-多条件查询-bool" aria-hidden="true">#</a> 3.5 多条件查询: bool</h3><p>如果要构造更复杂的查询，可以使用<code>bool</code>查询来组合多个查询条件。</p><p>例如，以下请求在bank索引中搜索40岁客户的帐户，但不包括居住在爱达荷州（ID）的任何人</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;must_not&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ID&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803221459333.png" alt="image-20220803221459333" tabindex="0" loading="lazy"><figcaption>image-20220803221459333</figcaption></figure><p><code>must</code>, <code>should</code>, <code>must_not</code> 和 <code>filter</code> 都是<code>bool</code>查询的子句。那么<code>filter</code>和上述<code>query</code>子句有啥区别呢？</p><h3 id="_3-6-查询条件-query-or-filter" tabindex="-1"><a class="header-anchor" href="#_3-6-查询条件-query-or-filter" aria-hidden="true">#</a> 3.6 查询条件：query or filter</h3><p>先看下如下查询, 在<code>bool</code>查询的子句中同时具备query/must 和 filter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ND&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803221713932.png" alt="image-20220803221713932" tabindex="0" loading="lazy"><figcaption>image-20220803221713932</figcaption></figure><p>两者都可以写查询条件，而且语法也类似。区别在于，<strong>query 上下文的条件是用来给文档打分的，匹配越好 _score 越高；filter 的条件只产生两种结果：符合与不符合，后者被过滤掉</strong>。</p><p>所以，我们进一步看只包含filter的查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果，显然无_score</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803221901642.png" alt="image-20220803221901642" tabindex="0" loading="lazy"><figcaption>image-20220803221901642</figcaption></figure><h2 id="_4-聚合查询-aggregation" tabindex="-1"><a class="header-anchor" href="#_4-聚合查询-aggregation" aria-hidden="true">#</a> 4. 聚合查询：Aggregation</h2><blockquote><p>我们知道SQL中有group by，在ES中它叫Aggregation，即聚合运算。</p></blockquote><h3 id="_4-1-简单聚合" tabindex="-1"><a class="header-anchor" href="#_4-1-简单聚合" aria-hidden="true">#</a> 4.1 简单聚合</h3><p>比如我们希望计算出account每个州的统计数量， 使用<code>aggs</code>关键字对<code>state</code>字段聚合，被聚合的字段无需对分词统计，所以使用<code>state.keyword</code>对整个字段统计</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803222042785.png" alt="image-20220803222042785" tabindex="0" loading="lazy"><figcaption>image-20220803222042785</figcaption></figure><p>因为无需返回条件的具体数据, 所以设置size=0，返回hits为空。</p><p><code>doc_count</code>表示bucket中每个州的数据条数。</p><h3 id="_4-2-嵌套聚合" tabindex="-1"><a class="header-anchor" href="#_4-2-嵌套聚合" aria-hidden="true">#</a> 4.2 嵌套聚合</h3><p>ES还可以处理个聚合条件的嵌套。</p><p>比如承接上个例子， 计算每个州的平均结余。涉及到的就是在对state分组的基础上，嵌套计算avg(balance):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803222301927.png" alt="image-20220803222301927" tabindex="0" loading="lazy"><figcaption>image-20220803222301927</figcaption></figure><h3 id="_4-3-对聚合结果排序" tabindex="-1"><a class="header-anchor" href="#_4-3-对聚合结果排序" aria-hidden="true">#</a> 4.3 对聚合结果排序</h3><p>可以通过在aggs中对嵌套聚合的结果进行排序</p><p>比如承接上个例子， 对嵌套计算出的avg(balance)，这里是average_balance，进行排序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>,
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220803222408317.png" alt="image-20220803222408317" tabindex="0" loading="lazy"><figcaption>image-20220803222408317</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,73),m={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"ES详解 - 入门：查询和聚合的基础使用",-1);function v(g,q){const a=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[s("数据是index为bank，accounts.json "),n("a",r,[s("下载地址"),e(a)]),s("（如果你无法下载，也可以clone ES的"),n("a",d,[s("官方仓库 "),e(a)]),s("，然后进入/docs/src/test/resources/accounts.json目录获取）")]),b,n("p",null,[n("a",m,[k,e(a)])])])}const f=i(p,[["render",v],["__file","elasticsearch-x-usage.html.vue"]]);export{f as default};
