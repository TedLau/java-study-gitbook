import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as e,e as c,r as o}from"./app.a2c1bbbb.js";const l={},u=c(`<h1 id="java-n-a-io-\u6846\u67B6-netty" tabindex="-1"><a class="header-anchor" href="#java-n-a-io-\u6846\u67B6-netty" aria-hidden="true">#</a> Java N(A)IO - \u6846\u67B6: Netty</h1><blockquote><p>Netty\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u3001\u5F02\u6B65\u4E8B\u4EF6\u9A71\u52A8\u7684NIO\u6846\u67B6\uFF0C\u63D0\u4F9B\u4E86\u5BF9TCP\u3001UDP\u548C\u6587\u4EF6\u4F20\u8F93\u7684\u652F\u6301\u3002\u4F5C\u4E3A\u5F53\u524D\u6700\u6D41\u884C\u7684NIO\u6846\u67B6\uFF0CNetty\u5728\u4E92\u8054\u7F51\u9886\u57DF\u3001\u5927\u6570\u636E\u5206\u5E03\u5F0F\u8BA1\u7B97\u9886\u57DF\u3001\u6E38\u620F\u884C\u4E1A\u3001\u901A\u4FE1\u884C\u4E1A\u7B49\u83B7\u5F97\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u4E00\u4E9B\u4E1A\u754C\u8457\u540D\u7684\u5F00\u6E90\u7EC4\u4EF6\u4E5F\u57FA\u4E8ENetty\u6784\u5EFA\uFF0C\u6BD4\u5982RPC\u6846\u67B6\u3001zookeeper\u7B49\u3002</p></blockquote><h2 id="_1-nio\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#_1-nio\u6846\u67B6" aria-hidden="true">#</a> 1. NIO\u6846\u67B6</h2><p>\u76EE\u524D\u6D41\u884C\u7684NIO\u6846\u67B6\u975E\u5E38\u7684\u591A\u3002\u5728\u8BBA\u575B\u4E0A\u3001\u4E92\u8054\u7F51\u4E0A\u5927\u5BB6\u8BA8\u8BBA\u548C\u4F7F\u7528\u6700\u591A\u7684\u6709\u4EE5\u4E0B\u51E0\u79CD:</p><ul><li>\u539F\u751FJAVA NIO\u6846\u67B6:</li></ul><p>JAVA NIO\u901A\u4FE1\u6846\u67B6\u57FA\u4E8E\u591A\u8DEF\u590D\u7528IO\u539F\u7406\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u8BB2\u89E3\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u3002</p><ul><li>APACHE MINA 2:</li></ul><p>\u662F\u4E00\u4E2A\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\uFF0C\u7528\u6765\u5E2E\u52A9\u7528\u6237\u7B80\u5355\u5730\u5F00\u53D1\u9AD8\u6027\u80FD\u548C\u9AD8\u53EF\u6269\u5C55\u6027\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u901A\u8FC7Java NIO\u5728\u4E0D\u540C\u7684\u4F20\u8F93\u4F8B\u5982TCP/IP\u548CUDP/IP\u4E0A\u62BD\u8C61\u7684\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65API\u3002</p><ul><li>NETTY 4/5:</li></ul><p>Netty\u662F\u7531JBOSS\u63D0\u4F9B\u7684\u4E00\u4E2Ajava\u5F00\u6E90\u6846\u67B6\u3002Netty\u63D0\u4F9B\u5F02\u6B65\u7684\u3001\u4E8B\u4EF6\u9A71\u52A8\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u548C\u5DE5\u5177\uFF0C\u7528\u4EE5\u5FEB\u901F\u5F00\u53D1\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u9760\u6027\u7684\u7F51\u7EDC\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u3002\u6211\u4EEC\u5C06\u8BB2\u89E3NETTY 4 \u7684\u5DE5\u4F5C\u539F\u7406\u3002\u53E6\u5916\u8BF4\u4E00\u53E5: MINA\u548CNETTY\u7684\u4E3B\u8981\u4F5C\u8005\u662F\u540C\u4E00\u4EBATrustin Lee\u3002</p><ul><li>Grizzly:</li></ul><p>Grizzly\u662F\u4E00\u79CD\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\uFF0C\u4E13\u95E8\u89E3\u51B3\u7F16\u5199\u6210\u5343\u4E0A\u4E07\u7528\u6237\u8BBF\u95EE\u670D\u52A1\u5668\u65F6\u5019\u4EA7\u751F\u7684\u5404\u79CD\u95EE\u9898\u3002\u4F7F\u7528JAVA NIO\u4F5C\u4E3A\u57FA\u7840\uFF0C\u5E76\u9690\u85CF\u5176\u7F16\u7A0B\u7684\u590D\u6742\u6027\u3002</p><h2 id="_2-\u6BD4\u8F83\u597D\u7684\u57FA\u4E8Enio\u7684\u5F00\u6E90\u6846\u67B6-netty" tabindex="-1"><a class="header-anchor" href="#_2-\u6BD4\u8F83\u597D\u7684\u57FA\u4E8Enio\u7684\u5F00\u6E90\u6846\u67B6-netty" aria-hidden="true">#</a> 2. \u6BD4\u8F83\u597D\u7684\u57FA\u4E8ENIO\u7684\u5F00\u6E90\u6846\u67B6(Netty)</h2><h3 id="_2-1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4F18\u70B9" aria-hidden="true">#</a> 2.1 \u4F18\u70B9</h3><ul><li>api\u7B80\u5355\uFF0C\u5F00\u53D1\u95E8\u69DB\u4F4E</li><li>\u529F\u80FD\u5F3A\u5927\uFF0C\u5185\u7F6E\u4E86\u591A\u79CD\u7F16\u7801\u3001\u89E3\u7801\u529F\u80FD</li><li>\u4E0E\u5176\u5B83\u4E1A\u754C\u4E3B\u6D41\u7684NIO\u6846\u67B6\u5BF9\u6BD4\uFF0Cnetty\u7684\u7EFC\u5408\u6027\u80FD\u6700\u4F18</li><li>\u793E\u533A\u6D3B\u8DC3\uFF0C\u4F7F\u7528\u5E7F\u6CDB\uFF0C\u7ECF\u5386\u8FC7\u5F88\u591A\u5546\u4E1A\u5E94\u7528\u9879\u76EE\u7684\u8003\u9A8C</li><li>\u5B9A\u5236\u80FD\u529B\u5F3A\uFF0C\u53EF\u4EE5\u5BF9\u6846\u67B6\u8FDB\u884C\u7075\u6D3B\u7684\u6269\u5C55</li></ul><h3 id="_2-2-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F8B\u5B50" aria-hidden="true">#</a> 2.2 \u4F8B\u5B50</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jboss.netty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>netty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.5.Final<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u670D\u52A1\u7AEF\u3002\u63A5\u6536\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5E76\u5C06\u5185\u5BB9\u6253\u5370\u51FA\u6765\uFF0C\u540C\u65F6\u53D1\u9001\u4E00\u4E2A\u6D88\u606F\u6536\u5230\u56DE\u6267\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyServer</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> HEADER_LENGTH <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">ServerBootstrap</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerBootstrap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NioServerSocketChannelFactory</span><span class="token punctuation">(</span><span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                                                  <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6784\u9020\u5BF9\u5E94\u7684pipeline</span>
        b<span class="token punctuation">.</span><span class="token function">setPipelineFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelPipelineFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">public</span> <span class="token class-name">ChannelPipeline</span> <span class="token function">getPipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                <span class="token class-name">ChannelPipeline</span> pipelines <span class="token operator">=</span> <span class="token class-name">Channels</span><span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                pipelines<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">MessageHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> pipelines<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76D1\u542C\u7AEF\u53E3\u53F7</span>
        b<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5904\u7406\u6D88\u606F</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MessageHandler</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleChannelHandler</span> <span class="token punctuation">{</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">messageReceived</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">MessageEvent</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u63A5\u6536\u5BA2\u6237\u7AEF\u8BF7\u6C42</span>
            <span class="token class-name">ChannelBuffer</span> buffer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ChannelBuffer</span><span class="token punctuation">)</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">readBytes</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;\u670D\u52A1\u7AEF&gt;\u6536\u5230\u5185\u5BB9=&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u7ED9\u5BA2\u6237\u7AEF\u53D1\u9001\u56DE\u6267</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body <span class="token operator">=</span> <span class="token string">&quot;\u670D\u52A1\u7AEF\u5DF2\u6536\u5230&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> header <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span>HEADER_LENGTH<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ByteOrder</span><span class="token punctuation">.</span>BIG_ENDIAN<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putInt</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Channels</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ChannelBuffers</span><span class="token punctuation">.</span><span class="token function">wrappedBuffer</span><span class="token punctuation">(</span>header<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;\u670D\u52A1\u7AEF&gt;\u53D1\u9001\u56DE\u6267,time=&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">NettyServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">1088</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BA2\u6237\u7AEF\u3002\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u7136\u540E\u6253\u5370\u670D\u52A1\u7AEF\u54CD\u5E94\u7684\u5185\u5BB9\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyClient</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ByteBuffer</span> readHeader  <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ByteOrder</span><span class="token punctuation">.</span>BIG_ENDIAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ByteBuffer</span> writeHeader <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ByteOrder</span><span class="token punctuation">.</span>BIG_ENDIAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">SocketChannel</span>    channel<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u521B\u5EFA\u5BA2\u6237\u7AEF\u901A\u9053</span>
        channel <span class="token operator">=</span> <span class="token class-name">SocketChannel</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">socket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSoTimeout</span><span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span><span class="token class-name">AddressUtils</span><span class="token punctuation">.</span><span class="token function">getHostIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1088</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5BA2\u6237\u7AEF\u53D1\u8BF7\u6C42</span>
        <span class="token function">writeWithHeader</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u63A5\u6536\u670D\u52A1\u7AEF\u54CD\u5E94\u7684\u4FE1\u606F</span>
        readHeader<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">read</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> readHeader<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> bodyLen <span class="token operator">=</span> readHeader<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ByteBuffer</span> bodyBuf <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span>bodyLen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ByteOrder</span><span class="token punctuation">.</span>BIG_ENDIAN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">read</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> bodyBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;\u5BA2\u6237\u7AEF&gt;\u6536\u5230\u54CD\u5E94\u5185\u5BB9: &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bodyBuf<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,\u957F\u5EA6:&quot;</span> <span class="token operator">+</span> bodyLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">writeWithHeader</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> channel<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        writeHeader<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writeHeader<span class="token punctuation">.</span><span class="token function">putInt</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        writeHeader<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// channel.write(writeHeader);</span>
        channel<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> channel<span class="token punctuation">,</span> <span class="token class-name">ByteBuffer</span> buffer<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">hasRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> r <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IOException</span><span class="token punctuation">(</span><span class="token string">&quot;end of stream when reading header&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> body <span class="token operator">=</span> <span class="token string">&quot;\u5BA2\u6237\u53D1\u7684\u6D4B\u8BD5\u8BF7\u6C42\uFF01&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">NettyClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,22),i={href:"https://pdai.tech/md/java/io/java-io-nio-netty.html",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Java N(A)IO - \u6846\u67B6: Netty",-1);function r(d,v){const s=o("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",i,[k,e(s)])])])}var y=a(l,[["render",r],["__file","JavaIO-\u6846\u67B6Netty.html.vue"]]);export{y as default};
