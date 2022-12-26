import{_ as a,W as t,X as p,Y as n,Z as e,$ as c,a0 as o,D as l}from"./framework-0cf5f349.js";const i={},u=o(`<h1 id="不同font-size的文字底部在一条线上" tabindex="-1"><a class="header-anchor" href="#不同font-size的文字底部在一条线上" aria-hidden="true">#</a> 不同font-size的文字底部在一条线上</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>有个需求是前端需要展示￥158.8，为了凸显金额，所以158.8 的字体要大，￥的字体要小。原本挺简单的需求，却被我玩坏了</p><h3 id="_1-1-问题原因" tabindex="-1"><a class="header-anchor" href="#_1-1-问题原因" aria-hidden="true">#</a> 1.1 问题原因</h3><p>虽然只是展示两个文字，但我在选择布局的时候。却选择了flex+div的形式。导致我陷在里面一直无法实现此功能。哪怕是设置为底部对齐和baseline</p><ul><li><p>align-items: flex-end</p><ul><li><p>没有一个能对齐的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403233950269.png" alt="image-20220403233950269" tabindex="0" loading="lazy"><figcaption>image-20220403233950269</figcaption></figure></li></ul></li><li><p>align-items: baseline;</p><ul><li><p>符号和数字对齐了,中文还差点意思</p><p>![image-20220403235103157](/Users/zsz/Library/Application Support/typora-user-images/image-20220403235103157.png)</p></li></ul></li></ul><p><strong>现在感觉自己啥东西都想套flex布局，这就是一个典型的反面教材</strong></p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决" aria-hidden="true">#</a> 2. 解决</h2><h3 id="_2-1-基础方案1" tabindex="-1"><a class="header-anchor" href="#_2-1-基础方案1" aria-hidden="true">#</a> 2.1 基础方案1：</h3><p>去掉外围的flex 布局，默认就是底部对齐的，当然中文还有点问题</p><blockquote><p>适用于那些没有中文等，特殊情况的</p></blockquote><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403234509741.png" alt="image-20220403234509741" tabindex="0" loading="lazy"><figcaption>image-20220403234509741</figcaption></figure><h3 id="_2-2-方案2-手工计算" tabindex="-1"><a class="header-anchor" href="#_2-2-方案2-手工计算" aria-hidden="true">#</a> 2.2 方案2：手工计算</h3><p>需要支持中文，你需要强制对不同大小的字体设定不同的行高。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>嘎嘎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>呱呱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>gaga<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>guagua<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid lightblue<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 40px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline .b</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.a div</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.a span</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 37px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.a b</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.b.e1</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.b.e2</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token selector">.b.e3</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终效果如下：</p><figure><img src="https://segmentfault.com/img/bV2Nvn?w=592&amp;h=120" alt="clipboard.png" tabindex="0" loading="lazy"><figcaption>clipboard.png</figcaption></figure><h3 id="_2-3-方案3-自动计算" tabindex="-1"><a class="header-anchor" href="#_2-3-方案3-自动计算" aria-hidden="true">#</a> 2.3 方案3：自动计算</h3><p>如果不想手工调整，而想自动计算的话，代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>嘎嘎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b c3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>呱呱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>gaga<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b e3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>guagua<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token selector">.a <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token color">lightblue</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.inline .b <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .c1 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .c2 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .c3 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .e1 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .e2 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.a .e3 <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果也还可以，英文的出入比较大，中文略有差距：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220403235355217.png" alt="image-20220403235355217" tabindex="0" loading="lazy"><figcaption>image-20220403235355217</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,25),r={href:"https://segmentfault.com/q/1010000012994498",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[e("视觉上如何让不同 font-size 的文字底部在一条线上？"),c(s)])])])}const m=a(i,[["render",k],["__file","fe-font-size-line-bottom.html.vue"]]);export{m as default};
