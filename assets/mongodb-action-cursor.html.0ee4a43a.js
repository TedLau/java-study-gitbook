import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as a,e as c,d as t,r as u}from"./app.236288ec.js";const l={},i=c(`<h1 id="mongotemplate\u4F7F\u7528cursor\u5904\u7406\u5927\u6570\u91CF\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#mongotemplate\u4F7F\u7528cursor\u5904\u7406\u5927\u6570\u91CF\u7684\u6570\u636E" aria-hidden="true">#</a> MongoTemplate\u4F7F\u7528Cursor\u5904\u7406\u5927\u6570\u91CF\u7684\u6570\u636E</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5BF9\u4E8E\u6570\u636E\u91CF\u5DE8\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528mongoTemplate.find()\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5217\u8868\uFF0C\u5BF9\u670D\u52A1\u5668\u538B\u529B\u975E\u5E38\u5927</p><blockquote><p>\u5728\u6211\u7684\u9879\u76EE\u4E2D\u6570\u636E\u91CF140w\uFF0C\u6211\u591A\u7EBF\u7A0B\u5206\u9875\u6279\u91CF\u67E5\u8BE2\u3002\u6267\u884C\u6CA1\u591A\u957F\u65F6\u95F4\u5C31\u4F1A\u5BFC\u81F4mongo\u670D\u52A1\u5668\u5954\u6E83\u3002\u4F7F\u7528cursor\u5219\u6CA1\u6709\u8FD9\u4E2A\u95EE\u9898</p></blockquote><p>mongoTemplate\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u65B9\u6CD5\uFF0C\u4F7F\u7528\u6E38\u6807\u9010\u4E2A\u83B7\u53D6\u6570\u636E\uFF0C\u540C\u65F6\u53EF\u4EE5\u6307\u5B9A\u53EA\u83B7\u53D6\u54EA\u4E9B\u57DF\uFF0C\u800C\u4E0D\u662F\u5168\u90E8\u83B7\u53D6\u56DE\u6765\u3002</p><h2 id="_2-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u6848\u4F8B" aria-hidden="true">#</a> 2. \u6848\u4F8B</h2><h3 id="_2-1-\u6848\u4F8B1" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6848\u4F8B1" aria-hidden="true">#</a> 2.1 \u6848\u4F8B1</h3><p>\u5C06Query \u8F6C\u4E3ADocument\uFF0C\u800CDocument \u53C8\u5B9E\u73B0\u4E86Bson .\u6240\u4EE5\u5927\u90E8\u5206\u60C5\u51B5\u6211\u4EECQuery\u8FD8\u662F\u53EF\u4EE5\u7528\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u7EC4\u88C5\u67E5\u8BE2\u6761\u4EF6</span>
<span class="token class-name">Query</span> query<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Sort<span class="token punctuation">.</span>Order</span><span class="token punctuation">(</span><span class="token class-name">Sort<span class="token punctuation">.</span>Direction</span><span class="token punctuation">.</span><span class="token constant">ASC</span><span class="token punctuation">,</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span>
     <span class="token comment">//\u6307\u5B9A\u67E5\u8BE2\u96C6\u5408</span>
     mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;xxx[\u8868\u540D]&quot;</span><span class="token punctuation">)</span>
     <span class="token comment">//\u7EC4\u88C5\u67E5\u8BE2\u6761\u4EF6</span>
     <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">getQueryObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token comment">//\u7EC4\u88C5\u6392\u5E8F\u65B9\u5F0F\uFF08\u975E\u5FC5\u987B\uFF0C\u53EF\u4E0D\u8BBE\u7F6E\uFF09</span>
     <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">getSortObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token comment">//\u8BBE\u7F6E\u6E38\u6807\u67E5\u8BE2\u4E0D\u8D85\u65F6</span>
     <span class="token punctuation">.</span><span class="token function">noCursorTimeout</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
     <span class="token comment">//\u8BBE\u7F6E\u6279\u91CF\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u7684\u6570\u636E\u91CF</span>
     <span class="token punctuation">.</span><span class="token function">batchSize</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Document</span> doc<span class="token punctuation">;</span>
    <span class="token comment">//Map map;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5199\u6CD51\uFF08\u5EFA\u8BAE\uFF09</span>
        doc <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;xxx[\u5C5E\u6027\u540D]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5199\u6CD52\uFF08\u4E0D\u5EFA\u8BAE\uFF09</span>
        <span class="token comment">//map=cursor.next();</span>
        <span class="token comment">//System.out.println(map.get(&quot;xxx[\u5C5E\u6027\u540D]&quot;));</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6848\u4F8B2" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6848\u4F8B2" aria-hidden="true">#</a> 2.2 \u6848\u4F8B2</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token class-name">DBObject</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicDBObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//setup the query criteria \u8BBE\u7F6E\u67E5\u8BE2\u6761\u4EF6</span>
	query<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">)</span><span class="token punctuation">;</span>
	query<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ctime&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BasicDBObject</span><span class="token punctuation">(</span><span class="token string">&quot;$gte&quot;</span><span class="token punctuation">,</span> bTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;$lt&quot;</span><span class="token punctuation">,</span> eTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;query: {}&quot;</span><span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token class-name">DBObject</span> fields <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicDBObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//only get the needed fields. \u8BBE\u7F6E\u9700\u8981\u83B7\u53D6\u54EA\u4E9B\u57DF</span>
	fields<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	fields<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;uId&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	fields<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ctime&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token class-name">DBCursor</span> dbCursor <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> fields<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token keyword">while</span> <span class="token punctuation">(</span>dbCursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">DBObject</span> object <span class="token operator">=</span> dbCursor<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;object: {}&quot;</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//do something.</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u6848\u4F8B3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6848\u4F8B3" aria-hidden="true">#</a> 2.3 \u6848\u4F8B3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MongoClient</span> mongoClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span> <span class="token string">&quot;172.26.xxx.xxx&quot;</span> <span class="token punctuation">,</span> <span class="token number">27017</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MongoDatabase</span> mongoDatabase <span class="token operator">=</span>mongoClient<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MongoCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> collection <span class="token operator">=</span> mongoDatabase<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;test_logs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u52A0\u5165\u67E5\u8BE2\u6761\u4EF6</span>
<span class="token class-name">BasicDBObject</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicDBObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u65F6\u95F4\u533A\u95F4\u67E5\u8BE2 \u8BB0\u4F4F\u5982\u679C\u60F3\u6839\u636E\u8FD9\u79CD\u5F62\u5F0F\u8FDB\u884C\u65F6\u95F4\u7684\u533A\u95F4\u67E5\u8BE2 \uFF0C\u5B58\u50A8\u7684\u65F6\u5019 \u8BB0\u5F97\u628A\u5B57\u6BB5\u5B58\u6210\u5B57\u7B26\u4E32\uFF0C\u5C31\u6309yyyy-MM-dd HH:mm:ss \u683C\u5F0F\u6765</span>
query<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;times&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BasicDBObject</span><span class="token punctuation">(</span><span class="token string">&quot;$gte&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2018-06-02 12:20:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;$lte&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2018-07-04 10:02:46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u6A21\u7CCA\u67E5\u8BE2</span>
<span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;^.*\u738B.*$&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token constant">CASE_INSENSITIVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u7CBE\u786E\u67E5\u8BE2</span>
query<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//skip \u662F\u5206\u9875\u67E5\u8BE2\uFF0C\u4ECE\u7B2C0\u6761\u5F00\u59CB\u67E510\u6761\u6570\u636E\u3002 Sorts\u662F\u6392\u5E8F\u7528\u7684\u3002\u6709descending \u548Cascending</span>
<span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Sorts</span><span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token class-name">Sorts</span><span class="token punctuation">.</span><span class="token function">descending</span><span class="token punctuation">(</span><span class="token string">&quot;times&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>
<span class="token keyword">int</span> unm<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
     <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">UserBehaviorLogs</span> userBehaviorLogs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserBehaviorLogs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">//\u67E5\u8BE2\u51FA\u7684\u7ED3\u679C\u8F6C\u6362\u6210jsonObject,\u7136\u540E\u8FDB\u884C\u5C01\u88C5\u6216\u8005\u76F4\u63A5\u8FD4\u56DE\u7ED9\u524D\u7AEF\u5904\u7406\u3002\u6211\u8FD9\u662F\u5C01\u88C5\u6210\u5BF9\u8C61\u4E86</span>
          <span class="token class-name">JSONObject</span> jsonObject <span class="token operator">=</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span> cursor<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//id</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7528\u6237id</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;userName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7528\u6237\u540D\u79F0</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setParams</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;params&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u53C2\u6570</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setException</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;Exception&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5F02\u5E38\u4FE1\u606F</span>
          userBehaviorLogs<span class="token punctuation">.</span><span class="token function">setTimes</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;times&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u521B\u5EFA\u65F6\u95F4</span>
          unm<span class="token operator">++</span><span class="token punctuation">;</span>               <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>unm<span class="token operator">+</span><span class="token string">&quot;=&quot;</span><span class="token operator">+</span>userBehaviorLogs<span class="token punctuation">.</span><span class="token function">getTimes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;===&quot;</span><span class="token operator">+</span>userBehaviorLogs<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    cursor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-\u8BF4\u660E" aria-hidden="true">#</a> 3. \u8BF4\u660E</h2><h3 id="_3-1-\u8BBE\u7F6E\u6E38\u6807\u67E5\u8BE2\u4E0D\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BBE\u7F6E\u6E38\u6807\u67E5\u8BE2\u4E0D\u8D85\u65F6" aria-hidden="true">#</a> 3.1 <strong>\u8BBE\u7F6E\u6E38\u6807\u67E5\u8BE2\u4E0D\u8D85\u65F6</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">noCursorTimeout</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5FC5\u987B\u8BBE\u7F6E</strong>\u6B64\u5C5E\u6027\uFF0C\u9632\u6B62\u6570\u636E\u5E93\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5BFC\u81F4\u7684\u6E38\u6807\u8FDE\u63A5<code>\u81EA\u52A8\u5173\u95ED</code>\u3002</p><h3 id="_3-2-\u8BBE\u7F6E\u6279\u91CF\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u7684\u6570\u636E\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8BBE\u7F6E\u6279\u91CF\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u7684\u6570\u636E\u91CF" aria-hidden="true">#</a> 3.2 <strong>\u8BBE\u7F6E\u6279\u91CF\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6\u7684\u6570\u636E\u91CF</strong></h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">batchSize</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5EFA\u8BAE\u6839\u636E<code>\u5B9E\u9645\u4E1A\u52A1\u60C5\u51B5</code>\u800C\u8BBE\u7F6E\uFF0C\u8BBE\u7F6E\u6B64\u6279\u6B21\u5C5E\u6027\uFF0C\u6E38\u6807\u7684\u8FED\u4EE3\u5668\u8FDB\u884C\u67E5\u8BE2\u65F6\uFF0C\u4F1A<code>\u6839\u636E\u9700\u8981</code>\uFF0C\u53BB\u6570\u636E\u5E93\u83B7\u53D6<code>\u6307\u5B9A\u6279\u91CF</code>\u7684\u6570\u636E\uFF0C<code>\u7F13\u5B58</code>\u8D77\u6765\u4F9B\u8FED\u4EE3\u5668\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21next()<code>\u83B7\u53D6\u6570\u636E\u7684\u65F6\u5019</code>\uFF0C\u5747\u53BB\u67E5\u8BE2\u6570\u636E\u5E93\uFF0C<code>\u51CF\u5C11\u6570\u636E\u5E93\u67E5\u8BE2\u6B21\u6570</code>\uFF0C\u63D0\u9AD8\u4E86\u6548\u7387\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,21),k={href:"https://www.jianshu.com/p/f6d7a3b571c2",target:"_blank",rel:"noopener noreferrer"},r=t("mongoTemplate\u4F7F\u7528\u6E38\u6807\u67E5\u8BE2\u6D77\u91CF\u6570\u636E"),d={href:"https://blog.csdn.net/ClementAD/article/details/55210973",target:"_blank",rel:"noopener noreferrer"},m=t("MongoTemplate\u4F7F\u7528Cursor\u5904\u7406\u5927\u6570\u91CF\u7684\u6570\u636E"),v={href:"https://blog.csdn.net/jisuanjiguoba/article/details/106274571",target:"_blank",rel:"noopener noreferrer"},b=t("Java\u4E2Dmongodb\u4F7F\u7528MongoCollection\u548CBasicDBObject\u6761\u4EF6\u67E5\u8BE2");function g(h,f){const s=u("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[r,a(s)])]),n("p",null,[n("a",d,[m,a(s)])]),n("p",null,[n("a",v,[b,a(s)])])])}const j=p(l,[["render",g],["__file","mongodb-action-cursor.html.vue"]]);export{j as default};