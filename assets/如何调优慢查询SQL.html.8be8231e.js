import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.77c7768c.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5982\u4F55\u8C03\u4F18\u6162\u67E5\u8BE2sql" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8C03\u4F18\u6162\u67E5\u8BE2sql" aria-hidden="true">#</a> \u5982\u4F55\u8C03\u4F18\u6162\u67E5\u8BE2SQL</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5728\u5199\u7A0B\u5E8F\u7684\u65F6\u5019\u5982\u4F55\u5B9A\u4F4D\u5E76\u4F18\u5316\u6162\u67E5\u8BE2\u5462\uFF1F\u5177\u4F53\u573A\u666F\u5177\u4F53\u5206\u6790\uFF0C\u5927\u4F53\u601D\u8DEF\u5982\u4E0B</p><ol><li>\u6839\u636E\u6162\u65E5\u5FD7\u5B9A\u4F4D\u6162\u67E5\u8BE2sql</li><li>\u4F7F\u7528explain\u7B49\u5DE5\u5177\u5206\u6790sql</li><li>\u4FEE\u6539sql\u6216\u8005\u5C3D\u91CF\u8BA9sql\u8D70\u7D22\u5F15</li></ol><h2 id="_2-\u6839\u636E\u6162\u65E5\u5FD7\u5B9A\u4F4D\u6162\u67E5\u8BE2sql" tabindex="-1"><a class="header-anchor" href="#_2-\u6839\u636E\u6162\u65E5\u5FD7\u5B9A\u4F4D\u6162\u67E5\u8BE2sql" aria-hidden="true">#</a> 2. \u6839\u636E\u6162\u65E5\u5FD7\u5B9A\u4F4D\u6162\u67E5\u8BE2sql</h2><ol><li><p>\u67E5\u770B\u6162\u65E5\u5FD7\u914D\u7F6E\u60C5\u51B5</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> VARIABLES <span class="token operator">like</span> <span class="token string">&#39;%query%&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231229429.png" alt="image-20210405231229429"></p></li></ol><ul><li>Long_query_time: \u9ED8\u8BA4\u662F10s\u5C31\u7B97\u662F\u6162\u65E5\u5FD7\u4E86</li><li>Show_query_log: \u6162\u65E5\u5FD7\u7684\u5F00\u542F\u72B6\u6001</li><li>show_query_log_file: \u6162\u65E5\u5FD7\u6240\u5728\u7684\u5730\u5740</li></ul><ol start="2"><li><p>\u6162\u65E5\u5FD7\u7684\u6570\u91CF</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">&#39;%slow_queries%&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231632132.png" alt="image-20210405231632132"></p></li><li><p>\u6162\u65E5\u5FD7\u6253\u5F00</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u4F1A\u8BDD\u4E2D\u66F4\u6539\uFF08\u91CD\u542F\u540E\u4F1A\u6062\u590D\u9ED8\u8BA4\uFF09</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">#\u6162\u65E5\u5FD7\u6253\u5F00</span>\n<span class="token keyword">set</span> <span class="token keyword">global</span> slow_query_log <span class="token operator">=</span> <span class="token keyword">on</span>\n<span class="token comment">#\u6162\u67E5\u8BE2\u7684\u65F6\u95F4\u8BBE\u7F6E\u62101s</span>\n<span class="token keyword">set</span> <span class="token keyword">global</span>  long_query_time <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231723049.png" alt="image-20210405231723049"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405231849634.png" alt="image-20210405231849634"></p></li></ol><ul><li><p>\u65B9\u5F0F\u4E8C\uFF1A\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF08\u91CD\u542F\u540E\u914D\u7F6E\u8FD8\u5728\uFF09</p><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6my.cnf\uFF0C\u5728[mysqld]\u4E0B\u7684\u4E0B\u65B9\u52A0\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[mysqld]\nslow_query_log = ON\nlong_query_time = 1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="4"><li><p>\u91CD\u542FMySQL\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>service mysqld restart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u8BBE\u7F6E\u540E\u7684\u53C2\u6570</p><p>show VARIABLES like &#39;%query%&#39;</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405233551896.png" alt="image-20210405233551896"></p></li><li><p>\u67E5\u770B\u6162\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">vim</span> /var/lib/mysql/iZwz914d1peizv4h7laju4Z-slow.log\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234141934.png" alt="image-20210405234141934"></p></li></ol><h2 id="_3-\u4F7F\u7528explain\u7B49\u5DE5\u5177\u5206\u6790sql" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528explain\u7B49\u5DE5\u5177\u5206\u6790sql" aria-hidden="true">#</a> 3. \u4F7F\u7528explain\u7B49\u5DE5\u5177\u5206\u6790sql</h2><ol><li>\u5728\u67E5\u8BE2\u8BED\u53E5\u524D\u9762\u52A0\u4E0Aexplain</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234252604.png" alt="image-20210405234252604"></p><p>\u5176\u4E2D\u4E24\u4E2A\u5B57\u6BB5\u975E\u5E38\u91CD\u8981</p><ul><li><p>type\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234357173.png" alt="image-20210405234357173"></p></li><li><p>extra\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234420498.png" alt="image-20210405234420498"></p></li></ul><h2 id="_4-\u4FEE\u6539sql\u6216\u8005\u5C3D\u91CF\u8BA9sql\u8D70\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539sql\u6216\u8005\u5C3D\u91CF\u8BA9sql\u8D70\u7D22\u5F15" aria-hidden="true">#</a> 4. \u4FEE\u6539sql\u6216\u8005\u5C3D\u91CF\u8BA9sql\u8D70\u7D22\u5F15</h2><h3 id="_4-1-\u65B9\u6848\u4E00-\u67E5\u8BE2\u5176\u4ED6\u6709\u7D22\u5F15\u7684\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_4-1-\u65B9\u6848\u4E00-\u67E5\u8BE2\u5176\u4ED6\u6709\u7D22\u5F15\u7684\u5B57\u6BB5" aria-hidden="true">#</a> 4.1 \u65B9\u6848\u4E00\uFF1A\u67E5\u8BE2\u5176\u4ED6\u6709\u7D22\u5F15\u7684\u5B57\u6BB5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234611399.png" alt="image-20210405234611399"></p><h3 id="_4-2-\u65B9\u6848\u4E8C-\u6DFB\u52A0\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_4-2-\u65B9\u6848\u4E8C-\u6DFB\u52A0\u7D22\u5F15" aria-hidden="true">#</a> 4.2 \u65B9\u6848\u4E8C\uFF1A\u6DFB\u52A0\u7D22\u5F15</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210405234645956.png" alt="image-20210405234645956"></p>', 20);
const _hoisted_21 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_21);
}
var _______SQL_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5982\u4F55\u8C03\u4F18\u6162\u67E5\u8BE2SQL.html.vue"]]);
export { _______SQL_html as default };
