import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.236288ec.js";const p={},e=t(`<h1 id="\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#\u6B7B\u9501" aria-hidden="true">#</a> \u6B7B\u9501</h1><h2 id="_1-\u4EC0\u4E48\u662F\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u6B7B\u9501" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u6B7B\u9501</h2><p>\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u88AB\u963B\u585E\uFF0C\u4ED6\u4EEC\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u5168\u90E8\u90FD\u5728\u7B49\u5F85\u67D0\u4E2A\u8D44\u6E90\u88AB\u91CA\u653E\u3002\u7531\u4E8E\u7EBF\u7A0B\u88AB\u65E0\u9650\u671F\u7684\u963B\u585E\uFF0C\u56E0\u6B64\u7A0B\u5E8F\u4E0D\u53EF\u80FD\u6B63\u5E38\u7EC8\u6B62</p><h3 id="_1-1-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6848\u4F8B" aria-hidden="true">#</a> 1.1 \u6848\u4F8B</h3><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u7EBF\u7A0BA\u6301\u6709\u8D44\u6E902\uFF0C\u7EBF\u7A0BB\u6301\u6709\u8D44\u6E90 1,\u4ED6\u4EEC\u540C\u65F6\u90FD\u60F3\u7533\u8BF7\u5BF9\u65B9\u7684\u8D44\u6E90\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u5C31\u4F1A\u4E92\u76F8\u7B49\u5F85\u800C\u8FDB\u5165\u6B7B\u9501\u72B6\u6001</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190919215922075.png" alt="image-20190919215922075" loading="lazy"></p><h3 id="_1-2-\u6848\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6848\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> 1.2 \u6848\u4F8B\u4EE3\u7801</h3><p>\u901A\u8FC7\u4F8B\u5B50\u6765\u6A21\u62DF\u7EBF\u7A0B\u6B7B\u9501</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D44\u6E90 1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D44\u6E90 2</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7EBF\u7A0B 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7EBF\u7A0B 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Thread</span><span class="token punctuation">[</span>\u7EBF\u7A0B <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>main<span class="token punctuation">]</span>get resource1
<span class="token class-name">Thread</span><span class="token punctuation">[</span>\u7EBF\u7A0B <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>main<span class="token punctuation">]</span>get resource2
<span class="token class-name">Thread</span><span class="token punctuation">[</span>\u7EBF\u7A0B <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>main<span class="token punctuation">]</span>waiting get resource2
<span class="token class-name">Thread</span><span class="token punctuation">[</span>\u7EBF\u7A0B <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>main<span class="token punctuation">]</span>waiting get resource1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EBF\u7A0BA \u901A\u8FC7synchronized\uFF08resource1\uFF09 \u83B7\u5F97 resource1 \u7684\u76D1\u89C6\u5668\u9501\uFF0C\u7136\u540E\u901A\u8FC7<code> Thread.sleep(1000);</code>\u8BA9\u7EBF\u7A0B A \u4F11\u7720 1s \u4E3A\u7684\u662F\u8BA9\u7EBF\u7A0B B \u5F97\u5230\u6267\u884C\u7136\u540E\u83B7\u53D6\u5230 resource2 \u7684\u76D1\u89C6\u5668\u9501\u3002\u7EBF\u7A0B A \u548C\u7EBF\u7A0B B \u4F11\u7720\u7ED3\u675F\u4E86\u90FD\u5F00\u59CB\u4F01\u56FE\u8BF7\u6C42\u83B7\u53D6\u5BF9\u65B9\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u5C31\u4F1A\u9677\u5165\u4E92\u76F8\u7B49\u5F85\u7684\u72B6\u6001\uFF0C\u8FD9\u4E5F\u5C31\u4EA7\u751F\u4E86\u6B7B\u9501\u3002\u4E0A\u9762\u7684\u4F8B\u5B50\u7B26\u5408\u4EA7\u751F\u6B7B\u9501\u7684\u56DB\u4E2A\u5FC5\u8981\u6761\u4EF6\u3002</p><h2 id="_2-\u6B7B\u9501\u4EA7\u751F\u7684\u56DB\u4E2A\u5FC5\u5907\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u6B7B\u9501\u4EA7\u751F\u7684\u56DB\u4E2A\u5FC5\u5907\u6761\u4EF6" aria-hidden="true">#</a> 2. \u6B7B\u9501\u4EA7\u751F\u7684\u56DB\u4E2A\u5FC5\u5907\u6761\u4EF6</h2><ol><li><p>\u4E92\u65A5\u6761\u4EF6\uFF1A\u8BE5\u8D44\u6E90\u4EFB\u610F\u4E00\u4E2A\u65F6\u523B<strong>\u53EA\u7531\u4E00\u4E2A\u7EBF\u7A0B\u5360\u7528</strong></p></li><li><p>\u8BF7\u6C42\u4E0E\u4FDD\u6301\u6761\u4EF6\uFF1A\u4E00\u4E2A\u8FDB\u7A0B\u56E0\u8BF7\u6C42\u8D44\u6E90\u800C\u963B\u585E\u65F6\uFF0C\u5BF9<strong>\u5DF2\u83B7\u5F97\u7684\u8D44\u6E90\u4FDD\u6301\u4E0D\u653E</strong></p></li><li><p>\u4E0D\u53EF\u5265\u593A\u6761\u4EF6\uFF1A\u7EBF\u7A0B\u5DF2\u83B7\u53D6\u7684\u8D44\u6E90\u5728\u672A\u4F7F\u7528\u5B8C\u4E4B\u524D<strong>\u4E0D\u80FD\u88AB\u5176\u4ED6\u7EBF\u7A0B\u5F3A\u884C\u5265\u593A</strong>\uFF0C\u53EA\u6709\u81EA\u5DF1\u4F7F\u7528\u5B8C\u6BD5\u540E\u624D\u91CA\u653E\u8D44\u6E90</p></li><li><p>\u5FAA\u73AF\u7B49\u5F85\u6761\u4EF6\uFF1A\u82E5\u5E72\u8FDB\u7A0B\u4E4B\u95F4\u5F62\u6210\u4E00\u79CD<strong>\u5934\u5C3E\u76F8\u63A5\u7684\u5FAA\u73AF\u7B49\u5F85\u8D44\u6E90\u5173\u7CFB</strong></p></li></ol><h2 id="_3-\u5982\u4F55\u907F\u514D\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#_3-\u5982\u4F55\u907F\u514D\u6B7B\u9501" aria-hidden="true">#</a> 3. \u5982\u4F55\u907F\u514D\u6B7B\u9501</h2><p>\u6211\u4EEC\u53EA\u8981\u7834\u574F\u4EA7\u751F\u6B7B\u9501\u7684\u56DB\u4E2A\u6761\u4EF6\u4E2D\u7684\u4E00\u4E2A\u5C31\u53EF\u4EE5</p><h3 id="_3-1-\u7834\u574F\u4E92\u65A5\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7834\u574F\u4E92\u65A5\u6761\u4EF6" aria-hidden="true">#</a> 3.1 \u7834\u574F\u4E92\u65A5\u6761\u4EF6</h3><p>\u8FD9\u4E2A\u6761\u4EF6\u6211\u4EEC\u6CA1\u6709\u529E\u6CD5\u7834\u574F\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7528\u9501\u672C\u6765\u5C31\u662F\u60F3\u8BA9\u4ED6\u4EEC\u4E92\u65A5\u7684\uFF08\u4E34\u754C\u8D44\u6E90\u9700\u8981\u4E92\u65A5\u8BBF\u95EE\uFF09</p><h3 id="_3-2-\u7834\u574F\u8BF7\u6C42\u4E0E\u4FDD\u6301\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7834\u574F\u8BF7\u6C42\u4E0E\u4FDD\u6301\u6761\u4EF6" aria-hidden="true">#</a> 3.2 \u7834\u574F\u8BF7\u6C42\u4E0E\u4FDD\u6301\u6761\u4EF6</h3><p>\u4E00\u6B21\u6027\u7533\u8BF7\u6240\u6709\u7684\u8D44\u6E90</p><h3 id="_3-3-\u7834\u574F\u4E0D\u53EF\u5265\u593A\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7834\u574F\u4E0D\u53EF\u5265\u593A\u6761\u4EF6" aria-hidden="true">#</a> 3.3 \u7834\u574F\u4E0D\u53EF\u5265\u593A\u6761\u4EF6</h3><p>\u5360\u7528\u90E8\u5206\u8D44\u6E90\u7684\u7EBF\u7A0B\u8FDB\u4E00\u6B65\u7533\u8BF7\u5176\u4ED6\u8D44\u6E90\u65F6\uFF0C\u5982\u679C\u7533\u8BF7\u4E0D\u5230\uFF0C\u53EF\u4EE5<strong>\u4E3B\u52A8\u91CA\u653E\u4ED6\u5360\u6709\u7684\u8D44\u6E90</strong></p><h3 id="_3-4-\u7834\u574F\u5FAA\u73AF\u7B49\u5F85\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-4-\u7834\u574F\u5FAA\u73AF\u7B49\u5F85\u6761\u4EF6" aria-hidden="true">#</a> 3.4 \u7834\u574F\u5FAA\u73AF\u7B49\u5F85\u6761\u4EF6</h3><p>\u9760\u6309\u987A\u5E8F\u7533\u8BF7\u8D44\u6E90\u6765\u9884\u9632\uFF0C\u6309\u67D0\u4E00\u987A\u5E8F\u7533\u8BF7\u8D44\u6E90\uFF0C\u91CA\u653E\u8D44\u6E90\u5219\u53CD\u5E8F\u91CA\u653E\u3002\u7834\u574F\u5FAA\u73AF\u7B49\u5F85\u6761\u4EF6</p>`,24),c=[e];function o(u,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","java-thread-y-deadlock2.html.vue"]]);export{k as default};