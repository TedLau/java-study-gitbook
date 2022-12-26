import{_ as l,W as i,X as n,Y as t,Z as e,$ as d,a0 as r,D as h}from"./framework-0cf5f349.js";const o={},s=r('<h1 id="java如何选择合适的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#java如何选择合适的垃圾回收器" aria-hidden="true">#</a> Java如何选择合适的垃圾回收器</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>垃圾回收器是内存回收的具体实现，JDK自带的垃圾回收器已经完成集成垃圾回收和清理算法，业务程序可以通过设置参数选择垃圾回收器，虚拟机用到的7种经典的垃圾回收器如下表。根据适用内存区域不同，JDK自带的垃圾回收器可分为新生代回收器和老年代回收器，两者可以配合使用。新生代回收器用于堆空间中新生代区域的垃圾回收，老年代回收器用于堆空间中老年代区域的垃圾回收。G1是一种新型的堆内垃圾收集器，既可以用于新生代也可以用于老年代垃圾回收。</p><h2 id="_2-7种垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_2-7种垃圾回收器" aria-hidden="true">#</a> 2. 7种垃圾回收器</h2><table><thead><tr><th>名称</th><th>说明</th><th>收集模式</th><th>分代适用类型</th></tr></thead><tbody><tr><td>Serial</td><td>单线程串行收集器</td><td>串行收集器</td><td>新生代</td></tr><tr><td>ParNew</td><td>多线程并行Serial收集器</td><td>并行收集器</td><td>新生代</td></tr><tr><td>Parallel Scavenge</td><td>并行吞吐量优先收集器</td><td>并行收集器</td><td>新生代</td></tr><tr><td>Serial Old</td><td>Serial单线程收集器老年代版本</td><td>串行收集器</td><td>老年代</td></tr><tr><td>CMS(Concurrent Mark Sweep)</td><td>并行最短停顿时间收集器</td><td>并发收集器</td><td>老年代</td></tr><tr><td>Parallel Old</td><td>Parallel Scavenge并行收集器老年代版本</td><td>并行收集器</td><td>老年代</td></tr><tr><td>G1</td><td>面向局部收集和基于Region内存布局的新型低延时收集器</td><td>并发/并行收集器</td><td>新生代/老年代</td></tr></tbody></table><p>下图展示了新生代GC和老年代GC配合使用方法，有连线的表示可以配合使用。注意ParNew和Parallel Old是不能同时使用的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220429231123110.png" alt="image-20220429231123110" tabindex="0" loading="lazy"><figcaption>image-20220429231123110</figcaption></figure><h2 id="_3-如何选择合适的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_3-如何选择合适的垃圾回收器" aria-hidden="true">#</a> 3. 如何选择合适的垃圾回收器</h2><p>垃圾回收器的选择方法没有通用的准则，要结合项目应用的实际并对GC运行数据的检测来决定。</p>',9),c={href:"http://java.sun.com/j2se/1.5.0/docs/guide/vm/server-class.html",target:"_blank",rel:"noopener noreferrer"},p=r('<h3 id="_3-1-垃圾回收器选择建议" tabindex="-1"><a class="header-anchor" href="#_3-1-垃圾回收器选择建议" aria-hidden="true">#</a> 3.1 垃圾回收器选择建议：</h3><ul><li>业务应用对吞吐量要求较高，对响应时间没有特别要求的，推荐使用并行收集器。如：科学计算和后台处理程序等等。</li><li>对响应时间要求较高的中大型应用程序，推荐使用并发收集器。如：web服务器等。</li><li>对应JDK版本1.8以上，多CPU处理器且内存资源不是瓶颈，建议优先考虑使用G1回收器。</li><li>单线程应用使用串行收集器。</li></ul><h2 id="_4-修改方式" tabindex="-1"><a class="header-anchor" href="#_4-修改方式" aria-hidden="true">#</a> 4. 修改方式</h2><p>以下表格汇总了各种回收器的分类、特点和修改参数：</p><table><thead><tr><th>名称</th><th>修改参数</th><th>特点</th></tr></thead><tbody><tr><td>Serial</td><td>-XX:+UseSerialGC</td><td>用于新生代的单线程收集器，采用复制算法进行垃圾收集。Serial 进行垃圾收集时，所有的用户线程必须暂停（Stop The World）。</td></tr><tr><td>ParNew</td><td>-XX:+UseParNewGC</td><td>Serial的多线程版本，在单核CPU环境并不会比Serial更优，它默认开启的收集线程数和CPU核数，可以通过-XX:ParallelGCThreads来设置垃圾收集的线程数。</td></tr><tr><td>Parallel Scavenge</td><td>-XX:+UseParallelGC jdk1.7、jdk1.8 新生代默认使用</td><td>用于新生代的多线程收集器，ParNew的目标是尽可能缩短垃圾收集时用户线程的停顿时间，Parallel Scavenge的目标是达到一个可控制的吞吐量。通过-XX:MaxGCPauseMillis来设置收集器尽可能在多长时间内完成内存回收，通过-XX:GCTimeRatio来精确控制吞吐量。</td></tr><tr><td>Serial Old</td><td>-XX:+UseSerialOldGC</td><td>Serial的老年代版本，采用标记-整理算法单线程收集器。</td></tr><tr><td>CMS</td><td>-XX:+UseConMarkSweepGC</td><td>一种以最短回收停顿时间为目标的收集器，尽量做到最短用户线程停顿时间。CMS是基于标记-清除算法，所以垃圾回收后会产生空间碎片，通过-XX:UseCMSCompactAtFullCollection开启碎片整理（默认开启）。用-XX:CMSFullGCsBeforeCompaction设置执行多少次不压缩（不进行碎片整理）的Full GC之后，跟着来一次带压缩（碎片整理）的Full GC。-XX:ParallelCMSThreads：设定CMS的线程数量。</td></tr><tr><td>Parallel Old</td><td>-XX:+UseParallelOldGC jdk1.7、jdk1.8老年代默认使用</td><td>Parallel Scavenge的老年代版本，使用-XX:ParallelGCThreads限制线程数量。</td></tr><tr><td>G1</td><td>-XX:+UseG1GCjdk1.7以后才提供，jdk1.9默认</td><td>一款全新的收集器，兼顾并行和并发功能，能充分利用多CPU资源，运行期间不会产生内存碎片。通过-XX:ParallelGCThreads设置限制线程数量；-XX:MaxGCPauseMillis设置最大停顿时间。</td></tr></tbody></table><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',6),C={href:"https://support.huaweicloud.com/tuningtip-kunpenggrf/kunpengtuning_12_0064.html",target:"_blank",rel:"noopener noreferrer"};function _(u,X){const a=h("ExternalLinkIcon");return i(),n("div",null,[s,t("p",null,[e("根据收集模式经典垃圾回收器可分为三类：串行收集器、并行收集器、并发收集器。串行收集器只适用于小数据量的情况，选择主要针对并行收集器和并发收集器。默认情况下，JDK1.5以前都是使用串行收集器，如果想使用其他收集器需要在启动时加入相应参数。JDK1.5以后，JVM会根据当前"),t("a",c,[e("系统配置"),d(a)]),e("进行判断。")]),p,t("p",null,[t("a",C,[e("华为鲲鹏-选择合适的垃圾回收器"),d(a)])])])}const S=l(o,[["render",_],["__file","java-jvm-gc-adapter.html.vue"]]);export{S as default};
