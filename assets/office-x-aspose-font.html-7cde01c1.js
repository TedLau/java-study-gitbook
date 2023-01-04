import{_ as a,W as e,X as t,Y as n,$ as p,a0 as o,D as c}from"./framework-0cf5f349.js";const l={},i=o(`<h1 id="aspose-word动态修改字体等" tabindex="-1"><a class="header-anchor" href="#aspose-word动态修改字体等" aria-hidden="true">#</a> aspose.word动态修改字体等</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>我们需求中可能需要对doc文档中某个字符，根据字符长度动态设置字体大小等操作。如何定位到该字体和设置呢？</p><h2 id="_2-代码示例" tabindex="-1"><a class="header-anchor" href="#_2-代码示例" aria-hidden="true">#</a> 2. 代码示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span>templateFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 构建出builder</span>
<span class="token class-name">DocumentBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentBuilder</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 移动到需要设置的字段</span>
builder<span class="token punctuation">.</span><span class="token function">moveToMergeField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改字体大小</span>
builder<span class="token punctuation">.</span><span class="token function">getFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加删除线</span>
builder<span class="token punctuation">.</span><span class="token function">getFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setStrikeThrough</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 写入字段值（非常重要，否则展示为空）</span>
builder<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-相关业务细节点" tabindex="-1"><a class="header-anchor" href="#_3-相关业务细节点" aria-hidden="true">#</a> 3. 相关业务细节点</h2><h3 id="_3-1-字符长度计算" tabindex="-1"><a class="header-anchor" href="#_3-1-字符长度计算" aria-hidden="true">#</a> 3.1 字符长度计算</h3><p>我们公司的word 会比较严谨一点。例如某个文本框只能输入5个中文字。但是如果输入的是英文就不止5个，所以需要动态计算。所以需要我们动态计算缩放的大小</p><p>用到技巧就是无论中文英文都用gb2312 编码来计算</p><blockquote><h2 id="终端下中文字符-宽字符-的对齐输出问题" tabindex="-1"><a class="header-anchor" href="#终端下中文字符-宽字符-的对齐输出问题" aria-hidden="true">#</a> 终端下中文字符（宽字符）的对齐输出问题</h2><p>比如我在终端下输出表格，里面包含了中英文，因为中英文的长度不一致，<code>len()</code>获取的宽度是编码字节的长度，不是实际长度：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">u&#39;我&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">u&#39;我&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里**「我」如果是 utf-8 编码，则占 3 个字节长度，而在 gbk 下则是 2 个字节长度**。所以通过<code>len()</code>来固定长度显然不合适，造成无法对齐的情况。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 处理字符串的大小与长度
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 值对象
     * <span class="token keyword">@param</span> <span class="token parameter">setLenth</span> 规定长度，大于0
     * <span class="token keyword">@param</span> <span class="token parameter">appendSpace</span> 长度不够是否加空格
     * <span class="token keyword">@param</span> <span class="token parameter">charSpace</span> 空格(全角或半角)
     * <span class="token keyword">@return</span>
     */</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token class-name">GetFontSizeZoom</span><span class="token punctuation">(</span><span class="token class-name">FdAsposeFieldAttr</span> item<span class="token punctuation">,</span> <span class="token keyword">int</span> setLenth<span class="token punctuation">,</span> <span class="token keyword">boolean</span> appendSpace<span class="token punctuation">,</span> <span class="token class-name">String</span> charSpace<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getFieldName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;报案人姓名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token class-name">String</span> s <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getFieldName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">double</span> standar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>setLenth <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
           <span class="token class-name">String</span> fieldValue <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">long</span> mylenth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
           <span class="token keyword">try</span> <span class="token punctuation">{</span>
               <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> gb2312s <span class="token operator">=</span> fieldValue<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               mylenth <span class="token operator">=</span> gb2312s<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>

           <span class="token keyword">if</span> <span class="token punctuation">(</span>mylenth <span class="token operator">&gt;</span> setLenth<span class="token punctuation">)</span>
           <span class="token punctuation">{</span>
               <span class="token keyword">double</span> level <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">*</span> mylenth <span class="token operator">/</span> setLenth<span class="token punctuation">;</span>
               standar <span class="token operator">=</span> level<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>appendSpace <span class="token operator">&amp;&amp;</span> mylenth <span class="token operator">&lt;</span> setLenth<span class="token punctuation">)</span>
           <span class="token punctuation">{</span>
               <span class="token keyword">if</span> <span class="token punctuation">(</span>fieldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
               <span class="token punctuation">{</span>
                   <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">rightPad</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> setLenth<span class="token punctuation">,</span> charSpace<span class="token punctuation">)</span><span class="token punctuation">;</span>
                   item<span class="token punctuation">.</span><span class="token function">setFieldValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
               <span class="token keyword">else</span>
               <span class="token punctuation">{</span>
                   <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">rightPad</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">,</span> setLenth<span class="token punctuation">,</span> charSpace<span class="token punctuation">)</span><span class="token punctuation">;</span>
                   item<span class="token punctuation">.</span><span class="token function">setFieldValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> standar<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,12),u={href:"https://blog.tankywoo.com/2017/01/21/python-cli-chinese-align-and-encoding-continue.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"Python 终端下中文字符对齐处理和编码续",-1);function d(k,v){const s=c("ExternalLinkIcon");return e(),t("div",null,[i,n("p",null,[n("a",u,[r,p(s)])])])}const b=a(l,[["render",d],["__file","office-x-aspose-font.html.vue"]]);export{b as default};