import{_ as i,W as a,X as e,a0 as n}from"./framework-0cf5f349.js";const l={},r=n(`<h1 id="索引实现" tabindex="-1"><a class="header-anchor" href="#索引实现" aria-hidden="true">#</a> 索引实现</h1><h2 id="_1-聚簇索引" tabindex="-1"><a class="header-anchor" href="#_1-聚簇索引" aria-hidden="true">#</a> 1. 聚簇索引</h2><p>MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引</p><ul><li>聚簇索引：索引和数据文件为同一个文件</li><li>非聚簇索引：索引和数据文件 分开的索引</li></ul><h2 id="_2-myisam-索引原理" tabindex="-1"><a class="header-anchor" href="#_2-myisam-索引原理" aria-hidden="true">#</a> 2. MyISAM 索引原理</h2><h3 id="_2-1-底层存储结构" tabindex="-1"><a class="header-anchor" href="#_2-1-底层存储结构" aria-hidden="true">#</a> 2.1 底层存储结构</h3><ul><li>frm：定义表</li><li>myi: myisam索引</li><li>myd：myisam数据</li></ul><h3 id="_2-2-myisam-索引结构特性" tabindex="-1"><a class="header-anchor" href="#_2-2-myisam-索引结构特性" aria-hidden="true">#</a> 2.2 myISAM 索引结构特性</h3><ul><li><p>采用非聚簇索引</p></li><li><p>MyISAM myi索引文件和myd 数据文件分离</p></li><li><p>索引文件仅保存数据记录的指针地址。</p></li><li><p>叶子节点data域存储指向数据记录的指针地址</p></li></ul><h3 id="_2-3-myisam-索引查找流程" tabindex="-1"><a class="header-anchor" href="#_2-3-myisam-索引查找流程" aria-hidden="true">#</a> 2.3 MyISAM 索引查找流程</h3><ul><li><p>MyISAM 索引按照B+Tree搜索，</p></li><li><p>如果指定的key存在，则取出其data域值</p></li><li><p>然后以data阈值-数据地址去读取响应的数据记录，</p></li></ul><p>辅助索引和主索引在结构上没有任何区别，只是主索引要求key 是唯一的，而辅助索引的key 可以重复</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906225153866.png" alt="image-20190906225153866" tabindex="0" loading="lazy"><figcaption>image-20190906225153866</figcaption></figure><h2 id="_3-innodb" tabindex="-1"><a class="header-anchor" href="#_3-innodb" aria-hidden="true">#</a> 3. InnoDB</h2><h3 id="_3-1-innodb优势" tabindex="-1"><a class="header-anchor" href="#_3-1-innodb优势" aria-hidden="true">#</a> 3.1 InnoDB优势</h3><ul><li>高扩展性</li><li>充分开发硬件性能</li><li>Crash Safe</li><li>支持事务</li><li>可以在线热备份</li></ul><h3 id="_3-2-innodb特性" tabindex="-1"><a class="header-anchor" href="#_3-2-innodb特性" aria-hidden="true">#</a> 3.2 InnoDB特性</h3><ol><li><p>事务支持（ACID）</p></li><li><p>扩展性优良</p></li><li><p>读写不冲突</p></li><li><p>缓存加速</p></li></ol><h3 id="_3-3-组件功能" tabindex="-1"><a class="header-anchor" href="#_3-3-组件功能" aria-hidden="true">#</a> 3.3 组件功能</h3><ul><li>redo/undo</li><li>异步IO</li><li>MVCC</li><li>行级别锁</li><li>Page Cache（LRU）</li></ul><h3 id="_3-4-innodb物理存储结构" tabindex="-1"><a class="header-anchor" href="#_3-4-innodb物理存储结构" aria-hidden="true">#</a> 3.4 InnoDB物理存储结构</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906225909455.png" alt="image-20190906225909455" tabindex="0" loading="lazy"><figcaption>image-20190906225909455</figcaption></figure><ul><li><p>表空间(ibd文件)</p><ul><li>InnoDB 以<strong>表空间Tablespace</strong>（idb文件）结构进行组织</li></ul></li><li><p>段(Segment)</p><ul><li><p>每个Tablespce 包含<strong>多个Segment段</strong></p><p>分为2种段：叶子节点Segment 和非叶子节点Segment</p></li></ul></li><li><p>Extent</p><ul><li><p>一个Segment段<strong>包含多个Extent</strong></p><p>一个Extent占用占用1M空间包含<strong>64个page</strong>（每个Page 16K）</p></li></ul></li><li><p>Page(16K)</p><ul><li>InnoDB B-Tree <strong>一个逻辑节点扣分配一个物理Page</strong>，一个节点一次IO操作</li></ul></li><li><p>Row</p><ul><li>一个Page里包含<strong>很多有序数据Row行</strong>数据</li></ul></li><li><p>Field</p><ul><li>Row行数据中包含<strong>Field 属性数据等信息</strong></li></ul></li></ul><h4 id="_3-5-表插入数据扩展原理" tabindex="-1"><a class="header-anchor" href="#_3-5-表插入数据扩展原理" aria-hidden="true">#</a> 3.5 表插入数据扩展原理</h4><p>一次扩张一个Extent空间（IM）,64个page，按顺序结构向每个page中插入数据</p><h4 id="_3-6-innodb-逻辑组织结构" tabindex="-1"><a class="header-anchor" href="#_3-6-innodb-逻辑组织结构" aria-hidden="true">#</a> 3.6 InnoDB 逻辑组织结构</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906233212924.png" alt="image-20190906233212924" tabindex="0" loading="lazy"><figcaption>image-20190906233212924</figcaption></figure><p><strong>每个索引一个B+Tree</strong>，一个B+Tree节点 = 一个物理Page（16K）</p><p>数据按16KB切片为Page 并编号，编号可映射到物流文件偏移（16K*N）,B+Tree树叶子节点前后形成双向链表，数据按主键聚簇，二级索引叶节点存储主键值，通过叶节点主键值<strong>回表查找数据</strong></p><h2 id="_4-innodb-索引原理" tabindex="-1"><a class="header-anchor" href="#_4-innodb-索引原理" aria-hidden="true">#</a> 4. InnoDB 索引原理</h2><h3 id="_4-1-innodb-特点" tabindex="-1"><a class="header-anchor" href="#_4-1-innodb-特点" aria-hidden="true">#</a> 4.1 InnoDB 特点</h3><ul><li><p><strong>采用聚簇索引</strong></p></li><li><p><strong>InnoDB 数据&amp;索引文件为idb文件，</strong></p></li><li><p><strong>表数据文件本身就是就是主索引</strong></p></li><li><p><strong>相邻的索引临近存储。</strong></p></li><li><p><strong>叶节点data域保存了完整的数据记录（数据[除了主键id外其他data]+主索引）</strong></p></li><li><p><strong>叶子节点直接存储数据记录，以主键id为key，叶子节点直接存储数据记录</strong></p></li></ul><h3 id="_4-2-底层存储结构" tabindex="-1"><a class="header-anchor" href="#_4-2-底层存储结构" aria-hidden="true">#</a> 4.2 底层存储结构</h3><ul><li>frm: 表定义</li><li>idb: innoDB数据&amp;索引文件</li></ul><h3 id="_4-3-为什么innodb-一定要有主键" tabindex="-1"><a class="header-anchor" href="#_4-3-为什么innodb-一定要有主键" aria-hidden="true">#</a> 4.3 为什么InnoDB 一定要有主键</h3><p>**由于InnoDB 采用聚簇索引结构存储，索引InnoDB 的数据文件需要按照主键聚集。**因此InnoDB 要求表必须有主键（MyISAM可以没有）。</p><p>如果没有指定mysql会<strong>自动选择一个可以唯一标识数据记录的列作为主键</strong>，如果不存在这样的列，mysql自动为innoDB表<strong>生成一个隐含字段（6个字节长整型）作为主键</strong>。innoDB所有辅助索引都引用数据记录的主键 作为data 域</p><h3 id="_4-4-辅助索引需要检索两遍" tabindex="-1"><a class="header-anchor" href="#_4-4-辅助索引需要检索两遍" aria-hidden="true">#</a> 4.4 辅助索引需要检索两遍</h3><p>聚簇索引这种实现方式使得主键的搜索十分高效，但是<strong>辅助索引搜索需要检索两遍索引</strong></p><ol><li><p>首先检索辅助索引获得数据记录主键</p></li><li><p>然后用主键到主索引中检索获得数据记录</p></li></ol><h3 id="_4-5-聚簇索引结构" tabindex="-1"><a class="header-anchor" href="#_4-5-聚簇索引结构" aria-hidden="true">#</a> 4.5 聚簇索引结构</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906235927601.png" alt="image-20190906235927601" tabindex="0" loading="lazy"><figcaption>image-20190906235927601</figcaption></figure><h3 id="_4-6-索引的查找流程" tabindex="-1"><a class="header-anchor" href="#_4-6-索引的查找流程" aria-hidden="true">#</a> 4.6 索引的查找流程</h3><h4 id="_2-6-1-索引精确查找" tabindex="-1"><a class="header-anchor" href="#_2-6-1-索引精确查找" aria-hidden="true">#</a> 2.6.1 索引精确查找：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from user_info where id = 23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>确定定位条件，找到根节点的PageNo</li><li>根节点读到内存</li><li>逐层向下查找</li><li>读取叶子节点的Page</li><li><strong>通过二分查找找到记录或未命中</strong>。</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002116080.png" alt="image-20190907002116080" tabindex="0" loading="lazy"><figcaption>image-20190907002116080</figcaption></figure><h4 id="_2-6-2-索引范围查找" tabindex="-1"><a class="header-anchor" href="#_2-6-2-索引范围查找" aria-hidden="true">#</a> 2.6.2 索引范围查找</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from user_info where id &gt;= 18 and id &lt; 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>读取根节点至内存</li><li>确定索引定位条件 id=18</li><li>找到满足条件第一个叶子节点，</li><li>顺序扫描所有结果，直到终止条件满足id&gt;=22</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002422372.png" alt="image-20190907002422372" tabindex="0" loading="lazy"><figcaption>image-20190907002422372</figcaption></figure><h4 id="_2-6-3-全表扫描" tabindex="-1"><a class="header-anchor" href="#_2-6-3-全表扫描" aria-hidden="true">#</a> 2.6.3 全表扫描</h4><p>select * from user_info where name = &#39;abc&#39;</p><ol><li>直接读取叶子节点头结点</li><li>顺序扫描</li><li>返回符合条件记录，到最终节点结束</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002631318.png" alt="image-20190907002631318" tabindex="0" loading="lazy"><figcaption>image-20190907002631318</figcaption></figure><h4 id="_2-6-4-二级索引查找" tabindex="-1"><a class="header-anchor" href="#_2-6-4-二级索引查找" aria-hidden="true">#</a> 2.6.4 二级索引查找</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Create table table_x(int id primary key, varchar(64) name,key sec_index(name) )

• Select * from table_x where name = “d”;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>通过二级索引查出主键</li><li>拿主键回表查主键索引得到数据</li><li>二级索引可筛选掉大量无效记录，提高效率</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002924866.png" alt="image-20190907002924866" tabindex="0" loading="lazy"><figcaption>image-20190907002924866</figcaption></figure>`,59),d=[r];function s(t,o){return a(),e("div",null,d)}const h=i(l,[["render",s],["__file","mysql-c-index-impl.html.vue"]]);export{h as default};
