import{_ as s,W as t,X as e,Y as a,Z as p,$ as c,a0 as o,D as l}from"./framework-0cf5f349.js";const i={},u=o(`<h1 id="mybatis中if关于数字的判断" tabindex="-1"><a class="header-anchor" href="#mybatis中if关于数字的判断" aria-hidden="true">#</a> mybatis中if关于数字的判断</h1><p>mybatis 中关于数字的判断，如果直接写<code>&lt;if test = &quot;xx == &#39;1&#39; &quot;&gt; &lt;/if&gt;</code>,这样即使是<code>xx==‘1’</code>，通常情况下也不会进入判断的。必须如下写：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getByNameAndPwd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>String<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MemberResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select
           *
        from \`member\`
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerch != &#39;&#39; and isMerch == &#39;1&#39;.toString() <span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            where  \`mobile\` = #{name} 
            and \`password\` = #{password}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerch != &#39;&#39; and isMerch == &#39;2&#39;.toString() <span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            where  \`name\` = #{name}
            and \`password\` = #{password}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>   
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,4),r={href:"https://blog.csdn.net/xinyuebaihe/article/details/86437431",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=l("ExternalLinkIcon");return t(),e("div",null,[u,a("p",null,[a("a",r,[p("mybatis 中if关于数字的判断"),c(n)])])])}const b=s(i,[["render",d],["__file","mybatis-z-if-number.html.vue"]]);export{b as default};
