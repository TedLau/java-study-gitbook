import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,a as e,b as r,e as n,d,r as o}from"./app.a2c1bbbb.js";const l={},c=n(`<h1 id="docker\u5B89\u88C5rabbitmq" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5rabbitmq" aria-hidden="true">#</a> Docker\u5B89\u88C5RabbitMQ</h1><h2 id="_1-\u521B\u5EFArabbitmq\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFArabbitmq\u5BB9\u5668" aria-hidden="true">#</a> 1. \u521B\u5EFArabbitMq\u5BB9\u5668</h2><ol><li><p>\u83B7\u53D6\u955C\u50CF\u5E76\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d -p 5672:5672 -p 15672:15672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-d \u540E\u53F0\u8FD0\u884C\u7A0B\u5E8F</p><p>\u5305\u542B\u5220\u9664\u5386\u53F2rabbitmq</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u5BB9\u5668\u8FD0\u884C\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7</p><p>\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7 \u4F7F\u7528<code>docker logs -f \u5BB9\u5668ID</code>\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7\uFF0C\u6211\u4EEC\u6267\u884C<code>docker logs -f 3ae</code>\u547D\u4EE4\u67E5\u770BrabbitMq\u5728\u542F\u52A8\u8FC7\u7A0B\u4E2D\u65E5\u5FD7\uFF0C3ae\u662F\u5BB9\u5668ID\u7684\u7B80\u5199\u2014\u2014\u5BB9\u5668ID\u592A\u957F\uFF0C\u4F7F\u7528\u65F6\u5176\u5199\u524D\u51E0\u4F4D\u5373\u53EF</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20200802235358837.png" alt="image-20200802235358837"></p><p>\u4ECE\u65E5\u5FD7\u53EF\u4EE5\u770B\u51FA\uFF0CrabbitMq\u9ED8\u8BA4\u521B\u5EFA\u4E86guest\u7528\u6237\uFF0C\u5E76\u4E14\u8D4B\u4E88administrator\u89D2\u8272\u6743\u9650\uFF0C\u540C\u65F6\u670D\u52A1\u76D1\u542C5672\u7AEF\u53E3TCP\u8FDE\u63A5\u548C15672\u7AEF\u53E3\u7684HTTP\u8FDE\u63A5\uFF0C\u81F3\u6B64\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u3002</p></li></ol><h2 id="_2-\u8BBF\u95EErabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBF\u95EErabbitmq" aria-hidden="true">#</a> 2. \u8BBF\u95EErabbitMq</h2><ol><li><p>\u8BBF\u95EEweb\u754C\u9762</p><p>\u5728\u6D4F\u89C8\u5668 \u8F93\u5165\u4F60\u7684<code>\u4E3B\u673AIp:15672</code>\u56DE\u8F66\u5373\u53EF\u8BBF\u95EErabbitMq\u7684Web\u7AEF\u7BA1\u7406\u754C\u9762\uFF0C\u9ED8\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u90FD\u662F<code>guest</code>\uFF0C\u5982\u56FE\u51FA\u73B0\u5982\u4E0B\u754C\u9762\u4EE3\u8868\u5DF2\u7ECF\u6210\u529F\u4E86\u3002</p></li><li><p>\u65B0\u6DFB\u52A0\u4E00\u4E2A\u8D26\u6237</p><p>\u9ED8\u8BA4\u7684<code>guest</code> \u8D26\u6237\u6709\u8BBF\u95EE\u9650\u5236\uFF0C\u9ED8\u8BA4\u53EA\u80FD\u901A\u8FC7\u672C\u5730\u7F51\u7EDC(\u5982 localhost) \u8BBF\u95EE\uFF0C\u8FDC\u7A0B\u7F51\u7EDC\u8BBF\u95EE\u53D7\u9650\uFF0C\u6240\u4EE5\u5728\u4F7F\u7528\u65F6\u6211\u4EEC\u4E00\u822C\u53E6\u5916\u6DFB\u52A0\u7528\u6237\uFF0C\u4F8B\u5982\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2Aroot\u7528\u6237\uFF1A</p><p>2.1 \u8FDB\u5165\u5230rabbitMq\u5BB9\u5668\u5185\u90E8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -i -t 3a8161fea5d8 bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.2 \u6DFB\u52A0\u7528\u6237\uFF0C\u7528\u6237\u540D\u4E3Aroot,\u5BC6\u7801\u4E3A123456</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rabbitmqctl add_user root 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.3 \u8D4B\u4E88root\u7528\u6237\u6240\u6709\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> rabbitmqctl set_permissions -p / root <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>2.4 \u8D4B\u4E88root\u7528\u6237administrator\u89D2\u8272</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   root@3ae75edc48e2:/# rabbitmqctl set_user_tags root administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.5\u67E5\u770B\u6240\u6709\u7528\u6237,\u5373\u53EF\u770B\u5230root\u7528\u6237\u5DF2\u7ECF\u6DFB\u52A0\u6210\u529F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@3ae75edc48e2:/# rabbitmqctl list_users
Listing users ...
user	tags
guest	[administrator]
root	[administrator]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C<code>exit</code>\u547D\u4EE4\uFF0C\u4ECE\u5BB9\u5668\u5185\u90E8\u9000\u51FA\u5373\u53EF\u3002\u8FD9\u65F6\u6211\u4EEC\u4F7F\u7528root\u8D26\u6237\u767B\u5F55web\u754C\u9762\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u5230\u6B64\uFF0CrabbitMq\u7684\u5B89\u88C5\u5C31\u7ED3\u675F\u4E86\uFF0C\u63A5\u4E0B\u91CC\u5C31\u5B9E\u9645\u4EE3\u7801\u5F00\u53D1\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,11),b={href:"https://juejin.im/post/6844903970545090574",target:"_blank",rel:"noopener noreferrer"},p=d("docker\u5B89\u88C5RabbitMq");function u(m,v){const a=o("ExternalLinkIcon");return s(),t("div",null,[c,e("p",null,[e("a",b,[p,r(a)])])])}var x=i(l,[["render",u],["__file","Docker\u5B89\u88C5RabbitMQ.html.vue"]]);export{x as default};
