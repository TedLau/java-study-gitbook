import{_ as e,W as d,X as a,a0 as i}from"./framework-0cf5f349.js";const r={},n=i(`<h1 id="开启远程访问" tabindex="-1"><a class="header-anchor" href="#开启远程访问" aria-hidden="true">#</a> 开启远程访问</h1><h3 id="_1-1-注释-bind-127-0-0-1" tabindex="-1"><a class="header-anchor" href="#_1-1-注释-bind-127-0-0-1" aria-hidden="true">#</a> 1.1 注释 bind 127.0.0.1</h3><p><strong>注释掉bind 127.0.0.1可以使所有的ip访问redis</strong></p><p>若是想指定多个ip访问，但并不是全部的ip访问，可以bind</p><p>vim /usr/local/redis/bin/redis.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#bind 127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-protected-mode-改为no" tabindex="-1"><a class="header-anchor" href="#_1-2-protected-mode-改为no" aria-hidden="true">#</a> 1.2 protected-mode 改为no</h3><p>在redis3.2之后，redis增加了protected-mode，在这个模式下，即使注释掉了bind 127.0.0.1，再访问redisd时候还是报错，</p><p>将protected-mode 改成no</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protected-mode no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-设置远程连接密码" tabindex="-1"><a class="header-anchor" href="#_1-3-设置远程连接密码" aria-hidden="true">#</a> 1.3 设置远程连接密码</h3><p>如果不设置远程连接密码，那么不用密码就能登录，非常危险，很可能会被挖矿等程序入侵</p><p>找到requirepass 去掉注释，改成你要的密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># requirepass foobared
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-重启redis" tabindex="-1"><a class="header-anchor" href="#_1-4-重启redis" aria-hidden="true">#</a> 1.4 重启redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),s=[n];function t(c,o){return d(),a("div",null,s)}const h=e(r,[["render",t],["__file","db-redis-y-install-remote.html.vue"]]);export{h as default};
