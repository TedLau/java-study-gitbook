import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="springboot\u5165\u95E8-springboot\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#springboot\u5165\u95E8-springboot\u7B80\u4ECB" aria-hidden="true">#</a> SpringBoot\u5165\u95E8-SpringBoot\u7B80\u4ECB</h1><blockquote><p>\u4E3A\u4EC0\u4E48\u6709\u4E86SpringFramework\u8FD8\u4F1A\u8BDE\u751FSpringBoot\uFF1F\u7B80\u5355\u800C\u8A00\uFF0C\u56E0\u4E3A\u867D\u7136Spring\u7684\u7EC4\u4EF6\u4EE3\u7801\u662F\u8F7B\u91CF\u7EA7\u7684\uFF0C\u4F46\u5B83\u7684\u914D\u7F6E\u5374\u662F\u91CD\u91CF\u7EA7\u7684\uFF1B\u6240\u4EE5SpringBoot\u7684\u8BBE\u8BA1\u7B56\u7565\u662F\u901A\u8FC7<strong>\u5F00\u7BB1\u5373\u7528</strong>\u548C<strong>\u7EA6\u5B9A\u5927\u4E8E\u914D\u7F6E</strong> \u6765\u89E3\u51B3\u914D\u7F6E\u91CD\u7684\u95EE\u9898\u7684\u3002</p></blockquote><h2 id="_1-springframework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898-\u6CA1\u6709\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-springframework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898-\u6CA1\u6709\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 1. SpringFramework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u6CA1\u6709\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F</h2><h3 id="_1-1-springframework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-1-springframework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 1.1 SpringFramework\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h3><p>Spring\u662FJava\u4F01\u4E1A\u7248\uFF08Java Enterprise Edition\uFF0CJEE\uFF0C\u4E5F\u79F0J2EE\uFF09\u7684\u8F7B\u91CF\u7EA7\u4EE3\u66FF\u54C1\u3002\u65E0\u9700\u5F00\u53D1\u91CD\u91CF\u7EA7\u7684EnterpriseJavaBean\uFF08EJB\uFF09\uFF0CSpring\u4E3A\u4F01\u4E1A\u7EA7Java\u5F00\u53D1\u63D0\u4F9B\u4E86\u4E00\u79CD\u76F8\u5BF9\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u548C\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF0C\u7528\u7B80\u5355\u7684Java\u5BF9\u8C61\uFF08Plain Old Java Object\uFF0CPOJO\uFF09\u5B9E\u73B0\u4E86EJB\u7684\u529F\u80FD\u3002</p><ol><li>\u4F7F\u7528Spring\u7684IOC\u5BB9\u5668,\u5C06\u5BF9\u8C61\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u4EA4\u7ED9Spring,\u964D\u4F4E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8026\u5408\u6027,\u8BA9\u6211\u4EEC\u66F4\u4E13\u6CE8\u4E8E\u5E94\u7528\u903B\u8F91</li><li>\u53EF\u4EE5\u63D0\u4F9B\u4F17\u591A\u670D\u52A1,\u4E8B\u52A1\u7BA1\u7406,WS\u7B49</li><li>AOP\u7684\u5F88\u597D\u652F\u6301,\u65B9\u4FBF\u9762\u5411\u5207\u9762\u7F16\u7A0B\u3002</li><li>\u5BF9\u4E3B\u6D41\u7684\u6846\u67B6\u63D0\u4F9B\u4E86\u5F88\u597D\u7684\u96C6\u6210\u652F\u6301,\u5982Hibernate,Struts2,JPA\u7B49</li><li>Spring DI\u673A\u5236\u964D\u4F4E\u4E86\u4E1A\u52A1\u5BF9\u8C61\u66FF\u6362\u7684\u590D\u6742\u6027\u3002</li><li>Spring\u5C5E\u4E8E\u4F4E\u4FB5\u5165,\u4EE3\u7801\u6C61\u67D3\u6781\u4F4E\u3002</li><li>Spring\u7684\u9AD8\u5EA6\u53EF\u5F00\u653E\u6027,\u5E76\u4E0D\u5F3A\u5236\u4F9D\u8D56\u4E8ESpring,\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u7531\u9009\u62E9Spring\u90E8\u5206\u6216\u5168\u90E8</li></ol><h3 id="_1-2-springframework\u6CA1\u6709\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-2-springframework\u6CA1\u6709\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 1.2 SpringFramework\u6CA1\u6709\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h3><p><strong>\u867D\u7136Spring\u7684\u7EC4\u4EF6\u4EE3\u7801\u662F\u8F7B\u91CF\u7EA7\u7684\uFF0C\u4F46\u5B83\u7684\u914D\u7F6E\u5374\u662F\u91CD\u91CF\u7EA7\u7684</strong>\u3002</p><ol><li>\u4E00\u5F00\u59CB\uFF0CSpring\u7528XML\u914D\u7F6E\uFF0C\u800C\u4E14\u662F\u5F88\u591AXML\u914D\u7F6E\u3002</li><li>Spring 2.5\u5F15\u5165\u4E86\u57FA\u4E8E\u6CE8\u89E3\u7684\u7EC4\u4EF6\u626B\u63CF\uFF0C\u8FD9\u6D88\u9664\u4E86\u5927\u91CF\u9488\u5BF9\u5E94\u7528\u7A0B\u5E8F\u81EA\u8EAB\u7EC4\u4EF6\u7684\u663E\u5F0FXML\u914D\u7F6E\u3002</li><li>Spring 3.0\u5F15\u5165\u4E86\u57FA\u4E8EJava\u7684\u914D\u7F6E\uFF0C\u8FD9\u662F\u4E00\u79CD\u7C7B\u578B\u5B89\u5168\u7684\u53EF\u91CD\u6784\u914D\u7F6E\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4EE3\u66FFXML\u3002</li></ol><p>\u6240\u6709\u8FD9\u4E9B\u914D\u7F6E\u90FD\u4EE3\u8868\u4E86\u5F00\u53D1\u65F6\u7684\u635F\u8017\u3002\u56E0\u4E3A\u5728\u601D\u8003Spring\u7279\u6027\u914D\u7F6E\u548C\u89E3\u51B3\u4E1A\u52A1\u95EE\u9898\u4E4B\u95F4\u9700\u8981\u8FDB\u884C\u601D\u7EF4\u5207\u6362\uFF0C\u6240\u4EE5\u7F16\u5199\u914D\u7F6E\u6324\u5360\u4E86\u7F16\u5199\u5E94\u7528\u7A0B\u5E8F\u903B\u8F91\u7684\u65F6\u95F4\u3002\u548C\u6240\u6709\u6846\u67B6\u4E00\u6837\uFF0CSpring\u5B9E\u7528\uFF0C\u4F46\u4E0E\u6B64\u540C\u65F6\u5B83\u8981\u6C42\u7684\u56DE\u62A5\u4E5F\u4E0D\u5C11\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C<strong>\u9879\u76EE\u7684\u4F9D\u8D56\u7BA1\u7406\u4E5F\u662F\u4E00\u4EF6\u8017\u65F6\u8017\u529B\u7684\u4E8B</strong>\u60C5\u3002\u5728\u73AF\u5883\u642D\u5EFA\u65F6\uFF0C\u9700\u8981\u5206\u6790\u8981\u5BFC\u5165\u54EA\u4E9B\u5E93\u7684\u5750\u6807\uFF0C\u800C\u4E14\u8FD8\u9700\u8981\u5206\u6790\u5BFC\u5165\u4E0E\u4E4B\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u5176\u4ED6\u5E93\u7684\u5750\u6807\uFF0C<strong>\u4E00\u65E6\u9009\u9519\u4E86\u4F9D\u8D56\u7684\u7248\u672C\uFF0C\u968F\u4E4B\u800C\u6765\u7684\u4E0D\u517C\u5BB9\u95EE\u9898\u5C31\u4F1A\u4E25\u91CD\u963B\u788D\u9879\u76EE\u7684\u5F00\u53D1\u8FDB\u5EA6</strong>\u3002</p><ol><li>jsp\u4E2D\u8981\u5199\u5F88\u591A\u4EE3\u7801\u3001\u63A7\u5236\u5668\u8FC7\u4E8E\u7075\u6D3B,\u7F3A\u5C11\u4E00\u4E2A\u516C\u7528\u63A7\u5236\u5668</li><li>Spring\u4E0D\u652F\u6301\u5206\u5E03\u5F0F,\u8FD9\u4E5F\u662FEJB\u4ECD\u7136\u5728\u7528\u7684\u539F\u56E0\u4E4B\u4E00\u3002</li></ol><h2 id="_2-sringboot\u7684\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_2-sringboot\u7684\u6982\u8FF0" aria-hidden="true">#</a> 2. SringBoot\u7684\u6982\u8FF0</h2><h3 id="_2-1-springboot\u89E3\u51B3\u4E0A\u8FF0spring\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-springboot\u89E3\u51B3\u4E0A\u8FF0spring\u7684\u7F3A\u70B9" aria-hidden="true">#</a> 2.1 SpringBoot\u89E3\u51B3\u4E0A\u8FF0Spring\u7684\u7F3A\u70B9</h3><p>SpringBoot\u5BF9\u4E0A\u8FF0Spring\u7684\u7F3A\u70B9\u8FDB\u884C\u7684\u6539\u5584\u548C\u4F18\u5316\uFF0C\u57FA\u4E8E\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u7684\u601D\u60F3\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u4EBA\u5458\u4E0D\u5FC5\u5728\u914D\u7F6E\u4E0E\u903B\u8F91\u4E1A\u52A1\u4E4B\u95F4\u8FDB\u884C\u601D\u7EF4\u7684\u5207\u6362\uFF0C\u5168\u8EAB\u5FC3\u7684\u6295\u5165\u5230\u903B\u8F91\u4E1A\u52A1\u7684\u4EE3\u7801\u7F16\u5199\u4E2D\uFF0C\u4ECE\u800C\u5927\u5927\u63D0\u9AD8\u4E86\u5F00\u53D1\u7684\u6548\u7387\uFF0C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7F29\u77ED\u4E86\u9879\u76EE\u5468\u671F\u3002</p><h3 id="_2-2-springboot\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-2-springboot\u7684\u7279\u70B9" aria-hidden="true">#</a> 2.2 SpringBoot\u7684\u7279\u70B9</h3><ol><li>\u4E3A\u57FA\u4E8ESpring\u7684\u5F00\u53D1\u63D0\u4F9B\u66F4\u5FEB\u7684\u5165\u95E8\u4F53\u9A8C</li><li>\u5F00\u7BB1\u5373\u7528\uFF0C\u6CA1\u6709\u4EE3\u7801\u751F\u6210\uFF0C\u4E5F\u65E0\u9700XML\u914D\u7F6E\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u4FEE\u6539\u9ED8\u8BA4\u503C\u6765\u6EE1\u8DB3\u7279\u5B9A\u7684\u9700\u6C42</li><li>\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5927\u578B\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u975E\u529F\u80FD\u6027\u7279\u6027\uFF0C\u5982\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u3001\u5B89\u5168\u3001\u6307\u6807\uFF0C\u5065\u5EB7\u68C0\u6D4B\u3001\u5916\u90E8\u914D\u7F6E\u7B49</li></ol><p>SpringBoot\u4E0D\u662F\u5BF9Spring\u529F\u80FD\u4E0A\u7684\u589E\u5F3A\uFF0C\u800C\u662F\u63D0\u4F9B\u4E86\u4E00\u79CD\u5FEB\u901F\u4F7F\u7528Spring\u7684\u65B9\u5F0F</p><h3 id="_2-3-springboot\u7684\u6838\u5FC3\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-3-springboot\u7684\u6838\u5FC3\u529F\u80FD" aria-hidden="true">#</a> 2.3 SpringBoot\u7684\u6838\u5FC3\u529F\u80FD</h3><ul><li><p><strong>\u8D77\u6B65\u4F9D\u8D56</strong> \u8D77\u6B65\u4F9D\u8D56\u672C\u8D28\u4E0A\u662F\u4E00\u4E2AMaven\u9879\u76EE\u5BF9\u8C61\u6A21\u578B\uFF08Project Object Model\uFF0CPOM\uFF09\uFF0C\u5B9A\u4E49\u4E86\u5BF9\u5176\u4ED6\u5E93\u7684\u4F20\u9012\u4F9D\u8D56\uFF0C\u8FD9\u4E9B\u4E1C\u897F\u52A0\u5728\u4E00\u8D77\u5373\u652F\u6301\u67D0\u9879\u529F\u80FD\u3002</p><blockquote><p>\u7B80\u5355\u7684\u8BF4\uFF0C\u8D77\u6B65\u4F9D\u8D56\u5C31\u662F\u5C06\u5177\u5907\u67D0\u79CD\u529F\u80FD\u7684\u5750\u6807\u6253\u5305\u5230\u4E00\u8D77\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u7684\u529F\u80FD\u3002</p></blockquote></li><li><p><strong>\u81EA\u52A8\u914D\u7F6E</strong></p><p>Spring Boot\u7684\u81EA\u52A8\u914D\u7F6E\u662F\u4E00\u4E2A\u8FD0\u884C\u65F6\uFF08\u66F4\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF09\u7684\u8FC7\u7A0B\uFF0C\u8003\u8651\u4E86\u4F17\u591A\u56E0\u7D20\uFF0C\u624D\u51B3\u5B9ASpring\u914D\u7F6E\u5E94\u8BE5\u7528\u54EA\u4E2A\uFF0C\u4E0D\u8BE5\u7528\u54EA\u4E2A\u3002\u8BE5\u8FC7\u7A0B\u662FSpring\u81EA\u52A8\u5B8C\u6210\u7684\u3002</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 21);
const _hoisted_22 = {
  href: "https://pdai.tech/md/spring/springboot/springboot-x-overview.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("SpringBoot\u5165\u95E8 - SpringBoot\u7B80\u4ECB");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_22, [
        _hoisted_23,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var SpringBoot__SpringBoot___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SpringBoot\u5165\u95E8-SpringBoot\u7B80\u4ECB.html.vue"]]);
export { SpringBoot__SpringBoot___html as default };
