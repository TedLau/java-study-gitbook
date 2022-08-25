import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mall\u4E2D\u9000\u8D27\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#mall\u4E2D\u9000\u8D27\u8BBE\u8BA1" aria-hidden="true">#</a> mall\u4E2D\u9000\u8D27\u8BBE\u8BA1</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u9000\u8D27\u4E5F\u662F\u5728\u5546\u57CE\u7CFB\u7EDF\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C</p><h2 id="_2-\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u6D41\u7A0B" aria-hidden="true">#</a> 2. \u6D41\u7A0B</h2><h3 id="_2-1-\u5BA2\u6237\u7AEF\u53D1\u8D77\u9000\u8D27\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5BA2\u6237\u7AEF\u53D1\u8D77\u9000\u8D27\u7533\u8BF7" aria-hidden="true">#</a> 2.1 \u5BA2\u6237\u7AEF\u53D1\u8D77\u9000\u8D27\u7533\u8BF7</h3><p>\u9000\u8D27\u662F\u9488\u5BF9\u6BCF\u4E00\u4EF6\u5546\u54C1\u7684\u3001\uFF08\u6BCF\u4E00\u4EF6\u5546\u54C1\u5728\u4E0B\u5355\u65F6\uFF0C\u8981\u8BA1\u7B97\u5355\u4EF6\u5546\u54C1\u5B9E\u9645\u652F\u4ED8\u7684\u91D1\u989D\uFF0C\u5728\u9000\u8D27\u65F6\u624D\u77E5\u9053\u6BCF\u4EF6\u5546\u54C1\u5E94\u8BE5\u9000\u591A\u5C11\u91D1\u989D\uFF09</p><p>\u9000\u8D27\u7533\u8BF7\u7684\u53C2\u6570</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OmsOrderReturnApply</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u8BA2\u5355id&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Long</span> orderId<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u6536\u8D27\u5730\u5740\u8868id&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Long</span> companyAddressId<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u9000\u8D27\u5546\u54C1id&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Long</span> productId<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u8BA2\u5355\u7F16\u53F7&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> orderSn<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u7533\u8BF7\u65F6\u95F4&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u4F1A\u5458\u7528\u6237\u540D&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> memberUsername<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u9000\u6B3E\u91D1\u989D&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> returnAmount<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u9000\u8D27\u4EBA\u59D3\u540D&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> returnName<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u9000\u8D27\u4EBA\u7535\u8BDD&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> returnPhone<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u7533\u8BF7\u72B6\u6001\uFF1A0-&gt;\u5F85\u5904\u7406\uFF1B1-&gt;\u9000\u8D27\u4E2D\uFF1B2-&gt;\u5DF2\u5B8C\u6210\uFF1B3-&gt;\u5DF2\u62D2\u7EDD&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5904\u7406\u65F6\u95F4&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Date</span> handleTime<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u56FE\u7247&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> productPic<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u540D\u79F0&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> productName<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u54C1\u724C&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> productBrand<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u9500\u552E\u5C5E\u6027\uFF1A\u989C\u8272\uFF1A\u7EA2\u8272\uFF1B\u5C3A\u7801\uFF1Axl;&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> productAttr<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u9000\u8D27\u6570\u91CF&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Integer</span> productCount<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u5355\u4EF7&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> productPrice<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5546\u54C1\u5B9E\u9645\u652F\u4ED8\u5355\u4EF7&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> productRealPrice<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u539F\u56E0&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> reason<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u63CF\u8FF0&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u51ED\u8BC1\u56FE\u7247\uFF0C\u4EE5\u9017\u53F7\u9694\u5F00&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> proofPics<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5904\u7406\u5907\u6CE8&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> handleNote<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u5904\u7406\u4EBA\u5458&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> handleMan<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u6536\u8D27\u4EBA&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> receiveMan<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u6536\u8D27\u65F6\u95F4&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">Date</span> receiveTime<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\u6536\u8D27\u5907\u6CE8&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> receiveNote<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u8D77\u9000\u8D27\u4EE3\u7801</p><p>\u5E76\u6CA1\u6709\u68C0\u9A8C\u662F\u5426\u5DF2\u7533\u8BF7</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">OmsOrderReturnApplyParam</span> returnApply<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">OmsOrderReturnApply</span> realApply <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OmsOrderReturnApply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>returnApply<span class="token punctuation">,</span>realApply<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        realApply<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        realApply<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> returnApplyMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>realApply<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
var C2Mall______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C2-mall\u4E2D\u9000\u8D27\u8BBE\u8BA1.html.vue"]]);
export { C2Mall______html as default };
