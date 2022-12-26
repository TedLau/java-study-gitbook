import{_ as l,W as g,X as o,Y as a,Z as e,$ as s,a0 as i,D as t}from"./framework-0cf5f349.js";const r={},c=i('<h3 id="maven私服-nexus部署" tabindex="-1"><a class="header-anchor" href="#maven私服-nexus部署" aria-hidden="true">#</a> Maven私服 Nexus部署</h3><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>私服是指私有服务器，是架设在局域网的一种特殊的远程仓库，目的是代理远程仓库及部署第三方构建。有了私服之后，当 Maven 需要下载构件时，直接请求私服，私服上存在则下载到本地仓库；否则，私服请求外部的远程仓库，将构件下载到私服，再提供给本地仓库下载</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004204944689.png" alt="image-20211004204944689" tabindex="0" loading="lazy"><figcaption>image-20211004204944689</figcaption></figure><h2 id="_2-安装步骤" tabindex="-1"><a class="header-anchor" href="#_2-安装步骤" aria-hidden="true">#</a> 2. 安装步骤</h2>',5),m=a("p",null,"下载",-1),p={href:"https://help.sonatype.com/repomanager3/download",target:"_blank",rel:"noopener noreferrer"},d=i(`<li><p>部署步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/local/nexus
<span class="token function">tar</span> zxf nexus-3.34.1-01-unix.tar.gz <span class="token parameter variable">-C</span> /usr/local/nexus/
<span class="token comment">#启动nexus必须使用nexus用户，不可以使用权限过高的用户，比如root，否则会启动失败</span>
<span class="token function">useradd</span> nexus
<span class="token function">chown</span> <span class="token parameter variable">-R</span> nexus:nexus /usr/local/nexus/
<span class="token function">ls</span> /usr/local/nexus/
nexus-3.34.1-01     <span class="token comment"># 这是应用目录</span>
sonatype-work         <span class="token comment"># 这是工作目录，存放镜像仓库</span>
<span class="token comment">#运行内存和工作目录nexus-3.34.1-01/bin/nexus.vmoptions （修改对应字段即可）</span>
<span class="token comment">#运行监听地址和端口nexus-3.34.1-01/etc/nexus-default.properties</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nexus/nexus-3.34.1-01/bin/nexus /usr/local/bin/
<span class="token comment">#创建命令软连接</span>
<span class="token comment">#切换至nexus用户，并启动nexus服务，如果使用root用户，会因为权限过高而启动失败</span>
<span class="token function">su</span> nexus
nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行检查</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>netstat <span class="token operator">-</span>anput <span class="token operator">|</span> grep <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>访问测试</p><p>启动nexus后，即可访问服务器IP+8081端口：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211202373.png" alt="image-20211004211202373" tabindex="0" loading="lazy"><figcaption>image-20211004211202373</figcaption></figure></li>`,3),u=i(`<h2 id="_3-登录并修改密码" tabindex="-1"><a class="header-anchor" href="#_3-登录并修改密码" aria-hidden="true">#</a> 3. 登录并修改密码</h2><ol><li><p>查看密码</p><p>根据下述提示的路径，查看密码：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211352564.png" alt="image-20211004211352564" tabindex="0" loading="lazy"><figcaption>image-20211004211352564</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /usr/local/nexus/sonatype-work/nexus3/admin.password 
02fc969a-cc65-44a8-ad56-9d22b243de1e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进行登录，<strong>默认的用户名为admin，密码就是我们上面查看到的：</strong></p></li><li><p>登录后,修改密码</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211715907.png" alt="image-20211004211715907" tabindex="0" loading="lazy"><figcaption>image-20211004211715907</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211756213.png" alt="image-20211004211756213" tabindex="0" loading="lazy"><figcaption>image-20211004211756213</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211840651.png" alt="image-20211004211840651" tabindex="0" loading="lazy"><figcaption>image-20211004211840651</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211852121.png" alt="image-20211004211852121" tabindex="0" loading="lazy"><figcaption>image-20211004211852121</figcaption></figure></li></ol><h2 id="_4-创建角色" tabindex="-1"><a class="header-anchor" href="#_4-创建角色" aria-hidden="true">#</a> 4. <strong>创建角色</strong></h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212042299.png" alt="image-20211004212042299" tabindex="0" loading="lazy"><figcaption>image-20211004212042299</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212207094.png" alt="image-20211004212207094" tabindex="0" loading="lazy"><figcaption>image-20211004212207094</figcaption></figure><p><strong>点击创建：</strong></p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212246300.png" alt="image-20211004212246300" tabindex="0" loading="lazy"><figcaption>image-20211004212246300</figcaption></figure><h2 id="_5-创建用户" tabindex="-1"><a class="header-anchor" href="#_5-创建用户" aria-hidden="true">#</a> 5. <strong>创建用户</strong></h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212426719.png" alt="image-20211004212426719" tabindex="0" loading="lazy"><figcaption>image-20211004212426719</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212558422.png" alt="image-20211004212558422" tabindex="0" loading="lazy"><figcaption>image-20211004212558422</figcaption></figure><h2 id="_6-查看默认仓库类型" tabindex="-1"><a class="header-anchor" href="#_6-查看默认仓库类型" aria-hidden="true">#</a> 6. <strong>查看默认仓库类型</strong></h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212722827.png" alt="image-20211004212722827" tabindex="0" loading="lazy"><figcaption>image-20211004212722827</figcaption></figure><ul><li>group（仓库组类型）：又叫组仓库，用于方便开发人员，自己设定的仓库</li><li>hosted（宿主类型）：内部项目的发布仓库（内部开发人员发布上去存放的仓库）</li><li>proxy（代理类型）：从远程中央仓库中寻找数据的仓库（可以点击对应的仓库的Configuration页签下Remote Storage Location属性的值，即被代理的远程仓库的路径）</li><li>virtual（虚拟类型）：虚拟仓库（这个基本上用不到）</li><li>Public Repositories下的仓库类型</li><li><strong>3rd party: 无法从公共仓库获得的第三方发布版本的构件仓库，即第三方依赖的仓库，这个数据通常是由内部人员自行下载之后发布上去；</strong></li><li>Apache Snapshots: 用了代理ApacheMaven仓库快照版本的构件仓库</li><li>Central: 用来代理maven中央仓库中发布版本构件的仓库</li><li>entral M1 shadow: 用于提供中央仓库中M1格式的发布版本的构件镜像仓库</li><li>Codehaus Snapshots: 用来代理CodehausMaven 仓库的快照版本构件的仓库</li><li><strong>Releases: 内部的模块中release模块的发布仓库，用来部署管理内部的发布版本构件的宿主类型仓库；release是发布版本；</strong></li><li><strong>Snapshots:发布内部的SNAPSHOT模块的仓库，用来部署管理内部的快照版本构件的宿主类型仓库；snapshots是快照版本，也就是不稳定版本</strong></li></ul><h2 id="_7-开启release的重复发版权限" tabindex="-1"><a class="header-anchor" href="#_7-开启release的重复发版权限" aria-hidden="true">#</a> 7. <strong>开启release的重复发版权限</strong></h2><p>开发中需要重复发版，则需要开启release类型仓库的对应权限设置allow redeploy。如下:</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213118075.png" alt="image-20211004213118075" tabindex="0" loading="lazy"><figcaption>image-20211004213118075</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213230425.png" alt="image-20211004213230425" tabindex="0" loading="lazy"><figcaption>image-20211004213230425</figcaption></figure><h2 id="_8-设置代理仓库-阿里云maven仓库" tabindex="-1"><a class="header-anchor" href="#_8-设置代理仓库-阿里云maven仓库" aria-hidden="true">#</a> 8. <strong>设置代理仓库（阿里云maven仓库）</strong></h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213337597.png" alt="image-20211004213337597" tabindex="0" loading="lazy"><figcaption>image-20211004213337597</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213415866.png" alt="image-20211004213415866" tabindex="0" loading="lazy"><figcaption>image-20211004213415866</figcaption></figure>`,20),b={href:"https://maven.aliyun.com/nexus/content/groups/public/",target:"_blank",rel:"noopener noreferrer"},h=i('<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213621568.png" alt="image-20211004213621568" tabindex="0" loading="lazy"><figcaption>image-20211004213621568</figcaption></figure><p>填写上述两个内容后，点击页面下边的create repository 创建完成之后可以看到新增加了阿里云库。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213707656.png" alt="image-20211004213707656" tabindex="0" loading="lazy"><figcaption>image-20211004213707656</figcaption></figure><p>将添加的阿里云Proxy加入默认group中：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213813431.png" alt="image-20211004213813431" tabindex="0" loading="lazy"><figcaption>image-20211004213813431</figcaption></figure><p>将阿里云移动到第一个</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213918176.png" alt="image-20211004213918176" tabindex="0" loading="lazy"><figcaption>image-20211004213918176</figcaption></figure><p>保存后，再次刷新页面，即可看到当前的Nexus地址：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004214034153.png" alt="image-20211004214034153" tabindex="0" loading="lazy"><figcaption>image-20211004214034153</figcaption></figure><h3 id="_8-1-关于上述配置的常见使用场景介绍如下" tabindex="-1"><a class="header-anchor" href="#_8-1-关于上述配置的常见使用场景介绍如下" aria-hidden="true">#</a> 8.1 关于上述配置的常见使用场景介绍如下：</h3><ul><li>release发版仓库（nexus默认已建立：maven-releasees）</li><li>snapshot 测试中心快照仓库（nexus默认已建立：maven-snapshots）</li><li>central 中央仓库 （nexus默认已建立：maven-central）</li><li>关于组：在nexus中可以建立组，将不同类型仓库集合在一起（nexus默认已建立：maven-public）</li><li>场景一： 自定义新建proxy类型仓库，在maven配置中分别配置不同调用地址，或是将自定义新建的proxy仓库统一加入一个组，在maven配置中调用一个地址</li><li>场景二： 使用maven已经建立好的proxy仓库，且使用已建立好的组（maven-public）配置maven调用地址</li><li>场景一和场景二本质上讲没有什么变化，根据公司开发习惯和需求进行配置即可</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',12),f={href:"https://cloud.tencent.com/developer/article/1623922",target:"_blank",rel:"noopener noreferrer"};function z(x,v){const n=t("ExternalLinkIcon");return g(),o("div",null,[c,a("ol",null,[a("li",null,[m,a("p",null,[a("a",p,[e("Nexus官方3.X下载地址"),s(n)])])]),d]),u,a("p",null,[e("阿里云仓库的URL："),a("a",b,[e("https://maven.aliyun.com/nexus/content/groups/public/"),s(n)])]),h,a("p",null,[a("a",f,[e("部署maven及Nexus私服"),s(n)])])])}const _=l(r,[["render",z],["__file","maven-x-nexus-deploy.html.vue"]]);export{_ as default};
