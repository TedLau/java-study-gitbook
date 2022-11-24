import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as t,a as e,b as d,d as n,e as r,r as s}from"./app.80b5c814.js";const o={},p=n(`<h1 id="\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212-jvm-\u6027\u80FD\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212-jvm-\u6027\u80FD\u8C03\u4F18" aria-hidden="true">#</a> \u5982\u4F55\u5408\u7406\u7684\u89C4\u5212 JVM \u6027\u80FD\u8C03\u4F18</h1><p>JVM\u6027\u80FD\u8C03\u4F18\u6D89\u53CA\u5230\u65B9\u65B9\u9762\u9762\u7684\u53D6\u820D\uFF0C\u5F80\u5F80\u662F\u7275\u4E00\u53D1\u800C\u52A8\u5168\u8EAB\uFF0C\u9700\u8981\u5168\u76D8\u8003\u8651\u5404\u65B9\u9762\u7684\u5F71\u54CD\u3002\u4F46\u4E5F\u6709\u4E00\u4E9B\u57FA\u7840\u7684\u7406\u8BBA\u548C\u539F\u5219\uFF0C\u7406\u89E3\u8FD9\u4E9B\u7406\u8BBA\u5E76\u9075\u5FAA\u8FD9\u4E9B\u539F\u5219\u4F1A\u8BA9\u4F60\u7684\u6027\u80FD\u8C03\u4F18\u4EFB\u52A1\u5C06\u4F1A\u66F4\u52A0\u8F7B\u677E\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u7406\u89E3\u672C\u7BC7\u6240\u4ECB\u7ECD\u7684\u5185\u5BB9\u3002\u4F60\u9700\u8981\u5DF2\u7ECF\u4E86\u89E3\u548C\u9075\u5FAA\u4EE5\u4E0B\u5185\u5BB9:</p><blockquote><p>1\u3001\u5DF2\u4E86\u89E3jvm \u5783\u573E\u6536\u96C6\u5668 2\u3001\u5DF2\u4E86\u89E3jvm \u6027\u80FD\u76D1\u63A7\u5E38\u7528\u5DE5\u5177 3\u3001\u80FD\u591F\u8BFB\u61C2gc\u65E5\u5FD7 4\u3001\u786E\u4FE1\u4E0D\u4E3A\u4E86\u8C03\u4F18\u800C\u8C03\u4F18\uFF0Cjvm\u8C03\u4F18\u4E0D\u80FD\u89E3\u51B3\u4E00\u5207\u6027\u80FD\u95EE\u9898</p></blockquote><p>\u5982\u679C\u5BF9\u8FD9\u4E9B\u4E0D\u4E86\u89E3\u4E0D\u5EFA\u8BAE\u8BFB\u672C\u7BC7\u6587\u7AE0\u3002</p><p>\u672C\u7BC7\u6587\u7AE0\u57FA\u4E8Ejvm\u6027\u80FD\u8C03\u4F18\uFF0C\u7ED3\u5408jvm\u7684\u5404\u9879\u53C2\u6570\u5BF9\u5E94\u7528\u7A0B\u5E8F\u8C03\u4F18\uFF0C\u4E3B\u8981\u5185\u5BB9\u6709\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\uFF1A</p><blockquote><p>1\u3001jvm\u8C03\u4F18\u7684\u4E00\u822C\u6D41\u7A0B 2\u3001jvm\u8C03\u4F18\u6240\u8981\u5173\u6CE8\u7684\u51E0\u4E2A\u6027\u80FD\u6307\u6807 3\u3001jvm\u8C03\u4F18\u9700\u8981\u638C\u63E1\u7684\u4E00\u4E9B\u539F\u5219 4\u3001\u8C03\u4F18\u7B56\u7565&amp;\u793A\u4F8B</p></blockquote><h2 id="_1-\u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21" tabindex="-1"><a class="header-anchor" href="#_1-\u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21" aria-hidden="true">#</a> 1. \u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21</h2><p>\u4E3A\u4E86\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u7CFB\u7EDF\u7684\u5404\u4E2A\u89D2\u5EA6\u548C\u5C42\u6B21\u6765\u8FDB\u884C\u4F18\u5316\uFF0C\u4EE5\u4E0B\u662F\u9700\u8981\u4F18\u5316\u7684\u51E0\u4E2A\u5C42\u6B21\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190926223235360.png" alt="image-20190926223235360" loading="lazy"></p><p>\u4ECE\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u9664\u4E86jvm\u8C03\u4F18\u4EE5\u5916\uFF0C\u8FD8\u6709\u5176\u4ED6\u51E0\u4E2A\u5C42\u9762\u9700\u8981\u6765\u5904\u7406\uFF0C\u6240\u4EE5\u9488\u5BF9\u7CFB\u7EDF\u7684\u8C03\u4F18\u4E0D\u662F\u53EA\u6709jvm\u8C03\u4F18\u4E00\u9879\uFF0C\u800C\u662F\u9700\u8981\u9488\u5BF9\u7CFB\u7EDF\u6765\u6574\u4F53\u8C03\u4F18\uFF0C\u624D\u80FD\u63D0\u5347\u7CFB\u7EDF\u7684\u6027\u80FD\u3002\u672C\u7BC7\u53EA\u9488\u5BF9jvm\u8C03\u4F18\u6765\u8BB2\u89E3\uFF0C\u5176\u4ED6\u51E0\u4E2A\u65B9\u9762\uFF0C\u540E\u7EED\u518D\u4ECB\u7ECD\u3002</p><h3 id="_1-1-\u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684" tabindex="-1"><a class="header-anchor" href="#_1-1-\u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684" aria-hidden="true">#</a> 1.1 \u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684</h3><p>\u5728\u8FDB\u884Cjvm\u8C03\u4F18\u4E4B\u524D\uFF0C\u6211\u4EEC\u5047\u8BBE\u9879\u76EE\u7684\u67B6\u6784\u8C03\u4F18\u548C\u4EE3\u7801\u8C03\u4F18\u5DF2\u7ECF\u8FDB\u884C\u8FC7\u6216\u8005\u662F\u9488\u5BF9\u5F53\u524D\u9879\u76EE\u662F\u6700\u4F18\u7684\u3002\u8FD9\u4E24\u4E2A\u662Fjvm\u8C03\u4F18\u7684\u57FA\u7840\uFF0C\u5E76\u4E14\u67B6\u6784\u8C03\u4F18\u662F\u5BF9\u7CFB\u7EDF\u5F71\u54CD\u6700\u5927\u7684 \uFF0C\u6211\u4EEC\u4E0D\u80FD\u6307\u671B\u4E00\u4E2A\u7CFB\u7EDF\u67B6\u6784\u6709\u7F3A\u9677\u6216\u8005\u4EE3\u7801\u5C42\u6B21\u4F18\u5316\u6CA1\u6709\u7A77\u5C3D\u7684\u5E94\u7528\uFF0C\u901A\u8FC7jvm\u8C03\u4F18\u4EE4\u5176\u8FBE\u5230\u4E00\u4E2A\u8D28\u7684\u98DE\u8DC3\uFF0C\u8FD9\u662F\u4E0D\u53EF\u80FD\u7684\u3002</p><h3 id="_1-2-\u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807-\u627E\u5230\u6027\u80FD\u74F6\u9888" tabindex="-1"><a class="header-anchor" href="#_1-2-\u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807-\u627E\u5230\u6027\u80FD\u74F6\u9888" aria-hidden="true">#</a> 1.2 \u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807\uFF0C\u627E\u5230\u6027\u80FD\u74F6\u9888</h3><p>\u53E6\u5916\uFF0C\u5728\u8C03\u4F18\u4E4B\u524D\uFF0C<strong>\u5FC5\u987B\u5F97\u6709\u660E\u786E\u7684\u6027\u80FD\u4F18\u5316\u76EE\u6807\uFF0C \u7136\u540E\u627E\u5230\u5176\u6027\u80FD\u74F6\u9888</strong>\u3002\u4E4B\u540E\u9488\u5BF9\u74F6\u9888\u7684\u4F18\u5316\uFF0C\u8FD8\u9700\u8981\u5BF9\u5E94\u7528\u8FDB\u884C\u538B\u529B\u548C\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u901A\u8FC7\u5404\u79CD\u76D1\u63A7\u548C\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u786E\u8BA4\u8C03\u4F18\u540E\u7684\u5E94\u7528\u662F\u5426\u5DF2\u7ECF\u8FBE\u5230\u76F8\u5173\u76EE\u6807\u3002</p><h2 id="_2-jvm\u8C03\u4F18\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-jvm\u8C03\u4F18\u6D41\u7A0B" aria-hidden="true">#</a> 2. jvm\u8C03\u4F18\u6D41\u7A0B</h2><p>\u8C03\u4F18\u7684\u6700\u7EC8\u76EE\u7684\u90FD\u662F\u4E3A\u4E86\u4EE4\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\u6700\u5C0F\u7684\u786C\u4EF6\u6D88\u8017\u6765\u627F\u8F7D\u66F4\u5927\u7684\u541E\u5410\u3002jvm\u7684\u8C03\u4F18\u4E5F\u4E0D\u4F8B\u5916\uFF0C<strong>jvm\u8C03\u4F18\u4E3B\u8981\u662F\u9488\u5BF9\u5783\u573E\u6536\u96C6\u5668\u7684\u6536\u96C6\u6027\u80FD\u4F18\u5316\uFF0C\u4EE4\u8FD0\u884C\u5728\u865A\u62DF\u673A\u4E0A\u7684\u5E94\u7528\u80FD\u591F\u4F7F\u7528\u66F4\u5C11\u7684\u5185\u5B58\u4EE5\u53CA\u5EF6\u8FDF\u83B7\u53D6\u66F4\u5927\u7684\u541E\u5410\u91CF</strong>\u3002\u5F53\u7136\u8FD9\u91CC\u7684\u6700\u5C11\u662F\u6700\u4F18\u7684\u9009\u62E9\uFF0C\u800C\u4E0D\u662F\u8D8A\u5C11\u8D8A\u597D\u3002</p><h3 id="_2-1-\u6027\u80FD\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6027\u80FD\u5B9A\u4E49" aria-hidden="true">#</a> 2.1 \u6027\u80FD\u5B9A\u4E49</h3><p>\u8981\u67E5\u627E\u548C\u8BC4\u4F30\u5668\u6027\u80FD\u74F6\u9888\uFF0C\u9996\u5148\u8981\u77E5\u9053\u6027\u80FD\u5B9A\u4E49\uFF0C\u5BF9\u4E8Ejvm\u8C03\u4F18\u6765\u8BF4\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u4EE5\u4E0B\u4E09\u4E2A\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4F9D\u4F5C\u4E3A\u8BC4\u4F30\u57FA\u7840:</p><ul><li>\u541E\u5410\u91CF\uFF1A\u91CD\u8981\u6307\u6807\u4E4B\u4E00\uFF0C\u662F\u6307\u4E0D\u8003\u8651\u5783\u573E\u6536\u96C6\u5F15\u8D77\u7684\u505C\u987F\u65F6\u95F4\u6216\u5185\u5B58\u6D88\u8017\uFF0C\u5783\u573E\u6536\u96C6\u5668\u80FD\u652F\u6491\u5E94\u7528\u8FBE\u5230\u7684\u6700\u9AD8\u6027\u80FD\u6307\u6807\u3002</li><li>\u5EF6\u8FDF\uFF1A\u5176\u5EA6\u91CF\u6807\u51C6\u662F\u7F29\u77ED\u7531\u4E8E\u5783\u573E\u554A\u6536\u96C6\u5F15\u8D77\u7684\u505C\u987F\u65F6\u95F4\u6216\u8005\u5B8C\u5168\u6D88\u9664\u56E0\u5783\u573E\u6536\u96C6\u6240\u5F15\u8D77\u7684\u505C\u987F\uFF0C\u907F\u514D\u5E94\u7528\u8FD0\u884C\u65F6\u53D1\u751F\u6296\u52A8\u3002</li><li>\u5185\u5B58\u5360\u7528\uFF1A\u5783\u573E\u6536\u96C6\u5668\u6D41\u7545\u8FD0\u884C\u6240\u9700\u8981 \u7684\u5185\u5B58\u6570\u91CF\u3002</li></ul><p>\u8FD9\u4E09\u4E2A\u5C5E\u6027\u4E2D\uFF0C\u5176\u4E2D\u4E00\u4E2A\u4EFB\u4F55\u4E00\u4E2A\u5C5E\u6027\u6027\u80FD\u7684\u63D0\u9AD8\uFF0C\u51E0\u4E4E\u90FD\u662F\u4EE5\u53E6\u5916\u4E00\u4E2A\u6216\u8005\u4E24\u4E2A\u5C5E\u6027\u6027\u80FD\u7684\u635F\u5931\u4F5C\u4EE3\u4EF7\uFF0C\u4E0D\u53EF\u517C\u5F97\uFF0C\u5177\u4F53\u67D0\u4E00\u4E2A\u5C5E\u6027\u6216\u8005\u4E24\u4E2A\u5C5E\u6027\u7684\u6027\u80FD\u5BF9\u5E94\u7528\u6765\u8BF4\u6BD4\u8F83\u91CD\u8981\uFF0C\u8981\u57FA\u4E8E\u5E94\u7528\u7684\u4E1A\u52A1\u9700\u6C42\u6765\u786E\u5B9A\u3002</p><h3 id="_2-2-jvm\u8C03\u4F18\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_2-2-jvm\u8C03\u4F18\u539F\u5219" aria-hidden="true">#</a> 2.2 JVM\u8C03\u4F18\u539F\u5219</h3><p>\u5728\u8C03\u4F18\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5E94\u8BE5\u8C28\u8BB0\u4EE5\u4E0B3\u4E2A\u539F\u5219\uFF0C\u4EE5\u4FBF\u5E2E\u52A9\u6211\u4EEC\u66F4\u8F7B\u677E\u7684\u5B8C\u6210\u5783\u573E\u6536\u96C6\u7684\u8C03\u4F18\uFF0C\u4ECE\u800C\u8FBE\u5230\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u8981\u6C42\u3002</p><blockquote><ol><li>MinorGC\u56DE\u6536\u539F\u5219\uFF1A \u6BCF\u6B21minor GC \u90FD\u8981\u5C3D\u53EF\u80FD\u591A\u7684\u6536\u96C6\u5783\u573E\u5BF9\u8C61\u3002\u4EE5\u51CF\u5C11\u5E94\u7528\u7A0B\u5E8F\u53D1\u751FFull GC\u7684\u9891\u7387\u3002</li><li>GC\u5185\u5B58\u6700\u5927\u5316\u539F\u5219\uFF1A\u5904\u7406\u541E\u5410\u91CF\u548C\u5EF6\u8FDF\u95EE\u9898\u65F6\u5019\uFF0C\u5783\u573E\u5904\u7406\u5668\u80FD\u4F7F\u7528\u7684\u5185\u5B58\u8D8A\u5927\uFF0C\u5783\u573E\u6536\u96C6\u7684\u6548\u679C\u8D8A\u597D\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u6D41\u7545\u3002</li><li>GC\u8C03\u4F183\u90092\u539F\u5219: \u5728\u6027\u80FD\u5C5E\u6027\u91CC\u9762\uFF0C\u541E\u5410\u91CF\u3001\u5EF6\u8FDF\u3001\u5185\u5B58\u5360\u7528\uFF0C\u6211\u4EEC\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E24\u4E2A\u8FDB\u884C\u8C03\u4F18\uFF0C\u4E0D\u53EF\u4E09\u8005\u517C\u5F97\u3002</li></ol></blockquote><h3 id="_2-3-\u6027\u80FD\u8C03\u4F18\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6027\u80FD\u8C03\u4F18\u6B65\u9AA4" aria-hidden="true">#</a> 2.3 \u6027\u80FD\u8C03\u4F18\u6B65\u9AA4</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/v2-3ad02453bce592d631ca4a9280d5a3ba_hd.jpg" alt="" loading="lazy"></p><p>\u4EE5\u4E0A\u5C31\u662F\u5BF9\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884Cjvm\u8C03\u4F18\u7684\u57FA\u672C\u6D41\u7A0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0Cjvm\u8C03\u4F18\u662F\u6839\u636E\u6027\u80FD\u6D4B\u8BD5\u7ED3\u679C\u4E0D\u65AD\u4F18\u5316\u914D\u7F6E\u800C\u591A\u6B21\u8FED\u4EE3\u7684\u8FC7\u7A0B\u3002\u5728\u8FBE\u5230\u6BCF\u4E00\u4E2A\u7CFB\u7EDF\u9700\u6C42\u6307\u6807\u4E4B\u524D\uFF0C\u4E4B\u524D\u7684\u6BCF\u4E2A\u6B65\u9AA4\u90FD\u6709\u53EF\u80FD\u7ECF\u5386\u591A\u6B21\u8FED\u4EE3\u3002\u6709\u65F6\u5019\u4E3A\u4E86\u8FBE\u5230\u67D0\u4E00\u65B9\u9762\u7684\u6307\u6807\uFF0C\u6709\u53EF\u80FD\u9700\u8981\u5BF9\u4E4B\u524D\u7684\u53C2\u6570\u8FDB\u884C\u591A\u6B21\u8C03\u6574\uFF0C\u8FDB\u800C\u9700\u8981\u628A\u4E4B\u524D\u7684\u6240\u6709\u6B65\u9AA4\u91CD\u65B0\u6D4B\u8BD5\u4E00\u904D\u3002</p><p>\u53E6\u5916\u8C03\u4F18\u4E00\u822C\u662F</p><ul><li><p>\u4ECE\u6EE1\u8DB3\u7A0B\u5E8F\u7684\u5185\u5B58\u4F7F\u7528\u9700\u6C42\u5F00\u59CB\u7684\uFF0C</p></li><li><p>\u4E4B\u540E\u662F\u65F6\u95F4\u5EF6\u8FDF\u7684\u8981\u6C42\uFF0C</p></li><li><p>\u6700\u540E\u624D\u662F\u541E\u5410\u91CF\u7684\u8981\u6C42\uFF0C</p><p>\u8981\u57FA\u4E8E\u8FD9\u4E2A\u6B65\u9AA4\u6765\u4E0D\u65AD\u4F18\u5316\uFF0C\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u90FD\u662F\u8FDB\u884C\u4E0B\u4E00\u6B65\u7684\u57FA\u7840\uFF0C\u4E0D\u53EF\u9006\u884C\u4E4B\u3002\u4EE5\u4E0B\u6211\u4EEC\u9488\u5BF9\u6BCF\u4E2A\u6B65\u9AA4\u8FDB\u884C\u8BE6\u7EC6\u7684\u793A\u4F8B\u8BB2\u89E3\u3002</p></li></ul><p>\u5728JVM\u7684\u8FD0\u884C\u6A21\u5F0F\u65B9\u9762\uFF0C\u6211\u4EEC\u76F4\u63A5\u9009\u62E9server\u6A21\u5F0F\uFF0C\u8FD9\u4E5F\u662Fjdk1.6\u4EE5\u540E\u5B98\u65B9\u63A8\u8350\u7684\u6A21\u5F0F\u3002</p><p>\u5728\u5783\u573E\u6536\u96C6\u5668\u65B9\u9762\uFF0C\u6211\u4EEC\u76F4\u63A5\u91C7\u7528\u4E86jdk1.6-1.8 \u4E2D\u9ED8\u8BA4\u7684parallel\u6536\u96C6\u5668\uFF08\u65B0\u751F\u4EE3\u91C7\u7528parallelGC,\u8001\u751F\u4EE3\u91C7\u7528parallelOldGC\uFF09\u3002</p><h2 id="_3-\u786E\u5B9A\u5185\u5B58\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u786E\u5B9A\u5185\u5B58\u5360\u7528" aria-hidden="true">#</a> 3. \u786E\u5B9A\u5185\u5B58\u5360\u7528</h2><p>\u5728\u786E\u5B9A\u5185\u5B58\u5360\u7528\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u4E24\u4E2A\u77E5\u8BC6\u70B9\uFF1A</p><ol><li>\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u9636\u6BB5</li><li>jvm\u5185\u5B58\u5206\u914D</li></ol><h3 id="_3-1-\u8FD0\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8FD0\u884C\u9636\u6BB5" aria-hidden="true">#</a> 3.1 \u8FD0\u884C\u9636\u6BB5</h3><p>\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u9636\u6BB5\uFF0C\u6211\u53EF\u4EE5\u5212\u5206\u4E3A\u4EE5\u4E0B\u4E09\u4E2A\u9636\u6BB5:</p><blockquote><p>1\u3001\u521D\u59CB\u5316\u9636\u6BB5 : jvm\u52A0\u8F7D\u5E94\u7528\u7A0B\u5E8F\uFF0C\u521D\u59CB\u5316\u5E94\u7528\u7A0B\u5E8F\u7684\u4E3B\u8981\u6A21\u5757\u548C\u6570\u636E\u3002 2\u3001\u7A33\u5B9A\u9636\u6BB5:\u5E94\u7528\u5728\u6B64\u65F6\u8FD0\u884C\u4E86\u5927\u591A\u6570\u65F6\u95F4\uFF0C\u7ECF\u5386\u8FC7\u538B\u529B\u6D4B\u8BD5\u7684\u4E4B\u540E\uFF0C\u5404\u9879\u6027\u80FD\u53C2\u6570\u5448\u7A33\u5B9A\u72B6\u6001\u3002\u6838\u5FC3\u51FD\u6570\u88AB\u6267\u884C\uFF0C\u5DF2\u7ECF\u88ABjit\u7F16\u8BD1\u9884\u70ED\u8FC7\u3002 3\u3001\u603B\u7ED3\u9636\u6BB5:\u6700\u540E\u7684\u603B\u7ED3\u9636\u6BB5\uFF0C\u8FDB\u884C\u4E00\u4E9B\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u751F\u6210\u54CD\u5E94\u7684\u7B56\u62A5\u544A\u3002\u8FD9\u4E2A\u9636\u6BB5\u6211\u4EEC\u53EF\u4EE5\u4E0D\u5173\u6CE8\u3002</p></blockquote><p>\u786E\u5B9A\u5185\u5B58\u5360\u7528\u4EE5\u53CA\u6D3B\u8DC3\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u6211\u4EEC\u5E94\u8BE5\u662F\u5728\u7A0B\u5E8F\u7684\u7A33\u5B9A\u9636\u6BB5\u6765\u8FDB\u884C\u786E\u5B9A\uFF0C\u800C\u4E0D\u662F\u5728\u9879\u76EE\u8D77\u521D\u9636\u6BB5\u6765\u8FDB\u884C\u786E\u5B9A\uFF0C\u5982\u4F55\u786E\u5B9A\uFF0C\u6211\u4EEC\u5148\u770B\u4EE5\u4E0Bjvm\u7684\u5185\u5B58\u5206\u914D\u3002</p><h3 id="_3-2-jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-2-jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570" aria-hidden="true">#</a> 3.2 jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190926225924786.png" alt="image-20190926225924786" loading="lazy"></p><p>jvm\u5806\u4E2D\u4E3B\u8981\u7684\u7A7A\u95F4\uFF0C\u5C31\u662F\u4EE5\u4E0A\u65B0\u751F\u4EE3\u3001\u8001\u751F\u4EE3\u3001\u6C38\u4E45\u4EE3\u7EC4\u6210,\u6574\u4E2A\u5806\u5927\u5C0F=\u65B0\u751F\u4EE3\u5927\u5C0F + \u8001\u751F\u4EE3\u5927\u5C0F + \u6C38\u4E45\u4EE3\u5927\u5C0F\u3002 \u5177\u4F53\u7684\u5BF9\u8C61\u63D0\u5347\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8FC7\u591A\u4ECB\u7ECD\u4E86\uFF0C\u6211\u4EEC\u770B\u4E0B\u4E00\u4E9Bjvm\u547D\u4EE4\u53C2\u6570\uFF0C\u5BF9\u5806\u5927\u5C0F\u7684\u6307\u5B9A\u3002\u5982\u679C\u4E0D\u91C7\u7528\u4EE5\u4E0B\u53C2\u6570\u8FDB\u884C\u6307\u5B9A\u7684\u8BDD\uFF0C\u865A\u62DF\u673A\u4F1A\u81EA\u52A8\u9009\u62E9\u5408\u9002\u7684\u503C\uFF0C\u540C\u65F6\u4E5F\u4F1A\u57FA\u4E8E\u7CFB\u7EDF\u7684\u5F00\u9500\u81EA\u52A8\u8C03\u6574\u3002</p><table><thead><tr><th>\u5206\u4EE3</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u5806\u5927\u5C0F</td><td>-Xms</td><td>\u521D\u59CB\u5806\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A\u7269\u7406\u5185\u5B58\u76841/64(&lt;1GB)</td></tr><tr><td></td><td>-Xmx</td><td>\u6700\u5927\u5806\u5927\u5C0F\uFF0C\u9ED8\u8BA4(MaxHeapFreeRatio\u53C2\u6570\u53EF\u4EE5\u8C03\u6574)\u7A7A\u4F59\u5806\u5185\u5B58\u5927\u4E8E70%\u65F6\uFF0CJVM\u4F1A\u51CF\u5C11\u5806\u76F4\u5230 -Xms\u7684\u6700\u5C0F\u9650\u5236</td></tr><tr><td>\u65B0\u751F\u4EE3</td><td>-XX:NewSize</td><td>\u65B0\u751F\u4EE3\u7A7A\u95F4\u5927\u5C0F\u521D\u59CB\u503C</td></tr><tr><td></td><td>-XX:MaxNewSize</td><td>\u65B0\u751F\u4EE3\u7A7A\u95F4\u5927\u5C0F\u6700\u5927\u503C</td></tr><tr><td></td><td>-Xmn</td><td>\u65B0\u751F\u4EE3\u7A7A\u95F4\u5927\u5C0F\uFF0C\u6B64\u5904\u7684\u5927\u5C0F\u662F(eden+2 survivor space)</td></tr><tr><td>\u6C38\u4E45\u4EE3</td><td>-XX:PermSize</td><td>\u6C38\u4E45\u4EE3\u7A7A\u95F4\u7684\u521D\u59CB\u503C&amp;\u6700\u5C0F\u503C</td></tr><tr><td></td><td>-XX\uFF1AMaxPermSize</td><td>\u6C38\u4E45\u4EE3\u7A7A\u95F4\u7684\u6700\u5927\u503C</td></tr><tr><td>\u8001\u5E74\u4EE3</td><td>\u8001\u5E74\u4EE3\u7684\u7A7A\u95F4\u5927\u5C0F\u4F1A\u6839\u636E\u65B0\u751F\u4EE3\u7684\u5927\u5C0F\u9690\u5F0F\u8BBE\u5B9A</td><td></td></tr><tr><td></td><td>\u521D\u59CB\u503C=-Xmx\u51CF\u53BB-XX:NewSize\u7684\u503C</td><td></td></tr><tr><td></td><td>\u6700\u5C0F\u503C=-Xmx\u503C\u51CF\u53BB-XX:MaxNewSize\u7684\u503C</td><td></td></tr></tbody></table><p>\u5728\u8BBE\u7F6E\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5173\u6CE8\u6027\u80FD\u5F00\u9500\u7684\u8BDD\uFF0C\u5E94\u5C3D\u91CF\u628A\u6C38\u4E45\u4EE3\u7684\u521D\u59CB\u503C\u4E0E\u6700\u5927\u503C\u8BBE\u7F6E\u4E3A\u540C\u4E00\u503C\uFF0C\u56E0\u4E3A\u6C38\u4E45\u4EE3\u7684\u5927\u5C0F\u8C03\u6574\u9700\u8981\u8FDB\u884CFullGC \u624D\u80FD\u5B9E\u73B0\u3002</p><h3 id="_2-3-\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F" aria-hidden="true">#</a> 2.3 \u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F</h3><p>\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u6D41\u7A0B:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190926231617920.png" alt="image-20190926231617920" loading="lazy"></p><p>\u5982\u524D\u6240\u8FF0\uFF0C\u6D3B\u8DC3\u6570\u636E\u5E94\u8BE5\u662F\u57FA\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7A33\u5B9A\u9636\u6BB5\u65F6\uFF0C\u89C2\u5BDF\u957F\u671F\u5B58\u6D3B\u4E0E\u5BF9\u8C61\u5728java\u5806\u4E2D\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F\u3002</p><p>\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u65F6\u5E94\u8BE5\u786E\u4FDD\u4EE5\u4E0B\u6761\u4EF6\u53D1\u751F\uFF1A</p><blockquote><p>1.\u6D4B\u8BD5\u65F6\uFF0C\u542F\u52A8\u53C2\u6570\u91C7\u7528jvm\u9ED8\u8BA4\u53C2\u6570\uFF0C\u4E0D\u4EBA\u4E3A\u8BBE\u7F6E\u3002 2.\u786E\u4FDDFull GC \u53D1\u751F\u65F6\uFF0C\u5E94\u7528\u7A0B\u5E8F\u6B63\u5904\u4E8E\u7A33\u5B9A\u9636\u6BB5\u3002</p></blockquote><p>\u91C7\u7528jvm\u9ED8\u8BA4\u53C2\u6570\u542F\u52A8\uFF0C\u662F\u4E3A\u4E86\u89C2\u5BDF\u5E94\u7528\u7A0B\u5E8F\u5728\u7A33\u5B9A\u9636\u6BB5\u7684\u6240\u9700\u8981\u7684\u5185\u5B58\u4F7F\u7528\u3002</p><h4 id="_2-3-1-\u5982\u4F55\u624D\u7B97\u7A33\u5B9A\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u5982\u4F55\u624D\u7B97\u7A33\u5B9A\u9636\u6BB5" aria-hidden="true">#</a> 2.3.1 \u5982\u4F55\u624D\u7B97\u7A33\u5B9A\u9636\u6BB5</h4><p>\u4E00\u5B9A\u5F97\u9700\u8981\u4EA7\u751F\u8DB3\u591F\u7684\u538B\u529B\uFF0C\u627E\u5230\u5E94\u7528\u7A0B\u5E8F\u548C\u751F\u4EA7\u73AF\u5883\u9AD8\u5CF0\u7B26\u5408\u72B6\u6001\u7C7B\u4F3C\u7684\u8D1F\u8377\uFF0C\u5728\u6B64\u4E4B\u540E\u8FBE\u5230\u5CF0\u503C\u4E4B\u540E\uFF0C\u4FDD\u6301\u4E00\u4E2A\u7A33\u5B9A\u7684\u72B6\u6001\uFF0C\u624D\u7B97\u662F\u4E00\u4E2A\u7A33\u5B9A\u9636\u6BB5\u3002\u6240\u4EE5\u8981\u8FBE\u5230\u7A33\u5B9A\u9636\u6BB5\uFF0C\u538B\u529B\u6D4B\u8BD5\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0C\u5177\u4F53\u5982\u4F55\u5982\u4F55\u5BF9\u5E94\u7528\u538B\u529B\u6D4B\u8BD5\uFF0C\u672C\u7BC7\u4E0D\u8FC7\u591A\u8BF4\u660E,\u540E\u671F\u4F1A\u6709\u4E13\u95E8\u4ECB\u7ECD\u7684\u7BC7\u5E45\u3002</p><p>\u5728\u786E\u5B9A\u4E86\u5E94\u7528\u51FA\u4E8E\u7A33\u5B9A\u9636\u6BB5\u7684\u65F6\u5019\uFF0C\u8981\u6CE8\u610F\u89C2\u5BDF\u5E94\u7528\u7684GC\u65E5\u5FD7\uFF0C\u7279\u522B\u662FFull GC \u65E5\u5FD7\u3002</p><blockquote><p>GC\u65E5\u5FD7\u6307\u4EE4: -XX:+PrintGCTimeStamps -XX:+PrintGCDetails -Xloggc:<code>&lt;filename&gt;</code> GC\u65E5\u5FD7\u662F\u6536\u96C6\u8C03\u4F18\u6240\u9700\u4FE1\u606F\u7684\u6700\u597D\u9014\u5F84\uFF0C\u5373\u4FBF\u662F\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u4E5F\u53EF\u4EE5\u5F00\u542FGC\u65E5\u5FD7\u6765\u5B9A\u4F4D\u95EE\u9898\uFF0C\u5F00\u542FGC\u65E5\u5FD7\u5BF9\u6027\u80FD\u7684\u5F71\u54CD\u6781\u5C0F\uFF0C\u5374\u53EF\u4EE5\u63D0\u4F9B\u4E30\u5BCC\u6570\u636E\u3002</p></blockquote><p>\u5FC5\u987B\u5F97\u6709FullGC \u65E5\u5FD7\uFF0C\u5982\u679C\u6CA1\u6709\u7684\u8BDD\uFF0C\u53EF\u4EE5\u91C7\u7528\u76D1\u63A7\u5DE5\u5177\u5F3A\u5236\u8C03\u7528\u4E00\u6B21\uFF0C\u6216\u8005\u91C7\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u4EA6\u53EF\u4EE5\u89E6\u53D1</p><blockquote><p>jmap -histo:live pid</p></blockquote><p>\u5728\u7A33\u5B9A\u9636\u6BB5\u89E6\u53D1\u4E86FullGC\u6211\u4EEC\u4E00\u822C\u4F1A\u62FF\u5230\u5982\u4E0B\u4FE1\u606F:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190926232223936.png" alt="image-20190926232223936" loading="lazy"></p><p>\u4ECE\u4EE5\u4E0Agc\u65E5\u5FD7\u4E2D\uFF0C\u6211\u4EEC\u5927\u6982\u53EF\u4EE5\u5206\u6790\u5230\uFF0C\u5728\u53D1\u751FfullGC\u4E4B\u65F6\uFF0C\u6574\u4E2A\u5E94\u7528\u7684\u5806\u5360\u7528\u4EE5\u53CAGC\u65F6\u95F4\uFF0C\u5F53\u7136\u4E86\uFF0C\u4E3A\u4E86\u66F4\u52A0\u7CBE\u786E\uFF0C\u5E94\u8BE5\u591A\u6536\u96C6\u51E0\u6B21\uFF0C\u83B7\u53D6\u4E00\u4E2A\u5E73\u5747\u503C\u3002\u6216\u8005\u662F\u91C7\u7528\u8017\u65F6\u6700\u957F\u7684\u4E00\u6B21FullGC\u6765\u8FDB\u884C\u4F30\u7B97\u3002</p><p>\u5728\u4E0A\u56FE\u4E2D\uFF0CfullGC\u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4\u5360\u7528\u572893168kb\uFF08\u7EA693MB\uFF09\uFF0C\u6211\u4EEC\u4EE5\u6B64\u5B9A\u4E3A\u8001\u5E74\u4EE3\u7A7A\u95F4\u7684\u6D3B\u8DC3\u6570\u636E\u3002</p><p><strong>\u5176\u4ED6\u5806\u7A7A\u95F4\u7684\u5206\u914D\uFF0C\u57FA\u4E8E\u4EE5\u4E0B\u89C4\u5219\u6765\u8FDB\u884C</strong>\u3002</p><table><thead><tr><th>\u7A7A\u95F4</th><th>\u547D\u4EE4\u53C2\u6570</th><th>\u5EFA\u8BAE\u6269\u5927\u500D\u6570</th></tr></thead><tbody><tr><td>java heap</td><td>-Xms\u548C-Xmx</td><td>3-4\u500DFullGC\u540E\u7684\u8001\u5E74\u4EE3\u7A7A\u95F4\u5360\u7528</td></tr><tr><td>\u6C38\u4E45\u4EE3</td><td>-XX:PermSize-XX:MaxPermSize</td><td>1.2-1.5\u500DFullGc\u540E\u7684\u6C38\u4E45\u5E26\u7A7A\u95F4\u5360\u7528</td></tr><tr><td>\u65B0\u751F\u4EE3</td><td>-Xmn</td><td>1-1.5\u500DFullGC\u4E4B\u540E\u7684\u8001\u5E74\u4EE3\u7A7A\u95F4\u5360\u7528</td></tr><tr><td>\u8001\u5E74\u4EE3</td><td></td><td>2-3\u500DFullGC\u540E\u7684\u8001\u5E74\u4EE3\u7A7A\u95F4\u5360\u7528</td></tr></tbody></table><p>\u57FA\u4E8E\u4EE5\u4E0A\u89C4\u5219\u548C\u4E0A\u56FE\u4E2D\u7684FullGC\u4FE1\u606F\uFF0C\u6211\u4EEC\u73B0\u5728\u53EF\u4EE5\u89C4\u5212\u7684\u8BE5\u5E94\u7528\u5806\u7A7A\u95F4\u4E3A\uFF1A</p><blockquote><p>java \u5806\u7A7A\u95F4: 373Mb (=\u8001\u5E74\u4EE3\u7A7A\u95F493168kb*4)</p><p>\u65B0\u751F\u4EE3\u7A7A\u95F4:140Mb(=\u8001\u5E74\u4EE3\u7A7A\u95F493168kb*1.5)</p><p>\u6C38\u4E45\u4EE3\u7A7A\u95F4:5Mb(=\u6C38\u4E45\u4EE3\u7A7A\u95F43135kb*1.5)</p><p>\u8001\u5E74\u4EE3\u7A7A\u95F4: 233Mb=\u5806\u7A7A\u95F4-\u65B0\u751F\u4EE3\u770B\u7A7A\u95F4=373Mb-140Mb</p></blockquote><p>\u5BF9\u5E94\u7684\u5E94\u7528\u542F\u52A8\u53C2\u6570\u5E94\u8BE5\u4E3A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -Xms373m -Xmx373m -Xmn140m -XX:PermSize=5m -XX:MaxPermSize=5m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-\u5EF6\u8FDF\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#_4-\u5EF6\u8FDF\u8C03\u4F18" aria-hidden="true">#</a> 4.\u5EF6\u8FDF\u8C03\u4F18</h2><p>\u5728\u8C03\u4F18\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u7CFB\u7EDF\u7684\u5EF6\u8FDF\u9700\u6C42\u662F\u90A3\u4E9B\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u5EF6\u8FDF\u53EF\u8C03\u4F18\u6307\u6807\u662F\u90A3\u4E9B\u3002</p><p>\u5728\u786E\u5B9A\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u518D\u8FDB\u884C\u5EF6\u8FDF\u6027\u8C03\u4F18\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u6B64\u65F6\u5806\u5185\u5B58\u5927\u5C0F\uFF0C\u5EF6\u8FDF\u6027\u9700\u6C42\u65E0\u6CD5\u8FBE\u5230\u5E94\u7528\u7684\u9700\u8981\uFF0C\u9700\u8981\u57FA\u4E8E\u5E94\u7528\u7684\u60C5\u51B5\u6765\u8FDB\u884C\u8C03\u8BD5\u3002</p><p>\u5728\u8FD9\u4E00\u6B65\u8FDB\u884C\u671F\u95F4\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u518D\u6B21\u4F18\u5316\u5806\u5927\u5C0F\u7684\u914D\u7F6E\uFF0C\u8BC4\u4F30GC\u7684\u6301\u7EED\u65F6\u95F4\u548C\u9891\u7387\u3001\u4EE5\u53CA\u662F\u5426\u9700\u8981\u5207\u6362\u5230\u4E0D\u540C\u7684\u5783\u573E\u6536\u96C6\u5668\u4E0A\u3002</p><h3 id="_4-1-\u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42" aria-hidden="true">#</a> 4.1 \u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42</h3><p>\u5728\u8C03\u4F18\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u7CFB\u7EDF\u7684\u5EF6\u8FDF\u9700\u6C42\u662F\u90A3\u4E9B\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u5EF6\u8FDF\u53EF\u8C03\u4F18\u6307\u6807\u662F\u90A3\u4E9B\u3002</p><ul><li>\u5E94\u7528\u7A0B\u5E8F\u53EF\u63A5\u53D7\u7684\u5E73\u5747\u505C\u6EDE\u65F6\u95F4: \u6B64\u65F6\u95F4\u4E0E\u6D4B\u91CF\u7684Minor GC\u6301\u7EED\u65F6\u95F4\u8FDB\u884C\u6BD4\u8F83\u3002</li><li>\u53EF\u63A5\u53D7\u7684Minor GC\u9891\u7387\uFF1AMinor GC\u7684\u9891\u7387\u4E0E\u53EF\u5BB9\u5FCD\u7684\u503C\u8FDB\u884C\u6BD4\u8F83\u3002</li><li>\u53EF\u63A5\u53D7\u7684\u6700\u5927\u505C\u987F\u65F6\u95F4: \u6700\u5927\u505C\u987F\u65F6\u95F4\u4E0E\u6700\u5DEE\u60C5\u51B5\u4E0BFullGC\u7684\u6301\u7EED\u65F6\u95F4\u8FDB\u884C\u6BD4\u8F83\u3002</li><li>\u53EF\u63A5\u53D7\u7684\u6700\u5927\u505C\u987F\u53D1\u751F\u7684\u9891\u7387\uFF1A\u57FA\u672C\u5C31\u662FFullGC\u7684\u9891\u7387\u3002</li></ul><p>\u4EE5\u4E0A\u4E2D\uFF0C\u5E73\u5747\u505C\u6EDE\u65F6\u95F4\u548C\u6700\u5927\u505C\u987F\u65F6\u95F4\uFF0C\u5BF9\u7528\u6237\u4F53\u9A8C\u6700\u4E3A\u91CD\u8981\uFF0C\u53EF\u4EE5\u591A\u5173\u6CE8\u3002</p><p>\u57FA\u4E8E\u4EE5\u4E0A\u7684\u8981\u6C42\uFF0C\u6211\u4EEC\u9700\u8981\u7EDF\u8BA1\u4EE5\u4E0B\u6570\u636E:</p><ul><li>MinorGC\u7684\u6301\u7EED\u65F6\u95F4\uFF1B</li><li>\u7EDF\u8BA1MinorGC\u7684\u6B21\u6570\uFF1B</li><li>FullGC\u7684\u6700\u5DEE\u6301\u7EED\u65F6\u95F4\uFF1B</li><li>\u6700\u5DEE\u60C5\u51B5\u4E0B\uFF0CFullGC\u7684\u9891\u7387\uFF1B</li></ul><h3 id="_4-2-\u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F" aria-hidden="true">#</a> 4.2 \u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190927000317526.png" alt="image-20190927000317526" loading="lazy"></p><p>\u6BD4\u5982\u5982\u4E0A\u7684gc\u65E5\u5FD7\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230Minor GC\u7684\u5E73\u5747\u6301\u7EED\u65F6\u95F4=0.069\u79D2\uFF0CMinorGC \u7684\u9891\u7387\u4E3A0.389\u79D2\u4E00\u6B21\u3002</p><blockquote><p>\u5982\u679C\uFF0C\u6211\u4EEC\u7CFB\u7EDF\u7684\u8BBE\u7F6E\u7684\u5E73\u5747\u505C\u6EDE\u65F6\u95F4\u4E3A50ms\uFF0C\u5F53\u524D\u768469ms\u660E\u663E\u662F\u592A\u957F\u4E86\uFF0C\u5C31\u9700\u8981\u8C03\u6574\u3002 \u6211\u4EEC\u77E5\u9053\u65B0\u751F\u4EE3\u7A7A\u95F4\u8D8A\u5927\uFF0CMinor GC\u7684GC\u65F6\u95F4\u8D8A\u957F\uFF0C\u9891\u7387\u8D8A\u4F4E\u3002 \u5982\u679C\u60F3\u51CF\u5C11\u5176\u6301\u7EED\u65F6\u957F\uFF0C\u5C31\u9700\u8981\u51CF\u5C11\u5176\u7A7A\u95F4\u5927\u5C0F\u3002 \u5982\u679C\u60F3\u51CF\u5C0F\u5176\u9891\u7387\uFF0C\u5C31\u9700\u8981\u52A0\u5927\u5176\u7A7A\u95F4\u5927\u5C0F\u3002</p></blockquote><p>\u4E3A\u4E86\u964D\u4F4E\u6539\u53D8\u65B0\u751F\u4EE3\u7684\u5927\u5C0F\u5BF9\u5176\u4ED6\u533A\u57DF\u7684\u6700\u5C0F\u5F71\u54CD\u3002<strong>\u5728\u6539\u53D8\u65B0\u751F\u4EE3\u7A7A\u95F4\u5927\u5C0F\u7684\u65F6\u5019\uFF0C\u5C3D\u91CF\u4FDD\u6301\u8001\u5E74\u4EE3\u7A7A\u95F4\u7684\u5927\u5C0F\u3002</strong></p><p>\u6BD4\u5982\u6B64\u6B21\u51CF\u5C11\u4E86\u65B0\u751F\u4EE3\u7A7A\u95F410%\u7684\u5927\u5C0F\uFF0C\u5E94\u8BE5\u4FDD\u6301\u8001\u5E74\u4EE3\u548C\u6301\u4EE3\u7684\u5927\u5C0F\u4E0D\u53D8\u5316\uFF0C\u7B2C\u4E00\u6B65\u8C03\u4F18\u540E\u7684\u53C2\u6570\u5982\u4E0B\u53D8\u5316:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -Xms359m -Xmx359m -Xmn126m -XX:PermSize=5m -XX:MaxPermSize=5m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-\u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F" aria-hidden="true">#</a> 4.3 \u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F</h3><p>\u540C\u4E0A\u4E00\u6B65\u4E00\u6837\uFF0C\u5728\u4F18\u5316\u4E4B\u524D\uFF0C\u4E5F\u9700\u8981\u91C7\u96C6gc\u65E5\u5FD7\u7684\u6570\u636E\u3002\u6B64\u6B21\u6211\u4EEC\u5173\u6CE8\u7684\u662FFullGC\u7684\u6301\u7EED\u65F6\u95F4\u548C\u9891\u7387\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190927000443498.png" alt="image-20190927000443498" loading="lazy"></p><p>\u4E0A\u56FE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FullGC \u5E73\u5747\u9891\u7387 =5.8s

FullGC \u5E73\u5747\u6301\u7EED\u65F6\u95F4=0.14s

(\u4EE5\u4E0A\u4E3A\u4E86\u6D4B\u8BD5\uFF0C\u771F\u5B9E\u9879\u76EE\u7684fullGC \u6CA1\u6709\u8FD9\u4E48\u5FEB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5982\u679C\u6CA1\u6709FullGC\u7684\u65E5\u5FD7\uFF0C\u6709\u529E\u6CD5\u53EF\u4EE5\u8BC4\u4F30\u4E48\uFF1F</strong></p><blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u63D0\u5347\u7387\u8FDB\u884C\u8BA1\u7B97\u3002</p></blockquote><h2 id="\u5BF9\u8C61\u63D0\u5347\u7387" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u63D0\u5347\u7387" aria-hidden="true">#</a> <strong>\u5BF9\u8C61\u63D0\u5347\u7387</strong></h2><p>\u6BD4\u5982\u4E0A\u8FF0\u4E2D\u542F\u52A8\u53C2\u6570\u4E2D\uFF0C\u6211\u4EEC\u7684\u8001\u5E74\u4EE3\u5927\u5C0F=233Mb\u3002</p><p>\u90A3\u4E48\u9700\u8981\u591A\u4E45\u624D\u80FD\u586B\u6EE1\u8001\u5E74\u4EE3\u4E2D\u8FD9233Mb\u7684\u7A7A\u95F2\u7A7A\u95F4\u53D6\u51B3\u4E8E\u65B0\u751F\u4EE3\u5230\u8001\u5E74\u4EE3\u7684\u63D0\u5347\u7387\u3002</p><blockquote><p>\u6BCF\u6B21\u63D0\u5347\u8001\u5E74\u4EE3\u5360\u7528\u91CF=\u6BCF\u6B21MinorGC \u4E4B\u540E java\u5806\u5360\u7528\u60C5\u51B5 \u51CF\u53BB MinorGC\u540E\u65B0\u751F\u4EE3\u7684\u7A7A\u95F4\u5360\u7528 \u5BF9\u8C61\u63D0\u5347\u7387=\u5E73\u5747\u503C\uFF08\u6BCF\u6B21\u63D0\u5347\u8001\u5E74\u4EE3\u5360\u7528\u91CF) \u9664\u4EE5 \u8001\u5E74\u4EE3\u7A7A\u95F4</p></blockquote><p>\u6709\u4E86\u5BF9\u8C61\u63D0\u5347\u7387\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u7B97\u51FA\u586B\u5145\u6EE1\u8001\u5E74\u4EE3\u7A7A\u95F4\u9700\u8981\u591A\u5C11\u6B21minorGC\uFF0C\u5927\u6982\u4E00\u6B21fullGC\u7684\u65F6\u95F4\u5C31\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6765\u4E86\u3002</p><p>\u6BD4\u5982:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190927000700750.png" alt="image-20190927000700750" loading="lazy"></p><p>\u4E0A\u56FE\u4E2D:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u7B2C\u4E00\u6B21minor GC \u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4:13740kb - 13732kb <span class="token operator">=</span>8kb

\u7B2C\u4E8C\u6B21minor GC \u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4:22394kb - 17905kb <span class="token operator">=</span>4489kb

\u7B2C\u4E09\u6B21minor GC \u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4:34739kb - 17917kb <span class="token operator">=</span>16822kb

\u7B2C\u56DB\u6B21minor GC \u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4:48143kb - 17913kb <span class="token operator">=</span>30230kb

\u7B2C\u4E94\u6B21minor GC \u4E4B\u540E\uFF0C\u8001\u5E74\u4EE3\u7A7A\u95F4:62112kb - 17917kb <span class="token operator">=</span>44195kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8001\u5E74\u4EE3\u6BCF\u6B21minorGC\u63D0\u5347\u7387</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>4481kb \u7B2C\u4E8C\u6B21\u548C\u7B2C\u4E00\u6B21minorGC\u4E4B\u95F4

12333kb \u7B2C3\u6B21\u548C\u7B2C2\u6B21minorGC\u4E4B\u95F4

13408kb \u7B2C4\u6B21\u548C\u7B2C3\u6B21minorGC\u4E4B\u95F4

13965kb \u7B2C5\u6B21\u548C\u7B2C4\u6B21minorGC\u4E4B\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u6D4B\u7B97\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6BCF\u6B21minorGC \u7684\u5E73\u5747\u63D0\u5347\u4E3A12211kb,\u7EA6\u4E3A12Mb

\u4E0A\u56FE\u4E2D\uFF0C\u5E73\u5747minorGC\u7684\u9891\u7387\u4E3A 213ms/\u6B21

\u63D0\u5347\u7387<span class="token operator">=</span>12211kb/213ms<span class="token operator">=</span>57kb/ms

\u8001\u5E74\u4EE3\u7A7A\u95F4233Mb ,\u5360\u6EE1\u5927\u6982\u9700\u8981233*1024/57<span class="token operator">=</span>4185ms \u7EA6\u4E3A4.185s\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FullGC\u7684\u9884\u671F\u6700\u5DEE\u9891\u7387\u65F6\u957F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0A\u4E24\u79CD\u65B9\u5F0F\u4F30\u7B97\u51FA\u6765\uFF0C\u53EF\u4EE5\u8C03\u6574\u8001\u5E74\u4EE3\u7684\u5927\u5C0F\u6765\u8C03\u6574FullGC\u7684\u9891\u7387\uFF0C\u5F53\u7136\u4E86\uFF0C\u5982\u679CFullGC\u6301\u7EED\u65F6\u95F4\u8FC7\u957F\uFF0C\u65E0\u6CD5\u8FBE\u5230\u5E94\u7528\u7A0B\u5E8F\u7684\u6700\u5DEE\u5EF6\u8FDF\u8981\u6C42\uFF0C\u5C31\u9700\u8981\u5207\u6362\u5783\u573E\u5904\u7406\u5668\u4E86\u3002\u5177\u4F53\u5982\u4F55\u5207\u6362\uFF0C\u4E0B\u7BC7\u518D\u8BB2\uFF0C\u6BD4\u5982\u5207\u6362\u4E3ACMS\uFF0C\u9488\u5BF9CMS\u7684\u8C03\u4F18\u65B9\u5F0F\u53C8\u6709\u4F1A\u7EC6\u5FAE\u7684\u5DEE\u522B\u3002</p><h2 id="_5-\u541E\u5410\u91CF\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#_5-\u541E\u5410\u91CF\u8C03\u4F18" aria-hidden="true">#</a> 5. \u541E\u5410\u91CF\u8C03\u4F18</h2><p>\u7ECF\u8FC7\u4E0A\u8FF0\u6F2B\u957F \u8C03\u4F18\u8FC7\u7A0B\uFF0C\u6700\u7EC8\u6765\u5230\u4E86\u8C03\u4F18\u7684\u6700\u540E\u4E00\u6B65\uFF0C\u8FD9\u4E00\u6B65\u5BF9\u4E0A\u8FF0\u7684\u7ED3\u679C\u8FDB\u884C\u541E\u5410\u91CF\u6D4B\u8BD5\uFF0C\u5E76\u8FDB\u884C\u5FAE\u8C03\u3002</p><p>\u541E\u5410\u91CF\u8C03\u4F18\u4E3B\u8981\u662F\u57FA\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u541E\u5410\u91CF\u8981\u6C42\u800C\u6765\u7684\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5E94\u8BE5\u6709\u4E00\u4E2A\u7EFC\u5408\u7684\u541E\u5410\u6307\u6807\uFF0C\u8FD9\u4E2A\u6307\u6807\u57FA\u4E8E\u771F\u4E2A\u5E94\u7528\u7684\u9700\u6C42\u548C\u6D4B\u8BD5\u800C\u884D\u751F\u51FA\u6765\u7684\u3002\u5F53\u6709\u5E94\u7528\u7A0B\u5E8F\u7684\u541E\u5410\u91CF\u8FBE\u5230\u6216\u8005\u8D85\u8FC7\u9884\u671F\u7684\u541E\u5410\u76EE\u6807\uFF0C\u6574\u4E2A\u8C03\u4F18\u8FC7\u7A0B\u5C31\u53EF\u4EE5\u5706\u6EE1\u7ED3\u675F\u4E86\u3002</p><p>\u5982\u679C\u51FA\u73B0\u8C03\u4F18\u540E\u4F9D\u7136\u65E0\u6CD5\u8FBE\u5230\u5E94\u7528\u7A0B\u5E8F\u7684\u541E\u5410\u76EE\u6807\uFF0C\u9700\u8981\u91CD\u65B0\u56DE\u987E\u541E\u5410\u8981\u6C42\uFF0C\u8BC4\u4F30\u5F53\u524D\u541E\u5410\u91CF\u548C\u76EE\u6807\u5DEE\u8DDD\u662F\u5426\u5DE8\u5927\uFF0C\u5982\u679C\u572820%\u5DE6\u53F3\uFF0C\u53EF\u4EE5\u4FEE\u6539\u53C2\u6570\uFF0C\u52A0\u5927\u5185\u5B58\uFF0C\u518D\u6B21\u4ECE\u5934\u8C03\u8BD5\uFF0C\u5982\u679C\u5DE8\u5927\u5C31\u9700\u8981\u4ECE\u6574\u4E2A\u5E94\u7528\u5C42\u9762\u6765\u8003\u8651\uFF0C\u8BBE\u8BA1\u4EE5\u53CA\u76EE\u6807\u662F\u5426\u4E00\u81F4\u4E86\uFF0C\u91CD\u65B0\u8BC4\u4F30\u541E\u5410\u76EE\u6807\u3002</p><p>\u5BF9\u4E8E\u5783\u573E\u6536\u96C6\u5668\u6765\u8BF4\uFF0C\u63D0\u5347\u541E\u5410\u91CF\u7684\u6027\u80FD\u8C03\u4F18\u7684\u76EE\u6807\u5C31\u662F\u5C31\u662F\u5C3D\u53EF\u80FD\u907F\u514D\u6216\u8005\u5F88\u5C11\u53D1\u751FFullGC \u6216\u8005Stop-The-World\u538B\u7F29\u5F0F\u5783\u573E\u6536\u96C6\uFF08CMS\uFF09\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u79CD\u65B9\u5F0F\u90FD\u4F1A\u9020\u6210\u5E94\u7528\u7A0B\u5E8F\u541E\u5410\u964D\u4F4E\u3002\u5C3D\u91CF\u5728MinorGC \u9636\u6BB5\u56DE\u6536\u66F4\u591A\u7684\u5BF9\u8C61\uFF0C\u907F\u514D\u5BF9\u8C61\u63D0\u5347\u8FC7\u5FEB\u5230\u8001\u5E74\u4EE3\u3002</p><h2 id="_6-\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#_6-\u6700\u540E" aria-hidden="true">#</a> 6. \u6700\u540E</h2><p>\u636EPlumbr\u516C\u53F8\u5BF9\u7279\u5B9A\u5783\u573E\u6536\u96C6\u5668\u4F7F\u7528\u60C5\u51B5\u8FDB\u884C\u4E86\u4E00\u6B21\u8C03\u67E5\u7814\u7A76\uFF0C\u7814\u7A76\u6570\u636E\u4F7F\u7528\u4E8684936\u4E2A\u6848\u4F8B\u3002\u5728\u660E\u786E\u6307\u5B9A\u5783\u573E\u6536\u96C6\u5668\u768413%\u7684\u6848\u4F8B\u4E2D\uFF0C\u5E76\u53D1\u6536\u96C6\u5668\uFF08CMS\uFF09\u4F7F\u7528\u6B21\u6570\u6700\u591A\uFF1B\u4F46\u5927\u591A\u6570\u6848\u4F8B\u6CA1\u6709\u9009\u62E9\u6700\u4F73\u5783\u573E\u6536\u96C6\u5668\u3002\u8FD9\u4E2A\u6BD4\u4F8B\u5360\u7528\u572887%\u5DE6\u53F3\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190927001022078.png" alt="image-20190927001022078" loading="lazy"></p><p>JVM\u8C03\u4F18\u662F\u4E00\u4E2A\u7CFB\u7EDF\u800C\u53C8\u590D\u6742\u7684\u5DE5\u4F5C\uFF0C\u76EE\u524Djvm\u4E0B\u7684\u81EA\u52A8\u8C03\u6574\u5DF2\u7ECF\u505A\u7684\u6BD4\u8F83\u4F18\u79C0\uFF0C\u57FA\u672C\u7684\u4E00\u4E9B\u521D\u59CB\u53C2\u6570\u90FD\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u822C\u7684\u5E94\u7528\u8DD1\u7684\u6BD4\u8F83\u7A33\u5B9A\u4E86\uFF0C\u5BF9\u90E8\u5206\u56E2\u961F\u6765\u8BF4\uFF0C\u7A0B\u5E8F\u6027\u80FD\u53EF\u80FD\u4F18\u5148\u7EA7\u4E0D\u9AD8\uFF0C\u9ED8\u8BA4\u5783\u573E\u6536\u96C6\u5668\u5DF2\u7ECF\u591F\u7528\u4E86\u3002\u8C03\u4F18\u8981\u57FA\u4E8E\u81EA\u5DF1\u7684\u60C5\u51B5\u800C\u6765\u3002</p><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>`,113),m={href:"https://www.zhihu.com/people/zszdevelop/activities",target:"_blank",rel:"noopener noreferrer"},c=r("\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212JVM \u6027\u80FD\u8C03\u4F18");function h(b,u){const a=s("ExternalLinkIcon");return l(),t("div",null,[p,e("p",null,[e("a",m,[c,d(a)])])])}const C=i(o,[["render",h],["__file","java-jvm-optimization.html.vue"]]);export{C as default};
