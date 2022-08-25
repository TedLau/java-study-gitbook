import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="arraylist-\u7684\u6269\u5BB9\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#arraylist-\u7684\u6269\u5BB9\u673A\u5236" aria-hidden="true">#</a> ArrayList \u7684\u6269\u5BB9\u673A\u5236</h1><h2 id="_1-\u5982\u4F55\u5B9E\u73B0\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u5B9E\u73B0\u6269\u5BB9" aria-hidden="true">#</a> 1.\u5982\u4F55\u5B9E\u73B0\u6269\u5BB9</h2><p>\u5E95\u5C42\u4E3B\u8981\u662F\u8FD9\u4E09\u4E2A\u79C1\u6709\u65B9\u6CD5\u914D\u5408\u5B9E\u73B0<code>grow()</code>,<code>grow(int minCapacity)</code>,<code>newCapacity(int minCapacity)</code>\u6269\u5BB9\u3002<strong>\u6700\u7EC8\u662F\u8C03\u7528\u4E86<code>Arrays.copyOf</code>\u65B9\u6CD5\u6765\u8FDB\u884C\u6269\u5145\u6570\u7EC4\u5BB9\u91CF\u7684</strong>\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65B0\u7684\u5BB9\u91CF\u662F<strong>\u539F\u5BB9\u91CF\u76841.5\u500D</strong>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6269\u5BB9\u4E00\u4E2A\nprivate Object[] grow() {\n	return grow(size + 1);\n}\n\n// \u4FDD\u8BC1\u6269\u5BB9\u5230\u671F\u671B\u5BB9\u91CFminCapacity\u53CA\u4EE5\u4E0A\nprivate Object[] grow(int minCapacity) {\n    return elementData = Arrays.copyOf(elementData,\n                                       newCapacity(minCapacity));\n}\n\n// \u6839\u636E\u671F\u671B\u5BB9\u91CFminCapacity\u8BA1\u7B97\u5B9E\u9645\u9700\u8981\u6269\u5BB9\u7684\u5BB9\u91CF\nprivate int newCapacity(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length; // \u5F97\u5230\u65E7\u5BB9\u91CF\n    int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1); // \u8BBE\u7F6E\u65B0\u5BB9\u91CF\u4E3A\u65E7\u5BB9\u91CF\u76841.5\u500D\n    if (newCapacity - minCapacity &lt;= 0) { // \u5982\u679C\u65B0\u5BB9\u91CF\u4ECD\u7136\u5C0F\u4E8E\u671F\u671B\u5BB9\u91CF\n        if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) // \u5982\u679C\u662F\u4F7F\u7528\u7684\u9ED8\u8BA4\u5BB9\u91CF\n            return Math.max(DEFAULT_CAPACITY, minCapacity); // \u53D6\u9ED8\u8BA4\u5BB9\u91CF\u548C\u671F\u671B\u5BB9\u91CF\u8F83\u5927\u503C\u8FD4\u56DE\n        if (minCapacity &lt; 0) // overflow // \u68C0\u67E5\u671F\u671B\u5BB9\u91CF\u662F\u5426\u8D8A\u754C\uFF08int \u7684\u8303\u56F4\uFF09\n            throw new OutOfMemoryError();\n        return minCapacity; // \u8FD4\u56DE\u671F\u671B\u5BB9\u91CF\n    }\n    // \u5982\u679C\u65B0\u5BB9\u91CF\u5927\u4E8E\u671F\u671B\u5BB9\u91CF\uFF0C\u5224\u65AD\u4E00\u4E0B\u65B0\u5BB9\u91CF\u662F\u5426\u8D8A\u754C\n    return (newCapacity - MAX_ARRAY_SIZE &lt;= 0)\n        ? newCapacity\n        : hugeCapacity(minCapacity);\n}\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u624B\u52A8\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-\u624B\u52A8\u6269\u5BB9" aria-hidden="true">#</a> 2. \u624B\u52A8\u6269\u5BB9</h2><p>grow\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u5B9E\u73B0\u81EA\u52A8\u6269\u5BB9\u7684\uFF0C\u800C\u7528\u6237\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u4EE5\u4E0B\u65B9\u6CD5\u5B9E\u73B0\u624B\u52A8\u6269\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void ensureCapacity(int minCapacity) {\n    if (minCapacity &gt; elementData.length\n        &amp;&amp; !(elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA\n             &amp;&amp; minCapacity &lt;= DEFAULT_CAPACITY)) {\n        modCount++;\n        grow(minCapacity);\n    }\n}\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u624B\u52A8\u6269\u5BB9\uFF1F\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u7528\u6237\u5DF2\u7ECF\u77E5\u9053\u5373\u5C06\u5B58\u5165\u5927\u91CF\u7684\u5143\u7D20\uFF0C\u6BD4\u5982\u76EE\u524D\u670920\u4E2A\u5143\u7D20\uFF0C\u5373\u5C06\u5B58\u51652000\u4E2A\u3002\u90A3\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528\u81EA\u52A8\u6269\u5BB9\u5C31\u4F1A\u6269\u5BB9\u591A\u6B21\u3002\u800C\u624B\u52A8\u6269\u5BB9\u53EF\u4EE5\u4E00\u6B21\u6027\u6269\u5BB9\u52302000\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002</p>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
var ArrayList______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ArrayList\u7684\u6269\u5BB9\u673A\u5236.html.vue"]]);
export { ArrayList______html as default };
