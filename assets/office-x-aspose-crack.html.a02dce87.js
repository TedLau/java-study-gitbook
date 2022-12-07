import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as t,d as p,e as s,r as l}from"./app.e9ed1342.js";const i={},u=p(`<h1 id="aspose-word-for-java-\u7834\u89E3\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#aspose-word-for-java-\u7834\u89E3\u4F7F\u7528" aria-hidden="true">#</a> aspose.word for java \u7834\u89E3\u4F7F\u7528</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6700\u8FD1\u7531\u4E8E\u9879\u76EE\u4E2D\u9700\u8981\u7528\u5230word\u8F6C\u6362\u4E3Apdf\u6587\u6863\uFF0C\u7EFC\u5408\u4E86\u5E02\u9762\u4E0A\u6240\u6709\u7684\u65B9\u6848\u540E\uFF0C\u6700\u540E\u9009\u62E9\u4F7F\u7528Aspose.Words\u65B9\u6848\u3002\u8BE5\u4EA7\u54C1\u662F\u56FD\u5916\u7684\uFF0C\u5546\u7528\u7684\u8BDD\u9700\u8981\u5728\u5B98\u7F51\u7533\u8BF7license\u3002\u672C\u6587\u4E3B\u8981\u9610\u8FF0\u5982\u4F55\u7B80\u5355\u7684\u8FDB\u884C\u8BD5\u7528\uFF0C\u4E0D\u63A8\u8350\u5546\u7528\u3002\u5982\u6709\u5F00\u53D1\u8005\u91C7\u7528\u672C\u6587\u65B9\u6CD5\u8FDB\u884C\u5546\u4E1A\u7528\u9014\uFF0C\u4E00\u5207\u8D23\u4EFB\u548C\u635F\u5931\u5747\u4E0E\u672C\u6587\u65E0\u5173\u3002</p><h2 id="_2-aspose-word-21-6-\u7834\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-aspose-word-21-6-\u7834\u89E3" aria-hidden="true">#</a> 2. aspose.word 21.6 \u7834\u89E3</h2><h3 id="_2-1-\u7834\u89E3\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7834\u89E3\u539F\u7406" aria-hidden="true">#</a> 2.1 \u7834\u89E3\u539F\u7406</h3><p>com.aspose.words.zzXyu \u7C7B\u4E0B\u7684 zzZXG \u4E0E\u7834\u89E3\u6709\u5173\uFF0C\u6211\u4EEC\u901A\u8FC7\u53CD\u5C04\u52A8\u6001\u66FF\u6362\u6389\u4ED6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220519234946302.png" alt="image-20220519234946302" loading="lazy"></p><blockquote><p>\u4E5F\u4E0D\u77E5\u9053\u662F\u54EA\u4E2A\u5927\u4F6C\u6700\u5148\u53D1\u73B0\u7684\uFF0C\u592A\u5F3A\u4E86</p></blockquote><h3 id="_2-2-byte-\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-2-byte-\u542B\u4E49" aria-hidden="true">#</a> 2.2 byte[] \u542B\u4E49</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9ED8\u8BA4\u7684\u542B\u4E49\uFF1AEVALUATION \u8BC4\u4EF7/\u8BC4\u4F30
public static final byte[] zzZXG = new byte[]{69, 86, 65, 76, 85, 65, 84, 73, 79, 78};
// \u66F4\u6539\u540E\u7684\u542B\u4E49\uFF1ALICENSED \u8BB8\u53EF
byte[] bytes = {76, 73, 67, 69, 78, 83, 69, 68};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u7834\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7834\u89E3" aria-hidden="true">#</a> 2.3 \u7834\u89E3</h3><p>\u5728\u6267\u884C\u8F6C\u6362\u524D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> aClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.aspose.words.zzXyu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span>Field</span> zzZXG <span class="token operator">=</span> aClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;zzZXG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            zzZXG<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span>Field</span> modifiersField <span class="token operator">=</span> zzZXG<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;modifiers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            modifiersField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            modifiersField<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span>zzZXG<span class="token punctuation">,</span> zzZXG<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token constant">FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            zzZXG<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;apose word \u7834\u89E3\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-aspose-word-21-11-\u7834\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-aspose-word-21-11-\u7834\u89E3" aria-hidden="true">#</a> 3 aspose.word 21.11 \u7834\u89E3</h2>`,14),r={href:"https://juejin.cn/post/7034387646168186894",target:"_blank",rel:"noopener noreferrer"},k=s("Aspose.Words for Java21.11\u53BB\u9664\u6C34\u5370\u548C\u6570\u91CF\u9650\u5236"),d=p(`<h3 id="_3-1-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5206\u6790" aria-hidden="true">#</a> 3.1 \u5206\u6790</h3><p>\u76F4\u63A5\u770B\u53C2\u8003\u6587\u7AE0</p><h3 id="_3-2-\u7834\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7834\u89E3" aria-hidden="true">#</a> 3.2 \u7834\u89E3</h3><h4 id="_3-2-1\u6DFB\u52A0javassist\u4FEE\u6539class\u5B57\u8282\u7801\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2-1\u6DFB\u52A0javassist\u4FEE\u6539class\u5B57\u8282\u7801\u6587\u4EF6" aria-hidden="true">#</a> 3.2.1\u6DFB\u52A0Javassist\u4FEE\u6539class\u5B57\u8282\u7801\u6587\u4EF6</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.javassist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javassist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.28.0-GA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-\u6DFB\u52A0\u4FEE\u6539\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u6DFB\u52A0\u4FEE\u6539\u65B9\u6CD5" aria-hidden="true">#</a> 3.2.2 \u6DFB\u52A0\u4FEE\u6539\u65B9\u6CD5</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4FEE\u6539words jar\u5305\u91CC\u9762\u7684\u6821\u9A8C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">modifyWordsJar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8FD9\u4E00\u6B65\u662F\u5B8C\u6574\u7684jar\u5305\u8DEF\u5F84,\u9009\u62E9\u81EA\u5DF1\u89E3\u538B\u7684jar\u76EE\u5F55</span>
        <span class="token class-name">ClassPool</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertClassPath</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\aspose-words-21.11.0-java\\\\lib\\\\aspose-words-21.11.0-jdk17.jar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u83B7\u53D6\u6307\u5B9A\u7684class\u6587\u4EF6\u5BF9\u8C61</span>
        <span class="token class-name">CtClass</span> zzZJJClass <span class="token operator">=</span> <span class="token class-name">ClassPool</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCtClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.aspose.words.zzXDb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4ECEclass\u5BF9\u8C61\u4E2D\u89E3\u6790\u83B7\u53D6\u6307\u5B9A\u7684\u65B9\u6CD5</span>
        <span class="token class-name">CtMethod</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methodA <span class="token operator">=</span> zzZJJClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token string">&quot;zzY0J&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u904D\u5386\u91CD\u8F7D\u7684\u65B9\u6CD5</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CtMethod</span> ctMethod <span class="token operator">:</span> methodA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">CtClass</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ps <span class="token operator">=</span> ctMethod<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ctMethod<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;zzY0J&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ps[0].getName==&quot;</span> <span class="token operator">+</span> ps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u66FF\u6362\u6307\u5B9A\u65B9\u6CD5\u7684\u65B9\u6CD5\u4F53</span>
                ctMethod<span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span><span class="token string">&quot;{this.zzZ3l = new java.util.Date(Long.MAX_VALUE);this.zzWSL = com.aspose.words.zzYeQ.zzXgr;zzWiV = this;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u8FD9\u4E00\u6B65\u5C31\u662F\u5C06\u7834\u8BD1\u5B8C\u7684\u4EE3\u7801\u653E\u5728\u684C\u9762\u4E0A</span>
        zzZJJClass<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\roc\\\\Desktop\\\\&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u83B7\u53D6\u6307\u5B9A\u7684class\u6587\u4EF6\u5BF9\u8C61</span>
        <span class="token class-name">CtClass</span> zzZJJClassB <span class="token operator">=</span> <span class="token class-name">ClassPool</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCtClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.aspose.words.zzYKk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4ECEclass\u5BF9\u8C61\u4E2D\u89E3\u6790\u83B7\u53D6\u6307\u5B9A\u7684\u65B9\u6CD5</span>
        <span class="token class-name">CtMethod</span> methodB <span class="token operator">=</span> zzZJJClassB<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;zzWy3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u66FF\u6362\u6307\u5B9A\u65B9\u6CD5\u7684\u65B9\u6CD5\u4F53</span>
        methodB<span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span><span class="token string">&quot;{return 256;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8FD9\u4E00\u6B65\u5C31\u662F\u5C06\u7834\u8BD1\u5B8C\u7684\u4EE3\u7801\u653E\u5728\u684C\u9762\u4E0A</span>
        zzZJJClassB<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\roc\\\\Desktop\\\\&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9519\u8BEF==&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u4FEE\u6539\u65B9\u6CD5\u540E\u4F1A\u5728\u684C\u9762\u751F\u6210 com \u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5939</p><h4 id="_3-2-3-\u4FEE\u6539jar\u5305\u91CC\u9762\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-2-3-\u4FEE\u6539jar\u5305\u91CC\u9762\u7684\u6570\u636E" aria-hidden="true">#</a> 3.2.3. \u4FEE\u6539jar\u5305\u91CC\u9762\u7684\u6570\u636E</h4><p>\u4E3A\u4E86\u4E0D\u4FEE\u6539\u539Fjar\u5305\u5EFA\u8BAE\u590D\u5236\u4E00\u4EFD\u91CD\u547D\u540D\u3002</p><ol><li><p>\u6253\u5F00jar\u5305\u5C06\u684C\u9762com\u6587\u4EF6\u5939\u8986\u76D6\u5230jar\u5305com\u6587\u4EF6\u5939</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220629165728881.png" alt="image-20220629165728881" loading="lazy"></p></li><li><p>\u5220\u9664jar\u5305\u91CC\u9762\u7684<code>.RSA</code>\u548C<code>.SF</code>\u6587\u4EF6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220629165758000.png" alt="image-20220629165758000" loading="lazy"></p></li></ol><h3 id="_3-3-\u91CD\u65B0\u5BFC\u5165\u4FEE\u6539\u540E\u7684jar\u5305\u8FDB\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-3-\u91CD\u65B0\u5BFC\u5165\u4FEE\u6539\u540E\u7684jar\u5305\u8FDB\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> 3.3 \u91CD\u65B0\u5BFC\u5165\u4FEE\u6539\u540E\u7684jar\u5305\u8FDB\u884C\u6D4B\u8BD5</h3><ol><li>maven\u79FB\u9664\u65E7\u7684jar\u5305\uFF0C\u5BFC\u5165\u4FEE\u6539\u540E\u7684jar\u5305</li><li>\u8C03\u7528\u6D4B\u8BD5\u65B9\u6CD5\u8FDB\u884C\u6D4B\u8BD5\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u662F\u5426\u53BB\u9664\u6C34\u5370\u548C\u6570\u91CF\u9650\u5236\u6210\u529F</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> sourceFile <span class="token operator">=</span> <span class="token string">&quot;D:\\\\b.doc&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u8F93\u5165\u7684\u6587\u4EF6</span>
<span class="token class-name">String</span> targetFile <span class="token operator">=</span> <span class="token string">&quot;D:\\\\\u8F6C\u6362\u540E.pdf&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u8F93\u51FA\u7684\u6587\u4EF6</span>
<span class="token doc-comment comment">/**
 * Word\u8F6CPDF\u64CD\u4F5C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">sourceFile</span> \u6E90\u6587\u4EF6
 * <span class="token keyword">@param</span> <span class="token parameter">targetFile</span> \u76EE\u6807\u6587\u4EF6
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doc2pdf</span><span class="token punctuation">(</span><span class="token class-name">String</span> sourceFile<span class="token punctuation">,</span> <span class="token class-name">String</span> targetFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> old <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> os <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>targetFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aspose<span class="token punctuation">.</span>words<span class="token punctuation">.</span></span>Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aspose<span class="token punctuation">.</span>words<span class="token punctuation">.</span></span>Document</span><span class="token punctuation">(</span>sourceFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        doc<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>os<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aspose<span class="token punctuation">.</span>words<span class="token punctuation">.</span></span>SaveFormat</span><span class="token punctuation">.</span><span class="token constant">PDF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5171\u8017\u65F6\uFF1A&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>now <span class="token operator">-</span> old<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000.0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u79D2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8F6C\u5316\u7528\u65F6</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u7834\u89E3\u7684jar\u5305" tabindex="-1"><a class="header-anchor" href="#_3-4-\u7834\u89E3\u7684jar\u5305" aria-hidden="true">#</a> 3.4 \u7834\u89E3\u7684jar\u5305</h3><p>\u5982\u679C\u89C9\u5F97\u7E41\u7410\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECE\u6211\u5904\u7406\u597D\u7684\u4E0B\u8F7D</p>`,16),m=s("\u94FE\u63A5:"),v={href:"https://pan.baidu.com/s/1wmd--zPotNz1Mnl1waDP_g",target:"_blank",rel:"noopener noreferrer"},b=s("https://pan.baidu.com/s/1wmd--zPotNz1Mnl1waDP_g"),h=s(" \u5BC6\u7801:upj6"),g=n("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u6587\u7AE0")],-1),f={href:"https://blog.51cto.com/u_15144750/4692930",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"aspose word for java 21.6 \u7834\u89E3\u4F7F\u7528",-1),z={href:"https://blog.csdn.net/xxw19950701/article/details/115724571",target:"_blank",rel:"noopener noreferrer"},w=s("Aspose.Words for java 21.1 \u7834\u89E3\u6B65\u9AA4"),y={href:"https://juejin.cn/post/7034387646168186894",target:"_blank",rel:"noopener noreferrer"},j=s("Aspose.Words for Java21.11\u53BB\u9664\u6C34\u5370\u548C\u6570\u91CF\u9650\u5236");function q(x,C){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[k,t(a)])]),d,n("p",null,[m,n("a",v,[b,t(a)]),h]),g,n("p",null,[n("a",f,[_,t(a)])]),n("p",null,[n("a",z,[w,t(a)])]),n("p",null,[n("a",y,[j,t(a)])])])}const S=e(i,[["render",q],["__file","office-x-aspose-crack.html.vue"]]);export{S as default};
