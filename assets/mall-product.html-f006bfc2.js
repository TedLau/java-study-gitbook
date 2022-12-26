import{_ as t,W as p,X as o,Y as n,Z as s,$ as e,a0 as c,D as u}from"./framework-0cf5f349.js";const l={},i=n("h1",{id:"mall中商品设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mall中商品设计","aria-hidden":"true"},"#"),s(" mall中商品设计")],-1),k={href:"http://www.macrozheng.com/#/README",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><h2 id="_2-接口设计" tabindex="-1"><a class="header-anchor" href="#_2-接口设计" aria-hidden="true">#</a> 2. 接口设计</h2><h3 id="_2-1-获取商品详情" tabindex="-1"><a class="header-anchor" href="#_2-1-获取商品详情" aria-hidden="true">#</a> 2.1 获取商品详情</h3><ol><li>获取商品的基础信息</li><li>获取品牌信息</li><li>获取商品属性信息</li><li>获取商品SKU库存信息</li><li>商品阶梯价格设置</li><li>商品满减价格设置</li><li>商品可用优惠券</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">PmsPortalProductDetail</span> <span class="token function">detail</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">PmsPortalProductDetail</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsPortalProductDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取商品信息</span>
    <span class="token class-name">PmsProduct</span> product <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">setProduct</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取品牌信息</span>
    <span class="token class-name">PmsBrand</span> brand <span class="token operator">=</span> brandMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getBrandId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">setBrand</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取商品属性信息</span>
    <span class="token class-name">Long</span> productAttributeCategoryId <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getProductAttributeCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>productAttributeCategoryId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">PmsProductAttributeExample</span> attributeExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        attributeExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductAttributeCategoryIdEqualTo</span><span class="token punctuation">(</span>productAttributeCategoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttribute</span><span class="token punctuation">&gt;</span></span> productAttributeList <span class="token operator">=</span> productAttributeMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">setProductAttributeList</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取商品属性值信息</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> attributeIds <span class="token operator">=</span> productAttributeList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">PmsProductAttribute</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">PmsProductAttributeValueExample</span> attributeValueExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeValueExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            attributeValueExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">andProductAttributeIdIn</span><span class="token punctuation">(</span>attributeIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttributeValue</span><span class="token punctuation">&gt;</span></span> productAttributeValueList <span class="token operator">=</span> productAttributeValueMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeValueExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductAttributeValueList</span><span class="token punctuation">(</span>productAttributeValueList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  

        <span class="token comment">//获取商品SKU库存信息</span>
        <span class="token class-name">PmsSkuStockExample</span> skuExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsSkuStockExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        skuExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsSkuStock</span><span class="token punctuation">&gt;</span></span> skuStockList <span class="token operator">=</span> skuStockMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>skuExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">setSkuStockList</span><span class="token punctuation">(</span>skuStockList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//商品阶梯价格设置</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">PmsProductLadderExample</span> ladderExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductLadderExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ladderExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductLadder</span><span class="token punctuation">&gt;</span></span> productLadderList <span class="token operator">=</span> productLadderMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>ladderExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductLadderList</span><span class="token punctuation">(</span>productLadderList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//商品满减价格设置</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">PmsProductFullReductionExample</span> fullReductionExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductFullReductionExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fullReductionExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductFullReduction</span><span class="token punctuation">&gt;</span></span> productFullReductionList <span class="token operator">=</span> productFullReductionMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>fullReductionExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setProductFullReductionList</span><span class="token punctuation">(</span>productFullReductionList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//商品可用优惠券</span>
        result<span class="token punctuation">.</span><span class="token function">setCouponList</span><span class="token punctuation">(</span>portalProductDao<span class="token punctuation">.</span><span class="token function">getAvailableCouponList</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getProductCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-获取可用优惠券列表" tabindex="-1"><a class="header-anchor" href="#_2-1-1-获取可用优惠券列表" aria-hidden="true">#</a> 2.1.1 获取可用优惠券列表</h4><p>获取具体商品的可用优惠券，</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;getAvailableCouponList&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;com.macro.mall.mapper.SmsCouponMapper.BaseResultMap&quot;</span><span class="token operator">&gt;</span>
    <span class="token keyword">SELECT</span> <span class="token operator">*</span>
    <span class="token keyword">FROM</span> sms_coupon
    <span class="token keyword">WHERE</span> use_type <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token operator">AND</span> start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token operator">AND</span> end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">UNION</span>
    <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>
        <span class="token keyword">FROM</span> sms_coupon_product_category_relation cpc
                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cpc<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id
        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">1</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> cpc<span class="token punctuation">.</span>product_category_id <span class="token operator">=</span> <span class="token comment">#{productCategoryId}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">UNION</span>
    <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>
        <span class="token keyword">FROM</span> sms_coupon_product_relation cp
                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cp<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id
        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">2</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> cp<span class="token punctuation">.</span>product_id <span class="token operator">=</span> <span class="token comment">#{productId}</span>
    <span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(m,v){const a=u("ExternalLinkIcon");return p(),o("div",null,[i,n("blockquote",null,[n("p",null,[s("该篇文章主要参考"),n("a",k,[s("mall官方文档"),e(a)]),s("，并结合自己的使用感受做的一些笔记")])]),r])}const f=t(l,[["render",d],["__file","mall-product.html.vue"]]);export{f as default};
