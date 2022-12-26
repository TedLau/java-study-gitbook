import{_ as n,W as l,X as s,Y as e,Z as i,$ as r,a0 as t,D as o}from"./framework-0cf5f349.js";const d={},h=t(`<h1 id="架构之高可用-如何保证高可用性" tabindex="-1"><a class="header-anchor" href="#架构之高可用-如何保证高可用性" aria-hidden="true">#</a> 架构之高可用: 如何保证高可用性？</h1><blockquote><p>高可用性对于我们来说应该属于经常提到的名词，本文我们将介绍在分布式系统中保证高可用性的一些常用经验。系统可用性指标系统可用性指标简单来将就是系统可用时间与总运行时间之比Availability=MTTF/(MTTF+MTTRMTTF)MTTF 是 Mean Time To Failure，指平均故障前的时间，即系统平均能够正常运行多长时间才发生一次故障。系统的可靠性越高，MTTF 越长(简...</p></blockquote><p>高可用性对于我们来说应该属于经常提到的名词，本文我们将介绍在分布式系统中保证高可用性的一些常用经验。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221013102031819.png" alt="image-20221013102031819" tabindex="0" loading="lazy"><figcaption>image-20221013102031819</figcaption></figure><h2 id="_0-影响可用性的因素有哪些" tabindex="-1"><a class="header-anchor" href="#_0-影响可用性的因素有哪些" aria-hidden="true">#</a> 0. 影响可用性的因素有哪些</h2><ul><li>机器的资源耗尽</li><li>单点故障</li><li>人为操作</li><li>网络</li></ul><h2 id="_1-系统可用性指标" tabindex="-1"><a class="header-anchor" href="#_1-系统可用性指标" aria-hidden="true">#</a> 1. 系统可用性指标</h2><p>系统可用性指标简单来将就是系统可用时间与总运行时间之比</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Availability<span class="token operator">=</span><span class="token constant">MTTF</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token constant">MTTF</span><span class="token operator">+</span><span class="token constant">MTTRMTTF</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MTTF 是 Mean Time To Failure，指平均故障前的时间，即系统平均能够正常运行多长时间才发生一次故障。系统的可靠性越高，MTTF 越长(简单理解MTTF 就是指系统正常运行的时间)。MTTR 是 Mean Time To Recovery， 平均修复时间，即从故障出现到故障修复的这段时间，也就是系统不可用的时间，这段时间越短越好。系统可用性指标可以用通过下表的999标准衡量，现在普遍要求至少2个9，最好4个9以上：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012203820810.png" alt="image-20221012203820810" tabindex="0" loading="lazy"><figcaption>image-20221012203820810</figcaption></figure><h2 id="_2-故障不可避免" tabindex="-1"><a class="header-anchor" href="#_2-故障不可避免" aria-hidden="true">#</a> 2. 故障不可避免</h2><p>高可用性是指系统提供的服务要始终可用，然而故障不可避免，特别是在分布式系统，面对不可控的用户流量和机房环境，系统故障将会显得更加复杂和不可预测。在大规模的分布式系统中，各个模块之间存在错综复杂的依赖，任一一个环节出现问题，都有可能导致雪崩式、多米诺骨牌式的故障，甚者可以断言出现故障成了常态。</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012204150756.png" alt="image-20221012204150756"><p>如上图的分布式系统中，用户请求系统中的某个服务接口，请求需要经过长长的调用链才能处理返回。我们起码要保证网络连接正常，服务网关正常、前端服务正常、后台服务正常、数据库正常，请求才能被正常处理，如果调用链中的任一环节出现问题，都会直接反馈到用户体验上。</p><p>系统出现故障的原因多种多样，主要有以下这些：</p><ul><li>网络问题，网络连接故障，网络带宽出现超时拥塞等；</li><li>性能问题，数据库慢查询、Java Full GC、硬盘 IO 过大、CPU 过高、内存不足等</li><li>安全问题，被网络攻击，如 DDoS 等、异常客户端请求，如爬虫等。</li><li>运维问题，需求变更频繁不可控，架构也在不断地被调整，监控问题等；</li><li>管理问题，没有梳理出关键服务以及服务的依赖关系，运行信息没有和控制系统同步；</li><li>硬件问题，硬盘损坏、网卡出问题、交换机出问题、机房掉电、挖掘机问题(前一阵子机房电缆就经常被挖断)等</li></ul><p>面对如此多的天灾人祸，可控和不可控的故障因素，似乎系统的高可用性变成不可能完成的任务，但是在日常开发运维中，我们可以采用一些有效的设计、实现和运维手段来提高系统的高可用性，尽量交付一个在任何时候都基本可用的系统。</p><h2 id="_3-核心实现方案" tabindex="-1"><a class="header-anchor" href="#_3-核心实现方案" aria-hidden="true">#</a> 3. 核心实现方案</h2><h3 id="_3-1-冗余设计" tabindex="-1"><a class="header-anchor" href="#_3-1-冗余设计" aria-hidden="true">#</a> 3.1 冗余设计</h3><p>分布式系统中单点故障不可取的，而降低单点故障的不二法门就是冗余设计，通过多点部署的方式，并且最好是部署在不同的物理位置，避免单机房中多点同时失败。冗余设计不仅可以提高服务的吞吐量，还可以在出现灾难时快速恢复。目前常见的冗余设计有<strong>主从设计和对等治理设计</strong>，主从设计又可以细分为一主多从、多主多从。</p><p>冗余设计中一个不可避免的问题是考虑分布式系统中数据的一致性，多个节点中冗余的数据追求强一致性还是最终一致性。即使节点提供无状态服务，也需要借助外部服务，比如数据库、分布式缓存等维护数据状态。根据分布式系统下节点数据同步的基本原理CAP(Consistency (一致性)、Availablity (可用性)、Partition tolerance (分区容忍性)三个指标不可同时满足)，数据强一致性的系统无法保证高可用性，最典型的例子就是 Zookeeper。</p><h4 id="_3-1-1-主从设计-zookeeper" tabindex="-1"><a class="header-anchor" href="#_3-1-1-主从设计-zookeeper" aria-hidden="true">#</a> 3.1.1 主从设计：Zookeeper</h4><p>Zookeeper 采用主从设计，服务集群由 Leader、Follower 和 Observer 三种角色组成，它们的职责如下：</p><ul><li>Leader: Zookeeper 集群使用 ZAB 协议通过 Leader 选举从集群中选定一个节点作为 Leader。Leader 响应客户端的读写请求；</li><li>Follower：只提供数据的读服务，会将来自客户端的写请求转发到 Leader 中。在 Leader 选举的过程中参与投票，并与 Leader 维持数据同步；</li><li>Observer：与 Folllower 的功能相同，但不参与 Leader 选举和写过程的&quot;过半写成功&quot;策略，单纯为了提高集群的读能力。</li></ul><p>在 Zookeeper 集群中，由于只有 Leader 角色的节点具备写数据的能力，当 Leader 节点宕机时，在新的 Leader 节点没有被选举出来之前，集群的写能力都是不可用的。虽然 Zookeeper 保证了集群数据的强一致性，但是放弃了集群的高可用性。</p><h4 id="_3-1-2-对等治理设计-eureka" tabindex="-1"><a class="header-anchor" href="#_3-1-2-对等治理设计-eureka" aria-hidden="true">#</a> 3.1.2 对等治理设计：Eureka</h4><p>对等治理设计中比较优秀的业内体现为 Netiflx 开源的 Eureka 服务注册和发现组件。Eureka 集群由 Eureka Client 和 Eureka Server 两种角色组成，其中 Eureka Client 是指服务实例使用的服务注册和发现的客户端，用于注册和查询服务实例信息；Eureka Server 作为服务注册中心，存储有各服务的实例信息列表，采用多实例的方式部署保证高可用性。每一个 Eureka Server 都是对等的数据节点，Eureka Client 可以向任意的 Eureka Server 发起服务注册请求和服务发现请求。Eureka Server 之间的数据通过异步 HTTP 的方式同步，由于网络的不可靠性，不同 Eureka Server 中的服务实例数据不能保证在任意时间节点都相等，只能保证在 SLA 承诺时间内达到数据的最终一致性。Eureka 点对点对等的设计保证了服务注册与发现中心的高可用性，但是牺牲了数据的强一致性，降级为数据的最终一致性。</p><h3 id="_3-2-熔断设计" tabindex="-1"><a class="header-anchor" href="#_3-2-熔断设计" aria-hidden="true">#</a> 3.2 熔断设计</h3><p>在分布式系统中，一次完整的请求可能需要经过多个服务模块的通力合作，请求在多个服务中传递，服务对服务的调用会产生新的请求，这些请求共同组成了这次请求的调用链。当调用链中的某个环节，特别是下游服务不可用时，将会导致上游服务调用方不可用，最终将这种不可用的影响扩大到整个系统，导致整个分布式系统的不可用，引发服务雪崩现象。</p><p>为了避免这种情况，在下游服务不可用时，保护上游服务的可用性显得极其重要。对此，我们可以参考电路系统的断路器机制，在必要的时候壮士断腕，当下游服务因为过载或者故障不能用时，及时“熔断”服务调用方和服务提供方的调用链，保护服务调用方资源，防止服务雪崩现象的出现。</p><p>断路器的基本设计图如下，由关闭、打开、半开三种状态组成：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012205543264.png" alt="image-20221012205543264" tabindex="0" loading="lazy"><figcaption>image-20221012205543264</figcaption></figure><ul><li>关闭(Closed)状态：此时服务调用方可以调用服务提供方。断路器中使用失败计数器周期性统计请求失败次数和请求总次数的比例，如果最近失败频率超过了周期时间内允许失败的阈值，则切换到打开(Open)状态。在关闭状态下，失败计数器基于时间周期运作，会在每个统计周期开始前自动重置，防止某次偶然错误导致断路器进入打开状态。</li><li>打开(Open)状态：在该状态下，对应用程序的请求会立即返回错误响应或者执行预设的失败降级逻辑，而不调用服务提供方。断路器进入打开状态后会启动超时计时器，在计时器到达后，断路器进入半开状态。</li><li>半开(Half-Open)状态：允许应用程序一定数量的请求去调用服务。如果这些请求对服务的调用成功，那么可以认为之前导致调用失败的错误已经修正，此时断路器切换到关闭状态，同时将失败计数器重置。如果这一定数量的请求存在调用失败的情况，则认为导致之前调用失败的问题仍然存在，断路器切回到打开状态，并重置超时计时器来给系统一定的时间来修正错误。半开状态能够有效防止正在恢复中的服务被突然而来的大量请求再次打垮。</li></ul><p>使用断路器设计模式，能够有效地保护服务调用方的稳定性，它能够避免服务调用者频繁调用可能失败的服务提供者，防止服务调用者浪费 CPU 周期、线程和 IO 资源等，提高服务整体的可用性。</p><h3 id="_3-3-限流设计" tabindex="-1"><a class="header-anchor" href="#_3-3-限流设计" aria-hidden="true">#</a> 3.3 限流设计</h3><p>熔断设计保护的是服务调用者，即上游服务的可用性，对于下游服务提供者，考虑到自身服务实例的负载能力，同样需要限流设计保护自己不被过量的流量冲垮。一般来讲有以下的限流策略：</p><ul><li>拒绝服务，把多出来的请求拒绝掉。一般来说，好的限流系统在受到流量暴增时，会暂时拒绝周期时间内请求数量最大的客户端，这样可以在一定程度上把一些不正常的或者是带有恶意的高并发访问挡在门外。</li><li>服务降级，关闭或是把后端做降级处理，释放资源给支撑主流程服务以支持更多的请求。降级有很多方式，一种是把一些不重要的服务给停掉，把 CPU、内存或是数据的资源让给更重要的功能；一种是数据接口只返回部分关键数据，减少数据查询处理链路；还有更快的一种是直接返回预设的缓存或者静态数据，牺牲数据强一致性的方式来获得更大的性能吞吐。</li><li>优先级请求，是指将目前系统的资源分配给优先级更高的用户，优先处理权限更高的用户的请求。</li><li>延时处理，在这种情况下，一般来说会使用缓冲队列来缓冲大量的请求，系统根据自身负载能力消费队列中的请求。如果该队列也满了，那么就只能拒绝用户请求。使用缓冲队列只是为了减缓压力，一般用于应对瞬时大量的流量削峰。</li><li>弹性伸缩，采用自动化运维的方式对相应的服务做自动化的伸缩。这种方案需要应用性能监控系统，能够感知到目前最繁忙的服务，并自动伸缩它们；还需要一个快速响应的自动化发布、部署和服务注册的运维系统。如果系统的处理压力集中在数据库这类不易自动扩容的外部服务，服务弹性伸缩意义不大。</li></ul><p>接下来我们介绍两种常用的限流算法：漏桶算法和令牌桶算法。</p><h4 id="_3-3-1-漏桶算法-leaky-bucket" tabindex="-1"><a class="header-anchor" href="#_3-3-1-漏桶算法-leaky-bucket" aria-hidden="true">#</a> 3.3.1 漏桶算法(Leaky Bucket)</h4><p>漏桶算法(Leaky Bucket)是网络世界中流量整形(Traffic Shaping)或速率限制(Rate Limiting)时经常使用的一种算法，它的主要目的是控制数据注入到系统的速率，平滑对系统的突发流量，为系统提供一个稳定的请求流量。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012210842217.png" alt="image-20221012210842217" tabindex="0" loading="lazy"><figcaption>image-20221012210842217</figcaption></figure><p>如上图所示，水(请求)先进入到漏桶，而出去的水量表示系统处理的请求。当访问流量过大时漏桶中就会积水，如果水太多了就会溢出，此时请求将会被拒绝。</p><h4 id="_3-3-2-令牌桶算法" tabindex="-1"><a class="header-anchor" href="#_3-3-2-令牌桶算法" aria-hidden="true">#</a> 3.3.2 令牌桶算法</h4><p>令牌桶算法则是一个存放固定容量令牌的桶，按照固定速率往桶里添加令牌。桶中存放的令牌数有最大上限，超出之后就被丢弃。当流量或者网络请求到达时，每个请求都要获取一个令牌，如果能够获取到，则直接处理，同时令牌桶会删除一个令牌。如果获取不到，该请求就要被限流，要么直接丢弃，要么在缓冲区等待。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012211150889.png" alt="image-20221012211150889" tabindex="0" loading="lazy"><figcaption>image-20221012211150889</figcaption></figure><h2 id="_4-其他设计与方案" tabindex="-1"><a class="header-anchor" href="#_4-其他设计与方案" aria-hidden="true">#</a> 4. 其他设计与方案</h2><h3 id="_4-1-降级设计" tabindex="-1"><a class="header-anchor" href="#_4-1-降级设计" aria-hidden="true">#</a> 4.1 降级设计</h3><p>在应对大流量冲击时，可以尝试对请求的处理流程进行裁剪，去除或者异步化非关键流程的次要功能，保证主流程功能正常运转。</p><p>一般来说，我们的降级时可以暂时牺牲的东西有：</p><ul><li>降低一致性。从数据强一致性变成最终一致性。</li><li>关闭非关键服务。关闭不重要功能的服务，从而释放出更多的资源。</li><li>简化功能。把一些功能简化掉，比如，简化业务流程，或是不再返回全量数据，只返回部分数据。也可以使用缓存的方式，返回预设的缓存数据或者静态数据，不执行具体的业务数据查询处理。</li></ul><h3 id="_4-2-无状态设计" tabindex="-1"><a class="header-anchor" href="#_4-2-无状态设计" aria-hidden="true">#</a> 4.2 无状态设计</h3><p>在分布式系统设计中，都倡导使用无状态化的方式设计开发服务模块。无状态的意思是指对于功能相同的服务模块，在服务内部不维护任何的数据状态，只会根据请求中携带的业务数据从外部服务比如数据库、分布式缓存中查询相关数据进行处理，这样能够保证请求到任意服务实例中处理结果都是一致的。</p><p>无状态设计的服务模块可以简单通过多实例部署的方式进行横向扩展，各服务实例完全对等，可以有效提高服务集群的吞吐量和可用性。但是如此一来，服务处理的性能瓶颈就可能出现在提供数据状态一致性的外部服务中。</p><h3 id="_4-3-幂等性设计" tabindex="-1"><a class="header-anchor" href="#_4-3-幂等性设计" aria-hidden="true">#</a> 4.3 幂等性设计</h3><p>幂等性设计是指系统对于相同的请求，一次和多次请求获取到的结果都是一样的。幂等性设计对分布式系统中的超时重试、系统恢复有重要的意义，它能够保证重复调用不会产生错误，保证系统的可用性。一般我们认为声明为幂等性的接口或者服务出现调用失败是常态，由于幂等性的原因，调用方可以在调用失败后放心进行重新请求。举个简单的例子，在支付系统中，在一笔订单的支付请求中，由于网络抖动或者其他未知的因素导致请求没能及时返回，如果支付接口是幂等性，我们应该可以放心使用同一笔订单号重新请求支付，如果上次支付请求已经成功，将会返回支付成功，如果上次支付请求未成功，将会重新进行金额扣费，这样就能保证请求的正确进行，避免重复扣费的错误。</p><h3 id="_4-4-重试设计" tabindex="-1"><a class="header-anchor" href="#_4-4-重试设计" aria-hidden="true">#</a> 4.4 重试设计</h3><p>在很多时候，由于网络不可靠或者服务提供方宕机的原因，服务调用者的调用很可能会失败，如果此时服务调用者中存在一定的重试机制，就能够在一定程度上减少服务失败的概率，提高服务可用性。比如业务系统在某次数据库请求中，由于临时的网络原因，数据请求超时了，如果业务系统中具备一定的超时重试机制，根据请求参数再次向数据库请求数据，就能正常获取到数据，完成业务处理流程，避免该次业务处理失败。</p><p>使用重试设计的时候需要注意以下问题：一是待重试的服务接口是否为幂等性，对于某些超时请求，请求可能在服务提供方中执行成功了，但是返回结果在网络传输中丢失了，此时重复调用非幂等性服务接口很可能会导致额外的系统错误；二是服务提供方是否只是临时不可用，对于无法快速恢复的服务提供方或者网络无法立即恢复的情况下，盲目的重试只会使情况更加糟糕，无脑地消耗服务调用方的 CPU 、线程和网络 IO 资源，在这种情况下建议结合熔断设计对服务调用方进行保护。</p><p>保护。</p><h3 id="_4-5-接口缓存" tabindex="-1"><a class="header-anchor" href="#_4-5-接口缓存" aria-hidden="true">#</a> 4.5 接口缓存</h3><p>接口缓存是应对大并发量请求，提高系统吞吐量，保证系统可用性的有效手段。基本原理是，在系统内部，对于某部分请求参数和请求路径完成相同的请求的结果进行缓存，在周期时间内，这部分相同的请求的结果将会直接从缓存中读取，减少业务处理过程的负载。最简单的例子是在一些在线大数据查询系统中，查询系统会将周期时间内系统查询条件相同的查询结果进行缓存，加快访问速度。</p><p>接口缓存同样有着它不适用的场景。接口缓存牺牲了数据的强一致性，对于实时性要求高的系统并不适用。接口缓存加快的是相同请求的请求速率，对于请求差异化较大的系统同样无能为力，过多的缓存反而会大量浪费系统内存等资源。</p><h3 id="_4-6-实时监控和度量" tabindex="-1"><a class="header-anchor" href="#_4-6-实时监控和度量" aria-hidden="true">#</a> 4.6 实时监控和度量</h3><p>由于分布式中服务节点众多，问题的定位变得异常复杂，对此建议对每台服务器资源使用情况和服务实例的性能指标进行实时监控和度量。最常见的方式健康检查，通过定时调用服务提供给健康检查接口判断服务是否可用。目前业内也有开源的监控系统 Prometheus，它监控各个服务实例的运行指标，并根据预设的阀值自动报警，及时通知相关开发运维人员进行处理。</p><h3 id="_4-7-常规划化维护" tabindex="-1"><a class="header-anchor" href="#_4-7-常规划化维护" aria-hidden="true">#</a> 4.7 常规划化维护</h3><p>定期清理系统的无用代码，及时进行代码评审，处理代码中 bad smell。对于无状态服务可以定期重启服务器减少内存碎片和防止内存泄漏。这些都是非常有效的提高系统可用性的运维手段。</p><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2><p>虽然在分布式系统中，由于系统的复杂性，大大加大了服务错误的可能性，但是也有足够的方案保证系统可用性。本文首先介绍了系统可用性指标，接着阐述了分布式系统中故障不可避免的情况，最后笼统地介绍了一些有效的高可用设计。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,70),p={href:"https://bbs.huaweicloud.com/blogs/236943",target:"_blank",rel:"noopener noreferrer"},c={href:"https://bbs.huaweicloud.com/blogs/245653",target:"_blank",rel:"noopener noreferrer"};function u(g,b){const a=o("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[e("a",p,[i("分布式系统如何保证高可用性？(上)"),r(a)])]),e("p",null,[e("a",c,[i("分布式系统如何保证高可用性？(下)"),r(a)])])])}const f=n(d,[["render",u],["__file","arch-y-ensure-high-availability.html.vue"]]);export{f as default};
