import{_ as a,W as i,X as n,Y as e,Z as r,$ as l,a0 as d,D as s}from"./framework-0cf5f349.js";const c={},h=d(`<h1 id="uniapp富文本rich-text图片适配" tabindex="-1"><a class="header-anchor" href="#uniapp富文本rich-text图片适配" aria-hidden="true">#</a> uniapp富文本rich-text图片适配</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>我们商品详情页等场景，使用uniapp富文本rich-text展示时，图片可能会因图片原始尺寸过大，导致无法正常渲染等问题</p><h2 id="_2-解决办案" tabindex="-1"><a class="header-anchor" href="#_2-解决办案" aria-hidden="true">#</a> 2. 解决办案</h2><p>我们将img 标签的样式做个替换，设置最大宽度为100%</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>parsedHtml() {
				if (this.product.detailMobileHtml) {
					return this.product.detailMobileHtml.replace(/\\&lt;img/gi,&#39;&lt;img style=&quot;max-width:100%;height:auto;display:block;&quot;&#39;);
				} else {
					return this.product.detailHtml.replace(/\\&lt;img/gi,&#39;&lt;img style=&quot;max-width:100%;height:auto;display:block;&quot;&#39;);
				}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,7),o={href:"https://blog.csdn.net/qq_43468165/article/details/118787182",target:"_blank",rel:"noopener noreferrer"};function p(u,m){const t=s("ExternalLinkIcon");return i(),n("div",null,[h,e("p",null,[e("a",o,[r("uni-app中使用rich-text如何添加样式控制富文本里面的内容"),l(t)])])])}const b=a(c,[["render",p],["__file","fe-lib-uniapp-rich-text-adapter.html.vue"]]);export{b as default};
