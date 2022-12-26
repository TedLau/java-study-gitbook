import{_ as e,W as s,X as t,Y as a,Z as i,$ as r,a0 as d,D as c}from"./framework-0cf5f349.js";const o={},l=d(`<h1 id="jpa查询部分字段列名无效问题" tabindex="-1"><a class="header-anchor" href="#jpa查询部分字段列名无效问题" aria-hidden="true">#</a> JPA查询部分字段列名无效问题</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>spring data jpa原生sql查询问题，我<strong>只要表其中的几个字段的值</strong>，本以为写个原生sql，拿实体类对象去接没问题，结果列名无效</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> 
      <span class="token string">&quot;select d.order_id,d.user_id,d.price  from EDU_ORDER d  where  d.GENERIC_PROD_ID in(?1) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot; order by d.create_time desc &quot;</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span>  <span class="token function">findOrderList</span><span class="token punctuation">(</span><span class="token class-name">List</span> groupSubIdList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java.sql.SQLException: 列名无效</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2. 解决方案</h2><h3 id="_2-1-select" tabindex="-1"><a class="header-anchor" href="#_2-1-select" aria-hidden="true">#</a> 2.1 select *</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span>
<span class="token string">&quot;select d.* from EDU_ORDER d where d.GENERIC_PROD_ID in(?1) &quot;</span> <span class="token operator">+</span>
<span class="token string">&quot; order by d.create_time desc &quot;</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOrderList</span><span class="token punctuation">(</span><span class="token class-name">List</span> groupSubIdList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然实现了功能， 这样还是全表查询了，而且对表关联等复杂逻辑无法比较无力</p><h3 id="_2-2-hql" tabindex="-1"><a class="header-anchor" href="#_2-2-hql" aria-hidden="true">#</a> 2.2 HQL</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>@Query(value =
&quot;select d.orderId,d.userId,d.price from Order where d.GENERICPRODID in(?1) &quot; +
&quot; order by d.createTime desc &quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用HQL 也可以实现，但还是不够灵活</p><h3 id="_2-3-返回map-string-object-不返回实体" tabindex="-1"><a class="header-anchor" href="#_2-3-返回map-string-object-不返回实体" aria-hidden="true">#</a> 2.3 返回Map&lt;String,Object&gt; 不返回实体</h3><div class="language-jpa line-numbers-mode" data-ext="jpa"><pre class="language-jpa"><code>@Query(value = 
      &quot;select d.order_id,d.user_id,d.price  from EDU_ORDER d  where  d.GENERIC_PROD_ID in(?1) &quot; +
      &quot; order by d.create_time desc &quot;, nativeQuery = true)
List&lt;Map&lt;String,Object&gt;&gt;  findOrderList(List groupSubIdList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,15),p={href:"https://blog.csdn.net/theweather/article/details/104961113",target:"_blank",rel:"noopener noreferrer"};function u(h,v){const n=c("ExternalLinkIcon");return s(),t("div",null,[l,a("p",null,[a("a",p,[i("JPA 列名无效问题"),r(n)])])])}const k=e(o,[["render",u],["__file","jpa-y-field.html.vue"]]);export{k as default};
