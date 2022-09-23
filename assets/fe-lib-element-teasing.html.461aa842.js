import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a,b as n,d as s,e as p,r as l}from"./app.942cb21b.js";const c={},i=a("h1",{id:"element-\u5410\u69FD\u70B9",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#element-\u5410\u69FD\u70B9","aria-hidden":"true"},"#"),s(" Element-\u5410\u69FD\u70B9")],-1),d=a("h2",{id:"_1-\u5173\u4E8E-el-radio-group-\u589E\u52A0\u5782\u76F4\u6392\u5217\u7684\u5EFA\u8BAE",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-\u5173\u4E8E-el-radio-group-\u589E\u52A0\u5782\u76F4\u6392\u5217\u7684\u5EFA\u8BAE","aria-hidden":"true"},"#"),s(" 1. \u5173\u4E8E el-radio-group \u589E\u52A0\u5782\u76F4\u6392\u5217\u7684\u5EFA\u8BAE")],-1),k={href:"https://github.com/ElemeFE/element/issues/3037",target:"_blank",rel:"noopener noreferrer"},u=s("\u5173\u4E8E el-radio-group \u589E\u52A0\u5782\u76F4\u6392\u5217\u7684\u5EFA\u8BAE"),h=p(`<blockquote><p>\u5B98\u65B9\u56DE\u590D\uFF1A\u6CA1\u6709\u592A\u591A\u4EBA\u6709\u8FD9\u4E2A\u9700\u6C42\uFF0C\u53EF\u80FD\u6682\u65F6\u6CA1\u6709\u8FD9\u4E2A\u8BA1\u5212\uFF0C\u4F60\u53EF\u4EE5\u7528CSS\u5904\u7406\u3002</p></blockquote><p>\u8FD9\u4E48\u7B80\u5355\u7684\u9700\u6C42\uFF0C\u786C\u662F\u4E0D\u52A0\u3002\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u3002\u4E00\u5927\u5806\u8BC4\u8BBA\u8981\u6C42\u52A0\uFF0C\u89C6\u800C\u4E0D\u89C1\u3002</p><p>2017 \u5E74\u63D0\u7684\uFF0C\u73B0\u5728\u90FD2022\u5E74\u4E86\uFF0C\u8FD8\u6CA1\u89E3\u51B3</p><h3 id="_1-1-\u89E3\u51B3\u65B9\u6848-\u589E\u52A0div" tabindex="-1"><a class="header-anchor" href="#_1-1-\u89E3\u51B3\u65B9\u6848-\u589E\u52A0div" aria-hidden="true">#</a> 1.1 \u89E3\u51B3\u65B9\u6848: \u589E\u52A0div</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>group v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;selectMod&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;vertical&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span> index <span class="token keyword">of</span> <span class="token number">3</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>button label<span class="token operator">=</span><span class="token string">&quot;\u7B2C\u4E00\u5217&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>group<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u53EF\u641C\u7D22cascader-\u7EA7\u8054\u9009\u62E9\u5668\u4F7F\u7528\u65F6-\u591A\u6B21\u641C\u7D22\u9519\u8BEF\u7684\u5185\u5BB9-\u70B9\u51FB\u4E0B\u62C9\u65E0\u5339\u914D\u6570\u636E\u533A\u57DF-\u4F1A-\u5BFC\u81F4-\u9875\u9762\u5361\u6B7B" tabindex="-1"><a class="header-anchor" href="#_2-\u53EF\u641C\u7D22cascader-\u7EA7\u8054\u9009\u62E9\u5668\u4F7F\u7528\u65F6-\u591A\u6B21\u641C\u7D22\u9519\u8BEF\u7684\u5185\u5BB9-\u70B9\u51FB\u4E0B\u62C9\u65E0\u5339\u914D\u6570\u636E\u533A\u57DF-\u4F1A-\u5BFC\u81F4-\u9875\u9762\u5361\u6B7B" aria-hidden="true">#</a> 2. \u53EF\u641C\u7D22Cascader \u7EA7\u8054\u9009\u62E9\u5668\u4F7F\u7528\u65F6 \u591A\u6B21\u641C\u7D22\u9519\u8BEF\u7684\u5185\u5BB9\uFF0C\u70B9\u51FB\u4E0B\u62C9\u65E0\u5339\u914D\u6570\u636E\u533A\u57DF \u4F1A \u5BFC\u81F4 \u9875\u9762\u5361\u6B7B</h2>`,6),m={href:"https://github.com/ElemeFE/element/issues/22006#top",target:"_blank",rel:"noopener noreferrer"},_=s("Bug Report] \u53EF\u641C\u7D22Cascader \u7EA7\u8054\u9009\u62E9\u5668\u4F7F\u7528\u65F6 \u591A\u6B21\u641C\u7D22\u9519\u8BEF\u7684\u5185\u5BB9\uFF0C\u70B9\u51FB\u4E0B\u62C9\u65E0\u5339\u914D\u6570\u636E\u533A\u57DF \u4F1A \u5BFC\u81F4 \u9875\u9762\u5361\u6B7B");function v(g,b){const e=l("ExternalLinkIcon");return t(),r("div",null,[i,d,a("p",null,[a("a",k,[u,n(e)])]),h,a("p",null,[a("a",m,[_,n(e)])])])}const q=o(c,[["render",v],["__file","fe-lib-element-teasing.html.vue"]]);export{q as default};