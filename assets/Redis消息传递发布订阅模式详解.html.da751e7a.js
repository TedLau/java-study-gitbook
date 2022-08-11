import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode } from "./app.72d9fd95.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="redis\u8FDB\u9636-\u6D88\u606F\u4F20\u9012-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#redis\u8FDB\u9636-\u6D88\u606F\u4F20\u9012-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BE6\u89E3" aria-hidden="true">#</a> Redis\u8FDB\u9636-\u6D88\u606F\u4F20\u9012\uFF1A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BE6\u89E3</h1><h2 id="_1-redis\u53D1\u5E03\u8BA2\u9605\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-redis\u53D1\u5E03\u8BA2\u9605\u7B80\u4ECB" aria-hidden="true">#</a> 1. Redis\u53D1\u5E03\u8BA2\u9605\u7B80\u4ECB</h2><blockquote><p>Redis \u53D1\u5E03\u8BA2\u9605(pub/sub)\u662F\u4E00\u79CD\u6D88\u606F\u901A\u4FE1\u6A21\u5F0F\uFF1A\u53D1\u9001\u8005(pub)\u53D1\u9001\u6D88\u606F\uFF0C\u8BA2\u9605\u8005(sub)\u63A5\u6536\u6D88\u606F\u3002</p></blockquote><p>Redis \u7684 SUBSCRIBE \u547D\u4EE4\u53EF\u4EE5\u8BA9\u5BA2\u6237\u7AEF\u8BA2\u9605\u4EFB\u610F\u6570\u91CF\u7684\u9891\u9053\uFF0C \u6BCF\u5F53\u6709\u65B0\u4FE1\u606F\u53D1\u9001\u5230\u88AB\u8BA2\u9605\u7684\u9891\u9053\u65F6\uFF0C \u4FE1\u606F\u5C31\u4F1A\u88AB\u53D1\u9001\u7ED9\u6240\u6709\u8BA2\u9605\u6307\u5B9A\u9891\u9053\u7684\u5BA2\u6237\u7AEF\u3002</p><h3 id="_1-1-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F8B\u5B50" aria-hidden="true">#</a> 1.1 \u4F8B\u5B50</h3><p>\u4F5C\u4E3A\u4F8B\u5B50\uFF0C \u4E0B\u56FE\u5C55\u793A\u4E86\u9891\u9053 channel1 \uFF0C \u4EE5\u53CA\u8BA2\u9605\u8FD9\u4E2A\u9891\u9053\u7684\u4E09\u4E2A\u5BA2\u6237\u7AEF \u2014\u2014 client2 \u3001 client5 \u548C client1 \u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624195054351.png" alt="image-20220624195054351" style="zoom:50%;"><p>\u5F53\u6709\u65B0\u6D88\u606F\u901A\u8FC7 PUBLISH \u547D\u4EE4\u53D1\u9001\u7ED9\u9891\u9053 channel1 \u65F6\uFF0C \u8FD9\u4E2A\u6D88\u606F\u5C31\u4F1A\u88AB\u53D1\u9001\u7ED9\u8BA2\u9605\u5B83\u7684\u4E09\u4E2A\u5BA2\u6237\u7AEF\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624195118822.png" alt="image-20220624195118822" style="zoom:50%;"><h2 id="_2-\u53D1\u5E03-\u8BA2\u9605\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u53D1\u5E03-\u8BA2\u9605\u4F7F\u7528" aria-hidden="true">#</a> 2. \u53D1\u5E03/\u8BA2\u9605\u4F7F\u7528</h2><blockquote><p>Redis\u6709\u4E24\u79CD\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\uFF1A</p><ul><li>\u57FA\u4E8E\u9891\u9053(Channel)\u7684\u53D1\u5E03/\u8BA2\u9605</li><li>\u57FA\u4E8E\u6A21\u5F0F(pattern)\u7684\u53D1\u5E03/\u8BA2\u9605</li></ul></blockquote><h3 id="_2-1-\u57FA\u4E8E\u9891\u9053-channel-\u7684\u53D1\u5E03-\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u4E8E\u9891\u9053-channel-\u7684\u53D1\u5E03-\u8BA2\u9605" aria-hidden="true">#</a> 2.1 \u57FA\u4E8E\u9891\u9053(Channel)\u7684\u53D1\u5E03/\u8BA2\u9605</h3><p>&quot;\u53D1\u5E03/\u8BA2\u9605&quot;\u6A21\u5F0F\u5305\u542B\u4E24\u79CD\u89D2\u8272\uFF0C\u5206\u522B\u662F\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u3002\u53D1\u5E03\u8005\u53EF\u4EE5\u5411\u6307\u5B9A\u7684\u9891\u9053(channel)\u53D1\u9001\u6D88\u606F; \u8BA2\u9605\u8005\u53EF\u4EE5\u8BA2\u9605\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u9891\u9053(channel),\u6240\u6709\u8BA2\u9605\u6B64\u9891\u9053\u7684\u8BA2\u9605\u8005\u90FD\u4F1A\u6536\u5230\u6B64\u6D88\u606F\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624195302437.png" alt="image-20220624195302437" style="zoom:50%;"><h4 id="_2-1-1-\u57FA\u4E8E\u9891\u9053\u53D1\u5E03\u8005-publish\u53D1\u5E03\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u57FA\u4E8E\u9891\u9053\u53D1\u5E03\u8005-publish\u53D1\u5E03\u6D88\u606F" aria-hidden="true">#</a> 2.1.1 \u57FA\u4E8E\u9891\u9053<strong>\u53D1\u5E03\u8005 publish\u53D1\u5E03\u6D88\u606F</strong></h4><p>\u53D1\u5E03\u8005\u53D1\u5E03\u6D88\u606F\u7684\u547D\u4EE4\u662F publish,\u7528\u6CD5\u662F publish channel message\uFF0C\u5982\u5411 channel1.1\u8BF4\u4E00\u58F0hi</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish channel:1 hi\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u6D88\u606F\u5C31\u53D1\u51FA\u53BB\u4E86\u3002\u8FD4\u56DE\u503C\u8868\u793A\u63A5\u6536\u8FD9\u6761\u6D88\u606F\u7684\u8BA2\u9605\u8005\u6570\u91CF\u3002<strong>\u53D1\u51FA\u53BB\u7684\u6D88\u606F\u4E0D\u4F1A\u88AB\u6301\u4E45\u5316</strong>\uFF0C\u4E5F\u5C31\u662F\u6709\u5BA2\u6237\u7AEF\u8BA2\u9605channel:1\u540E\u53EA\u80FD\u63A5\u6536\u5230\u540E\u7EED\u53D1\u5E03\u5230\u8BE5\u9891\u9053\u7684\u6D88\u606F\uFF0C<strong>\u4E4B\u524D\u7684\u5C31\u63A5\u6536\u4E0D\u5230\u4E86</strong>\u3002</p><h4 id="_2-1-2-\u57FA\u4E8E\u9891\u9053\u8BA2\u9605\u8005subscribe-\u8BA2\u9605\u9891\u9053" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u57FA\u4E8E\u9891\u9053\u8BA2\u9605\u8005subscribe-\u8BA2\u9605\u9891\u9053" aria-hidden="true">#</a> 2.1.2 \u57FA\u4E8E\u9891\u9053<strong>\u8BA2\u9605\u8005subscribe \u8BA2\u9605\u9891\u9053</strong></h4><p>\u8BA2\u9605\u9891\u9053\u7684\u547D\u4EE4\u662F subscribe\uFF0C\u53EF\u4EE5\u540C\u65F6\u8BA2\u9605\u591A\u4E2A\u9891\u9053\uFF0C\u7528\u6CD5\u662F subscribe channel1 [channel2 ...],\u4F8B\u5982\u65B0\u5F00\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BA2\u9605\u4E0A\u9762\u9891\u9053:(\u4E0D\u4F1A\u6536\u5230\u6D88\u606F\uFF0C\u56E0\u4E3A\u4E0D\u4F1A\u6536\u5230\u8BA2\u9605\u4E4B\u524D\u5C31\u53D1\u5E03\u5230\u8BE5\u9891\u9053\u7684\u6D88\u606F)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> subscribe channel:1\nReading messages<span class="token punctuation">..</span>. <span class="token punctuation">(</span>press Ctrl-C to quit<span class="token punctuation">)</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;subscribe&quot;</span> // \u6D88\u606F\u7C7B\u578B\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;channel:1&quot;</span> // \u9891\u9053\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hi&quot;</span> // \u6D88\u606F\u5185\u5BB9\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u547D\u4EE4\u5BA2\u6237\u7AEF\u4F1A\u8FDB\u5165\u8BA2\u9605\u72B6\u6001\uFF0C\u5904\u4E8E\u6B64\u72B6\u6001\u4E0B\u5BA2\u6237\u7AEF\u4E0D\u80FD\u4F7F\u7528\u9664<code>subscribe</code>\u3001<code>unsubscribe</code>\u3001<code>psubscribe</code>\u548C<code>punsubscribe</code>\u8FD9\u56DB\u4E2A\u5C5E\u4E8E&quot;\u53D1\u5E03/\u8BA2\u9605&quot;\u4E4B\u5916\u7684\u547D\u4EE4\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p><p>\u8FDB\u5165\u8BA2\u9605\u72B6\u6001\u540E\u5BA2\u6237\u7AEF\u53EF\u80FD\u6536\u52303\u79CD\u7C7B\u578B\u7684\u56DE\u590D\u3002\u6BCF\u79CD\u7C7B\u578B\u7684\u56DE\u590D\u90FD\u5305\u542B3\u4E2A\u503C\uFF0C\u7B2C\u4E00\u4E2A\u503C\u662F\u6D88\u606F\u7684\u7C7B\u578B\uFF0C\u6839\u636E\u6D88\u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\u542B\u4E49\u53EF\u80FD\u4E0D\u540C\u3002</p><p>\u6D88\u606F\u7C7B\u578B\u7684\u53D6\u503C\u53EF\u80FD\u662F\u4EE5\u4E0B3\u4E2A:</p><ul><li>subscribe\u3002\u8868\u793A\u8BA2\u9605\u6210\u529F\u7684\u53CD\u9988\u4FE1\u606F\u3002\u7B2C\u4E8C\u4E2A\u503C\u662F\u8BA2\u9605\u6210\u529F\u7684\u9891\u9053\u540D\u79F0\uFF0C\u7B2C\u4E09\u4E2A\u662F\u5F53\u524D\u5BA2\u6237\u7AEF\u8BA2\u9605\u7684\u9891\u9053\u6570\u91CF\u3002</li><li>message\u3002\u8868\u793A\u63A5\u6536\u5230\u7684\u6D88\u606F\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u8868\u793A\u4EA7\u751F\u6D88\u606F\u7684\u9891\u9053\u540D\u79F0\uFF0C\u7B2C\u4E09\u4E2A\u503C\u662F\u6D88\u606F\u7684\u5185\u5BB9\u3002</li><li>unsubscribe\u3002\u8868\u793A\u6210\u529F\u53D6\u6D88\u8BA2\u9605\u67D0\u4E2A\u9891\u9053\u3002\u7B2C\u4E8C\u4E2A\u503C\u662F\u5BF9\u5E94\u7684\u9891\u9053\u540D\u79F0\uFF0C\u7B2C\u4E09\u4E2A\u503C\u662F\u5F53\u524D\u5BA2\u6237\u7AEF\u8BA2\u9605\u7684\u9891\u9053\u6570\u91CF\uFF0C\u5F53\u6B64\u503C\u4E3A0\u65F6\u5BA2\u6237\u7AEF\u4F1A\u9000\u51FA\u8BA2\u9605\u72B6\u6001\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u6267\u884C\u5176\u4ED6\u975E&quot;\u53D1\u5E03/\u8BA2\u9605&quot;\u6A21\u5F0F\u7684\u547D\u4EE4\u4E86\u3002</li></ul><h3 id="_2-2-\u57FA\u4E8E\u6A21\u5F0F-pattern-\u7684\u53D1\u5E03-\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_2-2-\u57FA\u4E8E\u6A21\u5F0F-pattern-\u7684\u53D1\u5E03-\u8BA2\u9605" aria-hidden="true">#</a> 2.2 \u57FA\u4E8E\u6A21\u5F0F(pattern)\u7684\u53D1\u5E03/\u8BA2\u9605</h3><p>\u5982\u679C\u6709\u67D0\u4E2A/\u67D0\u4E9B\u6A21\u5F0F\u548C\u8FD9\u4E2A\u9891\u9053\u5339\u914D\u7684\u8BDD\uFF0C\u90A3\u4E48\u6240\u6709\u8BA2\u9605\u8FD9\u4E2A/\u8FD9\u4E9B\u9891\u9053\u7684\u5BA2\u6237\u7AEF\u4E5F\u540C\u6837\u4F1A\u6536\u5230\u4FE1\u606F\u3002</p><ul><li><strong>\u7528\u56FE\u4F8B\u89E3\u91CA\u4EC0\u4E48\u662F\u57FA\u4E8E\u6A21\u5F0F\u7684\u53D1\u5E03\u8BA2\u9605</strong></li></ul><p>\u4E0B\u56FE\u5C55\u793A\u4E86\u4E00\u4E2A\u5E26\u6709\u9891\u9053\u548C\u6A21\u5F0F\u7684\u4F8B\u5B50\uFF0C \u5176\u4E2D tweet.shop.* \u6A21\u5F0F\u5339\u914D\u4E86 tweet.shop.kindle \u9891\u9053\u548C tweet.shop.ipad \u9891\u9053\uFF0C \u5E76\u4E14\u6709\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\u5206\u522B\u8BA2\u9605\u5B83\u4EEC\u4E09\u4E2A\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624195827766.png" alt="image-20220624195827766" style="zoom:50%;"><p>\u5F53\u6709\u4FE1\u606F\u53D1\u9001\u5230 tweet.shop.kindle \u9891\u9053\u65F6\uFF0C \u4FE1\u606F\u9664\u4E86\u53D1\u9001\u7ED9 clientX \u548C clientY \u4E4B\u5916\uFF0C \u8FD8\u4F1A\u53D1\u9001\u7ED9\u8BA2\u9605 tweet.shop.* \u6A21\u5F0F\u7684 client123 \u548C client256 \uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624201134778.png" alt="image-20220624201134778" style="zoom:50%;"><p>\u53E6\u4E00\u65B9\u9762\uFF0C \u5982\u679C\u63A5\u6536\u5230\u4FE1\u606F\u7684\u662F\u9891\u9053 tweet.shop.ipad \uFF0C \u90A3\u4E48 client123 \u548C client256 \u540C\u6837\u4F1A\u6536\u5230\u4FE1\u606F\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624201156477.png" alt="image-20220624201156477"></p><p><strong>\u57FA\u4E8E\u6A21\u5F0F\u7684\u4F8B\u5B50</strong></p><p>\u901A\u914D\u7B26\u4E2D?\u8868\u793A1\u4E2A\u5360\u4F4D\u7B26\uFF0C*\u8868\u793A\u4EFB\u610F\u4E2A\u5360\u4F4D\u7B26(\u5305\u62EC0)\uFF0C?*\u8868\u793A1\u4E2A\u4EE5\u4E0A\u5360\u4F4D\u7B26\u3002</p><h4 id="_2-2-1\u57FA\u4E8E\u6A21\u5F0Fpublish\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#_2-2-1\u57FA\u4E8E\u6A21\u5F0Fpublish\u53D1\u5E03" aria-hidden="true">#</a> 2.2.1\u57FA\u4E8E\u6A21\u5F0Fpublish\u53D1\u5E03</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish c m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish c1 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish c11 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish b m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish b1 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish b11 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish d m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish d1 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> publish d11 m1\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n\n  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-\u57FA\u4E8E\u6A21\u5F0Fpsubscribe\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u57FA\u4E8E\u6A21\u5F0Fpsubscribe\u8BA2\u9605" aria-hidden="true">#</a> 2.2.2 \u57FA\u4E8E\u6A21\u5F0Fpsubscribe\u8BA2\u9605</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> psubscribe c? b* d?*\nReading messages<span class="token punctuation">..</span>. <span class="token punctuation">(</span>press Ctrl-C to quit<span class="token punctuation">)</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;psubscribe&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;c?&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;psubscribe&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;psubscribe&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;d?*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;c?&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;c1&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;b&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;b1&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;b11&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;d?*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;d1&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;d?*&quot;</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;d11&quot;</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;m1&quot;</span>\n\n  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u6CE8\u610F\u70B9</strong></li></ul><p>(1)\u4F7F\u7528psubscribe\u547D\u4EE4\u53EF\u4EE5\u91CD\u590D\u8BA2\u9605\u540C\u4E00\u4E2A\u9891\u9053\uFF0C\u5982\u5BA2\u6237\u7AEF\u6267\u884C\u4E86<code>psubscribe c? c?*</code>\u3002\u8FD9\u65F6\u5411c1\u53D1\u5E03\u6D88\u606F\u5BA2\u6237\u7AEF\u4F1A\u63A5\u53D7\u5230\u4E24\u6761\u6D88\u606F\uFF0C\u800C\u540C\u65F6publish\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u662F2\u800C\u4E0D\u662F1\u3002\u540C\u6837\u7684\uFF0C\u5982\u679C\u6709\u53E6\u4E00\u4E2A\u5BA2\u6237\u7AEF\u6267\u884C\u4E86<code>subscribe c1</code> \u548C<code>psubscribe c?*</code>\u7684\u8BDD\uFF0C\u5411c1\u53D1\u9001\u4E00\u6761\u6D88\u606F\u8BE5\u5BA2\u6237\u987F\u4E5F\u4F1A\u53D7\u5230\u4E24\u6761\u6D88\u606F(\u4F46\u662F\u662F\u4E24\u79CD\u7C7B\u578B:message\u548Cpmessage)\uFF0C\u540C\u65F6publish\u547D\u4EE4\u4E5F\u8FD4\u56DE2.</p><p>(2)punsubscribe\u547D\u4EE4\u53EF\u4EE5\u9000\u8BA2\u6307\u5B9A\u7684\u89C4\u5219\uFF0C\u7528\u6CD5\u662F: <code>punsubscribe [pattern [pattern ...]]</code>,\u5982\u679C\u6CA1\u6709\u53C2\u6570\u5219\u4F1A\u9000\u8BA2\u6240\u6709\u89C4\u5219\u3002</p><p>(3)\u4F7F\u7528punsubscribe\u53EA\u80FD\u9000\u8BA2\u901A\u8FC7psubscribe\u547D\u4EE4\u8BA2\u9605\u7684\u89C4\u5219\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u76F4\u63A5\u901A\u8FC7subscribe\u547D\u4EE4\u8BA2\u9605\u7684\u9891\u9053\uFF1B\u540C\u6837unsubscribe\u547D\u4EE4\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u901A\u8FC7psubscribe\u547D\u4EE4\u8BA2\u9605\u7684\u89C4\u5219\u3002\u53E6\u5916\u9700\u8981\u6CE8\u610Fpunsubscribe\u547D\u4EE4\u9000\u8BA2\u67D0\u4E2A\u89C4\u5219\u65F6\u4E0D\u4F1A\u5C06\u5176\u4E2D\u7684\u901A\u914D\u7B26\u5C55\u5F00\uFF0C\u800C\u662F\u8FDB\u884C\u4E25\u683C\u7684\u5B57\u7B26\u4E32\u5339\u914D\uFF0C\u6240\u4EE5<code>punsubscribe *</code> \u65E0\u6CD5\u9000\u8BA2<code>c*</code>\u89C4\u5219\uFF0C\u800C\u662F\u5FC5\u987B\u4F7F\u7528<code>punsubscribe c*</code>\u624D\u53EF\u4EE5\u9000\u8BA2\u3002\uFF08\u5B83\u4EEC\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u540E\u6587\u53EF\u4EE5\u770B\u5230\u6570\u636E\u7ED3\u6784\u4E0A\u770B\u4E5F\u662F\u4E24\u79CD\u5B9E\u73B0\uFF09</p><h2 id="_3-\u6DF1\u5165\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-\u6DF1\u5165\u7406\u89E3" aria-hidden="true">#</a> 3. \u6DF1\u5165\u7406\u89E3</h2><blockquote><p>\u6211\u4EEC\u901A\u8FC7\u51E0\u4E2A\u95EE\u9898\uFF0C\u6765\u6DF1\u5165\u7406\u89E3Redis\u7684\u8BA2\u9605\u53D1\u5E03\u673A\u5236</p></blockquote><h3 id="_3-1-\u57FA\u4E8E\u9891\u9053-channel-\u7684\u53D1\u5E03-\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#_3-1-\u57FA\u4E8E\u9891\u9053-channel-\u7684\u53D1\u5E03-\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684" aria-hidden="true">#</a> 3.1 \u57FA\u4E8E\u9891\u9053(Channel)\u7684\u53D1\u5E03/\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</h3><p>\u5E95\u5C42\u662F\u901A\u8FC7\u5B57\u5178\uFF08\u56FE\u4E2D\u7684pubsub_channels\uFF09\u5B9E\u73B0\u7684\uFF0C\u8FD9\u4E2A\u5B57\u5178\u5C31\u7528\u4E8E\u4FDD\u5B58\u8BA2\u9605\u9891\u9053\u7684\u4FE1\u606F\uFF1A\u5B57\u5178\u7684\u952E\u4E3A\u6B63\u5728\u88AB\u8BA2\u9605\u7684\u9891\u9053\uFF0C \u800C\u5B57\u5178\u7684\u503C\u5219\u662F\u4E00\u4E2A\u94FE\u8868\uFF0C \u94FE\u8868\u4E2D\u4FDD\u5B58\u4E86\u6240\u6709\u8BA2\u9605\u8FD9\u4E2A\u9891\u9053\u7684\u5BA2\u6237\u7AEF\u3002</p><ul><li><strong>\u6570\u636E\u7ED3\u6784</strong></li></ul><p>\u6BD4\u5982\u8BF4\uFF0C\u5728\u4E0B\u56FE\u5C55\u793A\u7684\u8FD9\u4E2A pubsub_channels \u793A\u4F8B\u4E2D\uFF0C client2 \u3001 client5 \u548C client1 \u5C31\u8BA2\u9605\u4E86 channel1 \uFF0C \u800C\u5176\u4ED6\u9891\u9053\u4E5F\u5206\u522B\u88AB\u522B\u7684\u5BA2\u6237\u7AEF\u6240\u8BA2\u9605\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624201831631.png" alt="image-20220624201831631"></p><ul><li><strong>\u8BA2\u9605</strong></li></ul><p>\u5F53\u5BA2\u6237\u7AEF\u8C03\u7528 SUBSCRIBE \u547D\u4EE4\u65F6\uFF0C \u7A0B\u5E8F\u5C31\u5C06\u5BA2\u6237\u7AEF\u548C\u8981\u8BA2\u9605\u7684\u9891\u9053\u5728 pubsub_channels \u5B57\u5178\u4E2D\u5173\u8054\u8D77\u6765\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF client10086 \u6267\u884C\u547D\u4EE4 <code>SUBSCRIBE channel1 channel2 channel3</code> \uFF0C\u90A3\u4E48\u524D\u9762\u5C55\u793A\u7684 pubsub_channels \u5C06\u53D8\u6210\u4E0B\u9762\u8FD9\u4E2A\u6837\u5B50\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624201950967.png" alt="image-20220624201950967"></p><ul><li><strong>\u53D1\u5E03</strong></li></ul><p>\u5F53\u8C03\u7528 <code>PUBLISH channel message</code> \u547D\u4EE4\uFF0C \u7A0B\u5E8F\u9996\u5148\u6839\u636E channel \u5B9A\u4F4D\u5230\u5B57\u5178\u7684\u952E\uFF0C \u7136\u540E\u5C06\u4FE1\u606F\u53D1\u9001\u7ED9\u5B57\u5178\u503C\u94FE\u8868\u4E2D\u7684\u6240\u6709\u5BA2\u6237\u7AEF\u3002</p><p>\u6BD4\u5982\u8BF4\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B\u8FD9\u4E2A pubsub_channels \u5B9E\u4F8B\uFF0C \u5982\u679C\u67D0\u4E2A\u5BA2\u6237\u7AEF\u6267\u884C\u547D\u4EE4 <code>PUBLISH channel1 &quot;hello moto&quot;</code> \uFF0C\u90A3\u4E48 client2 \u3001 client5 \u548C client1 \u4E09\u4E2A\u5BA2\u6237\u7AEF\u90FD\u5C06\u63A5\u6536\u5230 &quot;hello moto&quot; \u4FE1\u606F\uFF1A</p><ul><li><strong>\u9000\u8BA2</strong></li></ul><p>\u4F7F\u7528 UNSUBSCRIBE \u547D\u4EE4\u53EF\u4EE5\u9000\u8BA2\u6307\u5B9A\u7684\u9891\u9053\uFF0C \u8FD9\u4E2A\u547D\u4EE4\u6267\u884C\u7684\u662F\u8BA2\u9605\u7684\u53CD\u64CD\u4F5C\uFF1A \u5B83\u4ECE pubsub_channels \u5B57\u5178\u7684\u7ED9\u5B9A\u9891\u9053\uFF08\u952E\uFF09\u4E2D\uFF0C \u5220\u9664\u5173\u4E8E\u5F53\u524D\u5BA2\u6237\u7AEF\u7684\u4FE1\u606F\uFF0C \u8FD9\u6837\u88AB\u9000\u8BA2\u9891\u9053\u7684\u4FE1\u606F\u5C31\u4E0D\u4F1A\u518D\u53D1\u9001\u7ED9\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u3002</p><h3 id="_3-2-\u57FA\u4E8E\u6A21\u5F0F-pattern-\u7684\u53D1\u5E03-\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#_3-2-\u57FA\u4E8E\u6A21\u5F0F-pattern-\u7684\u53D1\u5E03-\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684" aria-hidden="true">#</a> 3.2 \u57FA\u4E8E\u6A21\u5F0F(Pattern)\u7684\u53D1\u5E03/\u8BA2\u9605\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</h3><p>\u5E95\u5C42\u662FpubsubPattern\u8282\u70B9\u7684\u94FE\u8868\u3002</p><ul><li><strong>\u6570\u636E\u7ED3\u6784</strong> redisServer.pubsub_patterns \u5C5E\u6027\u662F\u4E00\u4E2A\u94FE\u8868\uFF0C\u94FE\u8868\u4E2D\u4FDD\u5B58\u7740\u6240\u6709\u548C\u6A21\u5F0F\u76F8\u5173\u7684\u4FE1\u606F\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">redisServer</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    list <span class="token operator">*</span>pubsub_patterns<span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u94FE\u8868\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A redis.h/pubsubPattern \u7ED3\u6784\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">pubsubPattern</span> <span class="token punctuation">{</span>\n    redisClient <span class="token operator">*</span>client<span class="token punctuation">;</span>\n    robj <span class="token operator">*</span>pattern<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> pubsubPattern<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client \u5C5E\u6027\u4FDD\u5B58\u7740\u8BA2\u9605\u6A21\u5F0F\u7684\u5BA2\u6237\u7AEF\uFF0C\u800C pattern \u5C5E\u6027\u5219\u4FDD\u5B58\u7740\u88AB\u8BA2\u9605\u7684\u6A21\u5F0F\u3002</p><p>\u6BCF\u5F53\u8C03\u7528 PSUBSCRIBE \u547D\u4EE4\u8BA2\u9605\u4E00\u4E2A\u6A21\u5F0F\u65F6\uFF0C \u7A0B\u5E8F\u5C31\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u5BA2\u6237\u7AEF\u4FE1\u606F\u548C\u88AB\u8BA2\u9605\u6A21\u5F0F\u7684 pubsubPattern \u7ED3\u6784\uFF0C \u5E76\u5C06\u8BE5\u7ED3\u6784\u6DFB\u52A0\u5230 redisServer.pubsub_patterns \u94FE\u8868\u4E2D\u3002</p><p>\u4F5C\u4E3A\u4F8B\u5B50\uFF0C\u4E0B\u56FE\u5C55\u793A\u4E86\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6A21\u5F0F\u7684 pubsub_patterns \u94FE\u8868\uFF0C \u5176\u4E2D client123 \u548C client256 \u90FD\u6B63\u5728\u8BA2\u9605 tweet.shop.* \u6A21\u5F0F\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624202234467.png" alt="image-20220624202234467"></p><ul><li><strong>\u8BA2\u9605</strong></li></ul><p>\u5982\u679C\u8FD9\u65F6\u5BA2\u6237\u7AEF client10086 \u6267\u884C <code>PSUBSCRIBE broadcast.list.*</code> \uFF0C \u90A3\u4E48 pubsub_patterns \u94FE\u8868\u5C06\u88AB\u66F4\u65B0\u6210\u8FD9\u6837\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220624202251148.png" alt="image-20220624202251148"></p><p>\u901A\u8FC7\u904D\u5386\u6574\u4E2A pubsub_patterns \u94FE\u8868\uFF0C\u7A0B\u5E8F\u53EF\u4EE5\u68C0\u67E5\u6240\u6709\u6B63\u5728\u88AB\u8BA2\u9605\u7684\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u8BA2\u9605\u8FD9\u4E9B\u6A21\u5F0F\u7684\u5BA2\u6237\u7AEF\u3002</p><ul><li><strong>\u53D1\u5E03</strong></li></ul><p>\u53D1\u9001\u4FE1\u606F\u5230\u6A21\u5F0F\u7684\u5DE5\u4F5C\u4E5F\u662F\u7531 PUBLISH \u547D\u4EE4\u8FDB\u884C\u7684, \u663E\u7136\u5C31\u662F\u5339\u914D\u6A21\u5F0F\u83B7\u5F97Channels\uFF0C\u7136\u540E\u518D\u628A\u6D88\u606F\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002</p><ul><li><strong>\u9000\u8BA2</strong></li></ul><p>\u4F7F\u7528 PUNSUBSCRIBE \u547D\u4EE4\u53EF\u4EE5\u9000\u8BA2\u6307\u5B9A\u7684\u6A21\u5F0F\uFF0C \u8FD9\u4E2A\u547D\u4EE4\u6267\u884C\u7684\u662F\u8BA2\u9605\u6A21\u5F0F\u7684\u53CD\u64CD\u4F5C\uFF1A \u7A0B\u5E8F\u4F1A\u5220\u9664 redisServer.pubsub_patterns \u94FE\u8868\u4E2D\uFF0C \u6240\u6709\u548C\u88AB\u9000\u8BA2\u6A21\u5F0F\u76F8\u5173\u8054\u7684 pubsubPattern \u7ED3\u6784\uFF0C \u8FD9\u6837\u5BA2\u6237\u7AEF\u5C31\u4E0D\u4F1A\u518D\u6536\u5230\u548C\u6A21\u5F0F\u76F8\u5339\u914D\u7684\u9891\u9053\u53D1\u6765\u7684\u4FE1\u606F\u3002</p><h3 id="_3-3-springboot\u7ED3\u5408redis\u53D1\u5E03-\u8BA2\u9605\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-3-springboot\u7ED3\u5408redis\u53D1\u5E03-\u8BA2\u9605\u5B9E\u4F8B" aria-hidden="true">#</a> 3.3 SpringBoot\u7ED3\u5408Redis\u53D1\u5E03/\u8BA2\u9605\u5B9E\u4F8B\uFF1F</h3><p>\u6700\u4F73\u5B9E\u8DF5\u662F\u901A\u8FC7RedisTemplate\uFF0C\u5173\u952E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u53D1\u5E03</span>\nredisTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;my_topic_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message_content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \u914D\u7F6E\u8BA2\u9605</span>\n<span class="token class-name">RedisMessageListenerContainer</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisMessageListenerContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncontainer<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>connectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>\ncontainer<span class="token punctuation">.</span><span class="token function">addMessageListener</span><span class="token punctuation">(</span>xxxMessageListenerAdapter<span class="token punctuation">,</span> <span class="token string">&quot;my_topic_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 82);
const _hoisted_83 = {
  href: "https://pdai.tech/md/db/nosql-redis/db-redis-x-pub-sub.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("strong", null, "Redis\u8FDB\u9636 - \u6D88\u606F\u4F20\u9012\uFF1A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BE6\u89E3", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_83, [
        _hoisted_84,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Redis_____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Redis\u6D88\u606F\u4F20\u9012\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u8BE6\u89E3.html.vue"]]);
export { Redis_____________html as default };
