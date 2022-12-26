import{_ as s,W as e,X as t,Y as n,Z as o,$ as c,a0 as p,D as l}from"./framework-0cf5f349.js";const i={},r=p(`<h1 id="商城设计要点-二-订单快照-减少存储成本" tabindex="-1"><a class="header-anchor" href="#商城设计要点-二-订单快照-减少存储成本" aria-hidden="true">#</a> 商城设计要点(二)-订单快照，减少存储成本</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><h3 id="_1-1-什么是订单快照" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是订单快照" aria-hidden="true">#</a> 1.1 什么是订单快照</h3><p>商品信息是可以修改的，当用户下单后，<strong>为了更好解决后面可能存在的买卖纠纷</strong>，创建订单时会同步保存一份商品详情信息，称之为<strong>订单快照</strong>。</p><h3 id="_1-2-背景" tabindex="-1"><a class="header-anchor" href="#_1-2-背景" aria-hidden="true">#</a> 1.2 背景</h3><p>同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，<strong>存储成本太高</strong>。另外商品信息虽然支持修改，但毕竟是一个<strong>低频动作</strong>。我们可以理解成，大部分订单的商品快照信息都是一样的，除非下单时用户修改过。</p><h2 id="_2-解决方案-摘要比对的方法‍" tabindex="-1"><a class="header-anchor" href="#_2-解决方案-摘要比对的方法‍" aria-hidden="true">#</a> 2. 解决方案：摘要比对的方法‍</h2><p><strong>如何实时识别修改动作是解决快照成本的关键所在</strong>。我们采用<strong>摘要比对的方法‍</strong>。</p><ol><li>创建订单时，先检查商品信息摘要是否已经存在，</li><li>如果不存在，会创建快照记录。</li><li>订单<strong>明细会关联商品的快照主键</strong>。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DigestTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">encodeStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> encodeS <span class="token operator">=</span> <span class="token class-name">DigestUtils</span><span class="token punctuation">.</span><span class="token function">md5Hex</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>encodeS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> data <span class="token operator">=</span> <span class="token string">&quot;订单快照信息......&quot;</span><span class="token punctuation">;</span>
        <span class="token function">encodeStr</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于订单快照属于非核心操作，即使失败也不应该影响用户正常购买流程，所以通常采用异步流程执行。</p><blockquote><ol><li>mall 商城项目未采用该方案</li><li>mall 商城下单时直接存了商品名，下单时价格等基本信息，并没有存快照信息</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,13),u={href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const a=l("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",u,[o("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),c(a)])])])}const v=s(i,[["render",d],["__file","mall-key-points-storage-cost.html.vue"]]);export{v as default};
