import{_ as i,W as l,X as o,Y as a,Z as s,$ as e,a0 as t,D as p}from"./framework-0cf5f349.js";const c={},r=t('<h1 id="flyway兼容达梦数据库" tabindex="-1"><a class="header-anchor" href="#flyway兼容达梦数据库" aria-hidden="true">#</a> Flyway兼容达梦数据库</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>公司项目需要兼容国产数据库达梦，达梦和oracle 相似度还是非常高的。绝大部分的sql语句都能共用。但是flyway 本身是不支持达梦的，但是不着急，flyway 本身是开源的，那么我们是否能将达梦适配到 oracle的flyway呢</p><h2 id="_2-源码下载导入" tabindex="-1"><a class="header-anchor" href="#_2-源码下载导入" aria-hidden="true">#</a> 2. 源码下载导入</h2><h2 id="_2-1-flyway-源码" tabindex="-1"><a class="header-anchor" href="#_2-1-flyway-源码" aria-hidden="true">#</a> 2.1 flyway 源码</h2>',5),d={href:"https://github.com/flyway/flyway",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>因公司项目之前是用6.3.3 版本，现在版本已经变化挺大了，所以还是使用tag 为6.3.3 的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925101634465.png" alt="image-20210925101634465" tabindex="0" loading="lazy"><figcaption>image-20210925101634465</figcaption></figure><h2 id="_2-2-flyway-打包测试" tabindex="-1"><a class="header-anchor" href="#_2-2-flyway-打包测试" aria-hidden="true">#</a> 2.2 flyway 打包测试</h2><p>我们直接打包是不能直接打包成功的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.8.1:compile (default-compile) on project flyway-core: Fatal error compiling
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102032444.png" alt="image-20210925102032444" tabindex="0" loading="lazy"><figcaption>image-20210925102032444</figcaption></figure><p>网上的解释是，版本不一致，但按照他们的方法一个个设置，怎么都没用。</p><p>后面怀疑是idea 的问题，用mvn clean package 打包做测试</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102307886.png" alt="image-20210925102307886" tabindex="0" loading="lazy"><figcaption>image-20210925102307886</figcaption></figure><p>结果发现mvn 的提示清晰多了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>无效的标记: --release 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-1-解决办法" tabindex="-1"><a class="header-anchor" href="#_2-2-1-解决办法" aria-hidden="true">#</a> 2.2.1 解决办法</h3><ul><li><p>第一种： jdk 升级到 JDK9</p><p>不推荐，很多公司还是用jdk8</p></li><li><p>pom.xml 注释掉 <code>&lt;release&gt;8&lt;/release&gt;</code></p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102554160.png" alt="image-20210925102554160" tabindex="0" loading="lazy"><figcaption>image-20210925102554160</figcaption></figure></li></ul><p>这样打包就可以正常使用了</p><h2 id="_4-适配达梦" tabindex="-1"><a class="header-anchor" href="#_4-适配达梦" aria-hidden="true">#</a> 4. 适配达梦</h2><h3 id="_4-1-修改databasetype" tabindex="-1"><a class="header-anchor" href="#_4-1-修改databasetype" aria-hidden="true">#</a> 4.1 修改DatabaseType</h3><p>org.flywaydb.core.internal.jdbc.DatabaseType类中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">ORACLE</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加||databaseProductName.startsWith(&quot;DM&quot;)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;DM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">ORACLE</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-drivertype中添加dmdrivertype" tabindex="-1"><a class="header-anchor" href="#_4-2-drivertype中添加dmdrivertype" aria-hidden="true">#</a> 4.2 DriverType中添加dmDriverType</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DriverDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DriverType</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
  <span class="token function">ORACLE</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:oracle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;oracle.jdbc.OracleDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">DM</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dm.jdbc.driver.DmDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-不校验版本" tabindex="-1"><a class="header-anchor" href="#_4-3-不校验版本" aria-hidden="true">#</a> 4.3 不校验版本</h3><p>我们要兼容达梦，达梦的版本是8.X 而 Oracle 是需要10.x 以上的，所以我们不校验版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Exception in thread &quot;main&quot; org.flywaydb.core.internal.exception.FlywayDbUpgradeRequiredException: Oracle upgrade required: Oracle 8.1 is outdated and no longer supported by Flyway. Flyway currently supports Oracle 10 and newer.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173026851.png" alt="image-20210921173026851" tabindex="0" loading="lazy"><figcaption>image-20210921173026851</figcaption></figure><p>因为我们达梦直接使用oracle 的语法，但是版本还是达梦的。所以我们直接注释掉。有两处</p><ul><li>第一处为：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseIsRecentEnough</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersion)) {</span>
<span class="token comment">//            throw new FlywayDbUpgradeRequiredException(databaseType, computeVersionDisplayName(getVersion()),</span>
<span class="token comment">//                    computeVersionDisplayName(MigrationVersion.fromVersion(oldestSupportedVersion)));</span>
<span class="token comment">//        }</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二处为：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Ensures this database it at least at recent as this version otherwise suggest upgrade to this higher edition of
     * Flyway.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">oldestSupportedVersionInThisEdition</span> The oldest supported version of the database by this edition of Flyway.
     * <span class="token keyword">@param</span> <span class="token parameter">editionWhereStillSupported</span>          The edition of Flyway that still supports this version of the database,
     *                                            in case it&#39;s too old.
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseNotOlderThanOtherwiseRecommendUpgradeToFlywayEdition</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersionInThisEdition<span class="token punctuation">,</span>
                                                                                            <span class="token class-name">Edition</span> editionWhereStillSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersionInThisEdition)) {</span>
<span class="token comment">//            throw new FlywayEditionUpgradeRequiredException(</span>
<span class="token comment">//                    editionWhereStillSupported,</span>
<span class="token comment">//                    databaseType,</span>
<span class="token comment">//                    computeVersionDisplayName(getVersion()));</span>
<span class="token comment">//        }</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-达梦测试" tabindex="-1"><a class="header-anchor" href="#_5-达梦测试" aria-hidden="true">#</a> 5. 达梦测试</h2><h3 id="_5-1-添加dm依赖" tabindex="-1"><a class="header-anchor" href="#_5-1-添加dm依赖" aria-hidden="true">#</a> 5.1 添加dm依赖</h3><div class="language-pom line-numbers-mode" data-ext="pom"><pre class="language-pom"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.dm&lt;/groupId&gt;
    &lt;artifactId&gt;DmJdbcDriver&lt;/artifactId&gt;
    &lt;version&gt;1.8.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-添加达梦测试类" tabindex="-1"><a class="header-anchor" href="#_5-2-添加达梦测试类" aria-hidden="true">#</a> 5.2 添加达梦测试类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Flyway</span> flyway <span class="token operator">=</span> <span class="token class-name">Flyway</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm://192.168.0.1:5236&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        第一步先执行baseline,之后才能执行migrate</span>
        flyway<span class="token punctuation">.</span><span class="token function">baseline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        flyway.migrate();</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行完了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-运行测试" tabindex="-1"><a class="header-anchor" href="#_5-3-运行测试" aria-hidden="true">#</a> 5.3 运行测试</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173515577.png" alt="image-20210921173515577" tabindex="0" loading="lazy"><figcaption>image-20210921173515577</figcaption></figure><p>也正常生成 <code>flyway_schema_history</code></p><h2 id="_6-集成到自己项目中" tabindex="-1"><a class="header-anchor" href="#_6-集成到自己项目中" aria-hidden="true">#</a> 6. 集成到自己项目中</h2><h3 id="_6-1-下载flyway-dm-6-3-3" tabindex="-1"><a class="header-anchor" href="#_6-1-下载flyway-dm-6-3-3" aria-hidden="true">#</a> 6.1 下载flyway-dm-6.3.3</h3>`,41),m={href:"https://github.com/zszdevelop/flyway-dm/releases/tag/flyway-6.3.3",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="_6-2-将文件放入lib中" tabindex="-1"><a class="header-anchor" href="#_6-2-将文件放入lib中" aria-hidden="true">#</a> 6.2 将文件放入lib中</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925103927972.png" alt="image-20210925103927972" tabindex="0" loading="lazy"><figcaption>image-20210925103927972</figcaption></figure><h3 id="_6-2-pom依赖" tabindex="-1"><a class="header-anchor" href="#_6-2-pom依赖" aria-hidden="true">#</a> 6.2 pom依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token comment">&lt;!-- flyway--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>system<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>systemPath</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/lib/flyway-core-0-SNAPSHOT.jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>systemPath</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-在flyway-commandline使用" tabindex="-1"><a class="header-anchor" href="#_7-在flyway-commandline使用" aria-hidden="true">#</a> 7. 在flyway-commandline使用</h2><p>我们使用方式可以是在项目中使用，还可以使用flyway-commandline 的方式。此方式更加方便</p><h3 id="_7-1-下载对应版本的flyway-commandline" tabindex="-1"><a class="header-anchor" href="#_7-1-下载对应版本的flyway-commandline" aria-hidden="true">#</a> 7.1 下载对应版本的flyway-commandline</h3><p>我们改的源码是6.3.3 的，所以我们下载6.3.3 的flyway-commandline</p>`,8),v={href:"https://repo1.maven.org/maven2/org/flywaydb/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="_7-2-添加达梦驱动" tabindex="-1"><a class="header-anchor" href="#_7-2-添加达梦驱动" aria-hidden="true">#</a> 7.2 添加达梦驱动</h3><p>将达梦驱动放到 flyway-6.3.3-&gt;drivers-&gt;DmJdbcDriver18.jar</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222426034.png" alt="image-20211011222426034" tabindex="0" loading="lazy"><figcaption>image-20211011222426034</figcaption></figure><h3 id="_7-3-更改配置" tabindex="-1"><a class="header-anchor" href="#_7-3-更改配置" aria-hidden="true">#</a> 7.3 更改配置</h3><p>修改flyway-6.3.3-》conf-&gt;flyway.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 达梦数据库url</span>
<span class="token assign-left variable">flyway.url</span><span class="token operator">=</span>jdbc:dm://192.168.0.1:5236
<span class="token comment"># 数据库驱动</span>
<span class="token assign-left variable">flyway.driver</span><span class="token operator">=</span>dm.jdbc.driver.DmDriver
<span class="token comment"># 数据库用户名</span>
<span class="token assign-left variable">flyway.user</span><span class="token operator">=</span>youuser
<span class="token comment"># 数据库密码</span>
<span class="token assign-left variable">flyway.password</span><span class="token operator">=</span>youpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4-替换flyway-core包" tabindex="-1"><a class="header-anchor" href="#_7-4-替换flyway-core包" aria-hidden="true">#</a> 7.4 替换flyway-core包</h4><p>修改flyway-6.3.3-》lib-&gt;community-&gt;flyway-core-6.3.3.jar</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222641335.png" alt="image-20211011222641335" tabindex="0" loading="lazy"><figcaption>image-20211011222641335</figcaption></figure><h3 id="_7-5-命令行运行" tabindex="-1"><a class="header-anchor" href="#_7-5-命令行运行" aria-hidden="true">#</a> 7.5 命令行运行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./flyway migrate -baselineOnMigrate=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,12),h={href:"https://blog.csdn.net/qq_32811865/article/details/105594256",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/babyzhongheng/article/details/115176744",target:"_blank",rel:"noopener noreferrer"},y={href:"https://blog.csdn.net/u013084266/article/details/106542814",target:"_blank",rel:"noopener noreferrer"};function f(w,_){const n=p("ExternalLinkIcon");return l(),o("div",null,[r,a("p",null,[a("a",d,[s("flyway源码地址"),e(n)])]),u,a("p",null,[a("a",m,[s("flyway-dm-6.3.3下载"),e(n)])]),g,a("p",null,[a("a",v,[s("flywaydb下载"),e(n)])]),k,a("p",null,[a("a",h,[s("flyway 源码解析"),e(n)])]),a("p",null,[a("a",b,[s("flyway-4.2适配DM8数据库"),e(n)])]),a("p",null,[a("a",y,[s("问题解决：flyway源码编译，报：flyway-core: Fatal error compiling: 无效的标记: --release"),e(n)])])])}const z=i(c,[["render",f],["__file","flyway-x-adapter-dameng.html.vue"]]);export{z as default};
