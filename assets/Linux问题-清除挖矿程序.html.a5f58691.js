import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.72d9fd95.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u6E05\u9664\u6316\u77FF\u7A0B\u5E8F-sysupdate-networkservice\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6316\u77FF\u7A0B\u5E8F-sysupdate-networkservice\u8FDB\u7A0B" aria-hidden="true">#</a> \u6E05\u9664\u6316\u77FF\u7A0B\u5E8F\uFF08sysupdate, networkservice\u8FDB\u7A0B\uFF09</h1><h2 id="_1-top\u67E5\u770Bcpu\u4F7F\u7528\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-top\u67E5\u770Bcpu\u4F7F\u7528\u72B6\u6001" aria-hidden="true">#</a> 1. top\u67E5\u770Bcpu\u4F7F\u7528\u72B6\u6001</h2><p>\u6211\u4EEC\u53D1\u73B0\u6709\u4E24\u4E2A\u8FDB\u7A0Bcpu\u5360\u7528\u90FD\u8D85\u8FC7100%\u4E86\uFF0C\u800C\u4E14\u6211\u4EEC\u4E5F\u5E76\u4E0D\u77E5\u9053\u4ED6\u662F\u5E72\u561B\u7684\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191016094413288.png" alt="image-20191016094413288"></p><h2 id="_2-\u901A\u8FC7\u8FDB\u7A0B\u53F7\u67E5\u8BE2\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u901A\u8FC7\u8FDB\u7A0B\u53F7\u67E5\u8BE2\u4F4D\u7F6E" aria-hidden="true">#</a> 2.\u901A\u8FC7\u8FDB\u7A0B\u53F7\u67E5\u8BE2\u4F4D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls -l proc/{\u8FDB\u7A0B\u53F7}/exe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191016094622180.png" alt="image-20191016094622180"></p><h2 id="_2-\u5E72\u6389\u6316\u77FF\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u5E72\u6389\u6316\u77FF\u8FDB\u7A0B" aria-hidden="true">#</a> 2.\u5E72\u6389\u6316\u77FF\u8FDB\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kill -9 6249\nkill -9 6292\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5220\u9664\u6316\u77FF\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-\u5220\u9664\u6316\u77FF\u7A0B\u5E8F" aria-hidden="true">#</a> 3. \u5220\u9664\u6316\u77FF\u7A0B\u5E8F</h3><ul><li>\u4E3B\u8981\u5305\u62ECnetworkservice\u3001sysguard\u3001update.sh\u3001config.json,sysupdate</li><li>\u76F4\u63A5\u5220\u9664\u53EF\u80FD\u65E0\u6CD5\u5220\u9664\uFF0C\u9700\u8981\u5148\u6267\u884C chattr -i</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chattr -i networkservice\nrm -f networkservice\nchattr -i sysguard\nrm -f sysguard\nchattr -i sysguard\nrm -f sysguard\nchattr -i config.json\nrm -f config.json\nchattr -i sysupdate\nrm -f sysupdate\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5220\u9664\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> 4. \u5220\u9664\u5B9A\u65F6\u4EFB\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /var/spool/cron/\n# \u770B\u662F\u5426\u6709\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u6709\u5219\u5220\u9664\nrm -rf nobody\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>', 15);
const _hoisted_16 = {
  href: "https://blog.csdn.net/daiyuhe/article/details/95683393",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u8BB0\u5F55\u4E00\u6B21\u6E05\u9664Linux\u6316\u77FF\u75C5\u6BD2\u7684\u7ECF\u5386(sysupdate, networkservice\u8FDB\u7A0B)");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_16, [
        _hoisted_17,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Linux__________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Linux\u95EE\u9898-\u6E05\u9664\u6316\u77FF\u7A0B\u5E8F.html.vue"]]);
export { Linux__________html as default };
