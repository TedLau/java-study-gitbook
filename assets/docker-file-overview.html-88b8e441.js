import{_ as i,W as d,X as r,Y as a,Z as n,$ as s,a0 as t,D as l}from"./framework-0cf5f349.js";const c={},o=t(`<h1 id="docker基础-dockerfile详解" tabindex="-1"><a class="header-anchor" href="#docker基础-dockerfile详解" aria-hidden="true">#</a> Docker基础 - Dockerfile详解</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>Dokcerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明</p><h2 id="_2-命令组成" tabindex="-1"><a class="header-anchor" href="#_2-命令组成" aria-hidden="true">#</a> 2. 命令组成</h2><table><thead><tr><th>部分</th><th>命令</th></tr></thead><tbody><tr><td>基础镜像信息</td><td>FROM</td></tr><tr><td>维护者信息</td><td>MAINTAINER、LABEL</td></tr><tr><td>镜像操作指令</td><td>RUN、COPY、ADD、EXPOSE、WORKDIR、ONBUILD、USER、VOLUME等</td></tr><tr><td>容器启动时执行指令</td><td>CMD、ENTRYPOINT</td></tr></tbody></table><h2 id="_3-基础镜像信息-命令" tabindex="-1"><a class="header-anchor" href="#_3-基础镜像信息-命令" aria-hidden="true">#</a> 3.基础镜像信息 命令</h2><h3 id="_3-1-from" tabindex="-1"><a class="header-anchor" href="#_3-1-from" aria-hidden="true">#</a> 3.1 FROM</h3><p>指定哪种镜像作为新镜像的基础镜像，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu:14.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-维护者信息" tabindex="-1"><a class="header-anchor" href="#_4-维护者信息" aria-hidden="true">#</a> 4.维护者信息</h2><h3 id="_4-1-maintainer" tabindex="-1"><a class="header-anchor" href="#_4-1-maintainer" aria-hidden="true">#</a> 4.1 MAINTAINER</h3><p>指明该镜像的作者和其电子邮件，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>MAINTAINER zsz <span class="token string">&quot;xxxxxxx@qq.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-label" tabindex="-1"><a class="header-anchor" href="#_4-2-label" aria-hidden="true">#</a> 4.2 LABEL</h3><p>功能是为镜像指定标签。也可以使用<code>LABEL</code>来指定镜像作者</p><h2 id="_5-镜像操作指令" tabindex="-1"><a class="header-anchor" href="#_5-镜像操作指令" aria-hidden="true">#</a> 5. 镜像操作指令</h2><h3 id="_5-1-run-重点" tabindex="-1"><a class="header-anchor" href="#_5-1-run-重点" aria-hidden="true">#</a> 5.1 RUN(重点)</h3><p>在新镜像内部执行的命令，比如安装一些软件、配置一些基础环境，可使用\\来换行，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello docker!&#39;</span> <span class="token punctuation">\\</span>
    <span class="token operator">&gt;</span> /usr/local/file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用exec格式<code>RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code>的命令，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN <span class="token punctuation">[</span><span class="token string">&quot;apt-get&quot;</span>,<span class="token string">&quot;install&quot;</span>,<span class="token string">&quot;-y&quot;</span>,<span class="token string">&quot;nginx&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要注意的是，<strong><code>executable</code>是命令，后面的param是参数</strong></p><h4 id="_5-1-1-减少不必要层级" tabindex="-1"><a class="header-anchor" href="#_5-1-1-减少不必要层级" aria-hidden="true">#</a> 5.1.1 减少不必要层级</h4><p><strong>注意</strong>：Dockerfile 的指令每执行一次都会在 docker 上新建一层。所以过多无意义的层，会造成镜像膨胀过大。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM centos
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span>
RUN <span class="token function">wget</span> <span class="token parameter variable">-O</span> redis.tar.gz <span class="token string">&quot;http://download.redis.io/releases/redis-5.0.3.tar.gz&quot;</span>
RUN <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> redis.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上执行会创建 3 层镜像。可简化为以下格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM centos
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> redis.tar.gz <span class="token string">&quot;http://download.redis.io/releases/redis-5.0.3.tar.gz&quot;</span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> redis.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，以 <strong>&amp;&amp;</strong> 符号连接命令，这样执行后，只会创建 1 层镜像。</p><h3 id="_5-2-copy" tabindex="-1"><a class="header-anchor" href="#_5-2-copy" aria-hidden="true">#</a> 5.2 COPY</h3><p>将主机的文件复制到镜像内，如果目的位置不存在，Docker会自动创建所有需要的目录结构，但是它只是单纯的复制，并不会去做文件提取和解压工作。如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COPY application.yml /etc/springboot/hello-service/src/resources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：需要复制的目录一定要放在Dockerfile文件的同级目录下</strong></p><p>原因：</p><blockquote><p>因为构建环境将会上传到Docker守护进程，而复制是在Docker守护进程中进行的。任何位于构建环境之外的东西都是不可用的。COPY指令的目的的位置则必须是容器内部的一个绝对路径。 ---《THE DOCKER BOOK》</p></blockquote><h3 id="_5-3-add" tabindex="-1"><a class="header-anchor" href="#_5-3-add" aria-hidden="true">#</a> 5.3 ADD</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	ADD &lt;src&gt;... &lt;dest&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将主机的文件复制到镜像中，跟COPY一样，限制条件和使用方式都一样，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ADD application.yml /etc/springboot/hello-service/src/resources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是ADD会对压缩文件（tar, gzip, bzip2, etc）做提取和解压操作。</p><p>src 可以是一个本地文件，还可以是一个<code>url</code>。然后自动下载和解压</p><h3 id="_5-4-expose" tabindex="-1"><a class="header-anchor" href="#_5-4-expose" aria-hidden="true">#</a> 5.4 EXPOSE</h3><p>暴露镜像的端口供主机做映射，启动镜像时，使用-P参数来讲镜像端口与宿主机的随机端口做映射。使用方式（可指定多个）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>EXPOSE <span class="token number">8080</span> 
EXPOSE <span class="token number">8081</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-workdir" tabindex="-1"><a class="header-anchor" href="#_5-5-workdir" aria-hidden="true">#</a> 5.5 WORKDIR</h3><p>在构建镜像时，指定镜像的工作目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录。如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>WORKDIR /usr/local
WORKDIR webservice
RUN <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello docker&#39;</span> <span class="token operator">&gt;</span> text.txt
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终会在<code>/usr/local/webservice/</code>目录下生成text.txt文件</p><h3 id="_5-6-env" tabindex="-1"><a class="header-anchor" href="#_5-6-env" aria-hidden="true">#</a> 5.6 ENV</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ENV &lt;key&gt;=&lt;value&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置容器内环境变量</p><h3 id="_5-7-volume" tabindex="-1"><a class="header-anchor" href="#_5-7-volume" aria-hidden="true">#</a> 5.7 VOLUME</h3><p>用来向基于镜像创建的容器添加卷。比如你可以将mongodb镜像中存储数据的data文件指定为主机的某个文件。(容器内部建议不要存储任何数据) 如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>VOLUME /data/db /data/configdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意:<code>VOLUME 主机目录 容器目录</code></p><h3 id="_5-8-onbuild" tabindex="-1"><a class="header-anchor" href="#_5-8-onbuild" aria-hidden="true">#</a> 5.8 ONBUILD</h3><p>当一个包含ONBUILD命令的镜像被用作其他镜像的基础镜像时(比如用户的镜像需要从某为准备好的位置添加源代码，或者用户需要执行特定于构建镜像的环境的构建脚本)，该命令就会执行。 如创建镜像image-A</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu
<span class="token punctuation">..</span>.
ONBUILD ADD <span class="token builtin class-name">.</span> /var/www
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建镜像image-B，指定image-A为基础镜像，如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM image-A
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在构建image-B的时候，日志上显示如下:</p><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code>Step <span class="token number">0</span> <span class="token operator">:</span> FROM image<span class="token operator">-</span>A
<span class="token operator">#</span> Execting <span class="token number">1</span> build triggers
Step onbuild<span class="token operator">-</span><span class="token number">0</span> <span class="token operator">:</span> ADD <span class="token punctuation">.</span> <span class="token file-path string">/var/www</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-user" tabindex="-1"><a class="header-anchor" href="#_5-9-user" aria-hidden="true">#</a> 5.9 USER</h3><p>指定该镜像以什么样的用户去执行，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token environment constant">USER</span> mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-容器启动时执行指令" tabindex="-1"><a class="header-anchor" href="#_6-容器启动时执行指令" aria-hidden="true">#</a> 6. 容器启动时执行指令</h2><h3 id="_6-1-cmd" tabindex="-1"><a class="header-anchor" href="#_6-1-cmd" aria-hidden="true">#</a> 6.1 CMD</h3><p>容器启动时需要执行的命令，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CMD /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样可以使用exec语法，如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CMD <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当有多个CMD的时候，只有最后一个生效。</p><h3 id="_6-2-entrypoint" tabindex="-1"><a class="header-anchor" href="#_6-2-entrypoint" aria-hidden="true">#</a> 6.2 ENTRYPOINT</h3><p>作用和用法和CMD一模一样</p><h3 id="_6-3-cmd和entrypoint的区别" tabindex="-1"><a class="header-anchor" href="#_6-3-cmd和entrypoint的区别" aria-hidden="true">#</a> 6.3 CMD和ENTRYPOINT的区别</h3><p>敲黑板！！！非常重要 <strong>一定要注意！</strong></p><p><strong>一定要注意！</strong></p><p><strong>一定要注意！</strong></p><p>CMD和ENTRYPOINT同样作为容器启动时执行的命令，区别有以下几点：</p><h4 id="_6-3-1-cmd的命令会被-docker-run-的命令覆盖而entrypoint不会" tabindex="-1"><a class="header-anchor" href="#_6-3-1-cmd的命令会被-docker-run-的命令覆盖而entrypoint不会" aria-hidden="true">#</a> 6.3.1 CMD的命令会被 docker run 的命令覆盖而ENTRYPOINT不会</h4><p>如使用<code>CMD [&quot;/bin/bash&quot;]</code>或<code>ENTRYPOINT [&quot;/bin/bash&quot;]</code>后，再使用<code>docker run -ti image</code>启动容器，它会自动进入容器内部的交互终端，如同使用 <code>docker run -ti image /bin/bash</code>。</p><p>但是如果启动镜像的命令为<code>docker run -ti image /bin/ps</code>，使用CMD后面的命令就会被覆盖转而执行<code>bin/ps</code>命令，而<em>ENTRYPOINT的则不会，而是会把docker run 后面的命令当做ENTRYPOINT执行命令的参数</em>。 以下例子比较容易理解 Dockerfile中为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/user/sbin/nginx&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后通过启动build之后的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-ti</span> image <span class="token parameter variable">-g</span> <span class="token string">&quot;daemon off&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时<code>-g &quot;daemon off&quot;</code>会被当成参数传递给ENTRYPOINT，最终的命令变成了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/user/sbin/nginx <span class="token parameter variable">-g</span> <span class="token string">&quot;daemon off&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-3-2-cmd和entrypoint都存在时" tabindex="-1"><a class="header-anchor" href="#_6-3-2-cmd和entrypoint都存在时" aria-hidden="true">#</a> 6.3.2 CMD和ENTRYPOINT都存在时</h4><p>CMD和ENTRYPOINT都存在时，CMD的指令变成了ENTRYPOINT的参数，并且此CMD提供的参数会被 docker run 后面的命令覆盖，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>.
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span>,<span class="token string">&quot;hello&quot;</span>,<span class="token string">&quot;i am&quot;</span><span class="token punctuation">]</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;docker&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后启动构建之后的容器</p><ul><li><p>使用<code>docker run -ti image</code></p><p>输出“hello i am docker”</p></li><li><p>使用<code>docker run -ti image world</code></p><p>输出“hello i am world”</p></li></ul><p>指令比较多，可以通过分类(如开头的表格)的办法去记忆</p><h2 id="_7-构建镜像" tabindex="-1"><a class="header-anchor" href="#_7-构建镜像" aria-hidden="true">#</a> 7. 构建镜像</h2><p><code>Dockerfile</code>文件编写好以后，真正构建镜像时需要通过<code>docker build</code>命令。</p><p><code>docker build</code>命令用于使用<code>Dockerfile</code>创建镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用当前目录的 Dockerfile 创建镜像</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> mycentos:7 <span class="token builtin class-name">.</span>

<span class="token comment"># 通过 -f Dockerfile 文件的位置创建镜像</span>
<span class="token function">docker</span> build <span class="token parameter variable">-f</span> /home/ruoyi/docker/Dockerfile <span class="token parameter variable">-t</span> mycentos:7 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-f：指定要使用的 Dockerfile 路径；</li><li>--tag, -t：镜像的名字及标签，可以在一次构建中为一个镜像设置多个标签。</li></ul><h2 id="_8-示例" tabindex="-1"><a class="header-anchor" href="#_8-示例" aria-hidden="true">#</a> 8. 示例</h2><p>接下来我们通过基础镜像<code>centos:7</code>，在该镜像中安装<code>jdk</code>和<code>tomcat</code>以后将其制作为一个新的镜像<code>mycentos:7</code></p><p>创建目录，编写<code>Dockerfile</code>文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/<span class="token variable"><span class="token variable">\`</span>dockerfile<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令：<code>vi Dockerfile</code>，写入信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指明构建的新镜像是来自于\`centos:7\`基础镜像</span>
FROM centos:7
<span class="token comment"># 通过镜像标签声明了作者信息</span>
LABEL <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">&quot;ruoyi.vip&quot;</span>

<span class="token comment"># 设置工作目录</span>
WORKDIR /usr/local
<span class="token comment"># 新镜像构建成功以后创建指定目录</span>
RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/java <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/tomcat
<span class="token comment"># 拷贝文件到镜像中并解压</span>
ADD jdk-8u111-linux-x64.tar.gz /usr/local/java
ADD apache-tomcat-8.5.27.tar.gz /usr/local/tomcat
<span class="token comment"># 暴露容器运行时的 8080 监听端口给外部</span>
EXPOSE <span class="token number">8080</span>
<span class="token comment"># 设置容器内 JAVA_HOME 环境变量</span>
ENV JAVA_HOME /usr/local/java/jdk1.8.0_111
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token comment"># 启动容器时启动 tomcat</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;/usr/local/tomcat/apache-tomcat-8.5.27/bin/catalina.sh&quot;</span>, <span class="token string">&quot;run&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> /home/ruoyi/docker/Dockerfile <span class="token parameter variable">-t</span> mycentos:test <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">--name</span> mycentos <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 mycentos:test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mycentos7 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-镜像构建历史" tabindex="-1"><a class="header-anchor" href="#_9-镜像构建历史" aria-hidden="true">#</a> 9. 镜像构建历史</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker history 镜像名称:标签|ID
docker history mycentos:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,112),p={href:"https://www.jianshu.com/p/10ed530766af",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/cbce69c7a52f",target:"_blank",rel:"noopener noreferrer"},h={href:"http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html#%E6%9E%84%E5%BB%BA%E9%95%9C%E5%83%8F",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const e=l("ExternalLinkIcon");return d(),r("div",null,[o,a("p",null,[a("a",p,[n("学习Docker之Dockerfile的命令"),s(e)])]),a("p",null,[a("a",u,[n("使用Dockerfile构建Docker镜像"),s(e)])]),a("p",null,[a("a",h,[n("若依文档-Dockerfile"),s(e)])])])}const k=i(c,[["render",v],["__file","docker-file-overview.html.vue"]]);export{k as default};
