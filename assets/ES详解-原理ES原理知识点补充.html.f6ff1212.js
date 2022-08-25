import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="es\u8BE6\u89E3-\u539F\u7406-es\u539F\u7406\u77E5\u8BC6\u70B9\u8865\u5145\u548C\u6574\u4F53\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#es\u8BE6\u89E3-\u539F\u7406-es\u539F\u7406\u77E5\u8BC6\u70B9\u8865\u5145\u548C\u6574\u4F53\u7ED3\u6784" aria-hidden="true">#</a> ES\u8BE6\u89E3 - \u539F\u7406\uFF1AES\u539F\u7406\u77E5\u8BC6\u70B9\u8865\u5145\u548C\u6574\u4F53\u7ED3\u6784</h1><blockquote><p>\u901A\u8FC7\u4E0A\u6587\u56FE\u89E3\u4E86\u89E3\u4E86ES\u6574\u4F53\u7684\u539F\u7406\u540E\uFF0C\u6211\u4EEC\u4FBF\u53EF\u4EE5\u57FA\u4E8E\u6B64\u77E5\u8BC6\u4F53\u7CFB\u4E0B\u68B3\u7406\u4E0BES\u7684\u6574\u4F53\u7ED3\u6784\u4EE5\u53CA\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\uFF0C\u8FD9\u5C06\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u7406\u89E3ElasticSearch\u7D22\u5F15\u6587\u6863\u548C\u641C\u7D22\u6587\u6863\u7684\u539F\u7406\u3002</p></blockquote><h2 id="_1-elasticsearch\u6574\u4F53\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-elasticsearch\u6574\u4F53\u7ED3\u6784" aria-hidden="true">#</a> 1. ElasticSearch\u6574\u4F53\u7ED3\u6784</h2><blockquote><p>\u901A\u8FC7\u4E0A\u6587\uFF0C\u5728\u901A\u8FC7\u56FE\u89E3\u4E86\u89E3\u4E86ES\u6574\u4F53\u7684\u539F\u7406\u540E\uFF0C\u6211\u4EEC\u68B3\u7406\u4E0BES\u7684\u6574\u4F53\u7ED3\u6784</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807223012609.png" alt="image-20220807223012609"></p><ul><li><p>\u4E00\u4E2A ES Index \u5728\u96C6\u7FA4\u6A21\u5F0F\u4E0B\uFF0C\u6709\u591A\u4E2A Node \uFF08\u8282\u70B9\uFF09\u7EC4\u6210\u3002\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F ES \u7684Instance (\u5B9E\u4F8B)\u3002</p></li><li><p>\u6BCF\u4E2A\u8282\u70B9\u4E0A\u4F1A\u6709\u591A\u4E2A shard \uFF08\u5206\u7247\uFF09\uFF0C P1 P2 \u662F\u4E3B\u5206\u7247, R1 R2 \u662F\u526F\u672C\u5206\u7247</p></li><li><p>\u6BCF\u4E2A\u5206\u7247\u4E0A\u5BF9\u5E94\u7740\u5C31\u662F\u4E00\u4E2A Lucene Index\uFF08\u5E95\u5C42\u7D22\u5F15\u6587\u4EF6\uFF09</p></li><li><p>Lucene Index \u662F\u4E00\u4E2A\u7EDF\u79F0</p><ul><li><p>\u7531\u591A\u4E2A Segment \uFF08\u6BB5\u6587\u4EF6\uFF0C\u5C31\u662F\u5012\u6392\u7D22\u5F15\uFF09\u7EC4\u6210\u3002\u6BCF\u4E2A\u6BB5\u6587\u4EF6\u5B58\u50A8\u7740\u5C31\u662F Doc \u6587\u6863\u3002</p></li><li><p>commit point\u8BB0\u5F55\u4E86\u6240\u6709 segments \u7684\u4FE1\u606F</p></li></ul></li></ul><h2 id="_2-\u8865\u5145-lucene\u7D22\u5F15\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-\u8865\u5145-lucene\u7D22\u5F15\u7ED3\u6784" aria-hidden="true">#</a> 2. \u8865\u5145:Lucene\u7D22\u5F15\u7ED3\u6784</h2><blockquote><p>\u4E0A\u56FE\u4E2DLucene\u7684\u7D22\u5F15\u7ED3\u6784\u4E2D\u6709\u54EA\u4E9B\u6587\u4EF6\u5462\uFF1F</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807223432842.png" alt="image-20220807223432842"></p>', 9);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\uFF08\u66F4\u591A\u6587\u4EF6\u7C7B\u578B\u53EF\u53C2\u8003");
const _hoisted_11 = {
  href: "http://lucene.apache.org/core/7_2_1/core/org/apache/lucene/codecs/lucene70/package-summary.html#package.description",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u8FD9\u91CC (opens new window)");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\uFF09");
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807223542331.png" alt="image-20220807223542331"></p><p>\u6587\u4EF6\u7684\u5173\u7CFB\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807223558097.png" alt="image-20220807223558097"></p><h2 id="_3-\u8865\u5145-lucene\u5904\u7406\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u8865\u5145-lucene\u5904\u7406\u6D41\u7A0B" aria-hidden="true">#</a> 3. \u8865\u5145:Lucene\u5904\u7406\u6D41\u7A0B</h2><blockquote><p>\u4E0A\u6587\u56FE\u89E3\u8FC7\u7A0B\uFF0C\u8FD8\u9700\u8981\u7406\u89E3Lucene\u5904\u7406\u6D41\u7A0B, \u8FD9\u5C06\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u7D22\u5F15\u6587\u6863\u548C\u641C\u7D22\u6587\u6863\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807223722391.png" alt="image-20220807223722391"></p><p>\u521B\u5EFA\u7D22\u5F15\u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u51C6\u5907\u5F85\u7D22\u5F15\u7684\u539F\u6587\u6863\uFF0C\u6570\u636E\u6765\u6E90\u53EF\u80FD\u662F\u6587\u4EF6\u3001\u6570\u636E\u5E93\u6216\u7F51\u7EDC</li><li>\u5BF9\u6587\u6863\u7684\u5185\u5BB9\u8FDB\u884C\u5206\u8BCD\u7EC4\u4EF6\u5904\u7406\uFF0C\u5F62\u6210\u4E00\u7CFB\u5217\u7684Term</li><li>\u7D22\u5F15\u7EC4\u4EF6\u5BF9\u6587\u6863\u548CTerm\u5904\u7406\uFF0C\u5F62\u6210\u5B57\u5178\u548C\u5012\u6392\u8868</li></ul><p>\u641C\u7D22\u7D22\u5F15\u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u5BF9\u67E5\u8BE2\u8BED\u53E5\u8FDB\u884C\u5206\u8BCD\u5904\u7406\uFF0C\u5F62\u6210\u4E00\u7CFB\u5217Term</li><li>\u6839\u636E\u5012\u6392\u7D22\u5F15\u8868\u67E5\u627E\u51FA\u5305\u542BTerm\u7684\u6587\u6863\uFF0C\u5E76\u8FDB\u884C\u5408\u5E76\u5F62\u6210\u7B26\u5408\u7ED3\u679C\u7684\u6587\u6863\u96C6</li><li>\u6BD4\u5BF9\u67E5\u8BE2\u8BED\u53E5\u4E0E\u5404\u4E2A\u6587\u6863\u76F8\u5173\u6027\u5F97\u5206\uFF0C\u5E76\u6309\u7167\u5F97\u5206\u9AD8\u4F4E\u8FD4\u56DE</li></ul><h2 id="_4-\u8865\u5145-elasticsearch\u5206\u6790\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u8865\u5145-elasticsearch\u5206\u6790\u5668" aria-hidden="true">#</a> 4. \u8865\u5145:ElasticSearch\u5206\u6790\u5668</h2><blockquote><p>\u4E0A\u56FE\u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u9879\u662F<strong>\u8BED\u6CD5\u5206\u6790/\u8BED\u8A00\u5904\u7406</strong>, \u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u8865\u5145ElasticSearch\u5206\u6790\u5668\u77E5\u8BC6\u70B9\u3002</p></blockquote><p>\u5206\u6790 \u5305\u542B\u4E0B\u9762\u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u9996\u5148\uFF0C\u5C06\u4E00\u5757\u6587\u672C\u5206\u6210\u9002\u5408\u4E8E\u5012\u6392\u7D22\u5F15\u7684\u72EC\u7ACB\u7684 \u8BCD\u6761 \uFF0C</li><li>\u4E4B\u540E\uFF0C\u5C06\u8FD9\u4E9B\u8BCD\u6761\u7EDF\u4E00\u5316\u4E3A\u6807\u51C6\u683C\u5F0F\u4EE5\u63D0\u9AD8\u5B83\u4EEC\u7684\u201C\u53EF\u641C\u7D22\u6027\u201D\uFF0C\u6216\u8005 recall</li></ul><p>\u5206\u6790\u5668\u6267\u884C\u4E0A\u9762\u7684\u5DE5\u4F5C\u3002 \u5206\u6790\u5668 \u5B9E\u9645\u4E0A\u662F\u5C06\u4E09\u4E2A\u529F\u80FD\u5C01\u88C5\u5230\u4E86\u4E00\u4E2A\u5305\u91CC\uFF1A</p><ul><li><strong>\u5B57\u7B26\u8FC7\u6EE4\u5668</strong> \u9996\u5148\uFF0C\u5B57\u7B26\u4E32\u6309\u987A\u5E8F\u901A\u8FC7\u6BCF\u4E2A \u5B57\u7B26\u8FC7\u6EE4\u5668 \u3002\u4ED6\u4EEC\u7684\u4EFB\u52A1\u662F\u5728\u5206\u8BCD\u524D\u6574\u7406\u5B57\u7B26\u4E32\u3002\u4E00\u4E2A\u5B57\u7B26\u8FC7\u6EE4\u5668\u53EF\u4EE5\u7528\u6765\u53BB\u6389HTML\uFF0C\u6216\u8005\u5C06 &amp; \u8F6C\u5316\u6210 and\u3002</li><li><strong>\u5206\u8BCD\u5668</strong> \u5176\u6B21\uFF0C\u5B57\u7B26\u4E32\u88AB \u5206\u8BCD\u5668 \u5206\u4E3A\u5355\u4E2A\u7684\u8BCD\u6761\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u5206\u8BCD\u5668\u9047\u5230\u7A7A\u683C\u548C\u6807\u70B9\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u5C06\u6587\u672C\u62C6\u5206\u6210\u8BCD\u6761\u3002</li><li><strong>Token \u8FC7\u6EE4\u5668</strong> \u6700\u540E\uFF0C\u8BCD\u6761\u6309\u987A\u5E8F\u901A\u8FC7\u6BCF\u4E2A token \u8FC7\u6EE4\u5668 \u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u6539\u53D8\u8BCD\u6761\uFF08\u4F8B\u5982\uFF0C\u5C0F\u5199\u5316 Quick \uFF09\uFF0C\u5220\u9664\u8BCD\u6761\uFF08\u4F8B\u5982\uFF0C \u50CF a\uFF0C and\uFF0C the \u7B49\u65E0\u7528\u8BCD\uFF09\uFF0C\u6216\u8005\u589E\u52A0\u8BCD\u6761\uFF08\u4F8B\u5982\uFF0C\u50CF jump \u548C leap \u8FD9\u79CD\u540C\u4E49\u8BCD\uFF09\u3002</li></ul><p>Elasticsearch\u63D0\u4F9B\u4E86\u5F00\u7BB1\u5373\u7528\u7684\u5B57\u7B26\u8FC7\u6EE4\u5668\u3001\u5206\u8BCD\u5668\u548Ctoken \u8FC7\u6EE4\u5668\u3002 \u8FD9\u4E9B\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5F62\u6210\u81EA\u5B9A\u4E49\u7684\u5206\u6790\u5668\u4EE5\u7528\u4E8E\u4E0D\u540C\u7684\u76EE\u7684\u3002</p><h3 id="_4-1-\u5185\u7F6E\u5206\u6790\u5668" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5185\u7F6E\u5206\u6790\u5668" aria-hidden="true">#</a> 4.1 \u5185\u7F6E\u5206\u6790\u5668</h3><p>Elasticsearch\u8FD8\u9644\u5E26\u4E86\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7684\u9884\u5305\u88C5\u7684\u5206\u6790\u5668\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u5217\u51FA\u6700\u91CD\u8981\u7684\u5206\u6790\u5668\u3002\u4E3A\u4E86\u8BC1\u660E\u5B83\u4EEC\u7684\u5DEE\u5F02\uFF0C\u6211\u4EEC\u770B\u770B\u6BCF\u4E2A\u5206\u6790\u5668\u4F1A\u4ECE\u4E0B\u9762\u7684\u5B57\u7B26\u4E32\u5F97\u5230\u54EA\u4E9B\u8BCD\u6761\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;Set the shape to semi-transparent by calling set_trans(5)&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u6807\u51C6\u5206\u6790\u5668</strong></li></ul><p>\u6807\u51C6\u5206\u6790\u5668\u662FElasticsearch\u9ED8\u8BA4\u4F7F\u7528\u7684\u5206\u6790\u5668\u3002\u5B83\u662F\u5206\u6790\u5404\u79CD\u8BED\u8A00\u6587\u672C\u6700\u5E38\u7528\u7684\u9009\u62E9\u3002\u5B83\u6839\u636E Unicode \u8054\u76DF \u5B9A\u4E49\u7684 <strong>\u5355\u8BCD\u8FB9\u754C</strong> \u5212\u5206\u6587\u672C\u3002\u5220\u9664\u7EDD\u5927\u90E8\u5206\u6807\u70B9\u3002\u6700\u540E\uFF0C\u5C06\u8BCD\u6761\u5C0F\u5199\u3002\u5B83\u4F1A\u4EA7\u751F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>set, the, shape, to, semi, transparent, by, calling, set_trans, <span class="token number">5</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u7B80\u5355\u5206\u6790\u5668</strong></li></ul><p>\u7B80\u5355\u5206\u6790\u5668\u5728\u4EFB\u4F55\u4E0D\u662F\u5B57\u6BCD\u7684\u5730\u65B9\u5206\u9694\u6587\u672C\uFF0C\u5C06\u8BCD\u6761\u5C0F\u5199\u3002\u5B83\u4F1A\u4EA7\u751F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>set, the, shape, to, semi, transparent, by, calling, set, trans\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u7A7A\u683C\u5206\u6790\u5668</strong></li></ul><p>\u7A7A\u683C\u5206\u6790\u5668\u5728\u7A7A\u683C\u7684\u5730\u65B9\u5212\u5206\u6587\u672C\u3002\u5B83\u4F1A\u4EA7\u751F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Set, the, shape, to, semi-transparent, by, calling, set_trans<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u8BED\u8A00\u5206\u6790\u5668</strong></li></ul><p>\u7279\u5B9A\u8BED\u8A00\u5206\u6790\u5668\u53EF\u7528\u4E8E \u5F88\u591A\u8BED\u8A00\u3002\u5B83\u4EEC\u53EF\u4EE5\u8003\u8651\u6307\u5B9A\u8BED\u8A00\u7684\u7279\u70B9\u3002\u4F8B\u5982\uFF0C \u82F1\u8BED \u5206\u6790\u5668\u9644\u5E26\u4E86\u4E00\u7EC4\u82F1\u8BED\u65E0\u7528\u8BCD\uFF08\u5E38\u7528\u5355\u8BCD\uFF0C\u4F8B\u5982 and \u6216\u8005 the \uFF0C\u5B83\u4EEC\u5BF9\u76F8\u5173\u6027\u6CA1\u6709\u591A\u5C11\u5F71\u54CD\uFF09\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u5220\u9664\u3002 \u7531\u4E8E\u7406\u89E3\u82F1\u8BED\u8BED\u6CD5\u7684\u89C4\u5219\uFF0C\u8FD9\u4E2A\u5206\u8BCD\u5668\u53EF\u4EE5\u63D0\u53D6\u82F1\u8BED\u5355\u8BCD\u7684 \u8BCD\u5E72 \u3002</p><p>\u82F1\u8BED \u5206\u8BCD\u5668\u4F1A\u4EA7\u751F\u4E0B\u9762\u7684\u8BCD\u6761\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>set, shape, semi, transpar, call, set_tran, <span class="token number">5</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\u770B transparent\u3001 calling \u548C set_trans \u5DF2\u7ECF\u53D8\u4E3A\u8BCD\u6839\u683C\u5F0F\u3002</p><h3 id="_4-2-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u5206\u6790\u5668" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u5206\u6790\u5668" aria-hidden="true">#</a> 4.2 \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u5206\u6790\u5668</h3><p>\u5F53\u6211\u4EEC \u7D22\u5F15 \u4E00\u4E2A\u6587\u6863\uFF0C\u5B83\u7684\u5168\u6587\u57DF\u88AB\u5206\u6790\u6210\u8BCD\u6761\u4EE5\u7528\u6765\u521B\u5EFA\u5012\u6392\u7D22\u5F15\u3002 \u4F46\u662F\uFF0C\u5F53\u6211\u4EEC\u5728\u5168\u6587\u57DF \u641C\u7D22 \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u67E5\u8BE2\u5B57\u7B26\u4E32\u901A\u8FC7 \u76F8\u540C\u7684\u5206\u6790\u8FC7\u7A0B \uFF0C\u4EE5\u4FDD\u8BC1\u6211\u4EEC\u641C\u7D22\u7684\u8BCD\u6761\u683C\u5F0F\u4E0E\u7D22\u5F15\u4E2D\u7684\u8BCD\u6761\u683C\u5F0F\u4E00\u81F4\u3002</p><p>\u5168\u6587\u67E5\u8BE2\uFF0C\u7406\u89E3\u6BCF\u4E2A\u57DF\u662F\u5982\u4F55\u5B9A\u4E49\u7684\uFF0C\u56E0\u6B64\u5B83\u4EEC\u53EF\u4EE5\u505A\u6B63\u786E\u7684\u4E8B\uFF1A</p><ul><li>\u5F53\u4F60\u67E5\u8BE2\u4E00\u4E2A \u5168\u6587 \u57DF\u65F6\uFF0C \u4F1A\u5BF9\u67E5\u8BE2\u5B57\u7B26\u4E32\u5E94\u7528\u76F8\u540C\u7684\u5206\u6790\u5668\uFF0C\u4EE5\u4EA7\u751F\u6B63\u786E\u7684\u641C\u7D22\u8BCD\u6761\u5217\u8868\u3002</li><li>\u5F53\u4F60\u67E5\u8BE2\u4E00\u4E2A \u7CBE\u786E\u503C \u57DF\u65F6\uFF0C\u4E0D\u4F1A\u5206\u6790\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u800C\u662F\u641C\u7D22\u4F60\u6307\u5B9A\u7684\u7CBE\u786E\u503C\u3002</li></ul><blockquote><p>\u4E3E\u4E2A\u4F8B\u5B50</p></blockquote><p>ES\u4E2D\u6BCF\u5929\u4E00\u6761\u6570\u636E\uFF0C \u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u67E5\u8BE2\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /_search?q<span class="token operator">=</span><span class="token number">2014</span>              <span class="token comment"># 12 results</span>\nGET /_search?q<span class="token operator">=</span><span class="token number">2014</span>-09-15        <span class="token comment"># 12 results !</span>\nGET /_search?q<span class="token operator">=</span>date:2014-09-15   <span class="token comment"># 1  result</span>\nGET /_search?q<span class="token operator">=</span>date:2014         <span class="token comment"># 0  results !</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u90A3\u6837\u7684\u7ED3\u679C\uFF1F</p><ul><li>date \u57DF\u5305\u542B\u4E00\u4E2A\u7CBE\u786E\u503C\uFF1A\u5355\u72EC\u7684\u8BCD\u6761 2014-09-15\u3002</li><li>_all \u57DF\u662F\u4E00\u4E2A\u5168\u6587\u57DF\uFF0C\u6240\u4EE5\u5206\u8BCD\u8FDB\u7A0B\u5C06\u65E5\u671F\u8F6C\u5316\u4E3A\u4E09\u4E2A\u8BCD\u6761\uFF1A 2014\uFF0C 09\uFF0C \u548C 15\u3002</li></ul><p>\u5F53\u6211\u4EEC\u5728 _all \u57DF\u67E5\u8BE2 2014\uFF0C\u5B83\u5339\u914D\u6240\u6709\u768412\u6761\u63A8\u6587\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u542B\u6709 2014 \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /_search?q<span class="token operator">=</span><span class="token number">2014</span>              <span class="token comment"># 12 results</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728 _all \u57DF\u67E5\u8BE2 2014-09-15\uFF0C\u5B83\u9996\u5148\u5206\u6790\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u4EA7\u751F\u5339\u914D 2014\uFF0C 09\uFF0C \u6216 15 \u4E2D \u4EFB\u610F \u8BCD\u6761\u7684\u67E5\u8BE2\u3002\u8FD9\u4E5F\u4F1A\u5339\u914D\u6240\u670912\u6761\u63A8\u6587\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u542B\u6709 2014 \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /_search?q<span class="token operator">=</span><span class="token number">2014</span>-09-15        <span class="token comment"># 12 results !</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728 date \u57DF\u67E5\u8BE2 2014-09-15\uFF0C\u5B83\u5BFB\u627E \u7CBE\u786E \u65E5\u671F\uFF0C\u53EA\u627E\u5230\u4E00\u4E2A\u63A8\u6587\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /_search?q<span class="token operator">=</span>date:2014-09-15   <span class="token comment"># 1  result</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728 date \u57DF\u67E5\u8BE2 2014\uFF0C\u5B83\u627E\u4E0D\u5230\u4EFB\u4F55\u6587\u6863\uFF0C\u56E0\u4E3A\u6CA1\u6709\u6587\u6863\u542B\u6709\u8FD9\u4E2A\u7CBE\u786E\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /_search?q<span class="token operator">=</span>date:2014         <span class="token comment"># 0  results !</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 52);
const _hoisted_66 = {
  href: "https://pdai.tech/md/db/nosql-es/elasticsearch-y-th-2.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("strong", null, "ES\u8BE6\u89E3 - \u539F\u7406\uFF1AES\u539F\u7406\u77E5\u8BC6\u70B9\u8865\u5145\u548C\u6574\u4F53\u7ED3\u6784", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_10,
      createBaseVNode("a", _hoisted_11, [
        _hoisted_12,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_13
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_66, [
        _hoisted_67,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var ES_____ES________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ES\u8BE6\u89E3-\u539F\u7406ES\u539F\u7406\u77E5\u8BC6\u70B9\u8865\u5145.html.vue"]]);
export { ES_____ES________html as default };
