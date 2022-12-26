import{_ as a,W as i,X as e,a0 as l}from"./framework-0cf5f349.js";const h={},r=l('<h1 id="热备份和冷备份概念" tabindex="-1"><a class="header-anchor" href="#热备份和冷备份概念" aria-hidden="true">#</a> 热备份和冷备份概念</h1><h2 id="_1-冷备份" tabindex="-1"><a class="header-anchor" href="#_1-冷备份" aria-hidden="true">#</a> 1. 冷备份</h2><h3 id="_1-1-特点" tabindex="-1"><a class="header-anchor" href="#_1-1-特点" aria-hidden="true">#</a> 1.1 特点</h3><ul><li>离线off</li><li>慢</li><li>时间点上恢复</li></ul><h3 id="_1-2-冷备份概念" tabindex="-1"><a class="header-anchor" href="#_1-2-冷备份概念" aria-hidden="true">#</a> 1.2 冷备份概念</h3><p>冷备份发生在数据库已经正常关闭的情况下，当正常关闭时会提供给我们一个完整的数据库。冷备份是将关键性文件拷贝到另外位置的一种说法。对于备份数据库信息而言，冷备份是最快和最安全的方法</p><p>简述：<strong>离线（没有新的数据来）复制一份保存，有事就直接用这备份来恢复。</strong></p><h3 id="_1-3-冷备份的优先" tabindex="-1"><a class="header-anchor" href="#_1-3-冷备份的优先" aria-hidden="true">#</a> 1.3 冷备份的优先</h3><ol><li>非常快速的备份方法（只需拷贝文件）</li><li>容易归档（简单拷贝即可）</li><li>容易恢复到某个时间点上（只需将文件拷贝回去）</li><li>能与归档方法相结合，作数据库”最新状态“的恢复</li><li>低度维护，高度安全</li></ol><h3 id="_1-4-冷备份缺点" tabindex="-1"><a class="header-anchor" href="#_1-4-冷备份缺点" aria-hidden="true">#</a> 1.4 冷备份缺点</h3><ol><li>单独使用时，只能提供到”某一时间点上“的恢复</li><li>在实施备份的全过程中，数据库必须要作备份而不能作其他工作。也就是说，在冷备份过程中，数据库必须是关闭状态。</li><li>若磁盘空间有限，只能拷贝到磁盘等其他外部存储设备上。速度会很慢</li><li>不能按表或按用户恢复。</li></ol><p>值得注意的是冷备份必须在数据库关闭的情况下进行，当数据库处于打开状态时，执行数据库文件系统备份是无效的。而且在恢复后一定要把数据库文件的属组合属主改为mysql。</p><h2 id="_2-热备份" tabindex="-1"><a class="header-anchor" href="#_2-热备份" aria-hidden="true">#</a> 2. 热备份</h2><h3 id="_2-1-特点" tabindex="-1"><a class="header-anchor" href="#_2-1-特点" aria-hidden="true">#</a> 2.1 特点</h3><ul><li>在线on</li><li>快</li></ul><h3 id="_2-2-热备份概念" tabindex="-1"><a class="header-anchor" href="#_2-2-热备份概念" aria-hidden="true">#</a> 2.2 热备份概念</h3><p>热备份是在数据库运行的情况下，备份数据库操作的sql语句，<strong>当数据库发生问题时，可以重新执行一遍备份的sql语句</strong>。</p><p>简述：在线的保存对数据库操作的sql语句，有事就再跑一遍这些sql语句</p><h3 id="_2-3-热备份优点" tabindex="-1"><a class="header-anchor" href="#_2-3-热备份优点" aria-hidden="true">#</a> 2.3 热备份优点</h3><ol><li>可在表空间或数据文件级备份，备份时间短</li><li>备份时数据库仍可使用</li><li>可达到秒级恢复（恢复到某一个时间点上）</li><li>可对几乎所有数据库实体作恢复</li><li>恢复是快速的，在大多数情况下载数据库仍工作时恢复</li></ol><h3 id="_2-4-热备份缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-热备份缺点" aria-hidden="true">#</a> 2.4 热备份缺点</h3><ol><li>不能出错，否则后果严重</li><li>若热备份不成功，所得结果不可用于时间点恢复</li><li>因难于维护，所以要特别仔细小心，不允许”以失败而告终“</li></ol>',22),d=[r];function n(s,t){return i(),e("div",null,d)}const o=a(h,[["render",n],["__file","mysql-z-backup.html.vue"]]);export{o as default};
