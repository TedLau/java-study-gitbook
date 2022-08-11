import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.72d9fd95.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="flyway\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#flyway\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406" aria-hidden="true">#</a> Flyway\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Flyway \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406\u5DE5\u5177</p><h2 id="_2-\u4E3A\u4EC0\u4E48\u8981\u7528flyway" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u8981\u7528flyway" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u8981\u7528Flyway</h2><blockquote><ol><li><p>\u81EA\u5DF1\u5199\u7684SQL\u5FD8\u4E86\u5728\u6240\u6709\u73AF\u5883\u6267\u884C\uFF1B</p></li><li><p>\u522B\u4EBA\u5199\u7684SQL\u6211\u4EEC\u4E0D\u80FD\u786E\u5B9A\u662F\u5426\u90FD\u5728\u6240\u6709\u73AF\u5883\u6267\u884C\u8FC7\u4E86\uFF1B</p></li><li><p>\u6709\u4EBA\u4FEE\u6539\u4E86\u5DF2\u7ECF\u6267\u884C\u8FC7\u7684SQL\uFF0C\u671F\u671B\u518D\u6B21\u6267\u884C\uFF1B</p></li><li><p>\u9700\u8981\u65B0\u589E\u73AF\u5883\u505A\u6570\u636E\u8FC1\u79FB\uFF1B</p></li><li><p>\u6BCF\u6B21\u53D1\u7248\u9700\u8981\u624B\u52A8\u63A7\u5236\u5148\u53D1DB\u7248\u672C\uFF0C\u518D\u53D1\u5E03\u5E94\u7528\u7248\u672C\uFF1B</p></li></ol></blockquote><p>\u4EE5\u4E0A\u79CD\u79CD\u573A\u666F\u90FD\u5728\u8BF4\u660E\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406\u7684\u91CD\u8981\u6027\u3002\u7279\u522B\u662F\u6211\u4EEC\u5728\u5F00\u53D1\u73AF\u5883\u7684\u4FEE\u6539\uFF0C\u5982\u679C\u6CA1\u505A\u597D\u7BA1\u7406\u3002\u5F88\u53EF\u80FD\u5C31\u5F71\u54CD\u7EBF\u4E0A\u73AF\u5883\u3002\u5BFC\u81F4\u9879\u76EE\u90E8\u7F72\u5F02\u5E38</p><h2 id="_3-\u8FD0\u884C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u8FD0\u884C\u539F\u7406" aria-hidden="true">#</a> 3. \u8FD0\u884C\u539F\u7406</h2><p>\u5F53 Flyway \u8FDE\u63A5\u6570\u636E\u5E93\u4E2D\u7684 schema \u540E\uFF0C\u4F1A\u5148\u68C0\u67E5\u662F\u5426\u5DF2\u5B58\u5728 <strong>flyway_schema_history</strong> \uFF08\u9ED8\u8BA4\u540D\uFF0C\u4E5F\u53EF\u81EA\u5B9A\u4E49\uFF09\u8868\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u521B\u5EFA\u3002\u8BE5\u8868\u7528\u4E8E\u8DDF\u8E2A\u6570\u636E\u5E93\u7684\u72B6\u6001\uFF0C\u5982\u6570\u636E\u8FC1\u79FB\u7684\u7248\u672C\uFF0C\u8FC1\u79FB\u6210\u529F\u72B6\u6001\u7B49\u4FE1\u606F\u3002</p><p>\u5F53 <strong>flyway_schema_history</strong> \u5B58\u5728\u540E\uFF0CFlyway \u4F1A\u626B\u63CF\u6587\u4EF6\u7CFB\u7EDF\u6216\u5E94\u7528\u4E2D\u7684 classpath \u76EE\u5F55\u7684\u6570\u636E\u8FC1\u79FB\u6587\u4EF6\uFF0C\u7136\u540E\u6839\u636E\u5B83\u4EEC\u7684\u7248\u672C\u53F7\u8FDB\u884C\u6309\u5E8F\u8FC1\u79FB\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015152758896.png" alt="image-20201015152758896"></p><p><strong>flyway_schema_history</strong> \u8868\u8BB0\u5F55\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><table><thead><tr><th>installed_rank</th><th>version</th><th>description</th><th>type</th><th>script</th><th>checksum</th><th>installed_by</th><th>installed_on</th><th>execution_time</th><th>success</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>Initial Setup</td><td>SQL</td><td>V1__Initial_Setup.sql</td><td>1996767037</td><td>axel</td><td>2016-02-04 22:23:00.0</td><td>546</td><td>true</td></tr><tr><td>2</td><td>2</td><td>First Changes</td><td>SQL</td><td>V2__First_Changes.sql</td><td>1279644856</td><td>axel</td><td>2016-02-06 09:18:00.0</td><td>127</td><td>true</td></tr></tbody></table><p><strong>\u7531\u4E8E flyway_schema_history \u8868\u4E2D\u8BB0\u5F55\u4E86\u8FC1\u79FB\u7684\u7248\u672C\u53F7\uFF0C\u5982\u679C\u6587\u4EF6\u7684\u7248\u672C\u53F7\u5C0F\u4E8E\u6216\u7B49\u4E8E\u6807\u8BB0\u4E3A\u5F53\u524D\u7248\u672C\u7684\u7248\u672C\u53F7\uFF0C\u5219\u5FFD\u7565\u5B83\u4EEC\u4E0D\u6267\u884C\u3002</strong></p><h2 id="_4-\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 4. \u96C6\u6210\u4F7F\u7528</h2><h3 id="_4-1-\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> 4.1 \u6DFB\u52A0\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>flyway-core\uFF1A flyway \u6838\u5FC3\u5E93</li><li>spring-boot-starter-jdbc\uFF1A\u4E0D\u80FD\u7701\u7565\uFF0C\u5426\u5219\u8FD0\u884C\u65E0\u6548\u679C</li><li>mysql-connector-java\uFF1A \u6839\u636E\u5B9E\u9645\u6570\u636E\u5E93\u51B3\u5B9A</li></ul><h3 id="_4-2-\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 4.2 \u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6</h3><p>\u5728application.yml \u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>\n    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//120.79.200.111<span class="token punctuation">:</span>3306/mytest<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;allowMultiQueries=true&amp;rewriteBatchedStatements=true&amp;useSSL=false&amp;serverTimezone=GMT%2B8</span>\n    <span class="token key atrule">username</span><span class="token punctuation">:</span> root\n    <span class="token key atrule">password</span><span class="token punctuation">:</span> zsz123456\n<span class="token comment"># flyway \u914D\u7F6E</span>\n  <span class="token key atrule">flyway</span><span class="token punctuation">:</span>\n    <span class="token comment"># \u542F\u7528\u6216\u7981\u7528 flyway</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token comment"># flyway \u7684 clean \u547D\u4EE4\u4F1A\u5220\u9664\u6307\u5B9A schema \u4E0B\u7684\u6240\u6709 table, \u751F\u4EA7\u52A1\u5FC5\u7981\u6389\u3002\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u662F false \u7406\u8BBA\u4E0A\u4F5C\u4E3A\u9ED8\u8BA4\u914D\u7F6E\u662F\u4E0D\u79D1\u5B66\u7684\u3002</span>\n    <span class="token key atrule">clean-disabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token comment"># SQL \u811A\u672C\u7684\u76EE\u5F55,\u591A\u4E2A\u8DEF\u5F84\u4F7F\u7528\u9017\u53F7\u5206\u9694 \u9ED8\u8BA4\u503C classpath:db/migration</span>\n    <span class="token key atrule">locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>db/migration\n    <span class="token comment">#  metadata \u7248\u672C\u63A7\u5236\u4FE1\u606F\u8868 \u9ED8\u8BA4 flyway_schema_history</span>\n    <span class="token key atrule">table</span><span class="token punctuation">:</span> flyway_schema_history\n    <span class="token comment"># \u5982\u679C\u6CA1\u6709 flyway_schema_history \u8FD9\u4E2A metadata \u8868\uFF0C \u5728\u6267\u884C flyway migrate \u547D\u4EE4\u4E4B\u524D, \u5FC5\u987B\u5148\u6267\u884C flyway baseline \u547D\u4EE4</span>\n    <span class="token comment"># \u8BBE\u7F6E\u4E3A true \u540E flyway \u5C06\u5728\u9700\u8981 baseline \u7684\u65F6\u5019, \u81EA\u52A8\u6267\u884C\u4E00\u6B21 baseline\u3002</span>\n    <span class="token key atrule">baseline-on-migrate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token comment"># \u6307\u5B9A baseline \u7684\u7248\u672C\u53F7,\u9ED8\u8BA4\u503C\u4E3A 1, \u4F4E\u4E8E\u8BE5\u7248\u672C\u53F7\u7684 SQL \u6587\u4EF6, migrate \u65F6\u4F1A\u88AB\u5FFD\u7565</span>\n    <span class="token key atrule">baseline-version</span><span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token comment"># \u5B57\u7B26\u7F16\u7801 \u9ED8\u8BA4 UTF-8</span>\n    <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>\n    <span class="token comment"># \u662F\u5426\u5141\u8BB8\u4E0D\u6309\u987A\u5E8F\u8FC1\u79FB \u5F00\u53D1\u5EFA\u8BAE true  \u751F\u4EA7\u5EFA\u8BAE false</span>\n    <span class="token key atrule">out-of-order</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment"># \u9700\u8981 flyway \u7BA1\u63A7\u7684 schema list,\u8FD9\u91CC\u6211\u4EEC\u914D\u7F6E\u4E3Aflyway  \u7F3A\u7701\u7684\u8BDD, \u4F7F\u7528spring.datasource.url \u914D\u7F6E\u7684\u90A3\u4E2A schema,</span>\n    <span class="token comment"># \u53EF\u4EE5\u6307\u5B9A\u591A\u4E2Aschema, \u4F46\u4EC5\u4F1A\u5728\u7B2C\u4E00\u4E2Aschema\u4E0B\u5EFA\u7ACB metadata \u8868, \u4E5F\u4EC5\u5728\u7B2C\u4E00\u4E2Aschema\u5E94\u7528migration sql \u811A\u672C.</span>\n    <span class="token comment"># \u4F46flyway Clean \u547D\u4EE4\u4F1A\u4F9D\u6B21\u5728\u8FD9\u4E9Bschema\u4E0B\u90FD\u6267\u884C\u4E00\u904D. \u6240\u4EE5 \u786E\u4FDD\u751F\u4EA7 spring.flyway.clean-disabled \u4E3A true</span>\n<span class="token comment">#    schemas: flyway</span>\n    <span class="token comment"># \u6267\u884C\u8FC1\u79FB\u65F6\u662F\u5426\u81EA\u52A8\u8C03\u7528\u9A8C\u8BC1   \u5F53\u4F60\u7684 \u7248\u672C\u4E0D\u7B26\u5408\u903B\u8F91 \u6BD4\u5982 \u4F60\u5148\u6267\u884C\u4E86 DML \u800C\u6CA1\u6709 \u5BF9\u5E94\u7684DDL \u4F1A\u629B\u51FA\u5F02\u5E38</span>\n    <span class="token key atrule">validate-on-migrate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u914D\u7F6E\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-3-\u914D\u7F6E\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> 4.3 \u914D\u7F6E\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6</h3><p>\u5728src/main/resources\u76EE\u5F55\u4E0B\u9762\u65B0\u5EFAdb.migration\u6587\u4EF6\u5939\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u76EE\u5F55\u4E0B\u7684.sql\u6587\u4EF6\u5C31\u7B97\u662F\u9700\u8981\u88ABflyway\u505A\u7248\u672C\u63A7\u5236\u7684\u6570\u636E\u5E93SQL\u8BED\u53E5\u3002</p><h4 id="_4-3-1-sql\u8BED\u53E5\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_4-3-1-sql\u8BED\u53E5\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> 4.3.1 SQL\u8BED\u53E5\u547D\u540D\u89C4\u8303</h4><p>SQL\u8BED\u53E5\u547D\u540D\u9700\u8981\u9075\u4ECE\u4E00\u5B9A\u7684\u89C4\u8303\uFF0C\u5426\u5219\u8FD0\u884C\u7684\u65F6\u5019flyway\u4F1A\u62A5\u9519\u3002\u547D\u540D\u89C4\u5219\u4E3B\u8981\u6709\u4E24\u79CD\uFF1A</p><ol><li>\u4EC5\u9700\u8981\u88AB\u6267\u884C\u4E00\u6B21\u7684SQL\u547D\u540D\u4EE5\u5927\u5199\u7684&quot;V&quot;\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u4E0A&quot;0~9&quot;\u6570\u5B57\u7684\u7EC4\u5408,\u6570\u5B57\u4E4B\u95F4\u53EF\u4EE5\u7528\u201C.\u201D\u6216\u8005\u4E0B\u5212\u7EBF&quot;_&quot;\u5206\u5272\u5F00\uFF0C\u7136\u540E\u518D\u4EE5\u4E24\u4E2A\u4E0B\u5212\u7EBF\u5206\u5272\uFF0C\u5176\u540E\u8DDF\u6587\u4EF6\u540D\u79F0\uFF0C\u6700\u540E\u4EE5.sql\u7ED3\u5C3E\u3002\u6BD4\u5982\uFF0C<code>V2.1.5__create_user_ddl.sql</code>\u3001<code>V4.1_2__add_user_dml.sql</code>\u3002</li><li>\u53EF\u91CD\u590D\u8FD0\u884C\u7684SQL\uFF0C\u5219\u4EE5\u5927\u5199\u7684\u201CR\u201D\u5F00\u5934\uFF0C\u540E\u9762\u518D\u4EE5\u4E24\u4E2A\u4E0B\u5212\u7EBF\u5206\u5272\uFF0C\u5176\u540E\u8DDF\u6587\u4EF6\u540D\u79F0\uFF0C\u6700\u540E\u4EE5.sql\u7ED3\u5C3E\u3002\u3002\u6BD4\u5982\uFF0C<code>R__truncate_user_dml.sql</code>\u3002</li></ol><p>\u5176\u4E2D\uFF0CV\u5F00\u5934\u7684SQL\u6267\u884C\u4F18\u5148\u7EA7\u8981\u6BD4R\u5F00\u5934\u7684SQL\u4F18\u5148\u7EA7\u9AD8\u3002</p><h4 id="_4-2-2-\u65B0\u5EFA\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u65B0\u5EFA\u811A\u672C" aria-hidden="true">#</a> 4.2.2 \u65B0\u5EFA\u811A\u672C</h4><p>demo\u51C6\u5907\u4E863\u4E2A\u811A\u672C\uFF1A\u5982\u4E0B</p><ol><li><p><code>V1__create_user.sql</code>\uFF0C\u5176\u4E2D\u4EE3\u7801\u5982\u4E0B\uFF0C\u76EE\u7684\u662F\u5EFA\u7ACB\u4E00\u5F20user\u8868\uFF0C\u4E14\u53EA\u6267\u884C\u4E00\u6B21\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>USER<span class="token punctuation">`</span></span><span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>USER_ID<span class="token punctuation">`</span></span>          <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>           <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>USER_NAME<span class="token punctuation">`</span></span>        <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528\u6237\u59D3\u540D&#39;</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>AGE<span class="token punctuation">`</span></span>              <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>            <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>CREATED_TIME<span class="token punctuation">`</span></span>     <span class="token keyword">datetime</span>          <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>CREATED_BY<span class="token punctuation">`</span></span>       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;UNKNOWN&#39;</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>UPDATED_TIME<span class="token punctuation">`</span></span>     <span class="token keyword">datetime</span>          <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">,</span>\n<span class="token identifier"><span class="token punctuation">`</span>UPDATED_BY<span class="token punctuation">`</span></span>       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;UNKNOWN&#39;</span><span class="token punctuation">,</span>\n<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>USER_ID<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>V2__add_user.sql</code>\uFF0C\u5176\u4E2D\u4EE3\u7801\u5982\u4E0B\uFF0C\u76EE\u7684\u662F\u5F80user\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u6570\u636E\uFF0C\u4E14\u53EA\u6267\u884C\u4E00\u6B21\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span><span class="token punctuation">(</span>user_name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>R__add_unknown_user.sql</code>\uFF0C\u5176\u4E2D\u4EE3\u7801\u5982\u4E0B\uFF0C\u76EE\u7684\u662F\u6BCF\u6B21\u542F\u52A8\u5018\u82E5\u6709\u53D8\u5316\uFF0C\u5219\u5F80user\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u6570\u636E\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span><span class="token punctuation">(</span>user_name<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;unknown&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0E\u4E4B\u76F8\u5BF9\u5E94\u7684\u76EE\u5F55\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015154425588.png" alt="image-20201015154425588"></p></li></ol><p>\u5176\u4E2D1.0.0\u30011.0.1\u548Cevery\u7684\u6587\u4EF6\u5939\u4E0D\u4F1A\u5F71\u54CDflyway\u5BF9SQL\u7684\u8BC6\u522B\u548C\u8FD0\u884C\uFF0C\u53EF\u4EE5\u81EA\u884C\u53D6\u540D\u548C\u5206\u7C7B\u3002</p><h3 id="_4-4-\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_4-4-\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> 4.4 \u8FD0\u884C\u9879\u76EE</h3><p>\u6211\u4EEC\u9879\u76EE\u8FD0\u884C\u540E\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u7684\u65E5\u5FD7</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015154844759.png" alt="image-20201015154844759"></p><h3 id="_4-5-\u67E5\u770B\u8FD0\u884C\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_4-5-\u67E5\u770B\u8FD0\u884C\u6548\u679C" aria-hidden="true">#</a> 4.5 \u67E5\u770B\u8FD0\u884C\u6548\u679C</h3><p>\u6570\u636E\u5E93\u4E2D\u591A\u4E86\u4E24\u5F20\u8868</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155011691.png" alt="image-20201015155011691"></p><p>\u5176\u4E2Dflyway_scheme_history\u8BB0\u5F55\u4E86\u76F8\u5173\u8BB0\u5F55</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155042685.png" alt="image-20201015155042685"></p><p>user\u8868\u4E5F\u5DF2\u7ECF\u521B\u5EFA\u597D\u4E86\u5E76\u63D2\u5165\u4E86\u4E24\u6761\u6570\u636E\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155339540.png" alt="image-20201015155339540"></p><h2 id="_5-maven\u63D2\u4EF6\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-maven\u63D2\u4EF6\u7684\u4F7F\u7528" aria-hidden="true">#</a> 5. maven\u63D2\u4EF6\u7684\u4F7F\u7528</h2><p>\u4EE5\u4E0A\u6B65\u9AA4\u4E2D\uFF0C\u6BCF\u6B21\u60F3\u8981migration\u90FD\u9700\u8981\u8FD0\u884C\u6574\u4E2Aspringboot\u9879\u76EE\uFF0C\u5E76\u4E14\u53EA\u80FD\u6267\u884Cmigrate\u4E00\u79CD\u547D\u4EE4\uFF0C\u5176\u5B9Eflyway\u8FD8\u662F\u6709\u5F88\u591A\u5176\u5B83\u547D\u4EE4\u7684\u3002maven\u63D2\u4EF6\u7ED9\u4E86\u6211\u4EEC\u4E0D\u9700\u8981\u542F\u52A8\u9879\u76EE\u5C31\u80FD\u6267\u884Cflyway\u5404\u79CD\u547D\u4EE4\u7684\u673A\u4F1A\u3002</p><p>\u5728pom\u4E2D\u5F15\u5165flyway\u7684\u63D2\u4EF6\uFF0C\u540C\u65F6\u914D\u7F6E\u597D\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://127.0.0.1:3306/mytest?useUnicode=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>characterEncoding=utf8<span class="token entity named-entity" title="&amp;">&amp;amp;</span>serverTimezone=GMT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>driver</span><span class="token punctuation">&gt;</span></span>com.mysql.cj.jdbc.Driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>driver</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u66F4\u65B0maven\u63D2\u4EF6\u5217\u8868\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230flyway\u7684\u5168\u90E8\u547D\u4EE4\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155608449.png" alt="image-20201015155608449"></p><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u53CC\u51FB\u6267\u884C\u4E0A\u56FE\u4E2D\u7684flyway:migrate\u7684\u6548\u679C\u548C\u542F\u52A8\u6574\u4E2A\u5DE5\u7A0B\u6267\u884Cmigrate\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002</p><p>\u5176\u5B83\u547D\u4EE4\u7684\u4F5C\u7528\u5982\u4E0B\u5217\u51FA\uFF0C\u5404\u4F4D\u53EF\u81EA\u884C\u5B9E\u9A8C\u4F53\u4F1A\uFF1A</p><ol><li><p>baseline</p><p>\u5BF9\u5DF2\u7ECF\u5B58\u5728\u6570\u636E\u5E93Schema\u7ED3\u6784\u7684\u6570\u636E\u5E93\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u3002\u5B9E\u73B0\u5728\u975E\u7A7A\u6570\u636E\u5E93\u65B0\u5EFAMetaData\u8868\uFF0C\u5E76\u628AMigrations\u5E94\u7528\u5230\u8BE5\u6570\u636E\u5E93\uFF1B\u4E5F\u53EF\u4EE5\u5728\u5DF2\u6709\u8868\u7ED3\u6784\u7684\u6570\u636E\u5E93\u4E2D\u5B9E\u73B0\u6DFB\u52A0Metadata\u8868\u3002</p></li><li><p>clean</p><p>\u6E05\u9664\u6389\u5BF9\u5E94\u6570\u636E\u5E93Schema\u4E2D\u6240\u6709\u7684\u5BF9\u8C61\uFF0C\u5305\u62EC\u8868\u7ED3\u6784\uFF0C\u89C6\u56FE\uFF0C\u5B58\u50A8\u8FC7\u7A0B\u7B49\uFF0Cclean\u64CD\u4F5C\u5728dev \u548C test\u9636\u6BB5\u5F88\u597D\u7528\uFF0C\u4F46\u5728\u751F\u4EA7\u73AF\u5883\u52A1\u5FC5\u7981\u7528\u3002</p></li><li><p>info</p><p>\u7528\u4E8E\u6253\u5370\u6240\u6709\u7684Migrations\u7684\u8BE6\u7EC6\u548C\u72B6\u6001\u4FE1\u606F\uFF0C\u4E5F\u662F\u901A\u8FC7MetaData\u548CMigrations\u5B8C\u6210\u7684\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5F53\u524D\u7684\u6570\u636E\u5E93\u7248\u672C\u3002</p></li><li><p>repair</p><p>repair\u64CD\u4F5C\u80FD\u591F\u4FEE\u590DmetaData\u8868\uFF0C\u8BE5\u64CD\u4F5C\u5728metadata\u51FA\u73B0\u9519\u8BEF\u65F6\u5F88\u6709\u7528\u3002</p></li><li><p>undo</p><p>\u64A4\u9500\u64CD\u4F5C\uFF0C\u793E\u533A\u7248\u4E0D\u652F\u6301\u3002</p></li><li><p>validate</p><p>\u9A8C\u8BC1\u5DF2\u7ECFapply\u7684Migrations\u662F\u5426\u6709\u53D8\u66F4\uFF0C\u9ED8\u8BA4\u5F00\u542F\u7684\uFF0C\u539F\u7406\u662F\u5BF9\u6BD4MetaData\u8868\u4E0E\u672C\u5730Migrations\u7684checkNum\u503C\uFF0C\u5982\u679C\u503C\u76F8\u540C\u5219\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5426\u5219\u5931\u8D25\u3002</p></li></ol><h2 id="_5-flyway\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_5-flyway\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 5. flyway\u6CE8\u610F\u4E8B\u9879</h2><ol><li>flyway\u6267\u884Cmigrate\u5FC5\u987B\u5728\u7A7A\u767D\u7684\u6570\u636E\u5E93\u4E0A\u8FDB\u884C\uFF0C\u5426\u5219\u62A5\u9519\uFF1B</li><li>\u5BF9\u4E8E\u5DF2\u7ECF\u6709\u6570\u636E\u7684\u6570\u636E\u5E93\uFF0C\u5FC5\u987B\u5148baseline\uFF0C\u7136\u540E\u624D\u80FDmigrate\uFF1B</li><li>clean\u64CD\u4F5C\u662F\u5220\u9664\u6570\u636E\u5E93\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62ECbaseline\u4E4B\u524D\u7684\u5185\u5BB9\uFF1B</li><li>\u5C3D\u91CF\u4E0D\u8981\u4FEE\u6539\u5DF2\u7ECF\u6267\u884C\u8FC7\u7684SQL\uFF0C\u5373\u4FBF\u662FR\u5F00\u5934\u7684\u53EF\u53CD\u590D\u6267\u884C\u7684SQL\uFF0C\u5B83\u4EEC\u4F1A\u4E0D\u5229\u4E8E\u6570\u636E\u8FC1\u79FB\uFF1B</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 52);
const _hoisted_53 = {
  href: "https://www.jianshu.com/p/567a8a161641",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("Flyway\u5FEB\u901F\u4E0A\u624B\u6559\u7A0B");
const _hoisted_55 = {
  href: "https://juejin.im/entry/6844903802215071758",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("Flyway \u7B80\u5355\u5165\u95E8\u6559\u7A0B");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Flyway________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Flyway\u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406.html.vue"]]);
export { Flyway________html as default };
