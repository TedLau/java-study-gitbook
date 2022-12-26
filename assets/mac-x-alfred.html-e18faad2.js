import{_ as l,W as t,X as r,Y as e,Z as i,$ as n,a0 as s,D as o}from"./framework-0cf5f349.js";const d={},g=s(`<h1 id="mac之alfred使用" tabindex="-1"><a class="header-anchor" href="#mac之alfred使用" aria-hidden="true">#</a> Mac之Alfred使用</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>Mac的Alfred软件主要的功能是</p><blockquote><p>本地搜索及应用快速启动</p></blockquote><h2 id="_2-核心功能" tabindex="-1"><a class="header-anchor" href="#_2-核心功能" aria-hidden="true">#</a> 2. 核心功能</h2><h3 id="_2-1-应用快速启动" tabindex="-1"><a class="header-anchor" href="#_2-1-应用快速启动" aria-hidden="true">#</a> 2.1 应用快速启动</h3><p>唤醒后，直接搜索你要的软件即可</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027194637166.png" alt="image-20211027194637166" tabindex="0" loading="lazy"><figcaption>image-20211027194637166</figcaption></figure><h3 id="_2-2-本地搜索文件" tabindex="-1"><a class="header-anchor" href="#_2-2-本地搜索文件" aria-hidden="true">#</a> 2.2 本地搜索文件</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027194750573.png" alt="image-20211027194750573" tabindex="0" loading="lazy"><figcaption>image-20211027194750573</figcaption></figure><ol><li><p>按空格 后紧跟文件名就可以快速搜索文件</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027194903719.png" alt="image-20211027194903719" tabindex="0" loading="lazy"><figcaption>image-20211027194903719</figcaption></figure></li><li><p>打开文件 open：</p><p>open + 空格+文件名称</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027194945335.png" alt="image-20211027194945335" tabindex="0" loading="lazy"><figcaption>image-20211027194945335</figcaption></figure></li><li><p>在finder 中显示</p><p>find 空格 文件名称</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027195159561.png" alt="image-20211027195159561" tabindex="0" loading="lazy"><figcaption>image-20211027195159561</figcaption></figure></li><li><p>内部文件 in</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>in 空格 文件内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027195433389.png" alt="image-20211027195433389" tabindex="0" loading="lazy"><figcaption>image-20211027195433389</figcaption></figure></li></ol><h3 id="_2-3-系统功能" tabindex="-1"><a class="header-anchor" href="#_2-3-系统功能" aria-hidden="true">#</a> 2.3 系统功能</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027200437225.png" alt="image-20211027200437225" tabindex="0" loading="lazy"><figcaption>image-20211027200437225</figcaption></figure><h3 id="_2-4-终端" tabindex="-1"><a class="header-anchor" href="#_2-4-终端" aria-hidden="true">#</a> 2.4 终端</h3><p>Alfred 默认用的是 Mac 自带的终端，如如果使用的 iTerm 可以根据下图设置：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028164643029.png" alt="image-20211028164643029" tabindex="0" loading="lazy"><figcaption>image-20211028164643029</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>on alfred_script(q)
    tell application &quot;iTerm&quot;
        set _length to count window
    if _length = 0 then
        create window with default profile
    end if
    set aa to (get miniaturized of current window)
    if aa then
        set miniaturized of current window to false
    end if
    set bb to (get visible of current window)
    if bb is false then
        set visible of current window to true
    end if
    set cc to frontmost
    if cc is false then
        activate
    end if
        (*if _length = 0 then*)
            set theResult to current tab of current window
        (*else
            set theResult to (create tab with default profile) of current window
        end if*)
        write session of theResult text q
end tell
end alfred_script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 Alfred 在执行命令是就会调用 iTerm。</p><h2 id="_3-工作流" tabindex="-1"><a class="header-anchor" href="#_3-工作流" aria-hidden="true">#</a> 3. 工作流</h2><h3 id="_3-1-codevar" tabindex="-1"><a class="header-anchor" href="#_3-1-codevar" aria-hidden="true">#</a> 3.1 CodeVar</h3><blockquote><p>生成变量名，支持大小驼峰、常量、下划线，开发者必备的工作流</p></blockquote><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027195753852.png" alt="image-20211027195753852" tabindex="0" loading="lazy"><figcaption>image-20211027195753852</figcaption></figure>`,22),c={href:"https://github.com/xudaolong/CodeVar",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_3-2-ip-address",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-2-ip-address","aria-hidden":"true"},"#"),i(" 3.2 IP Address")],-1),h=e("blockquote",null,[e("p",null,"快速查询本地ip和公网出口ip，再也不用到ipip.net上去查询了")],-1),u=e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211027195918998.png",alt:"image-20211027195918998",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20211027195918998")],-1),b={href:"https://github.com/zenorocha/alfred-workflows/raw/master/ip-address/ip-address.alfredworkflow",target:"_blank",rel:"noopener noreferrer"},p=s(`<h2 id="_4-自定义工作流" tabindex="-1"><a class="header-anchor" href="#_4-自定义工作流" aria-hidden="true">#</a> 4. 自定义工作流</h2><h3 id="_4-1-终端运行一段代码" tabindex="-1"><a class="header-anchor" href="#_4-1-终端运行一段代码" aria-hidden="true">#</a> 4.1 终端运行一段代码</h3><p>我们公司网络比较奇葩。内外网正常情况是不能同时上的，后面解决方案是加上netmask</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo route -n add -net 192.168.0.0 -netmask 255.255.0.0 10.8.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我还不能设置为全局的，那样我在家就不能上网了</p><p>所以我每天的流程</p><ol><li><p>打开笔记</p></li><li><p>复制命令</p></li><li><p>打开终端</p></li><li><p>黏贴命令</p></li></ol><p>实在是麻烦</p><h4 id="_4-1-1-编写脚本" tabindex="-1"><a class="header-anchor" href="#_4-1-1-编写脚本" aria-hidden="true">#</a> 4.1.1 编写脚本</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165130836.png" alt="image-20211028165130836" tabindex="0" loading="lazy"><figcaption>image-20211028165130836</figcaption></figure><p>填写 Workflow 的名称，也可以将图片拖到右侧框内，即可当作图标：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165214358.png" alt="image-20211028165214358" tabindex="0" loading="lazy"><figcaption>image-20211028165214358</figcaption></figure><p>双击左侧的模块设置触发关键词：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165306093.png" alt="image-20211028165306093" tabindex="0" loading="lazy"><figcaption>image-20211028165306093</figcaption></figure><h4 id="_4-1-2-设置终端命令" tabindex="-1"><a class="header-anchor" href="#_4-1-2-设置终端命令" aria-hidden="true">#</a> 4.1.2 设置终端命令</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165357352.png" alt="image-20211028165357352" tabindex="0" loading="lazy"><figcaption>image-20211028165357352</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165420447.png" alt="image-20211028165420447" tabindex="0" loading="lazy"><figcaption>image-20211028165420447</figcaption></figure><h4 id="_4-1-3-测试" tabindex="-1"><a class="header-anchor" href="#_4-1-3-测试" aria-hidden="true">#</a> 4.1.3 测试</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211028165502964.png" alt="image-20211028165502964" tabindex="0" loading="lazy"><figcaption>image-20211028165502964</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,20),f={href:"https://suncle.me/2020/12/09/tool-recommendation-useful-alfred-workflow/",target:"_blank",rel:"noopener noreferrer"};function z(v,_){const a=o("ExternalLinkIcon");return t(),r("div",null,[g,e("p",null,[i("下载地址："),e("a",c,[i("https://github.com/xudaolong/CodeVar"),n(a)])]),m,h,u,e("p",null,[i("下载地址："),e("a",b,[i("https://github.com/zenorocha/alfred-workflows/raw/master/ip-address/ip-address.alfredworkflow"),n(a)])]),p,e("p",null,[e("a",f,[i("神兵利器推荐——你一定不能错过的mac alfred工作流"),n(a)])])])}const w=l(d,[["render",z],["__file","mac-x-alfred.html.vue"]]);export{w as default};
