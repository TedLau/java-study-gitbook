import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as d,a,b as r,e as n,d as e,r as h}from"./app.a2c1bbbb.js";const c={},i=n('<h1 id="java\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#java\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> Java\u5185\u5B58\u6A21\u578B</h1><blockquote><p>\u5728\u4ECB\u7ECDJava\u5185\u5B58\u6A21\u578B\u4E4B\u524D\uFF0C\u5148\u6765\u770B\u4E00\u4E0B\u5230\u5E95\u4EC0\u4E48\u662F\u8BA1\u7B97\u673A\u5185\u5B58\u6A21\u578B\uFF0C\u7136\u540E\u518D\u6765\u770BJava\u5185\u5B58\u6A21\u578B\u5728\u8BA1\u7B97\u673A\u5185\u5B58\u6A21\u578B\u7684\u57FA\u7840\u4E0A\u505A\u4E86\u54EA\u4E9B\u4E8B\u60C5\u3002\u8981\u8BF4\u8BA1\u7B97\u673A\u7684\u5185\u5B58\u6A21\u578B\uFF0C\u5C31\u8981\u8BF4\u4E00\u4E0B\u4E00\u6BB5\u53E4\u8001\u7684\u5386\u53F2\uFF0C\u770B\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u8981\u6709\u5185\u5B58\u6A21\u578B\u3002</p></blockquote><h2 id="_1-\u4E3A\u4EC0\u4E48\u8981\u6709\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u8981\u6709\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u8981\u6709\u5185\u5B58\u6A21\u578B</h2><p><strong>\u5185\u5B58\u6A21\u578B\uFF0C\u82F1\u6587\u540DMemory Model\uFF0C\u4ED6\u662F\u4E00\u4E2A\u5F88\u8001\u7684\u8001\u53E4\u8463\u4E86\u3002\u4ED6\u662F\u4E0E\u8BA1\u7B97\u673A\u786C\u4EF6\u6709\u5173\u7684\u4E00\u4E2A\u6982\u5FF5\u3002\u90A3\u4E48\u6211\u5148\u7ED9\u4F60\u4ECB\u7ECD\u4E0B\u4ED6\u548C\u786C\u4EF6\u5230\u5E95\u6709\u5565\u5173\u7CFB\u3002</strong></p><blockquote><ul><li>CPU\u7684\u901F\u5EA6\u8FDC\u6BD4\u5185\u5B58\u5757\uFF0C\u6240\u4EE5\u5BF9\u6570\u636E\u7684\u8BFB\u5199\uFF0C\u653E\u5728CPU\u7684\u9AD8\u901F\u7F13\u5B58\u4E2D\u5B8C\u6210</li><li>\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u9700\u8981\u7684\u6570\u636E\u4ECE<strong>\u4E3B\u5B58\u590D\u5236\u4E00\u4EFD\u5230CPU\u9AD8\u901F\u7F13\u5B58</strong>,CPU\u8FDB\u884C\u8BA1\u7B97\u65F6<strong>\u4ECE\u9AD8\u901F\u7F13\u5B58\u8BFB\u53D6\u6570\u636E\u548C\u5411\u5176\u4E2D\u5199\u5165\u6570\u636E</strong>\uFF0C\u7136\u540E<strong>\u5237\u65B0\u5230\u4E3B\u5B58\u4E2D</strong></li></ul></blockquote><h3 id="_1-1-cpu\u548C\u7F13\u5B58\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_1-1-cpu\u548C\u7F13\u5B58\u4E00\u81F4\u6027" aria-hidden="true">#</a> 1.1 CPU\u548C\u7F13\u5B58\u4E00\u81F4\u6027</h3><h4 id="_1-1-1-cpu-\u548C-\u5185\u5B58\u76F4\u63A5\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-1-1-cpu-\u548C-\u5185\u5B58\u76F4\u63A5\u64CD\u4F5C" aria-hidden="true">#</a> 1.1.1 cpu \u548C \u5185\u5B58\u76F4\u63A5\u64CD\u4F5C</h4><p>\u6211\u4EEC\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0C\u8BA1\u7B97\u673A\u5728\u6267\u884C\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C<strong>\u6BCF\u6761\u6307\u4EE4\u90FD\u662F\u5728CPU\u4E2D\u6267\u884C</strong>\u7684\uFF0C\u800C\u6267\u884C\u7684\u65F6\u5019\uFF0C<strong>\u53C8\u514D\u4E0D\u4E86\u8981\u548C\u6570\u636E\u6253\u4EA4\u9053</strong>\u3002\u800C\u8BA1\u7B97\u673A\u4E0A\u9762\u7684\u6570\u636E\uFF0C<strong>\u662F\u5B58\u653E\u5728\u4E3B\u5B58\u5F53\u4E2D\u7684\uFF0C\u4E5F\u5C31\u662F\u8BA1\u7B97\u673A\u7684\u7269\u7406\u5185\u5B58</strong>\u5566\u3002</p><p>\u521A\u5F00\u59CB\uFF0C\u8FD8\u76F8\u5B89\u65E0\u4E8B\u7684\uFF0C\u4F46\u662F\u968F\u7740CPU\u6280\u672F\u7684\u53D1\u5C55\uFF0CCPU\u7684\u6267\u884C\u901F\u5EA6\u8D8A\u6765\u8D8A\u5FEB\u3002\u800C\u7531\u4E8E\u5185\u5B58\u7684\u6280\u672F\u5E76\u6CA1\u6709\u592A\u5927\u7684\u53D8\u5316\uFF0C\u6240\u4EE5\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\u548C\u5199\u5165\u6570\u636E\u7684\u8FC7\u7A0B\u548CCPU\u7684\u6267\u884C\u901F\u5EA6\u6BD4\u8D77\u6765\u5DEE\u8DDD\u5C31\u4F1A\u8D8A\u6765\u8D8A\u5927,\u8FD9\u5C31<strong>\u5BFC\u81F4CPU\u6BCF\u6B21\u64CD\u4F5C\u5185\u5B58\u90FD\u8981\u8017\u8D39\u5F88\u591A\u7B49\u5F85\u65F6\u95F4</strong>\u3002</p><blockquote><p>\u8FD9\u5C31\u50CF\u4E00\u5BB6\u521B\u4E1A\u516C\u53F8\uFF0C\u521A\u5F00\u59CB\uFF0C\u521B\u59CB\u4EBA\u548C\u5458\u5DE5\u4E4B\u95F4\u5DE5\u4F5C\u5173\u7CFB\u5176\u4E50\u878D\u878D\uFF0C\u4F46\u662F\u968F\u7740\u521B\u59CB\u4EBA\u7684\u80FD\u529B\u548C\u91CE\u5FC3\u8D8A\u6765\u8D8A\u5927\uFF0C\u9010\u6E10\u548C\u5458\u5DE5\u4E4B\u95F4\u51FA\u73B0\u4E86\u5DEE\u8DDD\uFF0C\u666E\u901A\u5458\u5DE5\u539F\u6765\u8D8A\u8DDF\u4E0D\u4E0ACEO\u7684\u811A\u6B65\u3002\u8001\u677F\u7684\u6BCF\u4E00\u4E2A\u547D\u4EE4\uFF0C\u4F20\u5230\u5230\u57FA\u5C42\u5458\u5DE5\u4E4B\u540E\uFF0C\u7531\u4E8E\u57FA\u5C42\u5458\u5DE5\u7684\u7406\u89E3\u80FD\u529B\u3001\u6267\u884C\u80FD\u529B\u7684\u6B20\u7F3A\uFF0C\u5C31\u4F1A\u8017\u8D39\u5F88\u591A\u65F6\u95F4\u3002\u8FD9\u4E5F\u5C31\u65E0\u5F62\u4E2D\u62D6\u6162\u4E86\u6574\u5BB6\u516C\u53F8\u7684\u5DE5\u4F5C\u6548\u7387\u3002</p></blockquote><p>\u53EF\u662F\uFF0C\u4E0D\u80FD\u56E0\u4E3A\u5185\u5B58\u7684\u8BFB\u5199\u901F\u5EA6\u6162\uFF0C\u5C31\u4E0D\u53D1\u5C55CPU\u6280\u672F\u4E86\u5427\uFF0C\u603B\u4E0D\u80FD\u8BA9\u5185\u5B58\u6210\u4E3A\u8BA1\u7B97\u673A\u5904\u7406\u7684\u74F6\u9888\u5427\u3002</p><p>\u6240\u4EE5\uFF0C\u4EBA\u4EEC\u60F3\u51FA\u6765\u4E86\u4E00\u4E2A\u597D\u7684\u529E\u6CD5\uFF0C\u5C31\u662F\u5728<strong>CPU\u548C\u5185\u5B58\u4E4B\u95F4\u589E\u52A0\u9AD8\u901F\u7F13\u5B58</strong>\u3002<strong>\u7F13\u5B58\u7684\u6982\u5FF5\u5927\u5BB6\u90FD\u77E5\u9053\uFF0C\u5C31\u662F\u4FDD\u5B58\u4E00\u4EFD\u6570\u636E\u62F7\u8D1D\u3002\u4ED6\u7684\u7279\u70B9\u662F\u901F\u5EA6\u5FEB\uFF0C\u5185\u5B58\u5C0F\uFF0C\u5E76\u4E14\u6602\u8D35</strong>\u3002</p><h4 id="_1-1-2-cpu-\u548C-\u7F13\u5B58\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#_1-1-2-cpu-\u548C-\u7F13\u5B58\u4EA4\u4E92" aria-hidden="true">#</a> 1.1.2 cpu \u548C \u7F13\u5B58\u4EA4\u4E92</h4><p><strong>\u5F53\u7A0B\u5E8F\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5C06\u8FD0\u7B97\u9700\u8981\u7684\u6570\u636E\u4ECE\u4E3B\u5B58\u590D\u5236\u4E00\u4EFD\u5230CPU\u7684\u9AD8\u901F\u7F13\u5B58\u5F53\u4E2D\uFF0C\u90A3\u4E48CPU\u8FDB\u884C\u8BA1\u7B97\u65F6\u5C31\u53EF\u4EE5\u76F4\u63A5\u4ECE\u5B83\u7684\u9AD8\u901F\u7F13\u5B58\u8BFB\u53D6\u6570\u636E\u548C\u5411\u5176\u4E2D\u5199\u5165\u6570\u636E\uFF0C\u5F53\u8FD0\u7B97\u7ED3\u675F\u4E4B\u540E\uFF0C\u518D\u5C06\u9AD8\u901F\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u5237\u65B0\u5230\u4E3B\u5B58\u5F53\u4E2D\u3002</strong></p><blockquote><p>\u4E4B\u540E\uFF0C\u8FD9\u5BB6\u516C\u53F8\u5F00\u59CB\u8BBE\u7ACB\u4E2D\u5C42\u7BA1\u7406\u4EBA\u5458\uFF0C\u7BA1\u7406\u4EBA\u5458\u76F4\u63A5\u5F52CEO\u9886\u5BFC\uFF0C\u9886\u5BFC\u6709\u4EC0\u4E48\u6307\u793A\uFF0C\u76F4\u63A5\u544A\u8BC9\u7BA1\u7406\u4EBA\u5458\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u53BB\u505A\u81EA\u5DF1\u7684\u4E8B\u60C5\u4E86\u3002\u7BA1\u7406\u4EBA\u5458\u8D1F\u8D23\u53BB\u534F\u8C03\u5E95\u5C42\u5458\u5DE5\u7684\u5DE5\u4F5C\u3002\u56E0\u4E3A\u7BA1\u7406\u4EBA\u5458\u662F\u4E86\u89E3\u624B\u4E0B\u7684\u4EBA\u5458\u4EE5\u53CA\u81EA\u5DF1\u8D1F\u8D23\u7684\u4E8B\u60C5\u7684\u3002\u6240\u4EE5\uFF0C\u5927\u591A\u6570\u65F6\u5019\uFF0C\u516C\u53F8\u7684\u5404\u79CD\u51B3\u7B56\uFF0C\u901A\u77E5\u7B49\uFF0CCEO\u53EA\u8981\u548C\u7BA1\u7406\u4EBA\u5458\u4E4B\u95F4\u6C9F\u901A\u5C31\u591F\u4E86\u3002</p></blockquote><h4 id="_1-1-3-cpu-\u548C\u591A\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-1-3-cpu-\u548C\u591A\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> 1.1.3 cpu \u548C\u591A\u7EA7\u7F13\u5B58</h4><p>\u800C\u968F\u7740CPU\u80FD\u529B\u7684\u4E0D\u65AD\u63D0\u5347\uFF0C\u4E00\u5C42\u7F13\u5B58\u5C31\u6162\u6162\u7684\u65E0\u6CD5\u6EE1\u8DB3\u8981\u6C42\u4E86\uFF0C\u5C31\u9010\u6E10\u7684\u884D\u751F\u51FA\u591A\u7EA7\u7F13\u5B58\u3002</p><p>\u6309\u7167\u6570\u636E\u8BFB\u53D6\u987A\u5E8F\u548C\u4E0ECPU\u7ED3\u5408\u7684\u7D27\u5BC6\u7A0B\u5EA6\uFF0CCPU\u7F13\u5B58\u53EF\u4EE5\u5206\u4E3A\u4E00\u7EA7\u7F13\u5B58\uFF08L1\uFF09\uFF0C\u4E8C\u7EA7\u7F13\u5B58\uFF08L2\uFF09\uFF0C\u90E8\u5206\u9AD8\u7AEFCPU\u8FD8\u5177\u6709\u4E09\u7EA7\u7F13\u5B58\uFF08L3\uFF09<strong>\uFF0C\u6BCF\u4E00\u7EA7\u7F13\u5B58\u4E2D\u6240\u50A8\u5B58\u7684\u5168\u90E8\u6570\u636E\u90FD\u662F\u4E0B\u4E00\u7EA7\u7F13\u5B58\u7684\u4E00\u90E8\u5206</strong>\u3002</p><p>\u8FD9\u4E09\u79CD\u7F13\u5B58\u7684\u6280\u672F\u96BE\u5EA6\u548C\u5236\u9020\u6210\u672C\u662F\u76F8\u5BF9\u9012\u51CF\u7684\uFF0C\u6240\u4EE5\u5176\u5BB9\u91CF\u4E5F\u662F\u76F8\u5BF9\u9012\u589E\u7684\u3002</p><p>\u90A3\u4E48\uFF0C\u5728\u6709\u4E86\u591A\u7EA7\u7F13\u5B58\u4E4B\u540E\uFF0C\u7A0B\u5E8F\u7684\u6267\u884C\u5C31\u53D8\u6210\u4E86\uFF1A</p><p><strong>\u5F53CPU\u8981\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u9996\u5148\u4ECE\u4E00\u7EA7\u7F13\u5B58\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u518D\u4ECE\u4E8C\u7EA7\u7F13\u5B58\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u8FD8\u662F\u6CA1\u6709\u5C31\u4ECE\u4E09\u7EA7\u7F13\u5B58\u6216\u5185\u5B58\u4E2D\u67E5\u627E\u3002</strong></p><blockquote><p>\u968F\u7740\u516C\u53F8\u8D8A\u6765\u8D8A\u5927\uFF0C\u8001\u677F\u8981\u7BA1\u7684\u4E8B\u60C5\u8D8A\u6765\u8D8A\u591A\uFF0C\u516C\u53F8\u7684\u7BA1\u7406\u90E8\u95E8\u5F00\u59CB\u6539\u9769\uFF0C\u5F00\u59CB\u51FA\u73B0\u9AD8\u5C42\uFF0C\u4E2D\u5C42\uFF0C\u5E95\u5C42\u7B49\u7BA1\u7406\u8005\u3002\u4E00\u7EA7\u4E00\u7EA7\u4E4B\u95F4\u9010\u5C42\u7BA1\u7406\u3002</p></blockquote><h4 id="_1-1-4-\u591A\u6838cpu-\u4E0E-\u591A\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u591A\u6838cpu-\u4E0E-\u591A\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> 1.1.4 \u591A\u6838CPU \u4E0E \u591A\u7EA7\u7F13\u5B58</h4><p>\u5355\u6838CPU\u53EA\u542B\u6709\u4E00\u5957L1\uFF0CL2\uFF0CL3\u7F13\u5B58\uFF1B\u5982\u679CCPU\u542B\u6709\u591A\u4E2A\u6838\u5FC3\uFF0C\u5373\u591A\u6838CPU\uFF0C\u5219\u6BCF\u4E2A\u6838\u5FC3\u90FD\u542B\u6709\u4E00\u5957L1\uFF08\u751A\u81F3\u548CL2\uFF09\u7F13\u5B58\uFF0C\u800C\u5171\u4EABL3\uFF08\u6216\u8005\u548CL2\uFF09\u7F13\u5B58\u3002</p><blockquote><p>\u516C\u53F8\u4E5F\u5206\u5F88\u591A\u79CD\uFF0C\u6709\u4E9B\u516C\u53F8\u53EA\u6709\u4E00\u4E2A\u5927Boss\uFF0C\u4ED6\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97\u3002\u4F46\u662F\u6709\u4E9B\u516C\u53F8\u6709\u6BD4\u5982\u8054\u5E2D\u603B\u7ECF\u7406\u3001\u5408\u4F19\u4EBA\u7B49\u673A\u5236\u3002</p><p>\u5355\u6838CPU\u5C31\u50CF\u4E00\u5BB6\u516C\u53F8\u53EA\u6709\u4E00\u4E2A\u8001\u677F\uFF0C\u6240\u6709\u547D\u4EE4\u90FD\u6765\u81EA\u4E8E\u4ED6\uFF0C\u90A3\u4E48\u5C31\u53EA\u9700\u8981\u4E00\u5957\u7BA1\u7406\u73ED\u5E95\u5C31\u591F\u4E86\u3002</p><p>\u591A\u6838CPU\u5C31\u50CF\u4E00\u5BB6\u516C\u53F8\u662F\u7531\u591A\u4E2A\u5408\u4F19\u4EBA\u5171\u540C\u521B\u529E\u7684\uFF0C\u90A3\u4E48\uFF0C\u5C31\u9700\u8981\u7ED9\u6BCF\u4E2A\u5408\u4F19\u4EBA\u90FD\u8BBE\u7ACB\u4E00\u5957\u4F9B\u81EA\u5DF1\u76F4\u63A5\u9886\u5BFC\u7684\u9AD8\u5C42\u7BA1\u7406\u4EBA\u5458\uFF0C\u591A\u4E2A\u5408\u4F19\u4EBA\u5171\u4EAB\u4F7F\u7528\u7684\u662F\u516C\u53F8\u7684\u5E95\u5C42\u5458\u5DE5\u3002</p><p>\u8FD8\u6709\u7684\u516C\u53F8\uFF0C\u4E0D\u65AD\u58EE\u5927\uFF0C\u5F00\u59CB\u5DEE\u5206\u51FA\u5404\u4E2A\u5B50\u516C\u53F8\u3002\u5404\u4E2A\u5B50\u516C\u53F8\u5C31\u662F\u591A\u4E2ACPU\u4E86\uFF0C\u4E92\u76F8\u4E4B\u524D\u6CA1\u6709\u5171\u7528\u7684\u8D44\u6E90\u3002\u4E92\u4E0D\u5F71\u54CD\u3002</p></blockquote><h3 id="_1-2-\u5355\u7EBF\u7A0B\u3001\u591A\u7EBF\u7A0B\u5728\u5355\u6838cpu\u3001\u591A\u6838cpu\u4E2D\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5355\u7EBF\u7A0B\u3001\u591A\u7EBF\u7A0B\u5728\u5355\u6838cpu\u3001\u591A\u6838cpu\u4E2D\u7684\u5F71\u54CD" aria-hidden="true">#</a> 1.2 \u5355\u7EBF\u7A0B\u3001\u591A\u7EBF\u7A0B\u5728\u5355\u6838CPU\u3001\u591A\u6838CPU\u4E2D\u7684\u5F71\u54CD</h3><p>\u4E0B\u56FE\u53CC\u6838CPU\u7684\u7F13\u5B58\u7ED3\u6784</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220518153059482.png" alt="image-20220518153059482"></p><p>\u968F\u7740\u8BA1\u7B97\u673A\u80FD\u529B\u4E0D\u65AD\u63D0\u5347\uFF0C\u5F00\u59CB\u652F\u6301\u591A\u7EBF\u7A0B\u3002\u90A3\u4E48\u95EE\u9898\u5C31\u6765\u4E86\u3002\u6211\u4EEC\u5206\u522B\u6765\u5206\u6790\u4E0B\u5355\u7EBF\u7A0B\u3001\u591A\u7EBF\u7A0B\u5728\u5355\u6838CPU\u3001\u591A\u6838CPU\u4E2D\u7684\u5F71\u54CD\u3002</p><h4 id="_1-2-1-\u5355\u7EBF\u7A0B\u3002" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u5355\u7EBF\u7A0B\u3002" aria-hidden="true">#</a> 1.2.1 \u5355\u7EBF\u7A0B\u3002</h4><p>cpu\u6838\u5FC3\u7684\u7F13\u5B58\u53EA\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u3002\u7F13\u5B58\u72EC\u5360\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8BBF\u95EE\u51B2\u7A81\u7B49\u95EE\u9898\u3002</p><h4 id="_1-2-2-\u5355\u6838cpu-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u5355\u6838cpu-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> 1.2.2 <strong>\u5355\u6838CPU\uFF0C\u591A\u7EBF\u7A0B</strong></h4><p>\u8FDB\u7A0B\u4E2D\u7684\u591A\u4E2A\u7EBF\u7A0B\u4F1A\u540C\u65F6\u8BBF\u95EE\u8FDB\u7A0B\u4E2D\u7684\u5171\u4EAB\u6570\u636E\uFF0CCPU\u5C06\u67D0\u5757\u5185\u5B58\u52A0\u8F7D\u5230\u7F13\u5B58\u540E\uFF0C\u4E0D\u540C\u7EBF\u7A0B\u5728\u8BBF\u95EE\u76F8\u540C\u7684\u7269\u7406\u5730\u5740\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u6620\u5C04\u5230\u76F8\u540C\u7684\u7F13\u5B58\u4F4D\u7F6E\uFF0C\u8FD9\u6837\u5373\u4F7F\u53D1\u751F\u7EBF\u7A0B\u7684\u5207\u6362\uFF0C\u7F13\u5B58\u4ECD\u7136\u4E0D\u4F1A\u5931\u6548\u3002\u4F46\u7531\u4E8E\u4EFB\u4F55\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u5728\u6267\u884C\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u51FA\u73B0\u7F13\u5B58\u8BBF\u95EE\u51B2\u7A81\u3002</p><h4 id="_1-2-3-\u591A\u6838cpu-\u591A\u7EBF\u7A0B-\u624D\u4F1A\u5BFC\u81F4\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-2-3-\u591A\u6838cpu-\u591A\u7EBF\u7A0B-\u624D\u4F1A\u5BFC\u81F4\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898" aria-hidden="true">#</a> 1.2.3 <strong>\u591A\u6838CPU\uFF0C\u591A\u7EBF\u7A0B</strong>(\u624D\u4F1A\u5BFC\u81F4\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898)</h4><p>\u6BCF\u4E2A\u6838\u90FD\u81F3\u5C11\u6709\u4E00\u4E2AL1 \u7F13\u5B58\u3002\u591A\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u8FDB\u7A0B\u4E2D\u7684\u67D0\u4E2A\u5171\u4EAB\u5185\u5B58\uFF0C\u4E14\u8FD9\u591A\u4E2A\u7EBF\u7A0B\u5206\u522B\u5728\u4E0D\u540C\u7684\u6838\u5FC3\u4E0A\u6267\u884C\uFF0C\u5219<strong>\u6BCF\u4E2A\u6838\u5FC3\u90FD\u4F1A\u5728\u5404\u81EA\u7684caehe\u4E2D\u4FDD\u7559\u4E00\u4EFD\u5171\u4EAB\u5185\u5B58\u7684\u7F13\u51B2</strong>\u3002\u7531\u4E8E<strong>\u591A\u6838\u662F\u53EF\u4EE5\u5E76\u884C\u7684</strong>\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u5199\u5404\u81EA\u7684\u7F13\u5B58\u7684\u60C5\u51B5\uFF0C\u800C\u5404\u81EA\u7684cache\u4E4B\u95F4\u7684\u6570\u636E\u5C31\u6709\u53EF\u80FD\u4E0D\u540C\u3002</p><h4 id="_1-2-4-\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#_1-2-4-\u5F71\u54CD" aria-hidden="true">#</a> 1.2.4 \u5F71\u54CD</h4><p>\u5728CPU\u548C\u4E3B\u5B58\u4E4B\u95F4\u589E\u52A0\u7F13\u5B58\uFF0C\u5728\u591A\u7EBF\u7A0B\u573A\u666F\u4E0B\u5C31\u53EF\u80FD\u5B58\u5728<strong>\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u591A\u6838CPU\u4E2D\uFF0C\u6BCF\u4E2A\u6838\u7684\u81EA\u5DF1\u7684\u7F13\u5B58\u4E2D\uFF0C\u5173\u4E8E\u540C\u4E00\u4E2A\u6570\u636E\u7684\u7F13\u5B58\u5185\u5BB9\u53EF\u80FD\u4E0D\u4E00\u81F4\u3002</p><blockquote><p>\u5982\u679C\u8FD9\u5BB6\u516C\u53F8\u7684\u547D\u4EE4\u90FD\u662F\u4E32\u884C\u4E0B\u53D1\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u3002</p><p>\u5982\u679C\u8FD9\u5BB6\u516C\u53F8\u7684\u547D\u4EE4\u90FD\u662F\u5E76\u884C\u4E0B\u53D1\u7684\u8BDD\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u547D\u4EE4\u90FD\u662F\u7531\u540C\u4E00\u4E2ACEO\u4E0B\u53D1\u7684\uFF0C\u8FD9\u79CD\u673A\u5236\u662F\u4E5F\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\u3002\u56E0\u4E3A\u4ED6\u7684\u547D\u4EE4\u6267\u884C\u8005\u53EA\u6709\u4E00\u5957\u7BA1\u7406\u4F53\u7CFB\u3002</p><p>\u5982\u679C\u8FD9\u5BB6\u516C\u53F8\u7684\u547D\u4EE4\u90FD\u662F\u5E76\u884C\u4E0B\u53D1\u7684\u8BDD\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u547D\u4EE4\u662F\u7531\u591A\u4E2A\u5408\u4F19\u4EBA\u4E0B\u53D1\u7684\uFF0C\u8FD9\u5C31\u6709\u95EE\u9898\u4E86\u3002\u56E0\u4E3A\u6BCF\u4E2A\u5408\u4F19\u4EBA\u53EA\u4F1A\u628A\u547D\u4EE4\u4E0B\u8FBE\u7ED9\u81EA\u5DF1\u76F4\u5C5E\u7684\u7BA1\u7406\u4EBA\u5458\uFF0C\u800C\u591A\u4E2A\u7BA1\u7406\u4EBA\u5458\u7BA1\u7406\u7684\u5E95\u5C42\u5458\u5DE5\u53EF\u80FD\u662F\u516C\u7528\u7684\u3002</p><p>\u6BD4\u5982\uFF0C\u5408\u4F19\u4EBA1\u8981\u8F9E\u9000\u5458\u5DE5a\uFF0C\u5408\u4F19\u4EBA2\u8981\u7ED9\u5458\u5DE5a\u5347\u804C\uFF0C\u5347\u804C\u540E\u7684\u8BDD\u4ED6\u518D\u88AB\u8F9E\u9000\u9700\u8981\u591A\u4E2A\u5408\u4F19\u4EBA\u5F00\u4F1A\u51B3\u8BAE\u3002\u4E24\u4E2A\u5408\u4F19\u4EBA\u5206\u522B\u628A\u547D\u4EE4\u4E0B\u53D1\u7ED9\u4E86\u81EA\u5DF1\u7684\u7BA1\u7406\u4EBA\u5458\u3002\u5408\u4F19\u4EBA1\u547D\u4EE4\u4E0B\u8FBE\u540E\uFF0C\u7BA1\u7406\u4EBA\u5458a\u5728\u8F9E\u9000\u4E86\u5458\u5DE5\u540E\uFF0C\u4ED6\u5C31\u77E5\u9053\u8FD9\u4E2A\u5458\u5DE5\u88AB\u5F00\u9664\u4E86\u3002\u800C\u5408\u4F19\u4EBA2\u7684\u7BA1\u7406\u4EBA\u54582\u8FD9\u65F6\u5019\u5728\u6CA1\u5F97\u5230\u6D88\u606F\u4E4B\u524D\uFF0C\u8FD8\u8BA4\u4E3A\u5458\u5DE5a\u662F\u5728\u804C\u7684\uFF0C\u4ED6\u5C31\u6B23\u7136\u7684\u63A5\u6536\u4E86\u5408\u4F19\u4EBA\u7ED9\u4ED6\u7684\u5347\u804Ca\u7684\u547D\u4EE4\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220518153601124.png" alt="image-20220518153601124"></p><h3 id="_1-3-\u5904\u7406\u5668\u4F18\u5316\u548C\u6307\u4EE4\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5904\u7406\u5668\u4F18\u5316\u548C\u6307\u4EE4\u91CD\u6392" aria-hidden="true">#</a> 1.3 \u5904\u7406\u5668\u4F18\u5316\u548C\u6307\u4EE4\u91CD\u6392</h3><p>\u4E0A\u9762\u63D0\u5230\u5728\u5728CPU\u548C\u4E3B\u5B58\u4E4B\u95F4\u589E\u52A0\u7F13\u5B58\uFF0C\u5728\u591A\u7EBF\u7A0B\u573A\u666F\u4E0B\u4F1A\u5B58\u5728<strong>\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898</strong>\u3002\u9664\u4E86\u8FD9\u79CD\u60C5\u51B5\uFF0C\u8FD8\u6709\u4E00\u79CD\u786C\u4EF6\u95EE\u9898\u4E5F\u6BD4\u8F83\u91CD\u8981\u3002\u90A3\u5C31\u662F\u4E3A\u4E86\u4F7F\u5904\u7406\u5668\u5185\u90E8\u7684\u8FD0\u7B97\u5355\u5143\u80FD\u591F\u5C3D\u91CF\u7684\u88AB\u5145\u5206\u5229\u7528\uFF0C\u5904\u7406\u5668\u53EF\u80FD\u4F1A\u5BF9\u8F93\u5165\u4EE3\u7801\u8FDB\u884C\u4E71\u5E8F\u6267\u884C\u5904\u7406\u3002\u8FD9\u5C31\u662F<strong>\u5904\u7406\u5668\u4F18\u5316</strong>\u3002</p><p>\u9664\u4E86\u73B0\u5728\u5F88\u591A\u6D41\u884C\u7684\u5904\u7406\u5668\u4F1A\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u4E71\u5E8F\u5904\u7406\uFF0C\u5F88\u591A\u7F16\u7A0B\u8BED\u8A00\u7684\u7F16\u8BD1\u5668\u4E5F\u4F1A\u6709\u7C7B\u4F3C\u7684\u4F18\u5316\uFF0C\u6BD4\u5982Java\u865A\u62DF\u673A\u7684\u5373\u65F6\u7F16\u8BD1\u5668\uFF08JIT\uFF09\u4E5F\u4F1A\u505A<strong>\u6307\u4EE4\u91CD\u6392</strong>\u3002</p><p>\u53EF\u60F3\u800C\u77E5\uFF0C\u5982\u679C\u4EFB\u7531\u5904\u7406\u5668\u4F18\u5316\u548C\u7F16\u8BD1\u5668\u5BF9\u6307\u4EE4\u91CD\u6392\u7684\u8BDD\uFF0C\u5C31\u53EF\u80FD\u5BFC\u81F4\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\u3002</p><blockquote><p>\u5173\u4E8E\u5458\u5DE5\u7EC4\u7EC7\u8C03\u6574\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u5141\u8BB8\u4EBA\u4E8B\u90E8\u5728\u63A5\u5230\u591A\u4E2A\u547D\u4EE4\u540E\u8FDB\u884C\u968F\u610F\u62C6\u5206\u4E71\u5E8F\u6267\u884C\u6216\u8005\u91CD\u6392\u7684\u8BDD\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u8FD9\u4E2A\u5458\u5DE5\u4EE5\u53CA\u8FD9\u5BB6\u516C\u53F8\u7684\u5F71\u54CD\u662F\u975E\u5E38\u5927\u7684\u3002</p></blockquote><h2 id="_2-\u5E76\u53D1\u7F16\u7A0B\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u5E76\u53D1\u7F16\u7A0B\u7684\u95EE\u9898" aria-hidden="true">#</a> 2. \u5E76\u53D1\u7F16\u7A0B\u7684\u95EE\u9898</h2><h3 id="_2-1-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-1-\u95EE\u9898" aria-hidden="true">#</a> 2.1 \u95EE\u9898</h3><p>\u524D\u9762\u8BF4\u7684\u548C\u786C\u4EF6\u6709\u5173\u7684\u6982\u5FF5\u4F60\u53EF\u80FD\u542C\u5F97\u6709\u70B9\u8499\uFF0C\u8FD8\u4E0D\u77E5\u9053\u4ED6\u5230\u5E95\u548C\u8F6F\u4EF6\u6709\u5565\u5173\u7CFB\u3002\u4F46\u662F\u5173\u4E8E\u5E76\u53D1\u7F16\u7A0B\u7684\u95EE\u9898\u4F60\u5E94\u8BE5\u6709\u6240\u4E86\u89E3\uFF0C\u6BD4\u5982\u539F\u5B50\u6027\u95EE\u9898\uFF0C\u53EF\u89C1\u6027\u95EE\u9898\u548C\u6709\u5E8F\u6027\u95EE\u9898\u3002</p><p>\u5176\u5B9E\uFF0C\u539F\u5B50\u6027\u95EE\u9898\uFF0C\u53EF\u89C1\u6027\u95EE\u9898\u548C\u6709\u5E8F\u6027\u95EE\u9898\u3002\u662F\u4EBA\u4EEC\u62BD\u8C61\u5B9A\u4E49\u51FA\u6765\u7684\u3002\u800C\u8FD9\u4E2A\u62BD\u8C61\u7684\u5E95\u5C42\u95EE\u9898\u5C31\u662F\u524D\u9762\u63D0\u5230\u7684<strong>\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898\u3001\u5904\u7406\u5668\u4F18\u5316\u95EE\u9898\u548C\u6307\u4EE4\u91CD\u6392\u95EE\u9898\u7B49\u3002</strong></p><h4 id="_2-1-1-\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u539F\u5B50\u6027" aria-hidden="true">#</a> 2.1.1 <strong>\u539F\u5B50\u6027</strong></h4><p><strong>\u539F\u5B50\u6027</strong>\u662F\u6307\u5728\u4E00\u4E2A\u64CD\u4F5C\u4E2D\u5C31\u662Fcpu\u4E0D\u53EF\u4EE5\u5728\u4E2D\u9014\u6682\u505C\u7136\u540E\u518D\u8C03\u5EA6\uFF0C\u65E2\u4E0D\u88AB\u4E2D\u65AD\u64CD\u4F5C\uFF0C\u8981\u4E0D\u6267\u884C\u5B8C\u6210\uFF0C\u8981\u4E0D\u5C31\u4E0D\u6267\u884C\u3002</p><h4 id="_2-1-2-\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u53EF\u89C1\u6027" aria-hidden="true">#</a> 2.1.2 \u53EF\u89C1\u6027</h4><p><strong>\u53EF\u89C1\u6027</strong>\u662F\u6307\u5F53\u591A\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u540C\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u80FD\u591F\u7ACB\u5373\u770B\u5F97\u5230\u4FEE\u6539\u7684\u503C\u3002</p><h4 id="_2-1-3-\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u6709\u5E8F\u6027" aria-hidden="true">#</a> 2.1.3 \u6709\u5E8F\u6027</h4><p><strong>\u6709\u5E8F\u6027</strong>\u5373\u7A0B\u5E8F\u6267\u884C\u7684\u987A\u5E8F\u6309\u7167\u4EE3\u7801\u7684\u5148\u540E\u987A\u5E8F\u6267\u884C\u3002</p><h3 id="_2-2-\u95EE\u9898\u5BF9\u5E94\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-2-\u95EE\u9898\u5BF9\u5E94\u5173\u7CFB" aria-hidden="true">#</a> 2.2 \u95EE\u9898\u5BF9\u5E94\u5173\u7CFB</h3><ul><li><strong>\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898</strong>\u5176\u5B9E\u5C31\u662F<strong>\u53EF\u89C1\u6027\u95EE\u9898</strong>\u3002</li><li>\u800C<strong>\u5904\u7406\u5668\u4F18\u5316</strong>\u662F\u53EF\u4EE5\u5BFC\u81F4<strong>\u539F\u5B50\u6027\u95EE\u9898</strong>\u7684\u3002</li><li><strong>\u6307\u4EE4\u91CD\u6392</strong>\u5373\u4F1A\u5BFC\u81F4<strong>\u6709\u5E8F\u6027\u95EE\u9898</strong>\u3002</li></ul><h2 id="_3-\u4EC0\u4E48\u662F\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u662F\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> 3. \u4EC0\u4E48\u662F\u5185\u5B58\u6A21\u578B</h2><p>\u524D\u9762\u63D0\u5230\u7684\uFF0C\u7F13\u5B58\u4E00\u81F4\u6027\u95EE\u9898\u3001\u5904\u7406\u5668\u5668\u4F18\u5316\u7684\u6307\u4EE4\u91CD\u6392\u95EE\u9898\u662F\u786C\u4EF6\u7684\u4E0D\u65AD\u5347\u7EA7\u5BFC\u81F4\u7684\u3002\u90A3\u4E48\uFF0C\u6709\u6CA1\u6709\u4EC0\u4E48\u673A\u5236\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u51B3\u4E0A\u9762\u7684\u8FD9\u4E9B\u95EE\u9898\u5462\uFF1F</p><p>\u6700\u7B80\u5355\u76F4\u63A5\u7684\u505A\u6CD5\u5C31\u662F\u5E9F\u9664\u5904\u7406\u5668\u548C\u5904\u7406\u5668\u7684\u4F18\u5316\u6280\u672F\u3001\u5E9F\u9664CPU\u7F13\u5B58\uFF0C\u8BA9CPU\u76F4\u63A5\u548C\u4E3B\u5B58\u4EA4\u4E92\u3002\u4F46\u662F\uFF0C\u8FD9\u4E48\u505A\u867D\u7136\u53EF\u4EE5\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u4E0B\u7684\u5E76\u53D1\u95EE\u9898\u3002\u4F46\u662F\uFF0C\u8FD9\u5C31\u6709\u70B9\u56E0\u564E\u5E9F\u98DF\u4E86\u3002</p><p>\u6240\u4EE5\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u5E76\u53D1\u7F16\u7A0B\u4E2D\u53EF\u4EE5\u6EE1\u8DB3\u539F\u5B50\u6027\u3001\u53EF\u89C1\u6027\u53CA\u6709\u5E8F\u6027\u3002\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u90A3\u5C31\u662F\u2014\u2014\u5185\u5B58\u6A21\u578B\u3002</p><h3 id="_3-1-\u5185\u5B58\u6A21\u578B\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5185\u5B58\u6A21\u578B\u89C4\u8303" aria-hidden="true">#</a> 3.1 <strong>\u5185\u5B58\u6A21\u578B</strong>\u89C4\u8303</h3><p>**\u4E3A\u4E86\u4FDD\u8BC1\u5171\u4EAB\u5185\u5B58\u7684\u6B63\u786E\u6027\uFF08\u53EF\u89C1\u6027\u3001\u6709\u5E8F\u6027\u3001\u539F\u5B50\u6027\uFF09\uFF0C\u5185\u5B58\u6A21\u578B\u5B9A\u4E49\u4E86\u5171\u4EAB\u5185\u5B58\u7CFB\u7EDF\u4E2D\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u8BFB\u5199\u64CD\u4F5C\u884C\u4E3A\u7684\u89C4\u8303\u3002**\u901A\u8FC7\u8FD9\u4E9B\u89C4\u5219\u6765\u89C4\u8303\u5BF9\u5185\u5B58\u7684\u8BFB\u5199\u64CD\u4F5C\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u6307\u4EE4\u6267\u884C\u7684\u6B63\u786E\u6027\u3002\u5B83\u4E0E\u5904\u7406\u5668\u6709\u5173\u3001\u4E0E\u7F13\u5B58\u6709\u5173\u3001\u4E0E\u5E76\u53D1\u6709\u5173\u3001\u4E0E\u7F16\u8BD1\u5668\u4E5F\u6709\u5173\u3002\u4ED6\u89E3\u51B3\u4E86CPU\u591A\u7EA7\u7F13\u5B58\u3001\u5904\u7406\u5668\u4F18\u5316\u3001\u6307\u4EE4\u91CD\u6392\u7B49\u5BFC\u81F4\u7684\u5185\u5B58\u8BBF\u95EE\u95EE\u9898\uFF0C\u4FDD\u8BC1\u4E86\u5E76\u53D1\u573A\u666F\u4E0B\u7684\u4E00\u81F4\u6027\u3001\u539F\u5B50\u6027\u548C\u6709\u5E8F\u6027\u3002</p><p>\u5185\u5B58\u6A21\u578B\u89E3\u51B3\u5E76\u53D1\u95EE\u9898\u4E3B\u8981\u91C7\u7528\u4E24\u79CD\u65B9\u5F0F\uFF1A<strong>\u9650\u5236\u5904\u7406\u5668\u4F18\u5316</strong>\u548C<strong>\u4F7F\u7528\u5185\u5B58\u5C4F\u969C</strong>\u3002</p><h3 id="_3-2-\u4EC0\u4E48\u662Fjava\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4EC0\u4E48\u662Fjava\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> 3.2 \u4EC0\u4E48\u662FJava\u5185\u5B58\u6A21\u578B</h3><p>\u524D\u9762\u4ECB\u7ECD\u8FC7\u4E86\u8BA1\u7B97\u673A\u5185\u5B58\u6A21\u578B\uFF0C\u8FD9\u662F\u89E3\u51B3\u591A\u7EBF\u7A0B\u573A\u666F\u4E0B\u5E76\u53D1\u95EE\u9898\u7684\u4E00\u4E2A\u91CD\u8981\u89C4\u8303\u3002\u90A3\u4E48\u5177\u4F53\u7684\u5B9E\u73B0\u662F\u5982\u4F55\u7684\u5462\uFF0C\u4E0D\u540C\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5728\u5B9E\u73B0\u4E0A\u53EF\u80FD\u6709\u6240\u4E0D\u540C\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0CJava\u7A0B\u5E8F\u662F\u9700\u8981\u8FD0\u884C\u5728Java\u865A\u62DF\u673A\u4E0A\u9762\u7684\uFF0C<strong>Java\u5185\u5B58\u6A21\u578B\uFF08Java Memory Model ,JMM\uFF09\u5C31\u662F\u4E00\u79CD\u7B26\u5408\u5185\u5B58\u6A21\u578B\u89C4\u8303\u7684\uFF0C\u5C4F\u853D\u4E86\u5404\u79CD\u786C\u4EF6\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8BBF\u95EE\u5DEE\u5F02\u7684\uFF0C\u4FDD\u8BC1\u4E86Java\u7A0B\u5E8F\u5728\u5404\u79CD\u5E73\u53F0\u4E0B\u5BF9\u5185\u5B58\u7684\u8BBF\u95EE\u90FD\u80FD\u4FDD\u8BC1\u6548\u679C\u4E00\u81F4\u7684\u673A\u5236\u53CA\u89C4\u8303\u3002</strong></p>',66),p=e("\u63D0\u5230Java\u5185\u5B58\u6A21\u578B\uFF0C\u4E00\u822C\u6307\u7684\u662FJDK 5 \u5F00\u59CB\u4F7F\u7528\u7684\u65B0\u7684\u5185\u5B58\u6A21\u578B\uFF0C\u4E3B\u8981\u7531"),l={href:"http://www.cs.umd.edu/~pugh/java/memoryModel/jsr133.pdf",target:"_blank",rel:"noopener noreferrer"},_=e("JSR-133: JavaTM Memory Model and Thread Specification"),g=e(" \u63CF\u8FF0\u3002\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u53C2\u770B\u4E0B\u8FD9\u4EFDPDF\u6587\u6863\uFF08http://www.cs.umd.edu/~pugh/java/memoryModel/jsr133.pdf\uFF09"),u=n('<h3 id="_3-2-1-\u89C4\u5B9A\u4E86\u4EC0\u4E48-\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u89C4\u5B9A\u4E86\u4EC0\u4E48-\u91CD\u70B9" aria-hidden="true">#</a> 3.2.1 \u89C4\u5B9A\u4E86\u4EC0\u4E48\uFF1F\uFF08\u91CD\u70B9\uFF09</h3><p><strong>Java\u5185\u5B58\u6A21\u578B\u89C4\u5B9A\u4E86\u6240\u6709\u7684\u53D8\u91CF\u90FD\u5B58\u50A8\u5728\u4E3B\u5185\u5B58\u4E2D</strong>\uFF0C<strong>\u6BCF\u6761\u7EBF\u7A0B\u8FD8\u6709\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\uFF0C\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4FDD\u5B58\u4E86\u8BE5\u7EBF\u7A0B\u4E2D\u662F\u7528\u5230\u7684\u53D8\u91CF\u7684\u4E3B\u5185\u5B58\u526F\u672C\u62F7\u8D1D\uFF0C\u7EBF\u7A0B\u5BF9\u53D8\u91CF\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u5FC5\u987B\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u8BFB\u5199\u4E3B\u5185\u5B58\u3002\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E4B\u95F4\u4E5F\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u5BF9\u65B9\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\uFF0C\u7EBF\u7A0B\u95F4\u53D8\u91CF\u7684\u4F20\u9012\u5747\u9700\u8981\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\u548C\u4E3B\u5B58\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u540C\u6B65\u8FDB\u884C\u3002</strong></p><p>\u800CJMM\u5C31\u4F5C\u7528\u4E8E\u5DE5\u4F5C\u5185\u5B58\u548C\u4E3B\u5B58\u4E4B\u95F4\u6570\u636E\u540C\u6B65\u8FC7\u7A0B\u3002\u4ED6\u89C4\u5B9A\u4E86\u5982\u4F55\u505A\u6570\u636E\u540C\u6B65\u4EE5\u53CA\u4EC0\u4E48\u65F6\u5019\u505A\u6570\u636E\u540C\u6B65\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220518154852921.png" alt="image-20220518154852921"></p><blockquote><p>\u8FD9\u91CC\u9762\u63D0\u5230\u7684\u4E3B\u5185\u5B58\u548C\u5DE5\u4F5C\u5185\u5B58\uFF0C\u8BFB\u8005\u53EF\u4EE5\u7B80\u5355\u7684\u7C7B\u6BD4\u6210\u8BA1\u7B97\u673A\u5185\u5B58\u6A21\u578B\u4E2D\u7684\u4E3B\u5B58\u548C\u7F13\u5B58\u7684\u6982\u5FF5\u3002\u7279\u522B\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<strong>\u4E3B\u5185\u5B58\u548C\u5DE5\u4F5C\u5185\u5B58\u4E0EJVM\u5185\u5B58\u7ED3\u6784\u4E2D\u7684Java\u5806\u3001\u6808\u3001\u65B9\u6CD5\u533A\u7B49\u5E76\u4E0D\u662F\u540C\u4E00\u4E2A\u5C42\u6B21\u7684\u5185\u5B58\u5212\u5206\uFF0C\u65E0\u6CD5\u76F4\u63A5\u7C7B\u6BD4</strong>\u3002\u300A\u6DF1\u5165\u7406\u89E3Java\u865A\u62DF\u673A\u300B\u4E2D\u8BA4\u4E3A\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u52C9\u5F3A\u5BF9\u5E94\u8D77\u6765\u7684\u8BDD\uFF0C\u4ECE\u53D8\u91CF\u3001\u4E3B\u5185\u5B58\u3001\u5DE5\u4F5C\u5185\u5B58\u7684\u5B9A\u4E49\u6765\u770B\uFF0C\u4E3B\u5185\u5B58\u4E3B\u8981\u5BF9\u5E94\u4E8EJava\u5806\u4E2D\u7684\u5BF9\u8C61\u5B9E\u4F8B\u6570\u636E\u90E8\u5206\u3002\u5DE5\u4F5C\u5185\u5B58\u5219\u5BF9\u5E94\u4E8E\u865A\u62DF\u673A\u6808\u4E2D\u7684\u90E8\u5206\u533A\u57DF\u3002</p></blockquote><p><strong>\u6240\u4EE5\uFF0C\u518D\u6765\u603B\u7ED3\u4E0B\uFF0CJMM\u662F\u4E00\u79CD\u89C4\u8303\uFF0C\u76EE\u7684\u662F\u89E3\u51B3\u7531\u4E8E\u591A\u7EBF\u7A0B\u901A\u8FC7\u5171\u4EAB\u5185\u5B58\u8FDB\u884C\u901A\u4FE1\u65F6\uFF0C\u5B58\u5728\u7684\u672C\u5730\u5185\u5B58\u6570\u636E\u4E0D\u4E00\u81F4\u3001\u7F16\u8BD1\u5668\u4F1A\u5BF9\u4EE3\u7801\u6307\u4EE4\u91CD\u6392\u5E8F\u3001\u5904\u7406\u5668\u4F1A\u5BF9\u4EE3\u7801\u4E71\u5E8F\u6267\u884C\u7B49\u5E26\u6765\u7684\u95EE\u9898\u3002</strong></p><h2 id="_4-java\u5185\u5B58\u6A21\u578B\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-java\u5185\u5B58\u6A21\u578B\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 4. Java\u5185\u5B58\u6A21\u578B\u7684\u5B9E\u73B0</h2><p>\u4E86\u89E3Java\u591A\u7EBF\u7A0B\u7684\u670B\u53CB\u90FD\u77E5\u9053\uFF0C\u5728Java\u4E2D\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u548C\u5E76\u53D1\u5904\u7406\u76F8\u5173\u7684\u5173\u952E\u5B57\uFF0C\u6BD4\u5982<code>volatile</code>\u3001<code>synchronized</code>\u3001<code>final</code>\u3001<code>concurren</code>\u5305\u7B49\u3002\u5176\u5B9E\u8FD9\u4E9B\u5C31\u662FJava\u5185\u5B58\u6A21\u578B\u5C01\u88C5\u4E86\u5E95\u5C42\u7684\u5B9E\u73B0\u540E\u63D0\u4F9B\u7ED9\u7A0B\u5E8F\u5458\u4F7F\u7528\u7684\u4E00\u4E9B\u5173\u952E\u5B57\u3002</p><p>\u5728\u5F00\u53D1\u591A\u7EBF\u7A0B\u7684\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>synchronized</code>\u7B49\u5173\u952E\u5B57\u6765\u63A7\u5236\u5E76\u53D1\uFF0C\u4ECE\u6765\u5C31\u4E0D\u9700\u8981\u5173\u5FC3\u5E95\u5C42\u7684\u7F16\u8BD1\u5668\u4F18\u5316\u3001\u7F13\u5B58\u4E00\u81F4\u6027\u7B49\u95EE\u9898\u3002\u6240\u4EE5\uFF0C<strong>Java\u5185\u5B58\u6A21\u578B\uFF0C\u9664\u4E86\u5B9A\u4E49\u4E86\u4E00\u5957\u89C4\u8303\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u539F\u8BED\uFF0C\u5C01\u88C5\u4E86\u5E95\u5C42\u5B9E\u73B0\u540E\uFF0C\u4F9B\u5F00\u53D1\u8005\u76F4\u63A5\u4F7F\u7528\u3002</strong></p><h3 id="_4-1-\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-\u539F\u5B50\u6027" aria-hidden="true">#</a> 4.1 \u539F\u5B50\u6027</h3>',10),b=e("\u5728Java\u4E2D\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u539F\u5B50\u6027\uFF0C\u63D0\u4F9B\u4E86\u4E24\u4E2A\u9AD8\u7EA7\u7684\u5B57\u8282\u7801\u6307\u4EE4"),v=a("code",null,"monitorenter",-1),f=e("\u548C"),C=a("code",null,"monitorexit",-1),P=e("\u3002\u5728"),U={href:"http://www.hollischuang.com/archives/1883",target:"_blank",rel:"noopener noreferrer"},J=e("synchronized\u7684\u5B9E\u73B0\u539F\u7406"),x=e("\u6587\u7AE0\u4E2D\uFF0C\u4ECB\u7ECD\u8FC7\uFF0C\u8FD9\u4E24\u4E2A\u5B57\u8282\u7801\uFF0C\u5728Java\u4E2D\u5BF9\u5E94\u7684\u5173\u952E\u5B57\u5C31\u662F"),m=a("code",null,"synchronized",-1),k=e("\u3002"),z=n('<p>\u56E0\u6B64\uFF0C\u5728Java\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>synchronized</code>\u6765\u4FDD\u8BC1\u65B9\u6CD5\u548C\u4EE3\u7801\u5757\u5185\u7684\u64CD\u4F5C\u662F\u539F\u5B50\u6027\u7684\u3002</p><h3 id="_4-2-\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_4-2-\u53EF\u89C1\u6027" aria-hidden="true">#</a> 4.2 \u53EF\u89C1\u6027</h3><p>Java\u5185\u5B58\u6A21\u578B\u662F\u901A\u8FC7\u5728\u53D8\u91CF\u4FEE\u6539\u540E\u5C06\u65B0\u503C\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\uFF0C\u5728\u53D8\u91CF\u8BFB\u53D6\u524D\u4ECE\u4E3B\u5185\u5B58\u5237\u65B0\u53D8\u91CF\u503C\u7684\u8FD9\u79CD\u4F9D\u8D56\u4E3B\u5185\u5B58\u4F5C\u4E3A\u4F20\u9012\u5A92\u4ECB\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\u3002</p><p>Java\u4E2D\u7684<code>volatile</code>\u5173\u952E\u5B57\u63D0\u4F9B\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u90A3\u5C31\u662F\u88AB\u5176\u4FEE\u9970\u7684\u53D8\u91CF\u5728\u88AB\u4FEE\u6539\u540E\u53EF\u4EE5\u7ACB\u5373\u540C\u6B65\u5230\u4E3B\u5185\u5B58\uFF0C\u88AB\u5176\u4FEE\u9970\u7684\u53D8\u91CF\u5728\u6BCF\u6B21\u662F\u7528\u4E4B\u524D\u90FD\u4ECE\u4E3B\u5185\u5B58\u5237\u65B0\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>volatile</code>\u6765\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u64CD\u4F5C\u65F6\u53D8\u91CF\u7684\u53EF\u89C1\u6027\u3002</p><p>\u9664\u4E86<code>volatile</code>\uFF0CJava\u4E2D\u7684<code>synchronized</code>\u548C<code>final</code>\u4E24\u4E2A\u5173\u952E\u5B57\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u53EF\u89C1\u6027\u3002\u53EA\u4E0D\u8FC7\u5B9E\u73B0\u65B9\u5F0F\u4E0D\u540C\uFF0C\u8FD9\u91CC\u4E0D\u518D\u5C55\u5F00\u4E86\u3002</p><h3 id="_4-3-\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6709\u5E8F\u6027" aria-hidden="true">#</a> 4.3 \u6709\u5E8F\u6027</h3><p>\u5728Java\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>synchronized</code>\u548C<code>volatile</code>\u6765\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u4E4B\u95F4\u64CD\u4F5C\u7684\u6709\u5E8F\u6027\u3002\u5B9E\u73B0\u65B9\u5F0F\u6709\u6240\u533A\u522B\uFF1A</p><p><code>volatile</code>\u5173\u952E\u5B57\u4F1A\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u3002<code>synchronized</code>\u5173\u952E\u5B57\u4FDD\u8BC1\u540C\u4E00\u65F6\u523B\u53EA\u5141\u8BB8\u4E00\u6761\u7EBF\u7A0B\u64CD\u4F5C\u3002</p><h3 id="_4-4-\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#_4-4-\u8B66\u544A" aria-hidden="true">#</a> 4.4 \u8B66\u544A</h3><p>\u4ECB\u7ECD\u5B8C\u4E86Java\u5E76\u53D1\u7F16\u7A0B\u4E2D\u89E3\u51B3\u539F\u5B50\u6027\u3001\u53EF\u89C1\u6027\u4EE5\u53CA\u6709\u5E8F\u6027\u53EF\u4EE5\u4F7F\u7528\u7684\u5173\u952E\u5B57\u3002\u8BFB\u8005\u53EF\u80FD\u53D1\u73B0\u4E86\uFF0C\u597D\u50CF<code>synchronized</code>\u5173\u952E\u5B57\u662F\u4E07\u80FD\u7684\uFF0C\u4ED6\u53EF\u4EE5\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0A\u4E09\u79CD\u7279\u6027\uFF0C\u8FD9\u5176\u5B9E\u4E5F\u662F\u5F88\u591A\u4EBA\u6EE5\u7528<code>synchronized</code>\u7684\u539F\u56E0\u3002</p><p>\u4F46\u662F<code>synchronized</code>\u662F\u6BD4\u8F83\u5F71\u54CD\u6027\u80FD\u7684\uFF0C\u867D\u7136\u7F16\u8BD1\u5668\u63D0\u4F9B\u4E86\u5F88\u591A\u9501\u4F18\u5316\u6280\u672F\uFF0C\u4F46\u662F\u4E5F\u4E0D\u5EFA\u8BAE\u8FC7\u5EA6\u4F7F\u7528\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',12),q={href:"https://www.hollischuang.com/archives/2550",target:"_blank",rel:"noopener noreferrer"},y=e("\u518D\u6709\u4EBA\u95EE\u4F60Java\u5185\u5B58\u6A21\u578B\u662F\u4EC0\u4E48\uFF0C\u5C31\u628A\u8FD9\u7BC7\u6587\u7AE0\u53D1\u7ED9\u4ED6\u3002");function M(j,L){const o=h("ExternalLinkIcon");return s(),d("div",null,[i,a("blockquote",null,[a("p",null,[p,a("a",l,[_,r(o)]),g])]),u,a("p",null,[b,v,f,C,P,a("a",U,[J,r(o)]),x,m,k]),z,a("p",null,[a("a",q,[y,r(o)])])])}var V=t(c,[["render",M],["__file","java\u5185\u5B58\u6A21\u578B.html.vue"]]);export{V as default};
