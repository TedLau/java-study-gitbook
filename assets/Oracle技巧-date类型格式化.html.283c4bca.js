import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.72d9fd95.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="oracle\u6280\u5DE7-date\u7C7B\u578B\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#oracle\u6280\u5DE7-date\u7C7B\u578B\u683C\u5F0F\u5316" aria-hidden="true">#</a> Oracle\u6280\u5DE7-date\u7C7B\u578B\u683C\u5F0F\u5316</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- ----------------------------</span>\n<span class="token comment">-- \u94A9\u5B50 \uFF0C\u7528\u4E8Esession\u8FDE\u63A5\u4E4B\u540E \u81EA\u52A8\u8BBE\u7F6E\u9ED8\u8BA4\u7684date\u7C7B\u578B\u683C\u5F0F\u5316 \u7B80\u5316\u65F6\u95F4\u67E5\u8BE2</span>\n<span class="token comment">-- \u5982\u9700\u8BBE\u7F6E\u5176\u5B83\u914D\u7F6E \u53EF\u5728\u6B64\u94A9\u5B50\u5185\u4EFB\u610F\u589E\u52A0\u5904\u7406\u8BED\u53E5</span>\n<span class="token comment">-- \u4F8B\u5982\uFF1A SELECT * FROM sys_user WHERE create_time BETWEEN &#39;2022-03-01 00:00:00&#39; AND &#39;2022-04-01 00:00:00&#39;</span>\n<span class="token comment">-- ----------------------------</span>\n<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">trigger</span> login_trg\n<span class="token keyword">after</span> logon <span class="token keyword">on</span> <span class="token keyword">database</span>\n<span class="token keyword">begin</span>\n<span class="token keyword">execute</span> immediate <span class="token string">&#39;alter session set nls_date_format=&#39;&#39;YYYY-MM-DD HH24:MI:SS&#39;&#39;&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">end</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
var Oracle__Date______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Oracle\u6280\u5DE7-date\u7C7B\u578B\u683C\u5F0F\u5316.html.vue"]]);
export { Oracle__Date______html as default };
