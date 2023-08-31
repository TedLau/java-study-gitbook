import{_ as e,W as a,X as i,a0 as t}from"./framework-0cf5f349.js";const n={},r=t(`<h1 id="solr多字段搜索" tabindex="-1"><a class="header-anchor" href="#solr多字段搜索" aria-hidden="true">#</a> Solr多字段搜索</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>有些场景我们需要搜索多字段，</p><p>比如，现在有一个需求，想要输入关键字搜索标题（title）和内容（content）等多个字段</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2. 解决方案</h2><h3 id="_2-1-方案一-采用copyfield-复制字段-推荐" tabindex="-1"><a class="header-anchor" href="#_2-1-方案一-采用copyfield-复制字段-推荐" aria-hidden="true">#</a> 2.1 方案一：采用copyField（复制字段）（推荐）</h3><p>应定义如下几个名字为title、content以及text的域。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220417211216815.png" alt="image-20220417211216815" tabindex="0" loading="lazy"><figcaption>image-20220417211216815</figcaption></figure><p>然后，将title域和content域中的内容复制到text域中，如下图所示。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220417211240887.png" alt="image-20220417211240887" tabindex="0" loading="lazy"><figcaption>image-20220417211240887</figcaption></figure><p>这样就定义好了一个复制字段。现在根据关键字只搜索text域中的内容就相当于搜索title域和content域了。</p><h3 id="_2-2-方案2-or" tabindex="-1"><a class="header-anchor" href="#_2-2-方案2-or" aria-hidden="true">#</a> 2.2 方案2：OR</h3><p>循环字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(title:张三) OR (content:张三) OR (author:张三) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只有四五个字段，我们可以用or 来查询。但如果字段多的话，用or效率就很低了</p>`,15),o=[r];function d(c,l){return a(),i("div",null,o)}const h=e(n,[["render",d],["__file","solr-i-multi-field.html.vue"]]);export{h as default};