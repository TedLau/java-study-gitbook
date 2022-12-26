import{_ as a,W as l,X as n,Y as t,Z as s,$ as i,a0 as d,D as r}from"./framework-0cf5f349.js";const o={},g=d(`<h1 id="jmeter函数" tabindex="-1"><a class="header-anchor" href="#jmeter函数" aria-hidden="true">#</a> JMeter函数</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>在性能测试中为了真实模拟用户请求，往往我们需要让提交的表单内容每次都发生变化，这个过程叫做参数化。JMeter配置元件与前置处理器都能帮助我们进行参数化，但是都有局限性，为了帮助我们能够更好地进行参数化，JMeter提供了一组函数来帮助我们参数化生成需要的数据，这些函数可以函数助手面板来进行编辑。当然函数助手的功能不仅仅是做参数化，还能帮助我们运算、字符编码格式转换、获取运行时参数等功能。</p><p>JMeter提供了很多函数，如果能够熟练使用，可以为脚本带来很多方便。可以很方便的实现一些小功能，几乎可以用于测试计划中的任何元件。</p><p>JMeter函数是一种特殊值，可用于除测试计划外的任何组件。</p><h3 id="_1-1-函数调用的格式" tabindex="-1"><a class="header-anchor" href="#_1-1-函数调用的格式" aria-hidden="true">#</a> 1.1 函数调用的格式</h3><p>函数调用的格式如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${__functionName(var1,var2,var3)}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，“__”是两个英文半角的下划线，functionName为函数名，括号内是函数的参数，无参数时可以不用括号，如\${__UUID}，其中参数视不同函数而定。</p><blockquote><p>Tips:</p><p>如果参数包含逗号，那么一定要使用“\\”来转义，否则JMeter会把它当作一个参数分隔符</p><p>实际使用时，可通过函数助手对话框选择函数，设置参数后，点击生成按钮生成函数字符串。</p></blockquote><h2 id="_2-jmeter-中的常用函数主要分为如下几类" tabindex="-1"><a class="header-anchor" href="#_2-jmeter-中的常用函数主要分为如下几类" aria-hidden="true">#</a> 2. JMeter 中的常用函数主要分为如下几类</h2><table><thead><tr><th style="text-align:left;">函数类型</th><th style="text-align:left;">函数名称</th><th style="text-align:left;">函数作用</th><th style="text-align:left;">启用版本</th></tr></thead><tbody><tr><td style="text-align:left;">脚本函数</td><td style="text-align:left;">__BeanShell</td><td style="text-align:left;">执行 beanshell 脚本</td><td style="text-align:left;">1.X</td></tr><tr><td style="text-align:left;">__javaScript</td><td style="text-align:left;">执行 js 脚本</td><td style="text-align:left;">1.9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">字符串操作函数</td><td style="text-align:left;">__split</td><td style="text-align:left;">根据分隔符拆分字符串为多个变量</td><td style="text-align:left;">2.0.2</td></tr><tr><td style="text-align:left;">__changeCase</td><td style="text-align:left;">转换大小写</td><td style="text-align:left;">4.0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__regexFunction</td><td style="text-align:left;">使用正则表达式解析之前的响应结果</td><td style="text-align:left;">1.X</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">属性信息函数</td><td style="text-align:left;">__isPropDefined</td><td style="text-align:left;">判断属性是否存在</td><td style="text-align:left;">4.0</td></tr><tr><td style="text-align:left;">__property</td><td style="text-align:left;">对多个整数求和</td><td style="text-align:left;">1.8.1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__P</td><td style="text-align:left;">简化的属性函数，用于与命令行上定义的属性一起使用</td><td style="text-align:left;">2.0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__setProperty</td><td style="text-align:left;">简化的属性函数，用于与命令行上定义的属性一起使用</td><td style="text-align:left;">2.0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">数据输入函数</td><td style="text-align:left;">__StringFromFile</td><td style="text-align:left;">从文本文件中读取字符串，每次调用读取一行</td><td style="text-align:left;">1.9</td></tr><tr><td style="text-align:left;">__FileToString</td><td style="text-align:left;">把文件读取成一个字符串，每次调用都是读取整个文件</td><td style="text-align:left;">2.4</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__CSVRead</td><td style="text-align:left;">返回当前正在执行的线程的编号</td><td style="text-align:left;">1.9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__XPath</td><td style="text-align:left;">使用 XPath 语法匹配 XML文件</td><td style="text-align:left;">2.0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">数据计算函数</td><td style="text-align:left;">__counter</td><td style="text-align:left;">计数器函数</td><td style="text-align:left;">1.9</td></tr><tr><td style="text-align:left;">__intSum</td><td style="text-align:left;">对多个整数求和</td><td style="text-align:left;">1.8.1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__longSum</td><td style="text-align:left;">长整型求和</td><td style="text-align:left;">2.3.2</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__Random</td><td style="text-align:left;">返回指定最大值和最小值之间的随机整数</td><td style="text-align:left;">1.9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__RandomDate</td><td style="text-align:left;">返回给定开始日期和结束日期值之间的随机日期</td><td style="text-align:left;">3.3</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">_RandomString</td><td style="text-align:left;">根据给定的字符生成指定长度的随机字符串</td><td style="text-align:left;">2.6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__UUID</td><td style="text-align:left;">通用唯一标识符函数</td><td style="text-align:left;">2.9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">获取信息函数</td><td style="text-align:left;">__TestPlanName</td><td style="text-align:left;">返回当前测试计划的名称</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__threadGroupName</td><td style="text-align:left;">返回当前线程组的名称</td><td style="text-align:left;">4.1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__threadNum</td><td style="text-align:left;">返回当前正在执行的线程的编号</td><td style="text-align:left;">1.X</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__samplerName</td><td style="text-align:left;">返回当前请求的名称</td><td style="text-align:left;">2.5</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__log</td><td style="text-align:left;">输出日志信息</td><td style="text-align:left;">2.2</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">__time</td><td style="text-align:left;">以多种格式返回当前时间</td><td style="text-align:left;">2.2</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="_3-脚本函数" tabindex="-1"><a class="header-anchor" href="#_3-脚本函数" aria-hidden="true">#</a> 3. 脚本函数</h2><h3 id="_3-1-beanshell函数" tabindex="-1"><a class="header-anchor" href="#_3-1-beanshell函数" aria-hidden="true">#</a> <strong>3.1__BeanShell函数</strong></h3><p>JMeter支持BeanShell脚本语言，JMeter函数助手中提供BeanShell函数支持，__BeanShell函数入参可以是BeanShell语法的程序语句或者BeanShell脚本文件。调出函数面板，我们在“值”中输入的是两个字符串相加，然后点击“生成”按钮，就会生成一串以$开头的表达式，表达式在请求（Sampler）中可以直接调用。</p><h4 id="_3-1-1-初识" tabindex="-1"><a class="header-anchor" href="#_3-1-1-初识" aria-hidden="true">#</a> 3.1.1 初识</h4><p>我们先来看看这个**__BeanShell** 长得是啥样子，路径：函数助手 &gt; 选择**__BeanShell** ，如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142504839.png" alt="image-20220630142504839" tabindex="0" loading="lazy"><figcaption>image-20220630142504839</figcaption></figure><h4 id="_3-1-2-关键参数说明" tabindex="-1"><a class="header-anchor" href="#_3-1-2-关键参数说明" aria-hidden="true">#</a> 3.1.2 关键参数说明：</h4><p>**它有两个参数，**第一个参数是要执行的语句，可以是beanshell语句或者是文件地址，是必选参数；第二个参数是保存结果的变量名称，非必选参数。</p><h4 id="_3-1-3-实例" tabindex="-1"><a class="header-anchor" href="#_3-1-3-实例" aria-hidden="true">#</a> 3.1.3 实例</h4><ol><li><p>\${__BeanShell(123456*789)}：返回97406784，如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142814343.png" alt="image-20220630142814343" tabindex="0" loading="lazy"><figcaption>image-20220630142814343</figcaption></figure></li><li><p>\${__BeanShell(source(&quot;function.bsh&quot;))}：会执行外部脚本function.bsh，并返回结果，如下图所示：</p></li></ol><p>​ <strong>文件里代码：System.out.print(&quot;bjhg&quot;);</strong></p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142914650.png" alt="image-20220630142914650" tabindex="0" loading="lazy"><figcaption>image-20220630142914650</figcaption></figure><p>返回结果：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142933025.png" alt="image-20220630142933025" tabindex="0" loading="lazy"><figcaption>image-20220630142933025</figcaption></figure><h4 id="_3-1-4-与beanshell元件比较" tabindex="-1"><a class="header-anchor" href="#_3-1-4-与beanshell元件比较" aria-hidden="true">#</a> 3.1.4 与beanshell元件比较：</h4><p>该函数与beanshell元件(beanshell sampler、beanshell preprocess等)作用是一样的，只是beanshell函数更常用于一些简单的判断或计算等，可以把少量的脚本放在函数中直接赋值给一个变量，而不用总是添加beanshell元件。</p><h3 id="_3-2-javascript" tabindex="-1"><a class="header-anchor" href="#_3-2-javascript" aria-hidden="true">#</a> 3.2 <code>__javaScript</code></h3><p>用来执行 <code>JavaScript</code> 脚本片段，并返回结果值。</p><p>该函数会调用标准的 JavaScript 解释器，还可以直接调用 jmeter 的内置函数。</p><p>注意：文本字符串要添加必要的引号。如果表达式中有逗号，要确保对其转义。</p><p>例如：{sp}&#39;.slice(7,99999))}，对 7 之后的逗号进行了转义。</p><h4 id="_3-2-1-初识" tabindex="-1"><a class="header-anchor" href="#_3-2-1-初识" aria-hidden="true">#</a> 3.2.1 初识</h4><p>我们先来看看这个**<code>__javaScript</code><strong>长得是啥样子，路径：函数助手 &gt; 选择</strong><code>__javaScript</code>**，如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143544586.png" alt="image-20220630143544586" tabindex="0" loading="lazy"><figcaption>image-20220630143544586</figcaption></figure><h4 id="_3-2-2-关键参数说明" tabindex="-1"><a class="header-anchor" href="#_3-2-2-关键参数说明" aria-hidden="true">#</a> 3.2.2 关键参数说明：</h4><p>第一个参数：JavaScript代码片段,待执行的JavaScript代码片段。例如：</p><ol><li><p>new Date()：返回当前日期和时间</p></li><li><p>Math.floor(Math.random()*(\${maxRandom}，+1))：在0 和变量maxRandom之间的随机数</p></li><li><p>minRandom+Math.floor(Math.random()∗({maxRandom}-minRandom+1))：在变量minRandom和maxRandom之间的随机数&quot;</p></li></ol><p>第二个参数：变量名，重用函数计算值的引用名</p><p>请记得为文本字符串添加必要的引号。另外，如果表达式中有逗号，请确保对其转义。例如，Missing open brace for subscript{sp}&#39;.slice(7,99999))}，对7之后的逗号进行了转义。</p><h4 id="_3-2-3-实例" tabindex="-1"><a class="header-anchor" href="#_3-2-3-实例" aria-hidden="true">#</a> 3.2.3 实例</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143729036.png" alt="image-20220630143729036" tabindex="0" loading="lazy"><figcaption>image-20220630143729036</figcaption></figure><h2 id="_4-字符串操作函数" tabindex="-1"><a class="header-anchor" href="#_4-字符串操作函数" aria-hidden="true">#</a> 4. 字符串操作函数</h2><h3 id="_4-1-split" tabindex="-1"><a class="header-anchor" href="#_4-1-split" aria-hidden="true">#</a> 4.1<code>__split</code></h3><p>根据分隔符拆分字符串为多个变量。</p><p>当两个分隔符中间没有字符时，返回 <code>?</code>。</p><p>被拆分出来的字符串，保存在变量中，类似这样：VAR1,{VAR_2} ...，总个数是</p><p>如果最后一个字符是分隔符，也会返回 <code>?</code>。</p><p>函数__split会通过分隔符来拆分传递给它的字符串，并返回原始的字符串。如果分隔符紧挨在一起，那么函数就会以变量值的形式返回&quot;?&quot;。</p><p>拆分出来的字符串，以变量\${VAR_1}、{VAR_2}…以此类推的形式加以返回。JMeter 2.1.2及其以后版本，拖尾的分隔符会被认为缺少一个变量，会返回&quot;?&quot;。</p><p>另外，为了更好地配合ForEach控制器，现在__split会删除第一个不用的变量（由前一次分隔符所设置）。</p><h4 id="_4-1-1-初识" tabindex="-1"><a class="header-anchor" href="#_4-1-1-初识" aria-hidden="true">#</a> 4.1.1 初识</h4><p>路径：函数助手 &gt; 选择**<code>__split</code>**，如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143917339.png" alt="image-20220630143917339" tabindex="0" loading="lazy"><figcaption>image-20220630143917339</figcaption></figure><h4 id="_4-1-2-关键参数说明" tabindex="-1"><a class="header-anchor" href="#_4-1-2-关键参数说明" aria-hidden="true">#</a> 4.1.2 关键参数说明：</h4><table><thead><tr><th style="text-align:left;">待拆分字符串</th><th style="text-align:left;">一个待拆分字符串，例如“a|b|c”</th><th style="text-align:left;">是</th></tr></thead><tbody><tr><td style="text-align:left;">变量名</td><td style="text-align:left;">重用函数计算值的引用名</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">分隔符</td><td style="text-align:left;">分隔符，例如“|”。如果省略了此参数，函数会使用逗号做分隔符。需要注意的是，假如 要多此一举，明确指定使用逗号，需要对逗号转义，如“,”</td><td style="text-align:left;">否</td></tr></tbody></table><h4 id="_4-1-3-示例" tabindex="-1"><a class="header-anchor" href="#_4-1-3-示例" aria-hidden="true">#</a> 4.1.3 示例：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>定义字符串：
<span class="token constant">VAR</span><span class="token operator">=</span><span class="token string">&quot;a||c|&quot;</span>

调用 split 函数：
$<span class="token punctuation">{</span><span class="token function">__split</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span><span class="token constant">VAR</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token constant">VAR</span><span class="token punctuation">,</span><span class="token operator">|</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
返回 <span class="token string">&quot;a||c|&quot;</span>，并生成如下变量：
VAR_n<span class="token operator">=</span><span class="token number">4</span> 
<span class="token constant">VAR_1</span><span class="token operator">=</span>a 
<span class="token constant">VAR_2</span><span class="token operator">=</span><span class="token operator">?</span> 
<span class="token constant">VAR_3</span><span class="token operator">=</span>c 
<span class="token constant">VAR_4</span><span class="token operator">=</span><span class="token operator">?</span> 
<span class="token constant">VAR_5</span><span class="token operator">=</span><span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630144052623.png" alt="image-20220630144052623" tabindex="0" loading="lazy"><figcaption>image-20220630144052623</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630144123299.png" alt="image-20220630144123299" tabindex="0" loading="lazy"><figcaption>image-20220630144123299</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,62),c={href:"https://cloud.tencent.com/developer/inventory/1923/article/1704543",target:"_blank",rel:"noopener noreferrer"};function p(f,h){const e=r("ExternalLinkIcon");return l(),n("div",null,[g,t("p",null,[t("a",c,[s("Jmeter(二十三) - 从入门到精通 - JMeter函数"),i(e)])])])}const _=a(o,[["render",p],["__file","dev-y-pu-jmeter-func.html.vue"]]);export{_ as default};
