import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="spring\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#spring\u4E8B\u52A1" aria-hidden="true">#</a> Spring\u4E8B\u52A1</h1><h2 id="_1-\u4E8B\u52A1\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u4E8B\u52A1\u6982\u5FF5" aria-hidden="true">#</a> 1. \u4E8B\u52A1\u6982\u5FF5</h2><h3 id="_1-1-\u4EC0\u4E48\u662F\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F\u4E8B\u52A1" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F\u4E8B\u52A1</h3><p>\u4E8B\u52A1\u662F\u903B\u8F91\u4E0A\u7684\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u8981\u4E48\u90FD\u6267\u884C\uFF0C\u8981\u4E48\u90FD\u4E0D\u6267\u884C</p><h3 id="_1-2-\u4E8B\u52A1\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4E8B\u52A1\u7684\u7279\u6027" aria-hidden="true">#</a> 1.2 \u4E8B\u52A1\u7684\u7279\u6027</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191011230807408.png" alt="image-20191011230807408"></p><ol><li>\u539F\u5B50\u6027\uFF1A\u4E8B\u52A1\u662F\u6700\u5C0F\u7684\u6267\u884C\u5355\u4F4D\uFF0C\u4E0D\u4E88\u8BB8\u5206\u5272\u3002\u4E8B\u52A1\u7684\u539F\u5B50\u6027\u786E\u4FDD\u52A8\u4F5C\u8981\u4E48\u5168\u90E8\u5B8C\u6210\uFF0C\u8981\u4E48\u5B8C\u5168\u4E0D\u8D77\u4F5C\u7528</li><li>\u4E00\u81F4\u6027\uFF1A\u6267\u884C\u4E8B\u52A1\u524D\u540E\uFF0C\u6570\u636E\u4FDD\u6301\u4E00\u81F4</li><li>\u9694\u79BB\u6027\uFF1A\u5E76\u53D1\u8BBF\u95EE\u6570\u636E\u5E93\u65F6\uFF0C\u4E00\u4E2A\u7528\u6237\u7684\u4E8B\u52A1\u4E0D\u88AB\u5176\u4ED6\u4E8B\u52A1\u6240\u5E72\u6270\uFF0C\u4E2A\u5E76\u53D1\u4E8B\u52A1\u4E4B\u95F4\u7684\u6570\u636E\u5E93\u662F\u72EC\u7ACB\u7684</li><li>\u6301\u4E45\u6027\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u88AB\u63D0\u4EA4\u4E4B\u540E\uFF0C\u4ED6\u5BF9\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7684\u6539\u53D8\u662F\u6301\u4E45\u7684\uFF0C\u5373\u4F7F\u6570\u636E\u5E93\u53D1\u751F\u6545\u969C\u4E5F\u4E0D\u5E94\u8BE5\u5BF9\u5176\u6709\u4EFB\u4F55\u5F71\u54CD</li></ol><h2 id="_2-spring\u4E8B\u52A1\u7BA1\u7406\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-spring\u4E8B\u52A1\u7BA1\u7406\u63A5\u53E3" aria-hidden="true">#</a> 2. Spring\u4E8B\u52A1\u7BA1\u7406\u63A5\u53E3</h2><ul><li><strong>PlatformTransactionManager</strong>: \uFF08\u5E73\u53F0\uFF09\u4E8B\u52A1\u7BA1\u7406\u5668</li><li><strong>TransactionDefinition\uFF1A</strong> \u4E8B\u52A1\u5B9A\u4E49\u4FE1\u606F(\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u3001\u4F20\u64AD\u884C\u4E3A\u3001\u8D85\u65F6\u3001\u53EA\u8BFB\u3001\u56DE\u6EDA\u89C4\u5219)</li><li><strong>TransactionStatus\uFF1A</strong> \u4E8B\u52A1\u8FD0\u884C\u72B6\u6001</li></ul><h3 id="_2-1-platformtransactionmanager\u63A5\u53E3\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-1-platformtransactionmanager\u63A5\u53E3\u4ECB\u7ECD" aria-hidden="true">#</a> 2.1 PlatformTransactionManager\u63A5\u53E3\u4ECB\u7ECD</h3><p><strong>\u6240\u8C13\u4E8B\u52A1\u7BA1\u7406\uFF0C\u5176\u5B9E\u5C31\u662F\u201C\u6309\u7167\u7ED9\u5B9A\u7684\u4E8B\u52A1\u89C4\u5219\u6765\u6267\u884C\u63D0\u4EA4\u6216\u8005\u56DE\u6EDA\u64CD\u4F5C\u201D\u3002</strong></p><p><strong>Spring\u5E76\u4E0D\u76F4\u63A5\u7BA1\u7406\u4E8B\u52A1\uFF0C\u800C\u662F\u63D0\u4F9B\u4E86\u591A\u79CD\u4E8B\u52A1\u7BA1\u7406\u5668</strong> \uFF0C\u4ED6\u4EEC\u5C06\u4E8B\u52A1\u7BA1\u7406\u7684\u804C\u8D23\u59D4\u6258\u7ED9Hibernate\u6216\u8005JTA\u7B49\u6301\u4E45\u5316\u673A\u5236\u6240\u63D0\u4F9B\u7684\u76F8\u5173\u5E73\u53F0\u6846\u67B6\u7684\u4E8B\u52A1\u6765\u5B9E\u73B0\u3002 Spring\u4E8B\u52A1\u7BA1\u7406\u5668\u7684\u63A5\u53E3\u662F\uFF1A <strong>org.springframework.transaction.PlatformTransactionManager</strong> \uFF0C\u901A\u8FC7\u8FD9\u4E2A\u63A5\u53E3\uFF0CSpring\u4E3A\u5404\u4E2A\u5E73\u53F0\u5982JDBC\u3001Hibernate\u7B49\u90FD\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u4E8B\u52A1\u7BA1\u7406\u5668\uFF0C\u4F46\u662F\u5177\u4F53\u7684\u5B9E\u73B0\u5C31\u662F\u5404\u4E2A\u5E73\u53F0\u81EA\u5DF1\u7684\u4E8B\u60C5\u4E86\u3002</p><h4 id="_2-1-1platformtransactionmanager\u63A5\u53E3\u4EE3\u7801\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-1-1platformtransactionmanager\u63A5\u53E3\u4EE3\u7801\u5982\u4E0B" aria-hidden="true">#</a> 2.1.1PlatformTransactionManager\u63A5\u53E3\u4EE3\u7801\u5982\u4E0B\uFF1A</h4><p>PlatformTransactionManager\u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E86\u4E09\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Public</span> <span class="token keyword">interface</span> <span class="token class-name">PlatformTransactionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">{</span>  \n    <span class="token comment">// Return a currently active transaction or create a new one, according to the specified propagation behavior\uFF08\u6839\u636E\u6307\u5B9A\u7684\u4F20\u64AD\u884C\u4E3A\uFF0C\u8FD4\u56DE\u5F53\u524D\u6D3B\u52A8\u7684\u4E8B\u52A1\u6216\u521B\u5EFA\u4E00\u4E2A\u65B0\u4E8B\u52A1\u3002\uFF09</span>\n    <span class="token class-name">TransactionStatus</span> <span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span> definition<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span> \n    <span class="token comment">// Commit the given transaction, with regard to its status\uFF08\u4F7F\u7528\u4E8B\u52A1\u76EE\u524D\u7684\u72B6\u6001\u63D0\u4EA4\u4E8B\u52A1\uFF09</span>\n    <span class="token class-name">Void</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>  \n    <span class="token comment">// Perform a rollback of the given transaction\uFF08\u5BF9\u6267\u884C\u7684\u4E8B\u52A1\u8FDB\u884C\u56DE\u6EDA\uFF09</span>\n    <span class="token class-name">Void</span> <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>  \n    <span class="token punctuation">}</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-transactiondefinition\u63A5\u53E3\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-2-transactiondefinition\u63A5\u53E3\u4ECB\u7ECD" aria-hidden="true">#</a> 2.2 TransactionDefinition\u63A5\u53E3\u4ECB\u7ECD</h3><p>\u4E8B\u52A1\u7BA1\u7406\u5668\u63A5\u53E3 <strong>PlatformTransactionManager</strong> \u901A\u8FC7 <strong>getTransaction(TransactionDefinition definition)</strong> \u65B9\u6CD5\u6765\u5F97\u5230\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u91CC\u9762\u7684\u53C2\u6570\u662F <strong>TransactionDefinition\u7C7B</strong> \uFF0C\u8FD9\u4E2A\u7C7B\u5C31\u5B9A\u4E49\u4E86\u4E00\u4E9B\u57FA\u672C\u7684\u4E8B\u52A1\u5C5E\u6027\u3002</p><p><strong>\u90A3\u4E48\u4EC0\u4E48\u662F\u4E8B\u52A1\u5C5E\u6027\u5462\uFF1F</strong></p><p>\u4E8B\u52A1\u5C5E\u6027\u53EF\u4EE5\u7406\u89E3\u6210\u4E8B\u52A1\u7684\u4E00\u4E9B\u57FA\u672C\u914D\u7F6E\uFF0C\u63CF\u8FF0\u4E86\u4E8B\u52A1\u7B56\u7565\u5982\u4F55\u5E94\u7528\u5230\u65B9\u6CD5\u4E0A\u3002\u4E8B\u52A1\u5C5E\u6027\u5305\u542B\u4E865\u4E2A\u65B9\u9762\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191011232517486.png" alt="image-20191011232517486"></p><h4 id="_2-2-1-transactiondefinition\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-transactiondefinition\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u5982\u4E0B" aria-hidden="true">#</a> 2.2.1 TransactionDefinition\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A</h4><p>TransactionDefinition\u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E865\u4E2A\u65B9\u6CD5\u4EE5\u53CA\u4E00\u4E9B\u8868\u793A\u4E8B\u52A1\u5C5E\u6027\u7684\u5E38\u91CF\u6BD4\u5982\u9694\u79BB\u7EA7\u522B\u3001\u4F20\u64AD\u884C\u4E3A\u7B49\u7B49\u7684\u5E38\u91CF\u3002</p><p>\u6211\u4E0B\u9762\u53EA\u662F\u5217\u51FA\u4E86TransactionDefinition\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u800C\u6CA1\u6709\u7ED9\u51FA\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u5E38\u91CF\uFF0C\u8BE5\u63A5\u53E3\u4E2D\u7684\u5E38\u91CF\u4FE1\u606F\u4F1A\u5728\u540E\u9762\u4F9D\u6B21\u4ECB\u7ECD\u5230\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDefinition</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u8FD4\u56DE\u4E8B\u52A1\u7684\u4F20\u64AD\u884C\u4E3A</span>\n    <span class="token keyword">int</span> <span class="token function">getPropagationBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token comment">// \u8FD4\u56DE\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u4E8B\u52A1\u7BA1\u7406\u5668\u6839\u636E\u5B83\u6765\u63A7\u5236\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1\u53EF\u4EE5\u770B\u5230\u672C\u4E8B\u52A1\u5185\u7684\u54EA\u4E9B\u6570\u636E</span>\n    <span class="token keyword">int</span> <span class="token function">getIsolationLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token comment">// \u8FD4\u56DE\u4E8B\u52A1\u5FC5\u987B\u5728\u591A\u5C11\u79D2\u5185\u5B8C\u6210</span>\n    <span class="token comment">//\u8FD4\u56DE\u4E8B\u52A1\u7684\u540D\u5B57</span>\n    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B\n    <span class="token keyword">int</span> <span class="token function">getTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n    <span class="token comment">// \u8FD4\u56DE\u662F\u5426\u4F18\u5316\u4E3A\u53EA\u8BFB\u4E8B\u52A1\u3002</span>\n    <span class="token keyword">boolean</span> <span class="token function">isReadOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-1-1-\u9694\u79BB\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-1-\u9694\u79BB\u7EA7\u522B" aria-hidden="true">#</a> 2.2.1.1 \u9694\u79BB\u7EA7\u522B</h5><p>TransactionDefinition \u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E86\u4E94\u4E2A\u8868\u793A\u9694\u79BB\u7EA7\u522B\u7684\u5E38\u91CF\uFF1A</p><ul><li><strong>TransactionDefinition.ISOLATION_DEFAULT:</strong> \u4F7F\u7528\u540E\u7AEF\u6570\u636E\u5E93\u9ED8\u8BA4\u7684\u9694\u79BB\u7EA7\u522B\uFF0CMysql \u9ED8\u8BA4\u91C7\u7528\u7684 REPEATABLE_READ\u9694\u79BB\u7EA7\u522B Oracle \u9ED8\u8BA4\u91C7\u7528\u7684 READ_COMMITTED\u9694\u79BB\u7EA7\u522B.</li><li><strong>TransactionDefinition.ISOLATION_READ_UNCOMMITTED:</strong> \u6700\u4F4E\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u5141\u8BB8\u8BFB\u53D6\u5C1A\u672A\u63D0\u4EA4\u7684\u6570\u636E\u53D8\u66F4\uFF0C<strong>\u53EF\u80FD\u4F1A\u5BFC\u81F4\u810F\u8BFB\u3001\u5E7B\u8BFB\u6216\u4E0D\u53EF\u91CD\u590D\u8BFB</strong></li><li><strong>TransactionDefinition.ISOLATION_READ_COMMITTED:</strong> \u5141\u8BB8\u8BFB\u53D6\u5E76\u53D1\u4E8B\u52A1\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C<strong>\u53EF\u4EE5\u963B\u6B62\u810F\u8BFB\uFF0C\u4F46\u662F\u5E7B\u8BFB\u6216\u4E0D\u53EF\u91CD\u590D\u8BFB\u4ECD\u6709\u53EF\u80FD\u53D1\u751F</strong></li><li><strong>TransactionDefinition.ISOLATION_REPEATABLE_READ:</strong> \u5BF9\u540C\u4E00\u5B57\u6BB5\u7684\u591A\u6B21\u8BFB\u53D6\u7ED3\u679C\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u9664\u975E\u6570\u636E\u662F\u88AB\u672C\u8EAB\u4E8B\u52A1\u81EA\u5DF1\u6240\u4FEE\u6539\uFF0C<strong>\u53EF\u4EE5\u963B\u6B62\u810F\u8BFB\u548C\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u4F46\u5E7B\u8BFB\u4ECD\u6709\u53EF\u80FD\u53D1\u751F\u3002</strong></li><li><strong>TransactionDefinition.ISOLATION_SERIALIZABLE:</strong> \u6700\u9AD8\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u5B8C\u5168\u670D\u4ECEACID\u7684\u9694\u79BB\u7EA7\u522B\u3002\u6240\u6709\u7684\u4E8B\u52A1\u4F9D\u6B21\u9010\u4E2A\u6267\u884C\uFF0C\u8FD9\u6837\u4E8B\u52A1\u4E4B\u95F4\u5C31\u5B8C\u5168\u4E0D\u53EF\u80FD\u4EA7\u751F\u5E72\u6270\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u8BE5\u7EA7\u522B\u53EF\u4EE5\u9632\u6B62\u810F\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u4EE5\u53CA\u5E7B\u8BFB</strong>\u3002\u4F46\u662F\u8FD9\u5C06\u4E25\u91CD\u5F71\u54CD\u7A0B\u5E8F\u7684\u6027\u80FD\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u4E5F\u4E0D\u4F1A\u7528\u5230\u8BE5\u7EA7\u522B\u3002</li></ul><h5 id="_2-2-1-2-\u4E8B\u52A1\u4F20\u64AD\u884C\u4E3A-\u4E3A\u4E86\u89E3\u51B3\u4E1A\u52A1\u5C42\u65B9\u6CD5\u4E4B\u95F4\u4E92\u76F8\u8C03\u7528\u7684\u4E8B\u52A1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-1-2-\u4E8B\u52A1\u4F20\u64AD\u884C\u4E3A-\u4E3A\u4E86\u89E3\u51B3\u4E1A\u52A1\u5C42\u65B9\u6CD5\u4E4B\u95F4\u4E92\u76F8\u8C03\u7528\u7684\u4E8B\u52A1\u95EE\u9898" aria-hidden="true">#</a> 2.2.1.2 \u4E8B\u52A1\u4F20\u64AD\u884C\u4E3A\uFF08\u4E3A\u4E86\u89E3\u51B3\u4E1A\u52A1\u5C42\u65B9\u6CD5\u4E4B\u95F4\u4E92\u76F8\u8C03\u7528\u7684\u4E8B\u52A1\u95EE\u9898\uFF09</h5><p>\u5F53\u4E8B\u52A1\u65B9\u6CD5\u88AB\u53E6\u4E00\u4E2A\u4E8B\u52A1\u65B9\u6CD5\u8C03\u7528\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u4E8B\u52A1\u5E94\u8BE5\u5982\u4F55\u4F20\u64AD\u3002\u4F8B\u5982\uFF1A\u65B9\u6CD5\u53EF\u80FD\u7EE7\u7EED\u5728\u73B0\u6709\u4E8B\u52A1\u4E2D\u8FD0\u884C\uFF0C\u4E5F\u53EF\u80FD\u5F00\u542F\u4E00\u4E2A\u65B0\u4E8B\u52A1\uFF0C\u5E76\u5728\u81EA\u5DF1\u7684\u4E8B\u52A1\u4E2D\u8FD0\u884C\u3002\u5728TransactionDefinition\u5B9A\u4E49\u4E2D\u5305\u62EC\u4E86\u5982\u4E0B\u51E0\u4E2A\u8868\u793A\u4F20\u64AD\u884C\u4E3A\u7684\u5E38\u91CF\uFF1A</p><p><strong>\u652F\u6301\u5F53\u524D\u4E8B\u52A1\u7684\u60C5\u51B5\uFF1A</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_REQUIRED\uFF1A</strong> \u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u52A0\u5165\u8BE5\u4E8B\u52A1\uFF1B\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4E8B\u52A1\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E8B\u52A1\u3002</li><li><strong>TransactionDefinition.PROPAGATION_SUPPORTS\uFF1A</strong> \u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u52A0\u5165\u8BE5\u4E8B\u52A1\uFF1B\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4E8B\u52A1\uFF0C\u5219\u4EE5\u975E\u4E8B\u52A1\u7684\u65B9\u5F0F\u7EE7\u7EED\u8FD0\u884C\u3002</li><li><strong>TransactionDefinition.PROPAGATION_MANDATORY\uFF1A</strong> \u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u52A0\u5165\u8BE5\u4E8B\u52A1\uFF1B\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4E8B\u52A1\uFF0C\u5219\u629B\u51FA\u5F02\u5E38\u3002\uFF08mandatory\uFF1A\u5F3A\u5236\u6027\uFF09</li></ul><p><strong>\u4E0D\u652F\u6301\u5F53\u524D\u4E8B\u52A1\u7684\u60C5\u51B5\uFF1A</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_REQUIRES_NEW\uFF1A</strong> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E8B\u52A1\uFF0C\u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u628A\u5F53\u524D\u4E8B\u52A1\u6302\u8D77\u3002</li><li><strong>TransactionDefinition.PROPAGATION_NOT_SUPPORTED\uFF1A</strong> \u4EE5\u975E\u4E8B\u52A1\u65B9\u5F0F\u8FD0\u884C\uFF0C\u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u628A\u5F53\u524D\u4E8B\u52A1\u6302\u8D77\u3002</li><li><strong>TransactionDefinition.PROPAGATION_NEVER\uFF1A</strong> \u4EE5\u975E\u4E8B\u52A1\u65B9\u5F0F\u8FD0\u884C\uFF0C\u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u629B\u51FA\u5F02\u5E38\u3002</li></ul><p><strong>\u5176\u4ED6\u60C5\u51B5\uFF1A</strong></p><ul><li><strong>TransactionDefinition.PROPAGATION_NESTED\uFF1A</strong> \u5982\u679C\u5F53\u524D\u5B58\u5728\u4E8B\u52A1\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u4E8B\u52A1\u4F5C\u4E3A\u5F53\u524D\u4E8B\u52A1\u7684\u5D4C\u5957\u4E8B\u52A1\u6765\u8FD0\u884C\uFF1B\u5982\u679C\u5F53\u524D\u6CA1\u6709\u4E8B\u52A1\uFF0C\u5219\u8BE5\u53D6\u503C\u7B49\u4EF7\u4E8ETransactionDefinition.PROPAGATION_REQUIRED\u3002</li></ul><p>\u8FD9\u91CC\u9700\u8981\u6307\u51FA\u7684\u662F\uFF0C\u524D\u9762\u7684\u516D\u79CD\u4E8B\u52A1\u4F20\u64AD\u884C\u4E3A\u662F Spring \u4ECE EJB \u4E2D\u5F15\u5165\u7684\uFF0C\u4ED6\u4EEC\u5171\u4EAB\u76F8\u540C\u7684\u6982\u5FF5\u3002\u800C <strong>PROPAGATION_NESTED</strong> \u662F Spring \u6240\u7279\u6709\u7684\u3002\u4EE5 PROPAGATION_NESTED \u542F\u52A8\u7684\u4E8B\u52A1\u5185\u5D4C\u4E8E\u5916\u90E8\u4E8B\u52A1\u4E2D\uFF08\u5982\u679C\u5B58\u5728\u5916\u90E8\u4E8B\u52A1\u7684\u8BDD\uFF09\uFF0C\u6B64\u65F6\uFF0C\u5185\u5D4C\u4E8B\u52A1\u5E76\u4E0D\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u4E8B\u52A1\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u5916\u90E8\u4E8B\u52A1\u7684\u5B58\u5728\uFF0C\u53EA\u6709\u901A\u8FC7\u5916\u90E8\u7684\u4E8B\u52A1\u63D0\u4EA4\uFF0C\u624D\u80FD\u5F15\u8D77\u5185\u90E8\u4E8B\u52A1\u7684\u63D0\u4EA4\uFF0C\u5D4C\u5957\u7684\u5B50\u4E8B\u52A1\u4E0D\u80FD\u5355\u72EC\u63D0\u4EA4\u3002\u5982\u679C\u719F\u6089 JDBC \u4E2D\u7684\u4FDD\u5B58\u70B9\uFF08SavePoint\uFF09\u7684\u6982\u5FF5\uFF0C\u90A3\u5D4C\u5957\u4E8B\u52A1\u5C31\u5F88\u5BB9\u6613\u7406\u89E3\u4E86\uFF0C\u5176\u5B9E\u5D4C\u5957\u7684\u5B50\u4E8B\u52A1\u5C31\u662F\u4FDD\u5B58\u70B9\u7684\u4E00\u4E2A\u5E94\u7528\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u53EF\u4EE5\u5305\u62EC\u591A\u4E2A\u4FDD\u5B58\u70B9\uFF0C\u6BCF\u4E00\u4E2A\u5D4C\u5957\u5B50\u4E8B\u52A1\u3002\u53E6\u5916\uFF0C\u5916\u90E8\u4E8B\u52A1\u7684\u56DE\u6EDA\u4E5F\u4F1A\u5BFC\u81F4\u5D4C\u5957\u5B50\u4E8B\u52A1\u7684\u56DE\u6EDA\u3002</p><h5 id="_2-2-1-3-\u4E8B\u52A1\u8D85\u65F6\u5C5E\u6027-\u4E00\u4E2A\u4E8B\u52A1\u5141\u8BB8\u6267\u884C\u7684\u6700\u957F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-2-1-3-\u4E8B\u52A1\u8D85\u65F6\u5C5E\u6027-\u4E00\u4E2A\u4E8B\u52A1\u5141\u8BB8\u6267\u884C\u7684\u6700\u957F\u65F6\u95F4" aria-hidden="true">#</a> 2.2.1.3 \u4E8B\u52A1\u8D85\u65F6\u5C5E\u6027(\u4E00\u4E2A\u4E8B\u52A1\u5141\u8BB8\u6267\u884C\u7684\u6700\u957F\u65F6\u95F4)</h5><p>\u6240\u8C13\u4E8B\u52A1\u8D85\u65F6\uFF0C\u5C31\u662F\u6307\u4E00\u4E2A\u4E8B\u52A1\u6240\u5141\u8BB8\u6267\u884C\u7684\u6700\u957F\u65F6\u95F4\uFF0C\u5982\u679C\u8D85\u8FC7\u8BE5\u65F6\u95F4\u9650\u5236\u4F46\u4E8B\u52A1\u8FD8\u6CA1\u6709\u5B8C\u6210\uFF0C\u5219\u81EA\u52A8\u56DE\u6EDA\u4E8B\u52A1\u3002\u5728 TransactionDefinition \u4E2D\u4EE5 int \u7684\u503C\u6765\u8868\u793A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5176\u5355\u4F4D\u662F\u79D2\u3002</p><h5 id="_2-2-1-4-\u4E8B\u52A1\u53EA\u8BFB\u5C5E\u6027-\u5BF9\u4E8B\u7269\u8D44\u6E90\u662F\u5426\u6267\u884C\u53EA\u8BFB\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-2-1-4-\u4E8B\u52A1\u53EA\u8BFB\u5C5E\u6027-\u5BF9\u4E8B\u7269\u8D44\u6E90\u662F\u5426\u6267\u884C\u53EA\u8BFB\u64CD\u4F5C" aria-hidden="true">#</a> 2.2.1.4 \u4E8B\u52A1\u53EA\u8BFB\u5C5E\u6027\uFF08\u5BF9\u4E8B\u7269\u8D44\u6E90\u662F\u5426\u6267\u884C\u53EA\u8BFB\u64CD\u4F5C\uFF09</h5><p>\u4E8B\u52A1\u7684\u53EA\u8BFB\u5C5E\u6027\u662F\u6307\uFF0C\u5BF9\u4E8B\u52A1\u6027\u8D44\u6E90\u8FDB\u884C\u53EA\u8BFB\u64CD\u4F5C\u6216\u8005\u662F\u8BFB\u5199\u64CD\u4F5C\u3002\u6240\u8C13\u4E8B\u52A1\u6027\u8D44\u6E90\u5C31\u662F\u6307\u90A3\u4E9B\u88AB\u4E8B\u52A1\u7BA1\u7406\u7684\u8D44\u6E90\uFF0C\u6BD4\u5982\u6570\u636E\u6E90\u3001 JMS \u8D44\u6E90\uFF0C\u4EE5\u53CA\u81EA\u5B9A\u4E49\u7684\u4E8B\u52A1\u6027\u8D44\u6E90\u7B49\u7B49\u3002\u5982\u679C\u786E\u5B9A\u53EA\u5BF9\u4E8B\u52A1\u6027\u8D44\u6E90\u8FDB\u884C\u53EA\u8BFB\u64CD\u4F5C\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u5C06\u4E8B\u52A1\u6807\u5FD7\u4E3A\u53EA\u8BFB\u7684\uFF0C\u4EE5\u63D0\u9AD8\u4E8B\u52A1\u5904\u7406\u7684\u6027\u80FD\u3002\u5728 TransactionDefinition \u4E2D\u4EE5 boolean \u7C7B\u578B\u6765\u8868\u793A\u8BE5\u4E8B\u52A1\u662F\u5426\u53EA\u8BFB\u3002</p><h5 id="_2-2-1-5-\u56DE\u6EDA\u89C4\u5219-\u5B9A\u4E49\u4E8B\u52A1\u56DE\u6EDA\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-2-1-5-\u56DE\u6EDA\u89C4\u5219-\u5B9A\u4E49\u4E8B\u52A1\u56DE\u6EDA\u89C4\u5219" aria-hidden="true">#</a> 2.2.1.5 \u56DE\u6EDA\u89C4\u5219\uFF08\u5B9A\u4E49\u4E8B\u52A1\u56DE\u6EDA\u89C4\u5219\uFF09</h5><p>\u8FD9\u4E9B\u89C4\u5219\u5B9A\u4E49\u4E86\u54EA\u4E9B\u5F02\u5E38\u4F1A\u5BFC\u81F4\u4E8B\u52A1\u56DE\u6EDA\u800C\u54EA\u4E9B\u4E0D\u4F1A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E8B\u52A1\u53EA\u6709\u9047\u5230\u8FD0\u884C\u671F\u5F02\u5E38\u65F6\u624D\u4F1A\u56DE\u6EDA\uFF0C\u800C\u5728\u9047\u5230\u68C0\u67E5\u578B\u5F02\u5E38\u65F6\u4E0D\u4F1A\u56DE\u6EDA\uFF08\u8FD9\u4E00\u884C\u4E3A\u4E0EEJB\u7684\u56DE\u6EDA\u884C\u4E3A\u662F\u4E00\u81F4\u7684\uFF09\u3002 \u4F46\u662F\u4F60\u53EF\u4EE5\u58F0\u660E\u4E8B\u52A1\u5728\u9047\u5230\u7279\u5B9A\u7684\u68C0\u67E5\u578B\u5F02\u5E38\u65F6\u50CF\u9047\u5230\u8FD0\u884C\u671F\u5F02\u5E38\u90A3\u6837\u56DE\u6EDA\u3002\u540C\u6837\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u58F0\u660E\u4E8B\u52A1\u9047\u5230\u7279\u5B9A\u7684\u5F02\u5E38\u4E0D\u56DE\u6EDA\uFF0C\u5373\u4F7F\u8FD9\u4E9B\u5F02\u5E38\u662F\u8FD0\u884C\u671F\u5F02\u5E38\u3002</p><h3 id="_2-3-transactionstatus\u63A5\u53E3\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-3-transactionstatus\u63A5\u53E3\u4ECB\u7ECD" aria-hidden="true">#</a> 2.3 TransactionStatus\u63A5\u53E3\u4ECB\u7ECD</h3><p>TransactionStatus\u63A5\u53E3\u7528\u6765\u8BB0\u5F55\u4E8B\u52A1\u7684\u72B6\u6001 \u8BE5\u63A5\u53E3\u5B9A\u4E49\u4E86\u4E00\u7EC4\u65B9\u6CD5,\u7528\u6765\u83B7\u53D6\u6216\u5224\u65AD\u4E8B\u52A1\u7684\u76F8\u5E94\u72B6\u6001\u4FE1\u606F.</p><p>PlatformTransactionManager.getTransaction(\u2026) \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A TransactionStatus \u5BF9\u8C61\u3002\u8FD4\u56DE\u7684TransactionStatus \u5BF9\u8C61\u53EF\u80FD\u4EE3\u8868\u4E00\u4E2A\u65B0\u7684\u6216\u5DF2\u7ECF\u5B58\u5728\u7684\u4E8B\u52A1\uFF08\u5982\u679C\u5728\u5F53\u524D\u8C03\u7528\u5806\u6808\u6709\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u4E8B\u52A1\uFF09\u3002</p><p><strong>TransactionStatus\u63A5\u53E3\u63A5\u53E3\u5185\u5BB9\u5982\u4E0B\uFF1A</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">{</span>\n    <span class="token keyword">boolean</span> <span class="token function">isNewTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u662F\u65B0\u7684\u4E8B\u7269</span>\n    <span class="token keyword">boolean</span> <span class="token function">hasSavepoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u6709\u6062\u590D\u70B9</span>\n    <span class="token keyword">void</span> <span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u8BBE\u7F6E\u4E3A\u53EA\u56DE\u6EDA</span>\n    <span class="token keyword">boolean</span> <span class="token function">isRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u4E3A\u53EA\u56DE\u6EDA</span>\n    <span class="token keyword">boolean</span> isCompleted<span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u5DF2\u5B8C\u6210</span>\n<span class="token punctuation">}</span> \n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>', 48);
const _hoisted_49 = {
  href: "https://juejin.im/post/5b00c52ef265da0b95276091",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("\u53EF\u80FD\u662F\u6700\u6F02\u4EAE\u7684Spring\u4E8B\u52A1\u7BA1\u7406\u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_49, [
        _hoisted_50,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Spring___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Spring\u4E8B\u52A1.html.vue"]]);
export { Spring___html as default };
