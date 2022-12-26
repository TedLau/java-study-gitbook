import{_ as a,W as e,X as c,Y as n,Z as p,$ as t,a0 as o,D as l}from"./framework-0cf5f349.js";const i={},u=o(`<h1 id="calc-函数" tabindex="-1"><a class="header-anchor" href="#calc-函数" aria-hidden="true">#</a> calc()函数</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>CSS3 的 calc() 函数允许我们在属性值中执行数学操作。例如，我们可以使用 calc() 指定一个元素宽的固定像素值为多个数值的和。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px + 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-为什么使用-calc" tabindex="-1"><a class="header-anchor" href="#_2-为什么使用-calc" aria-hidden="true">#</a> 2. 为什么使用 calc()</h2><h3 id="_2-1-css-预处理器-是如何处理的" tabindex="-1"><a class="header-anchor" href="#_2-1-css-预处理器-是如何处理的" aria-hidden="true">#</a> 2.1 CSS 预处理器 是如何处理的</h3><p>使用 CSS 预处理器，比如 SASS的情况</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.foo </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$width-one</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$width-two</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token selector">.bar </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width-one</span> <span class="token operator">+</span> <span class="token variable">$width-two</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-calc-函数-优势一-可以混合计算绝对单位" tabindex="-1"><a class="header-anchor" href="#_2-2-calc-函数-优势一-可以混合计算绝对单位" aria-hidden="true">#</a> 2.2 calc() 函数 优势一：可以混合计算绝对单位</h3><p><code>calc()</code> 函数能够组合不同的单元。特别是，<strong>我们可以混合计算绝对单位（比如百分比与视口单元）与相对单位（比如像素）</strong>。例如，我们可以创造一个表达式，用一个百分比减掉一个像素值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本例中，<code>.foo</code> 元素总是小于它父元素宽度 50px。</p><h3 id="_2-3-函数-优势二-更清晰" tabindex="-1"><a class="header-anchor" href="#_2-3-函数-优势二-更清晰" aria-hidden="true">#</a> 2.3 函数 优势二：更清晰</h3><p>使用 <code>calc()</code>，计算值是表达式它自己，而非表达式的结果。当使用 CSS 预处理器做数学运算时，给定值为表达式的结果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px + 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，浏览器解析的 calc() 的值为真实的 calc() 表达式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着浏览器中的值可以更加灵活，能够响应视口的改变。我们能够给元素设定一个高度为视口的高度减去一个绝对值，它将随视口的改变进行调节。</p><h2 id="_3-使用-calc" tabindex="-1"><a class="header-anchor" href="#_3-使用-calc" aria-hidden="true">#</a> 3. 使用 calc()</h2><p>calc() 函数可以用来对数值属性执行四则运算。比如，<code>&lt;length&gt;</code>，<code>&lt;frequency&gt;</code>，<code>&lt;angle&gt;</code>，<code>&lt;time&gt;</code>，<code>&lt;number&gt;</code> 或者 <code>&lt;integer&gt;</code> 数据类型。</p><p>这里有一些示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50vmax + 3rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1vw + 1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span> <span class="token function">calc</span><span class="token punctuation">(</span>1turn + 28deg<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span>3 * 20%<span class="token punctuation">)</span><span class="token punctuation">,</span> 40%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50vw / 3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-clac-嵌套" tabindex="-1"><a class="header-anchor" href="#_4-clac-嵌套" aria-hidden="true">#</a> 4. clac() 嵌套</h2><p>calc() 函数可以嵌套。在函数里边，会被视为简单的括号表达式，如下例所示。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> 100% / <span class="token function">calc</span><span class="token punctuation">(</span>100px * 2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的计算值如下所示：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> 100% / <span class="token punctuation">(</span>100px * 2<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-什么场景使用-calc" tabindex="-1"><a class="header-anchor" href="#_5-什么场景使用-calc" aria-hidden="true">#</a> 5. 什么场景使用 calc()</h2><h3 id="_5-1-example-1-居中元素" tabindex="-1"><a class="header-anchor" href="#_5-1-example-1-居中元素" aria-hidden="true">#</a> 5.1 Example 1 - 居中元素</h3><p>使用 calc() 给我们提供另一个垂直居中元素的解决方案。如果我们知道元素的尺寸，一个典型的解决方案是使用负外边距移动自身距离高与宽的一半，如下所示：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">marging-top</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 calc() 函数，我们仅仅通过 top 与 left 属性便能实现相同的效果：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute
    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flexbox 的介入，已经很少需要这种方法了。不过，一些情况下 Flexbox 不能被使用。比如，元素需要绝对定位或者固定定位，这种方法是有用的。</p><h3 id="_5-2-example-2-创建根栅格尺寸" tabindex="-1"><a class="header-anchor" href="#_5-2-example-2-创建根栅格尺寸" aria-hidden="true">#</a> 5.2 Example 2 - 创建根栅格尺寸</h3><p>使用 rem，<code>calc()</code> 函数能够用来创建一个基于视口的栅格。我们可以设置根元素的字体大小为视口宽度的一部分。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>  
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw / 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，1rem 为视口宽度的 1/30。在页面上的任何文本，将会根据你的视口自动缩放。更进一步，相同比例的视口总会显示相同的文本数量，不管视口的真实尺寸是多少。</p><p>如果我们对非文本使用 rem 设置大小，它们同样遵守这个行为。一个 1rem 宽度的元素总是视口元素宽度的 1/30。</p><h3 id="_5-3-example-3-清晰度" tabindex="-1"><a class="header-anchor" href="#_5-3-example-3-清晰度" aria-hidden="true">#</a> 5.3 Example 3 - 清晰度</h3><p>最后，<code>calc()</code>使计算更加清晰。如果你使一组项目为它们父元素容器宽度的 1/6，你可能这么写：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 16.666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，它能够更加清晰并具有可读性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% / 6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>calc()</code>，我们还能做更多的事情，比如创建一个栅格系统。它是 CSS 最有用的新特性之一。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,46),d={href:"https://segmentfault.com/a/1190000019392639",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=l("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[n("a",d,[p("浅谈CSS calc()函数的用法"),t(s)])])])}const h=a(i,[["render",r],["__file","css-calc.html.vue"]]);export{h as default};
