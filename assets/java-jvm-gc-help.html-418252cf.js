import{_ as n,W as s,X as a,a0 as t}from"./framework-0cf5f349.js";const p={},e=t(`<h1 id="gc中对象自救" tabindex="-1"><a class="header-anchor" href="#gc中对象自救" aria-hidden="true">#</a> GC中对象自救</h1><p>即使在可达性分析算法中, 被判定为不可达的对象, 也并非是&#39;非死不可&#39; 的, 这时候他们暂处于&#39;缓刑&#39; 阶段, 要真正宣告一个对象死亡, 至少要经历两次标记过程:</p><ol><li><p>如果<strong>对象失去引用(在进行可达性分析后发现没有与 GC Roots 相连接的引用链), 并且该对象的 finalize()方法未调用过</strong>, 该对象将会被第一次标记</p></li><li><p>如果这个对象已经被标记了, 那么这个对象会被放入 ReferenceQueue 队列中, 由 FinalizeThread 线程去执行, 最终会调用该对象的 finalize() 方法. 这里所谓的&#39;执行&#39; 并不会保证 finalize() 方法调用结束,为如果 finalize() 方法执行缓慢, 极端情况下可能会导致 ReferenceQueue 队列中其他的对象永远处于等待, 甚至导致 GC 系统崩溃.</p></li></ol><p><strong>finalize() 方法是对象逃脱死亡命运的最后一次机会</strong>, 调用 finalize() 方法后,GC 系统将对 ReferenceQueue 队列中的对象进行第二次标记, 如果<strong>对象要在 finalize() 方法中成功自救, 只要重新与引用链建立引用即可, 如:把当前对象( this )赋值给某个类变量或者对象的成员变量</strong>, 那么在第二次标记时它将被移除出 &#39;即将回收&#39; 的集合, 这样该对象就完成了一次自救; <strong>如果该对象被第二次标记, 那就真的要被回收了</strong>.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalizeEscapeGC</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于自救的类变量</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">FinalizeEscapeGC</span> <span class="token constant">SAVA_HOOK</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前对象: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&quot; 在 &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 线程执行 finalize() 方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 把当前对象( this )赋值给某个类变量, 重新与引用链建立引用</span>
		<span class="token class-name">FinalizeEscapeGC</span><span class="token punctuation">.</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建一个对象 FinalizeEscapeGC@3654919e, SAVA_HOOK 引用该对象</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinalizeEscapeGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一次自救&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 失去引用</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运行垃圾回收器</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 让 GC 相关线程先走</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">+</span> <span class="token string">&quot; 对象自救成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象已被回收&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n第二次自救&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token constant">SAVA_HOOK</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 失去引用</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 运行垃圾回收器</span>
		<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 让 GC 相关线程先走</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">SAVA_HOOK</span> <span class="token operator">+</span> <span class="token string">&quot; 对象自救成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象已被回收&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>运行结果:

第一次自救
当前对象: FinalizeEscapeGC@3654919e 在 Thread[Finalizer,8,system] 线程执行 finalize() 方法
FinalizeEscapeGC@3654919e 对象自救成功

第二次自救
对象已被回收
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么第二次自救失败" tabindex="-1"><a class="header-anchor" href="#为什么第二次自救失败" aria-hidden="true">#</a> 为什么第二次自救失败？</h3><p><strong>另外一个值得注意的地方是, 代码中两次试图实现自救,</strong></p><p><strong>运行结果却是: 一次自救成功, 一次失败</strong></p><p><strong>这是因为任何对象的 finalize() 方法都只会被调用一次, 如果对象面临下一次 GC, 它的 finalize() 方法不会被再次执行, 因此第二次自救失败了.</strong></p><p>###Finalizer 线程</p><p>Finalizer 线程, 其优先级为 8, 用于在 GC 前, 执行对象的 finalize() 方法</p><p>关于 Finalizer 线程:</p><p>JVM 在 GC 时会将失去引用的对象包装成 java.lang.ref.Finalizer 对象（java.lang.ref.Reference 抽象类的实现），并放入ReferenceQueue，由 Finalizer$FinalizeThread 线程来处理</p>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","java-jvm-gc-help.html.vue"]]);export{k as default};
