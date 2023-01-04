import{_ as i,W as t,X as s,Y as e,Z as n,$ as r,a0 as d,D as l}from"./framework-0cf5f349.js";const o={},c=d(`<h1 id="rabbitmq安装-docker安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq安装-docker安装rabbitmq" aria-hidden="true">#</a> RabbitMQ安装 - Docker安装RabbitMQ</h1><h2 id="_1-创建rabbitmq容器" tabindex="-1"><a class="header-anchor" href="#_1-创建rabbitmq容器" aria-hidden="true">#</a> 1. 创建rabbitMq容器</h2><ol><li><p>获取镜像并运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 5672:5672 -p 15672:15672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-d 后台运行程序</p><p>包含删除历史rabbitmq</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看容器运行状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看容器日志</p><p>查看容器日志 使用<code>docker logs -f 容器ID</code>命令可以查看容器日志，我们执行<code>docker logs -f 3ae</code>命令查看rabbitMq在启动过程中日志，3ae是容器ID的简写——容器ID太长，使用时其写前几位即可</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20200802235358837.png" alt="image-20200802235358837" tabindex="0" loading="lazy"><figcaption>image-20200802235358837</figcaption></figure><p>从日志可以看出，rabbitMq默认创建了guest用户，并且赋予administrator角色权限，同时服务监听5672端口TCP连接和15672端口的HTTP连接，至此说明安装成功。</p></li></ol><h2 id="_2-访问rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-访问rabbitmq" aria-hidden="true">#</a> 2. 访问rabbitMq</h2><ol><li><p>访问web界面</p><p>在浏览器 输入你的<code>主机Ip:15672</code>回车即可访问rabbitMq的Web端管理界面，默认用户名和密码都是<code>guest</code>，如图出现如下界面代表已经成功了。</p></li><li><p>新添加一个账户</p><p>默认的<code>guest</code> 账户有访问限制，默认只能通过本地网络(如 localhost) 访问，远程网络访问受限，所以在使用时我们一般另外添加用户，例如我们添加一个root用户：</p><p>2.1 进入到rabbitMq容器内部</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> 3a8161fea5d8 bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.2 添加用户，用户名为root,密码为123456</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmqctl add_user root 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.3 赋予root用户所有权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> rabbitmqctl set_permissions <span class="token parameter variable">-p</span> / root <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>2.4 赋予root用户administrator角色</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   root@3ae75edc48e2:/# rabbitmqctl set_user_tags root administrator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.5查看所有用户,即可看到root用户已经添加成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@3ae75edc48e2:/# rabbitmqctl list_users
Listing users ...
user	tags
guest	[administrator]
root	[administrator]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>exit</code>命令，从容器内部退出即可。这时我们使用root账户登录web界面也是可以的。到此，rabbitMq的安装就结束了，接下里就实际代码开发。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,11),b={href:"https://juejin.im/post/6844903970545090574",target:"_blank",rel:"noopener noreferrer"};function p(m,u){const a=l("ExternalLinkIcon");return t(),s("div",null,[c,e("p",null,[e("a",b,[n("docker安装RabbitMq"),r(a)])])])}const v=i(o,[["render",p],["__file","rabbitmq-y-docker-install.html.vue"]]);export{v as default};