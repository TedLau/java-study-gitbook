import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as t,a as n,b as e,d as o,e as c,r as l}from"./app.e9ed1342.js";const r={},i=o(`<h1 id="\u9996\u5C4F\u4F18\u5316\u4E4B-vue\u8DEF\u7531\u61D2\u52A0\u8F7D\u548C\u4F7F\u7528\u61D2\u52A0\u8F7Dprefetch\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9996\u5C4F\u4F18\u5316\u4E4B-vue\u8DEF\u7531\u61D2\u52A0\u8F7D\u548C\u4F7F\u7528\u61D2\u52A0\u8F7Dprefetch\u95EE\u9898" aria-hidden="true">#</a> \u9996\u5C4F\u4F18\u5316\u4E4B-vue\u8DEF\u7531\u61D2\u52A0\u8F7D\u548C\u4F7F\u7528\u61D2\u52A0\u8F7Dprefetch\u95EE\u9898</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u4F7F\u7528\u8DEF\u7531\u61D2\u52A0\u8F7D\u4EE5\u540E webpack \u6253\u5305\u53EF\u4EE5\u6839\u636E\u9875\u9762\u5212\u5206\u6765\u751F\u6210\u6587\u4EF6\uFF0C\u6839\u636E\u8DEF\u7531\u7684\u4E0D\u540C\u6765\u52A0\u8F7D\u6587\u4EF6\uFF0C\u89E3\u51B3\u4E86\u9996\u9875\u4E00\u6B21\u6027\u52A0\u8F7D\u6587\u4EF6\u8FC7\u5927\u5BFC\u81F4\u6253\u5F00\u8FC7\u6162\u7684\u95EE\u9898\u3002</p><h2 id="_2-\u4F18\u5316\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316\u64CD\u4F5C" aria-hidden="true">#</a> 2. \u4F18\u5316\u64CD\u4F5C</h2><h3 id="_2-1-\u5E38\u89C4\u5F15\u5165\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5E38\u89C4\u5F15\u5165\u9875\u9762" aria-hidden="true">#</a> 2.1 \u5E38\u89C4\u5F15\u5165\u9875\u9762</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5E38\u89C4\u5F15\u5165\u9875\u9762</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./views/Home.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u5177\u4F53\u4F18\u5316-\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5177\u4F53\u4F18\u5316-\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> 2.2 \u5177\u4F53\u4F18\u5316\uFF1A\u5B9E\u73B0\u61D2\u52A0\u8F7D</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/home.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">pageA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/homeA.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">pageB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/homeB.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;pageA&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> pageA<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;APage&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;pageB&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> pageB<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;BPage&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4E00\u4E0B\u6253\u5305\u4E4B\u540E\u7684\u6548\u679C\uFF0C\u4F1A\u770B\u5230\u6253\u5305\u51FA\u4E86\u591A\u4E2Achunk\u5F02\u6B65\u5757\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200326162422455.png" alt="image-20200326162422455" loading="lazy"></p><h3 id="_2-3-\u5C06chunk\u6253\u5305\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5C06chunk\u6253\u5305\u7EC4" aria-hidden="true">#</a> 2.3 \u5C06chunk\u6253\u5305\u7EC4</h3><p>\u4E0D\u6307\u5B9A\u5206\u7EC4\uFF0Cchunk name\u4F1A\u968F\u673A\u751F\u6210\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B83\u6307\u5B9A\u6210chunk name\u6253\u5305\u5230\u4E00\u8D77</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5F15\u5165\u9875\u9762</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/Home.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u628A\u9875\u9762\u8FDB\u884C\u5206\u7EC4 home-group</span>
<span class="token keyword">const</span> <span class="token function-variable function">pageA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;home-group&quot; */</span> <span class="token string">&#39;./views/homeA.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">pageB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;home-group&quot; */</span> <span class="token string">&#39;./views/homeB.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;pageA&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> pageA<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;APage&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;pageB&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> pageB<span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;BPage&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200326162720918.png" alt="image-20200326162720918" loading="lazy"></p><h2 id="_3-\u89E3\u51B3prefetch\u63D0\u524D\u52A0\u8F7D\u5BFC\u81F4\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3prefetch\u63D0\u524D\u52A0\u8F7D\u5BFC\u81F4\u95EE\u9898" aria-hidden="true">#</a> 3. \u89E3\u51B3prefetch\u63D0\u524D\u52A0\u8F7D\u5BFC\u81F4\u95EE\u9898</h2><p>\u5B9E\u9645\u5728\u6D4F\u89C8\u5668\u91CC\u8BBF\u95EE\u9996\u9875\u7684\u65F6\u5019\u4E5F\u52A0\u8F7D\u4E86\u5176\u4ED6chunk\u7684\u5757\uFF0C\u662Fprefetch \u63D0\u524D\u52A0\u8F7D\u7684\u539F\u56E0\u3002\u7406\u8BBA\u4E0A\u8FD9\u4E2A\u662F\u4E0D\u5F71\u54CD\u52A0\u8F7D\u901F\u5EA6\u7684\uFF0C\u4F46\u662F\u6211\u5B9E\u9645\u6D4B\u8BD5\u8FD8\u662F\u4F1A\u5F71\u54CD\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200326163849626.png" alt="image-20200326163849626" loading="lazy"></p><p>\u8FD9\u91CC\u8BF7\u6C42\u4E861016\u4E2A\u8BF7\u6C42</p><h3 id="_3-1-\u901A\u8FC7\u5728vue-config-js\u91CC\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6Eprefetch" tabindex="-1"><a class="header-anchor" href="#_3-1-\u901A\u8FC7\u5728vue-config-js\u91CC\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6Eprefetch" aria-hidden="true">#</a> 3.1 \u901A\u8FC7\u5728vue.config.js\u91CC\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6EPrefetch</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u79FB\u9664 prefetch \u63D2\u4EF6</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;prefetch&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6216\u8005</span>
    <span class="token comment">// \u4FEE\u6539\u5B83\u7684\u9009\u9879\uFF1A</span>
    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;prefetch&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">options</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist <span class="token operator">=</span> options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">myasyncRoute(.)+?\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> options
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,21),u={href:"https://www.jianshu.com/p/45fe75d059e2",target:"_blank",rel:"noopener noreferrer"},k=c("vue\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF0Cvue\u9996\u5C4F\u52A0\u8F7D\u6162\u548C\u4F7F\u7528\u61D2\u52A0\u8F7Dprefetch\u95EE\u9898\uFF0C\u65B0\u589E\u7EC4\u4EF6\u61D2\u52A0\u8F7D");function d(m,v){const s=l("ExternalLinkIcon");return p(),t("div",null,[i,n("p",null,[n("a",u,[k,e(s)])])])}const y=a(r,[["render",d],["__file","fe-vue-route-lazy-loading.html.vue"]]);export{y as default};
