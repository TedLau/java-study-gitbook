import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as t,d as a,e as s,r as l}from"./app.80b5c814.js";const c={},r=a(`<h1 id="vuerouter-history\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#vuerouter-history\u6A21\u5F0F" aria-hidden="true">#</a> VueRouter History\u6A21\u5F0F</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p><code>vue-router</code> \u9ED8\u8BA4 hash \u6A21\u5F0F \u2014\u2014 \u4F7F\u7528 URL \u7684 hash \u6765\u6A21\u62DF\u4E00\u4E2A\u5B8C\u6574\u7684 URL\uFF0C<strong>\u4E8E\u662F\u5F53 URL \u6539\u53D8\u65F6\uFF0C\u9875\u9762\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D</strong>\u3002</p><p>\u5982\u679C\u4E0D\u60F3\u8981\u5F88\u4E11\u7684 hash\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u8DEF\u7531\u7684 <strong>history \u6A21\u5F0F</strong>\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u5145\u5206\u5229\u7528 <code>history.pushState</code> API \u6765\u5B8C\u6210 URL \u8DF3\u8F6C\u800C\u65E0\u987B\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u4F7F\u7528 history \u6A21\u5F0F\u65F6\uFF0CURL \u5C31\u50CF\u6B63\u5E38\u7684 url\uFF0C\u4F8B\u5982 <code>http://yoursite.com/user/id</code></p><h3 id="_1-1-\u672A\u6B63\u786E\u914D\u7F6E\u5BFC\u81F4404\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-1-\u672A\u6B63\u786E\u914D\u7F6E\u5BFC\u81F4404\u7684\u95EE\u9898" aria-hidden="true">#</a> 1.1 \u672A\u6B63\u786E\u914D\u7F6E\u5BFC\u81F4404\u7684\u95EE\u9898</h3><p>history \u867D\u597D\uFF0C\u4F46\u662F\u672A\u6B63\u786E\u914D\u7F6E\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762404\u3002</p><p><strong>\u89E3\u51B3\u65B9\u6848</strong>\uFF1A</p><p>\u5728\u8BBF\u95EE\u5230404\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5B9A\u4F4D\u5230\u9996\u9875\uFF0C\u4E5F\u5C31\u662Findex.html\u9875</p><h2 id="_2-\u524D\u7AEF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u524D\u7AEF\u914D\u7F6E" aria-hidden="true">#</a> 2. \u524D\u7AEF\u914D\u7F6E</h2><h3 id="_2-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 2.1 \u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B</h3>`,12),u=s("\u57DF\u540D\u6839\u76EE\u5F55\u4E0B\uFF0C\u5982\uFF1A"),d={href:"http://oursite.com",target:"_blank",rel:"noopener noreferrer"},k=s("http://oursite.com"),m=a(`<ol><li><p>\u8DEF\u7531\u914D\u7F6E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>export <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  mode<span class="token operator">:</span> &#39;history&#39;<span class="token punctuation">,</span> <span class="token comment">// \u53BB\u6389url\u4E2D\u7684#</span>
  scrollBehavior<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token operator">:</span> constantRoutes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E vue.config.js \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u90E8\u7F72\u751F\u4EA7\u73AF\u5883\u548C\u5F00\u53D1\u73AF\u5883\u4E0B\u7684URL\u3002\u5E94\u7528\u88AB\u90E8\u7F72\u5728\u4E00\u4E2A\u5B50\u8DEF\u5F84,\u9700\u6307\u5411\u76F8\u5BF9\u8DEF\u5F84\u6216\u7279\u5B9A\u8DEF\u5F84</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7528\u4E8E\u653E\u7F6E\u751F\u6210\u7684\u9759\u6001\u8D44\u6E90 (js\u3001css\u3001img\u3001fonts) \u7684\uFF1B\uFF08\u9879\u76EE\u6253\u5305\u4E4B\u540E\uFF0C\u9759\u6001\u8D44\u6E90\u4F1A\u653E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF09</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 2.2 \u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B</h3>`,2),v=s("\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B\u3002\u5982\uFF1A"),h={href:"http://oursite.com/myapp",target:"_blank",rel:"noopener noreferrer"},g=s("http://oursite.com/myapp"),b=a(`<ol><li><p>\u8DEF\u7531\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u6389url\u4E2D\u7684#</span>
  <span class="token comment">// \u5E94\u7528\u7684\u57FA\u8DEF\u5F84\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6574\u4E2A\u5355\u9875\u5E94\u7528\u670D\u52A1\u5728 /myapp/ \u4E0B\uFF0C\u7136\u540E base \u5C31\u5E94\u8BE5\u8BBE\u4E3A &quot;/myapp/&quot;</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">&#39;/myapp/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u589Ebase</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> constantRoutes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E vue.config.js \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u90E8\u7F72\u751F\u4EA7\u73AF\u5883\u548C\u5F00\u53D1\u73AF\u5883\u4E0B\u7684URL\u3002\u5E94\u7528\u88AB\u90E8\u7F72\u5728\u4E00\u4E2A\u5B50\u8DEF\u5F84,\u9700\u6307\u5411\u76F8\u5BF9\u8DEF\u5F84\u6216\u7279\u5B9A\u8DEF\u5F84</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6307\u5411\u76F8\u5BF9\u8DEF\u5F84</span>
  <span class="token comment">//publicPath: &quot;/myapp/&quot;, // \u56FA\u5B9A\u8DEF\u5F84</span>
  <span class="token comment">// \u7528\u4E8E\u653E\u7F6E\u751F\u6210\u7684\u9759\u6001\u8D44\u6E90 (js\u3001css\u3001img\u3001fonts) \u7684\uFF1B\uFF08\u9879\u76EE\u6253\u5305\u4E4B\u540E\uFF0C\u9759\u6001\u8D44\u6E90\u4F1A\u653E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF09</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u9700\u8981\u4FEE\u6539\u4E5F\u4E0D\u5F71\u54CD</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_3-\u540E\u7AEF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u540E\u7AEF\u914D\u7F6E" aria-hidden="true">#</a> 3. \u540E\u7AEF\u914D\u7F6E</h2><h3 id="_3-1-nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-1-nginx-\u914D\u7F6E" aria-hidden="true">#</a> 3.1 nginx \u914D\u7F6E</h3><h4 id="_3-1-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 3.1.1 \u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B</h4><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>	<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">9802</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   /home/myapp</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
						<span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 3.1.2 \u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B</h4><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>	<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">19801</span></span><span class="token punctuation">;</span>
        
        <span class="token directive"><span class="token keyword">location</span> /myapp</span> <span class="token punctuation">{</span>    
            <span class="token directive"><span class="token keyword">alias</span>   /home/myapp</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /myapp/index.html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-tomcat" tabindex="-1"><a class="header-anchor" href="#_3-2-tomcat" aria-hidden="true">#</a> 3.2 tomcat</h3><h4 id="_3-2-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 3.2.1 \u653E\u57DF\u540D\u6839\u76EE\u5F55\u4E0B</h4><p>tomcat\u57FA\u672C\u5F88\u5C11\u76F4\u63A5\u653E\u5728\u6839\u76EE\u5F55\u4E0B\u7684\u60C5\u51B5\uFF0C\u4E0D\u505A\u4ECB\u7ECD</p><h4 id="_3-2-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 3.2.2 \u653E\u57DF\u540D\u4E8C\u7EA7\u76EE\u5F55\u4E0B</h4><ol><li><p>\u524D\u7AEF\u5728public\u76EE\u5F55\u4E0B\u65B0\u589E\uFF1AWEB-INF/web.xml\u6587\u4EF6</p><p>\u5728\u524D\u7AEF\u518D\u6253\u5305\u8F93\u51FA\u7684\u6587\u4EF6\u4E2D\uFF0C\u8FD8\u9700\u8981\u65B0\u589EWEB-INF\u6587\u4EF6\u5939\uFF0C\u5E76\u5305\u542B\u4E00\u4E2Aweb.xml\u6587\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee/web-app_2_5.xsd<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scplatform<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>display-name</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>display-name</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>error-page</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>error-code</span><span class="token punctuation">&gt;</span></span>404<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>error-code</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">&gt;</span></span>/index.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>error-page</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210529154237920.png" alt="image-20210529154237920" loading="lazy"></p></li><li><p>\u6253\u5305\u4E4B\u540Edist(\u6253\u5305\u76EE\u5F55)\uFF0C\u4E0B\u4F1A\u65B0\u589EWEB-INF\u6587\u4EF6\u5939</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210529154331815.png" alt="image-20210529154331815" loading="lazy"></p></li><li><p>\u5C06\u6587\u4EF6\u653E\u5230tomcat\u7684webapps\u76EE\u5F55\u4E0B\u5373\u53EF</p></li></ol><h2 id="_4-\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 4. \u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898</h2><h3 id="_4-1-\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5-\u5237\u65B0\u9875\u9762\u540E404-\u9875\u9762\u5730\u5740\u53D8\u6210\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-1-\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5-\u5237\u65B0\u9875\u9762\u540E404-\u9875\u9762\u5730\u5740\u53D8\u6210\u6839\u76EE\u5F55" aria-hidden="true">#</a> 4.1 \u521D\u6B21\u8FDB\u5165\u53EF\u4EE5\uFF0C\u5237\u65B0\u9875\u9762\u540E404(\u9875\u9762\u5730\u5740\u53D8\u6210\u6839\u76EE\u5F55)</h3>`,14),y=s("\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5\uFF0C\u5237\u65B0\u9875\u9762\u540E404\uFF0C\u9875\u9762\u8DEF\u5F84\u7531\u539F\u6765\u7684\u4E8C\u7EA7\u76EE\u5F55"),_={href:"http://oursite.com/myapp%EF%BC%8C%E5%8F%98%E6%88%90%E6%A0%B9%E7%9B%AE%E5%BD%95http://oursite.com%E3%80%82%E6%89%80%E4%BB%A5%E6%97%A0%E6%B3%95%E5%88%B7%E6%96%B0",target:"_blank",rel:"noopener noreferrer"},x=s("http://oursite.com/myapp\uFF0C\u53D8\u6210\u6839\u76EE\u5F55http://oursite.com\u3002\u6240\u4EE5\u65E0\u6CD5\u5237\u65B0"),f=a('<p><strong>\u89E3\u51B3\u65B9\u6848</strong></p><p>\u597D\u597D\u68C0\u67E5\u914D\u7F6E\uFF01\u7279\u522B\u662F</p><ul><li>\u8DEF\u7531\u7684base \u662F\u5426\u914D\u7F6E\u6B63\u786E</li></ul><h3 id="_4-2-\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5-\u5237\u65B0\u9875\u9762\u540E404-\u9875\u9762\u5730\u5740\u4E0D\u53D8-\u5237\u65B0\u5C31\u662F\u4E0D\u884C" tabindex="-1"><a class="header-anchor" href="#_4-2-\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5-\u5237\u65B0\u9875\u9762\u540E404-\u9875\u9762\u5730\u5740\u4E0D\u53D8-\u5237\u65B0\u5C31\u662F\u4E0D\u884C" aria-hidden="true">#</a> 4.2 \u521D\u6B21\u8FDB\u5165\u53EF\u4EE5\uFF0C\u5237\u65B0\u9875\u9762\u540E404(\u9875\u9762\u5730\u5740\u4E0D\u53D8\uFF0C\u5237\u65B0\u5C31\u662F\u4E0D\u884C)</h3><p>\u521D\u6B21\u8FDB\u5165\u53EF\u4EE5\uFF0C\u5237\u65B0\u9875\u9762\u540E404(\u9875\u9762\u5730\u5740\u4E0D\u53D8\uFF0C\u5237\u65B0\u5C31\u662F\u4E0D\u884C)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210529142826597.png" alt="image-20210529142826597" loading="lazy"></p><p><strong>\u89E3\u51B3\u65B9\u6848</strong></p><p>\u597D\u597D\u68C0\u67E5\u914D\u7F6E\uFF01\u7279\u522B\u662F</p><ul><li>nginx\u914D\u7F6E\u662F\u5426\u6709\u52A0\uFF1Atry_files $uri $uri/ /myapp/index.html;</li></ul><h3 id="_4-3-\u9875\u9762\u8FDB\u5165\u540E\u76F8\u5173\u8D44\u6E90\u627E\u4E0D\u5230" tabindex="-1"><a class="header-anchor" href="#_4-3-\u9875\u9762\u8FDB\u5165\u540E\u76F8\u5173\u8D44\u6E90\u627E\u4E0D\u5230" aria-hidden="true">#</a> 4.3 \u9875\u9762\u8FDB\u5165\u540E\u76F8\u5173\u8D44\u6E90\u627E\u4E0D\u5230</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210529142019445.png" alt="image-20210529142019445" loading="lazy"></p><p>\u6211\u4EEC\u6307\u5B9A\u4E8C\u7EA7\u76EE\u5F55\u4E86\uFF0C\u4F46\u662F\u8D44\u6E90\u8FD8\u662F\u4E00\u7EA7\u76EE\u5F55\u7684\u5730\u5740\u3002</p><p><strong>\u89E3\u51B3\u65B9\u6848</strong></p><p>\u597D\u597D\u68C0\u67E5\u914D\u7F6E\uFF01\u7279\u522B\u662F</p><ul><li>\u914D\u7F6E vue.config.js \u6587\u4EF6\uFF0CpublicPath: &quot;./&quot;, //\u6307\u5411\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u6216\u8005\u5168\u8DEF\u5F84</li></ul>',15);function w(j,q){const e=l("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[u,n("a",d,[k,t(e)])]),m,n("p",null,[v,n("a",h,[g,t(e)])]),b,n("p",null,[y,n("a",_,[x,t(e)])]),f])}const B=p(c,[["render",w],["__file","vuerouter-history.html.vue"]]);export{B as default};
