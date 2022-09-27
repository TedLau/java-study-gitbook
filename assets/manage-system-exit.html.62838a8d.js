import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as t,e as c,d as s,r as i}from"./app.18e75ed9.js";const l={},u=c(`<h1 id="\u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA\u529F\u80FD-\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA\u529F\u80FD-\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u8FDB\u7A0B\u4F18\u96C5\u9000\u51FA\u529F\u80FD&amp;\u5B9E\u73B0\u601D\u8DEF</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u5728linux \u73AF\u5883\u7ECF\u5E38\u4F7F\u7528 kill -9 PID \u6765\u5173\u95ED\u8FDB\u7A0B\u3002\u4F46\u662Fkill -9 pid \u7684\u65B9\u5F0F\u662F\u5F3A\u5236\u5C06\u67D0\u4E2A\u8FDB\u7A0B\u6740\u6389\u3002\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u66B4\u529B\uFF0C\u76F8\u5F53\u4E8E\u7A81\u7136\u65AD\u7535\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4</p><ul><li>\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u5C1A\u672A\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E2D\uFF0C\u5BFC\u81F4\u6570\u636E\u4E22\u5931</li><li>\u6B63\u5728\u8FDB\u884C\u6587\u4EF6\u7684write\u64CD\u4F5C\uFF0C\u6CA1\u6709\u66F4\u65B0\u5B8C\u6210\uFF0C\u7A81\u7136\u9000\u51FA\uFF0C\u5BFC\u81F4\u6587\u4EF6\u635F\u574F\uFF1B</li><li>\u7EBF\u7A0B\u7684\u6D88\u606F\u961F\u5217\u4E2D\u5C1A\u6709\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u6D88\u606F\u8FD8\u6CA1\u6765\u5F97\u53CA\u5904\u7406\uFF0C\u5BFC\u81F4\u8BF7\u6C42\u6D88\u606F\u4E22\u5931\uFF1B</li></ul><h2 id="_2-java\u4F18\u96C5\u9000\u51FA-\u7406\u8BBA" tabindex="-1"><a class="header-anchor" href="#_2-java\u4F18\u96C5\u9000\u51FA-\u7406\u8BBA" aria-hidden="true">#</a> 2. JAVA\u4F18\u96C5\u9000\u51FA\uFF08\u7406\u8BBA\uFF09</h2><p>Java\u7684\u4F18\u96C5\u505C\u673A\u901A\u5E38\u901A\u8FC7\u6CE8\u518CJDK\u7684ShutdownHook\u6765\u5B9E\u73B0\uFF0C\u5F53\u7CFB\u7EDF\u63A5\u6536\u5230\u9000\u51FA\u6307\u4EE4\u540E\uFF0C\u9996\u5148\u6807\u8BB0\u7CFB\u7EDF\u5904\u4E8E\u9000\u51FA\u72B6\u6001\uFF0C\u4E0D\u518D\u63A5\u6536\u65B0\u7684\u6D88\u606F\uFF0C\u7136\u540E\u5C06\u79EF\u538B\u7684\u6D88\u606F\u5904\u7406\u5B8C\uFF0C\u6700\u540E\u8C03\u7528\u8D44\u6E90\u56DE\u6536\u63A5\u53E3\u5C06\u8D44\u6E90\u9500\u6BC1\uFF0C\u6700\u540E\u5404\u7EBF\u7A0B\u9000\u51FA\u6267\u884C\u3002</p><p>\u901A\u5E38\u4F18\u96C5\u9000\u51FA\u9700\u8981\u6709\u8D85\u65F6\u63A7\u5236\u673A\u5236\uFF0C\u4F8B\u598230S\uFF0C\u5982\u679C\u5230\u8FBE\u8D85\u65F6\u65F6\u95F4\u4ECD\u7136\u6CA1\u6709\u5B8C\u6210\u9000\u51FA\u524D\u7684\u8D44\u6E90\u56DE\u6536\u7B49\u64CD\u4F5C\uFF0C\u5219\u7531\u505C\u673A\u811A\u672C\u76F4\u63A5\u8C03\u7528kill-9 pid\uFF0C\u5F3A\u5236\u9000\u51FA\u3002</p><h2 id="_3-\u9879\u76EE\u4F18\u96C5\u9000\u51FA\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#_3-\u9879\u76EE\u4F18\u96C5\u9000\u51FA\u5B9E\u6218" aria-hidden="true">#</a> 3. \u9879\u76EE\u4F18\u96C5\u9000\u51FA\u5B9E\u6218</h2><h3 id="_3-1-\u4F7F\u7528kill-pid-\u5173\u95ED\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4F7F\u7528kill-pid-\u5173\u95ED\u8FDB\u7A0B" aria-hidden="true">#</a> 3.1 \u4F7F\u7528kill PID \u5173\u95ED\u8FDB\u7A0B</h3><p>\u9879\u76EE\u5173\u95ED\u65F6\u4F7F\u7528kill PID \u5173\u95ED\u8FDB\u7A0B\uFF0C\u800C\u4E0D\u662Fkill -9 pid</p><blockquote><ul><li><code>kill pid</code>\u7684\u4F5C\u7528\u662F\u5411\u8FDB\u7A0B\u53F7\u4E3Apid\u7684\u8FDB\u7A0B\u53D1\u9001<code>SIGTERM</code>\uFF08\u8FD9\u662Fkill\u9ED8\u8BA4\u53D1\u9001\u7684\u4FE1\u53F7\uFF09\uFF0C\u8BE5\u4FE1\u53F7\u662F\u4E00\u4E2A\u7ED3\u675F\u8FDB\u7A0B\u7684\u4FE1\u53F7\u4E14<strong>\u53EF\u4EE5\u88AB\u5E94\u7528\u7A0B\u5E8F\u6355\u83B7</strong></li><li><code>kill -9 pid</code>\u5219\u662F\u5411\u8FDB\u7A0B\u53F7\u4E3Apid\u7684\u8FDB\u7A0B\u53D1\u9001<code>SIGKILL</code>\uFF08\u8BE5\u4FE1\u53F7\u7684\u7F16\u53F7\u4E3A9\uFF09\uFF0C\u4ECE\u672C\u6587\u4E0A\u9762\u7684\u8BF4\u660E\u53EF\u77E5\uFF0CSIGKILL\u65E2\u4E0D\u80FD\u88AB\u5E94\u7528\u7A0B\u5E8F\u6355\u83B7\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u963B\u585E\u6216\u5FFD\u7565\uFF0C\u5176\u52A8\u4F5C\u662F\u7ACB\u5373\u7ED3\u675F\u6307\u5B9A\u8FDB\u7A0B\u3002\u901A\u4FD7\u5730\u8BF4\uFF0C\u5E94\u7528\u7A0B\u5E8F\u6839\u672C\u65E0\u6CD5\u201C\u611F\u77E5\u201DSIGKILL\u4FE1\u53F7\uFF0C\u5B83\u5728\u5B8C\u5168\u65E0\u51C6\u5907\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u88AB\u6536\u5230SIGKILL\u4FE1\u53F7\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7ED9\u5E72\u6389\u4E86\uFF0C\u663E\u7136\uFF0C\u5728\u8FD9\u79CD\u201C\u66B4\u529B\u201D\u60C5\u51B5\u4E0B\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5B8C\u5168\u6CA1\u6709\u91CA\u653E\u5F53\u524D\u5360\u7528\u8D44\u6E90\u7684\u673A\u4F1A\u3002\u4E8B\u5B9E\u4E0A\uFF0CSIGKILL\u4FE1\u53F7\u662F\u76F4\u63A5\u53D1\u7ED9init\u8FDB\u7A0B\u7684\uFF0C\u5B83\u6536\u5230\u8BE5\u4FE1\u53F7\u540E\uFF0C\u8D1F\u8D23\u7EC8\u6B62pid\u6307\u5B9A\u7684\u8FDB\u7A0B\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF08\u5982\u8FDB\u7A0B\u5DF2\u7ECFhang\u6B7B\uFF0C\u65E0\u6CD5\u54CD\u5E94\u6B63\u5E38\u4FE1\u53F7\uFF09\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528kill -9\u6765\u7ED3\u675F\u8FDB\u7A0B\u3002</li></ul></blockquote><h3 id="_3-2-\u76D1\u542C\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-2-\u76D1\u542C\u9000\u51FA" aria-hidden="true">#</a> 3.2 \u76D1\u542C\u9000\u51FA</h3><p>\u6211\u4EECspring\u9879\u76EE\uFF0C\u53EF\u4EE5\u91C7\u7528spring \u7684 @PreDestroy \u6CE8\u89E3\u6765\u76D1\u542C\u9000\u51FA\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * \u786E\u4FDD\u5E94\u7528\u9000\u51FA\u65F6\u80FD\u5173\u95ED\u540E\u53F0\u7EBF\u7A0B
 *
 * <span class="token keyword">@author</span> fardu
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShutdownManager</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;sys-user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PreDestroy</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">shutdownAsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u505C\u6B62\u5F02\u6B65\u6267\u884C\u4EFB\u52A1
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">shutdownAsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;====\u5173\u95ED\u540E\u53F0\u4EFB\u52A1\u4EFB\u52A1\u7EBF\u7A0B\u6C60====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u505C\u6B62\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#_3-3-\u505C\u6B62\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> 3.3 \u505C\u6B62\u7EBF\u7A0B\u6C60</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * \u505C\u6B62\u7EBF\u7A0B\u6C60
     * \u5148\u4F7F\u7528shutdown, \u505C\u6B62\u63A5\u6536\u65B0\u4EFB\u52A1\u5E76\u5C1D\u8BD5\u5B8C\u6210\u6240\u6709\u5DF2\u5B58\u5728\u4EFB\u52A1.
     * \u5982\u679C\u8D85\u65F6, \u5219\u8C03\u7528shutdownNow, \u53D6\u6D88\u5728workQueue\u4E2DPending\u7684\u4EFB\u52A1,\u5E76\u4E2D\u65AD\u6240\u6709\u963B\u585E\u51FD\u6570.
     * \u5982\u679C\u4ECD\u4EBA\u8D85\u6642\uFF0C\u5247\u5F37\u5236\u9000\u51FA.
     * \u53E6\u5BF9\u5728shutdown\u65F6\u7EBF\u7A0B\u672C\u8EAB\u88AB\u8C03\u7528\u4E2D\u65AD\u505A\u4E86\u5904\u7406.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">shutdownAndAwaitTermination</span><span class="token punctuation">(</span><span class="token class-name">ExecutorService</span> pool<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pool <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">isShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">awaitTermination</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    pool<span class="token punctuation">.</span><span class="token function">shutdownNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">awaitTermination</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Pool did not terminate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ie<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u505C\u6B62\u7EBF\u7A0B\u6C60\u5F02\u5E38,{}&quot;</span><span class="token punctuation">,</span>ie<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ie<span class="token punctuation">)</span><span class="token punctuation">;</span>
                pool<span class="token punctuation">.</span><span class="token function">shutdownNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,17),d=s("(java \u4F18\u96C5\u9000\u51FA_Netty\u4F18\u96C5\u9000\u51FA\u673A\u5236\u548C\u539F\u7406)["),r={href:"https://blog.csdn.net/weixin_33196106/article/details/114217150",target:"_blank",rel:"noopener noreferrer"},k=s("https://blog.csdn.net/weixin_33196106/article/details/114217150"),v=s("]"),m={href:"https://juejin.cn/post/6844904121057673223",target:"_blank",rel:"noopener noreferrer"},b=s("\u8FDB\u7A0B\u5982\u4F55\u4F18\u96C5\u9000\u51FA\uFF1F");function h(f,g){const a=i("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[d,n("a",r,[k,t(a)]),v]),n("p",null,[n("a",m,[b,t(a)])])])}const y=e(l,[["render",h],["__file","manage-system-exit.html.vue"]]);export{y as default};