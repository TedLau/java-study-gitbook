import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as s,b as o,d as t,e as c,r}from"./app.e9ed1342.js";const l={},i=t(`<h1 id="solr\u641C\u7D22\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#solr\u641C\u7D22\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49" aria-hidden="true">#</a> Solr\u641C\u7D22\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728Solr\u68C0\u7D22\u4E2D\uFF0C\u4E0B\u5217\u5B57\u7B26\u6709\u7279\u6B8A\u542B\u4E49\uFF0C\u9700 \u8F6C\u4E49\u5904\u7406\uFF0C\u5426\u5219\u67E5\u8BE2\u4F1A\u62A5\u67E5\u8BE2\u9519\u8BEF\u3002</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> \u2013 &amp;&amp; || ! ( ) { } [ ] ^ \u201D ~ * ? : \\ 
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u800C\u6211\u4EEC\u7684\u67E5\u8BE2\u6761\u4EF6\u4E2D\uFF0C\u5305\u542B\u4E0A\u8FF0\u7279\u6027\u5B57\u7B26\u3002</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><p>Solr \u5B98\u65B9\u63D0\u4F9B\u7684\u8F6C\u4E49</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ClientUtils</span><span class="token punctuation">.</span><span class="token function">escapeQueryChars</span><span class="token punctuation">(</span><span class="token string">&quot;solr search+ \u2013 &amp;&amp; || ! ( ) { } [ ] ^ \u201D ~ * ? :&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-1-\u8F6C\u4E49\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8F6C\u4E49\u6E90\u7801" aria-hidden="true">#</a> 2.1 \u8F6C\u4E49\u6E90\u7801</h3><p>solr \u5DE5\u5177\u7C7B\u7279\u6027\u5B57\u7B26\u8F6C\u4E49\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>svn<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>org<span class="token operator">/</span>repos<span class="token operator">/</span>asf<span class="token operator">/</span>lucene<span class="token operator">/</span>dev<span class="token operator">/</span>trunk<span class="token operator">/</span>solr<span class="token operator">/</span>solrj<span class="token operator">/</span>src<span class="token operator">/</span>java<span class="token operator">/</span>org<span class="token operator">/</span>apache<span class="token operator">/</span>solr<span class="token operator">/</span>client<span class="token operator">/</span>solrj<span class="token operator">/</span>util<span class="token operator">/</span><span class="token class-name">ClientUtils</span><span class="token punctuation">.</span>java
 
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">escapeQueryChars</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// These characters are part of the query syntax and must be escaped</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;\\\\&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;!&#39;</span>  <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;:&#39;</span>
        <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;^&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;[&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;]&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;\\&quot;&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;{&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;}&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;~&#39;</span>
        <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;|&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;&amp;&#39;</span>  <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;;&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;/&#39;</span>
        <span class="token operator">||</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isWhitespace</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,12),k={href:"https://blog.csdn.net/zhouzhiwengang/article/details/111028381",target:"_blank",rel:"noopener noreferrer"},u=c("Solr \u7279\u6B8A\u5B57\u7B26\u5904\u7406");function d(h,v){const a=r("ExternalLinkIcon");return p(),e("div",null,[i,s("p",null,[s("a",k,[u,o(a)])])])}const f=n(l,[["render",d],["__file","solr-i-special-characters.html.vue"]]);export{f as default};
