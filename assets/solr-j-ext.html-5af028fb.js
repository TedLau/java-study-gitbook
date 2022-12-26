import{_ as s,W as t,X as e,Y as a,Z as i,$ as o,a0 as p,D as c}from"./framework-0cf5f349.js";const l={},r=p(`<h1 id="solr配置ik分词停用词与扩展词" tabindex="-1"><a class="header-anchor" href="#solr配置ik分词停用词与扩展词" aria-hidden="true">#</a> Solr配置ik分词停用词与扩展词</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><h3 id="_1-1-停用词" tabindex="-1"><a class="header-anchor" href="#_1-1-停用词" aria-hidden="true">#</a> 1.1 停用词</h3><p>停用词(Stop Words) ，词典译为“电脑检索中的虚字、非检索用字”。在SEO中，为节省存储空间和提高搜索效率，搜索引擎在索引页面或处理<strong>搜索请求时会自动忽略某些字或词</strong>，这些字或词即被称为Stop Words(停用词)。</p><p>停用词一定程度上相当于过滤词(Filter Words)，不过过滤词的范围更大一些，包含黄色、政治等敏感信息的关键词都会被视做过滤词加以处理，停用词本身则没有这个限制。通常意义上，停用词(Stop Words)大致可分为如下两类：</p><ul><li><p><strong>使用十分广泛，甚至是过于频繁的一些单词。</strong></p><p>比如英文的“i”、“is”、“what”，中文的“我”、“就”之类词几乎在每个文档上均会出现，查询这样的词搜索引擎就无法保证能够给出真正相关的搜索结果，难于缩小搜索范围提高搜索结果的准确性，同时还会降低搜索的效率。因此，在真正的工作中，Google和百度等搜索引擎会忽略掉特定的常用词，在搜索的时候，如果我们使用了太多的停用词，也同样有可能无法得到非常精确的结果，甚至是可能大量毫不相关的搜索结果。</p></li><li><p><strong>文本中出现频率很高，但实际意义又不大的词。</strong></p><p>这一类主要包括了语气助词、副词、介词、连词等，通常自身并无明确意义，只有将其放入一个完整的句子中才有一定作用的词语。如常见的“的”、“在”、“和”、“接着”之类，比如“SEO研究院是原创的SEO博客”这句话中的“是”、“的”就是两个停用词</p></li></ul><h3 id="_1-2-扩展词" tabindex="-1"><a class="header-anchor" href="#_1-2-扩展词" aria-hidden="true">#</a> 1.2 扩展词</h3><p>基于自己项目进行扩展的一些特定词语</p><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2><h3 id="_2-1-复制文件" tabindex="-1"><a class="header-anchor" href="#_2-1-复制文件" aria-hidden="true">#</a> 2.1 复制文件</h3><p>将ext.dic 与 IKAnalyzer.cfg.xml 和 stopword.dic 复制到 webapps\\solr\\WEB-INF\\classes 文件夹下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154252936.png" alt="image-20220412154252936" tabindex="0" loading="lazy"><figcaption>image-20220412154252936</figcaption></figure><h3 id="_2-2-ikanalyzer-cfg-xml-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-ikanalyzer-cfg-xml-配置" aria-hidden="true">#</a> 2.2 IKAnalyzer.cfg.xml 配置</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ik_ext.dic;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span> 
	
	<span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>stopword.dic;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span> 
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置扩展词" tabindex="-1"><a class="header-anchor" href="#_2-3-配置扩展词" aria-hidden="true">#</a> 2.3 配置扩展词</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154445335.png" alt="image-20220412154445335" tabindex="0" loading="lazy"><figcaption>image-20220412154445335</figcaption></figure><h3 id="_2-4-配置停用词" tabindex="-1"><a class="header-anchor" href="#_2-4-配置停用词" aria-hidden="true">#</a> 2.4 配置停用词</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154516180.png" alt="image-20220412154516180" tabindex="0" loading="lazy"><figcaption>image-20220412154516180</figcaption></figure><h2 id="_3-扩展词验证" tabindex="-1"><a class="header-anchor" href="#_3-扩展词验证" aria-hidden="true">#</a> 3. 扩展词验证</h2><h3 id="_3-1-未配置前" tabindex="-1"><a class="header-anchor" href="#_3-1-未配置前" aria-hidden="true">#</a> 3.1 未配置前</h3><p>未配置前网红分词，分为网和红。但是我们也希望他们是一体的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412155122059.png" alt="image-20220412155122059" tabindex="0" loading="lazy"><figcaption>image-20220412155122059</figcaption></figure><h4 id="_3-2-配置后的效果" tabindex="-1"><a class="header-anchor" href="#_3-2-配置后的效果" aria-hidden="true">#</a> 3.2 配置后的效果</h4><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,24),d={href:"https://blog.csdn.net/Appleyk/article/details/79270363",target:"_blank",rel:"noopener noreferrer"};function u(g,h){const n=c("ExternalLinkIcon");return t(),e("div",null,[r,a("p",null,[a("a",d,[i("Solr 7.2.1 配置中文分词器 IK Analyzer"),o(n)])])])}const m=s(l,[["render",u],["__file","solr-j-ext.html.vue"]]);export{m as default};
