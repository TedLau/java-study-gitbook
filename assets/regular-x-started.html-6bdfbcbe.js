import{_ as a,W as t,X as e,Y as n,Z as o,$ as c,a0 as p,D as l}from"./framework-0cf5f349.js";const i={},u=p(`<h1 id="java正则表达式汇总" tabindex="-1"><a class="header-anchor" href="#java正则表达式汇总" aria-hidden="true">#</a> Java正则表达式汇总</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。</p><h2 id="_2-匹配规则" tabindex="-1"><a class="header-anchor" href="#_2-匹配规则" aria-hidden="true">#</a> 2. 匹配规则</h2><h3 id="_2-1-单字符匹配" tabindex="-1"><a class="header-anchor" href="#_2-1-单字符匹配" aria-hidden="true">#</a> 2.1 单字符匹配</h3><table><thead><tr><th style="text-align:left;">正则表达式</th><th style="text-align:left;">规则</th><th style="text-align:left;">可以匹配</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;">指定字符</td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>\\u548c</code></td><td style="text-align:left;">指定Unicode字符</td><td style="text-align:left;"><code>和</code></td></tr><tr><td style="text-align:left;"><code>.</code></td><td style="text-align:left;">任意字符</td><td style="text-align:left;"><code>a</code>，<code>b</code>，<code>&amp;</code>，<code>0</code></td></tr><tr><td style="text-align:left;"><code>\\d</code></td><td style="text-align:left;">数字0~9</td><td style="text-align:left;"><code>0</code>~<code>9</code></td></tr><tr><td style="text-align:left;"><code>\\w</code></td><td style="text-align:left;">大小写字母，数字和下划线</td><td style="text-align:left;"><code>a</code><sub>\`z\`，\`A\`</sub><code>Z</code>，<code>0</code>~<code>9</code>，<code>_</code></td></tr><tr><td style="text-align:left;"><code>\\s</code></td><td style="text-align:left;">空格、Tab键</td><td style="text-align:left;">空格，Tab</td></tr><tr><td style="text-align:left;"><code>\\D</code></td><td style="text-align:left;">非数字</td><td style="text-align:left;"><code>a</code>，<code>A</code>，<code>&amp;</code>，<code>_</code>，……</td></tr><tr><td style="text-align:left;"><code>\\W</code></td><td style="text-align:left;">非\\w</td><td style="text-align:left;"><code>&amp;</code>，<code>@</code>，<code>中</code>，……</td></tr><tr><td style="text-align:left;"><code>\\S</code></td><td style="text-align:left;">非\\s</td><td style="text-align:left;"><code>a</code>，<code>A</code>，<code>&amp;</code>，<code>_</code>，……</td></tr></tbody></table><h3 id="_2-2-多字符匹配" tabindex="-1"><a class="header-anchor" href="#_2-2-多字符匹配" aria-hidden="true">#</a> 2.2 多字符匹配</h3><p><strong>都是针对前一个字符匹配</strong></p><table><thead><tr><th style="text-align:left;">正则表达式</th><th style="text-align:left;">规则</th><th style="text-align:left;">可以匹配</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A*</code></td><td style="text-align:left;">任意个数字符</td><td style="text-align:left;">空，<code>A</code>，<code>AA</code>，<code>AAA</code>，……</td></tr><tr><td style="text-align:left;"><code>A+</code></td><td style="text-align:left;">至少1个字符</td><td style="text-align:left;"><code>A</code>，<code>AA</code>，<code>AAA</code>，……</td></tr><tr><td style="text-align:left;"><code>A?</code></td><td style="text-align:left;">0个或1个字符</td><td style="text-align:left;">空，<code>A</code></td></tr><tr><td style="text-align:left;"><code>A{3}</code></td><td style="text-align:left;">指定个数字符</td><td style="text-align:left;"><code>AAA</code></td></tr><tr><td style="text-align:left;"><code>A{2,3}</code></td><td style="text-align:left;">指定范围个数字符</td><td style="text-align:left;"><code>AA</code>，<code>AAA</code></td></tr><tr><td style="text-align:left;"><code>A{2,}</code></td><td style="text-align:left;">至少n个字符</td><td style="text-align:left;"><code>AA</code>，<code>AAA</code>，<code>AAAA</code>，……</td></tr><tr><td style="text-align:left;"><code>A{0,3}</code></td><td style="text-align:left;">最多n个字符</td><td style="text-align:left;">空，<code>A</code>，<code>AA</code>，<code>AAA</code></td></tr></tbody></table><h3 id="_2-3-复杂匹配规则" tabindex="-1"><a class="header-anchor" href="#_2-3-复杂匹配规则" aria-hidden="true">#</a> 2.3 复杂匹配规则</h3><table><thead><tr><th style="text-align:left;">正则表达式</th><th style="text-align:left;">规则</th><th style="text-align:left;">可以匹配</th></tr></thead><tbody><tr><td style="text-align:left;">^</td><td style="text-align:left;">开头</td><td style="text-align:left;">字符串开头</td></tr><tr><td style="text-align:left;">$</td><td style="text-align:left;">结尾</td><td style="text-align:left;">字符串结束</td></tr><tr><td style="text-align:left;">[ABC]</td><td style="text-align:left;">[…]内任意字符</td><td style="text-align:left;">A，B，C</td></tr><tr><td style="text-align:left;">[A-F0-9xy]</td><td style="text-align:left;">指定范围的字符</td><td style="text-align:left;"><code>A</code>，……，<code>F</code>，<code>0</code>，……，<code>9</code>，<code>x</code>，<code>y</code></td></tr><tr><td style="text-align:left;">[^A-F]</td><td style="text-align:left;">指定范围外的任意字符</td><td style="text-align:left;">非<code>A</code>~<code>F</code></td></tr><tr><td style="text-align:left;">AB|CD|EF</td><td style="text-align:left;">AB或CD或EF</td><td style="text-align:left;"><code>AB</code>，<code>CD</code>，<code>EF</code></td></tr></tbody></table><h3 id="_2-4-非贪婪匹配" tabindex="-1"><a class="header-anchor" href="#_2-4-非贪婪匹配" aria-hidden="true">#</a> 2.4 非贪婪匹配</h3><p><strong>正则表达式匹配默认使用贪婪匹配</strong>，可以使用<code>?</code>表示对某一规则进行非贪婪匹配。</p><ul><li>贪婪匹配：任何一个规则，它总是尽可能多地向后匹配，因此，<code>\\d+</code>总是会把后面的<code>0</code>包含进来。</li><li>要让<code>\\d+</code>尽量少匹配，让<code>0*</code>尽量多匹配，我们就必须让<code>\\d+</code>使用非贪婪匹配。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d+?)(0*)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;1230000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;group1=&quot;</span> <span class="token operator">+</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;123&quot;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;group2=&quot;</span> <span class="token operator">+</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;0000&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-java-方法" tabindex="-1"><a class="header-anchor" href="#_3-java-方法" aria-hidden="true">#</a> 3. java 方法</h2><h3 id="_3-1-分割字符串" tabindex="-1"><a class="header-anchor" href="#_3-1-分割字符串" aria-hidden="true">#</a> 3.1 分割字符串</h3><p>使用正则表达式分割字符串可以实现更加灵活的功能。<code>String.split()</code>方法传入的正是正则表达式。我们来看下面的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token string">&quot;a b c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;c&quot; }</span>
<span class="token string">&quot;a b  c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;&quot;, &quot;c&quot; }</span>
<span class="token string">&quot;a, b ;; c&quot;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[\\\\,\\\\;\\\\s]+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;, &quot;b&quot;, &quot;c&quot; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想让用户输入一组标签，然后把标签提取出来，因为用户的输入往往是不规范的，这时，使用合适的正则表达式，就可以消除多个空格、混合<code>,</code>和<code>;</code>这些不规范的输入，直接提取出规范的字符串。</p><h3 id="_3-2-搜索字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-搜索字符串" aria-hidden="true">#</a> 3.2 搜索字符串</h3><p>使用正则表达式还可以搜索字符串，我们来看例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;the quick brown fox jumps over the lazy dog.&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Pattern</span> p <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\wo\\\\w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Matcher</span> m <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sub <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们获取到<code>Matcher</code>对象后，不需要调用<code>matches()</code>方法（因为匹配整个串肯定返回false），而是反复调用<code>find()</code>方法，在整个串中搜索能匹配上<code>\\\\wo\\\\w</code>规则的子串，并打印出来。这种方式比<code>String.indexOf()</code>要灵活得多，因为我们搜索的规则是3个字符：中间必须是<code>o</code>，前后两个必须是字符<code>[A-Za-z0-9_]</code>。</p><h3 id="_3-3-替换字符串" tabindex="-1"><a class="header-anchor" href="#_3-3-替换字符串" aria-hidden="true">#</a> 3.3 替换字符串</h3><p>使用正则表达式替换字符串可以直接调用<code>String.replaceAll()</code>，它的第一个参数是正则表达式，第二个参数是待替换的字符串。我们还是来看例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;The     quick\\t\\t brown   fox  jumps   over the  lazy dog.&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;The quick brown fox jumps over the lazy dog.&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-获取分组匹配" tabindex="-1"><a class="header-anchor" href="#_3-4-获取分组匹配" aria-hidden="true">#</a> 3.4 获取分组匹配</h3><p>正则表达式用<code>(...)</code>分组可以通过<code>Matcher</code>对象快速提取子串：</p><ul><li><code>group(0)</code>表示匹配的整个字符串；</li><li><code>group(1)</code>表示第1个子串，<code>group(2)</code>表示第2个子串，以此类推。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d{3,4})\\\\-(\\\\d{7,8})&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;021-123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;022#1234567&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token comment">// 获得Matcher对象:</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> whole <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010-12345678&quot;, 0表示匹配的整个字符串</span>
            <span class="token class-name">String</span> area <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010&quot;, 1表示匹配的第1个子串</span>
            <span class="token class-name">String</span> tel <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;12345678&quot;, 2表示匹配的第2个子串</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,32),d={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1255945288020320",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const s=l("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",d,[o("廖雪峰-java正则表达式"),c(s)])])])}const v=a(i,[["render",r],["__file","regular-x-started.html.vue"]]);export{v as default};
