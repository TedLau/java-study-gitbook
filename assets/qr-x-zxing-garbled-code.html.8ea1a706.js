import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,e as c,d as p,r as i}from"./app.942cb21b.js";const r={},l=c(`<h1 id="\u4F7F\u7528zxing\u751F\u6210\u4E8C\u7EF4\u7801\u4E71\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528zxing\u751F\u6210\u4E8C\u7EF4\u7801\u4E71\u7801\u95EE\u9898" aria-hidden="true">#</a> \u4F7F\u7528zxing\u751F\u6210\u4E8C\u7EF4\u7801\u4E71\u7801\u95EE\u9898</h1><p>\u76F4\u63A5\u4E0A\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token class-name">QRCodeWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QRCodeWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// \u89E3\u51B3\u4E2D\u6587\u4E71\u7801\u95EE\u9898</span>
        <span class="token class-name">String</span> contentCharset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO-8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BitMatrix</span> matrix <span class="token operator">=</span> writer<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>contentCharset<span class="token punctuation">,</span> format<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,4),u={href:"https://www.jianshu.com/p/532832542d91",target:"_blank",rel:"noopener noreferrer"},d=p("\u751F\u6210\u53EF\u9632\u6B62\u4E2D\u6587\u4E71\u7801\u7684\u4E8C\u7EF4\u7801\uFF08zxing-android-embeded\uFF09");function k(m,h){const a=i("ExternalLinkIcon");return e(),t("div",null,[l,n("p",null,[n("a",u,[d,o(a)])])])}const g=s(r,[["render",k],["__file","qr-x-zxing-garbled-code.html.vue"]]);export{g as default};