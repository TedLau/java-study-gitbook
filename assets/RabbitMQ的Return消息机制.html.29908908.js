import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,b as p,e as o,d as c,r as i}from"./app.a2c1bbbb.js";const u={},l=o(`<h1 id="rabbitmq\u7684return\u6D88\u606F\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7684return\u6D88\u606F\u673A\u5236" aria-hidden="true">#</a> RabbitMQ\u7684Return\u6D88\u606F\u673A\u5236</h1><h2 id="_1-return\u673A\u5236\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-return\u673A\u5236\u7B80\u4ECB" aria-hidden="true">#</a> 1. Return\u673A\u5236\u7B80\u4ECB</h2><ul><li><code>Return Listener</code> \u7528\u4E8E\u5904\u7406\u4E00\u4E9B\u4E0D\u53EF\u8DEF\u7531\u7684\u6D88\u606F\uFF01</li><li>\u6211\u4EEC\u7684\u6D88\u606F\u751F\u4EA7\u8005\uFF0C\u901A\u8FC7\u6307\u5B9A\u4E00\u4E2AExchange \u548CRoutingkey\uFF0C\u628A\u6D88\u606F\u9001\u8FBE\u5230\u67D0\u4E00\u4E2A\u961F\u5217\u4E2D\u53BB\uFF0C \u7136\u540E\u6211\u4EEC\u7684\u6D88\u8D39\u8005\u76D1\u542C\u961F\u5217\uFF0C\u8FDB\u884C\u6D88\u8D39\u5904\u7406\u64CD\u4F5C\uFF01</li><li>\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u5F53\u524D\u7684exchange\u4E0D\u5B58\u5728\u6216\u8005\u6307\u5B9A\u7684\u8DEF\u7531key\u8DEF\u7531\u4E0D\u5230\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u6211\u4EEC\u9700\u8981\u76D1\u542C\u8FD9\u79CD\u4E0D\u53EF\u8FBE\u7684\u6D88\u606F\uFF0C\u5C31\u8981\u4F7F\u7528<code>Return Listener</code></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210518193741448.png" alt="image-20210518193741448"></p><h2 id="_2-return\u673A\u5236\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-return\u673A\u5236\u5B9E\u73B0" aria-hidden="true">#</a> 2. Return\u673A\u5236\u5B9E\u73B0</h2><ol><li>\u6DFB\u52A0return\u76D1\u542C\uFF1A<code>addReturnListener</code>\uFF0C\u751F\u4EA7\u7AEF\u53BB\u76D1\u542C\u8FD9\u4E9B\u4E0D\u53EF\u8FBE\u7684\u6D88\u606F\uFF0C\u505A\u4E00\u4E9B\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u8BF4\uFF0C\u8BB0\u5F55\u4E0B\u6D88\u606F\u65E5\u5FD7\uFF0C\u6216\u8005\u53CA\u65F6\u53BB\u8DDF\u8E2A\u8BB0\u5F55\uFF0C\u6709\u53EF\u80FD\u91CD\u65B0\u8BBE\u7F6E\u4E00\u4E0B\u5C31\u597D\u4E86</li><li>\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u8BBE\u7F6E<code>Mandatory</code>\uFF1A\u5982\u679C\u4E3Atrue\uFF0C\u5219\u76D1\u542C\u5668\u4F1A\u63A5\u6536\u5230\u8DEF\u7531\u4E0D\u53EF\u8FBE\u7684\u6D88\u606F\uFF0C\u7136\u540E\u8FDB\u884C\u540E\u7EED\u5904\u7406\uFF0C\u5982\u679C\u4E3Afalse\uFF0C\u90A3\u4E48broker\u7AEF\u81EA\u52A8\u5220\u9664\u8BE5\u6D88\u606F\uFF01</li></ol><h2 id="_3-return\u673A\u5236\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#_3-return\u673A\u5236\u6F14\u793A" aria-hidden="true">#</a> 3. Return\u673A\u5236\u6F14\u793A</h2><h3 id="_3-1-\u751F\u4EA7\u7AEF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u751F\u4EA7\u7AEF" aria-hidden="true">#</a> 3.1 \u751F\u4EA7\u7AEF</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReturnProducer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        <span class="token comment">//1 \u521B\u5EFAConnectionFactory</span>
        ConnectionFactory connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.43.157&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2 \u83B7\u53D6Connection</span>
        Connection connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3 \u901A\u8FC7Connection\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Channel</span>
        Channel channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        String exchange <span class="token operator">=</span> <span class="token string">&quot;test_return_exchange&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//String routingKey = &quot;return.save&quot;;</span>
        String routingKeyError <span class="token operator">=</span> <span class="token string">&quot;abc.save&quot;</span><span class="token punctuation">;</span>
        
        String msg <span class="token operator">=</span> <span class="token string">&quot;Hello RabbitMQ Return Message&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6DFB\u52A0return\u76D1\u542C</span>
        channel<span class="token punctuation">.</span><span class="token function">addReturnListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReturnListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleReturn</span><span class="token punctuation">(</span>int replyCode<span class="token punctuation">,</span> String replyText<span class="token punctuation">,</span> String exchange<span class="token punctuation">,</span>
                    String routingKey<span class="token punctuation">,</span> <span class="token constant">AMQP</span><span class="token punctuation">.</span>BasicProperties properties<span class="token punctuation">,</span> byte<span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>
                <span class="token comment">//replyCode\uFF1A\u54CD\u5E94\u7801    replyText\uFF1A\u54CD\u5E94\u4FE1\u606F</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------handle  return----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;replyCode: &quot;</span> <span class="token operator">+</span> replyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;replyText: &quot;</span> <span class="token operator">+</span> replyText<span class="token punctuation">)</span><span class="token punctuation">;</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;exchange: &quot;</span> <span class="token operator">+</span> exchange<span class="token punctuation">)</span><span class="token punctuation">;</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;routingKey: &quot;</span> <span class="token operator">+</span> routingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//System.err.println(&quot;properties: &quot; + properties);</span>
                System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;body: &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5 \u53D1\u9001\u4E00\u6761\u6D88\u606F\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570mandatory\uFF1A\u5FC5\u987B\u8BBE\u7F6E\u4E3Atrue</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span>exchange<span class="token punctuation">,</span> routingKeyError<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6D88\u8D39\u7AEF" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6D88\u8D39\u7AEF" aria-hidden="true">#</a> 3.2 \u6D88\u8D39\u7AEF</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReturnConsumer</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        <span class="token comment">//1 \u521B\u5EFAConnectionFactory</span>
        ConnectionFactory connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.1.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2 \u83B7\u53D6Connection</span>
        Connection connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3 \u901A\u8FC7Connection\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Channel</span>
        Channel channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        String exchangeName <span class="token operator">=</span> <span class="token string">&quot;test_return_exchange&quot;</span><span class="token punctuation">;</span>
        String routingKey <span class="token operator">=</span> <span class="token string">&quot;return.#&quot;</span><span class="token punctuation">;</span>
        String queueName <span class="token operator">=</span> <span class="token string">&quot;test_return_queue&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//4 \u58F0\u660E\u4EA4\u6362\u673A\u548C\u961F\u5217\uFF0C\u7136\u540E\u8FDB\u884C\u7ED1\u5B9A\u8BBE\u7F6E\u8DEF\u7531Key</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//5 \u521B\u5EFA\u6D88\u8D39\u8005 </span>
        QueueingConsumer queueingConsumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueingConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> queueingConsumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            Delivery delivery <span class="token operator">=</span> queueingConsumer<span class="token punctuation">.</span><span class="token function">nextDelivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            String msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>delivery<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005: &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u8FD0\u884C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD0\u884C\u8BF4\u660E" aria-hidden="true">#</a> 4. \u8FD0\u884C\u8BF4\u660E</h2><p>\u5148\u542F\u52A8\u6D88\u8D39\u7AEF\uFF0C\u8BBF\u95EE\u7BA1\u63A7\u53F0\uFF1Ahttp://192.168.1.1:15672\uFF0C\u68C0\u67E5Exchange\u548CQueue\u662F\u5426\u8BBE\u7F6EOK\uFF0C\u7136\u540E\u542F\u52A8\u751F\u4EA7\u7AEF\u3002 \u7531\u4E8E\u751F\u4EA7\u7AEF\u8BBE\u7F6E\u7684\u662F\u4E00\u4E2A\u9519\u8BEF\u7684\u8DEF\u7531key\uFF0C\u6240\u4EE5\u6D88\u8D39\u7AEF\u6CA1\u6709\u4EFB\u4F55\u6253\u5370\uFF0C\u800C\u751F\u4EA7\u7AEF\u6253\u5370\u4E86\u5982\u4E0B\u5185\u5BB9</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>handle  <span class="token keyword">return</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
replyCode<span class="token operator">:</span> <span class="token number">312</span>
replyText<span class="token operator">:</span> NO_ROUTE
exchange<span class="token operator">:</span> test_return_exchange
routingKey<span class="token operator">:</span> abc<span class="token punctuation">.</span>save
body<span class="token operator">:</span> Hello RabbitMQ Return Message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u5C06 <code>Mandatory</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5BF9\u4E8E\u4E0D\u53EF\u8FBE\u7684\u6D88\u606F\u4F1A\u88ABBroker\u76F4\u63A5\u5220\u9664\uFF0C\u90A3\u4E48\u751F\u4EA7\u7AEF\u5C31\u4E0D\u4F1A\u8FDB\u884C\u4EFB\u4F55\u6253\u5370\u4E86\u3002\u5982\u679C\u6211\u4EEC\u7684\u8DEF\u7531key\u8BBE\u7F6E\u4E3A\u6B63\u786E\u7684\uFF0C\u90A3\u4E48\u6D88\u8D39\u7AEF\u80FD\u591F\u6B63\u786E\u6D88\u8D39\uFF0C\u751F\u4EA7\u7AEF\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u4EFB\u4F55\u6253\u5370\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,16),r={href:"https://www.jianshu.com/p/f23c784e163d",target:"_blank",rel:"noopener noreferrer"},k=c("RabbitMQ\u7684Return\u6D88\u606F\u673A\u5236");function d(v,m){const s=i("ExternalLinkIcon");return t(),e("div",null,[l,n("p",null,[n("a",r,[k,p(s)])])])}var g=a(u,[["render",d],["__file","RabbitMQ\u7684Return\u6D88\u606F\u673A\u5236.html.vue"]]);export{g as default};
