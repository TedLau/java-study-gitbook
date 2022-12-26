import{_ as n,W as s,X as a,a0 as p}from"./framework-0cf5f349.js";const t={},e=p(`<h1 id="python将数据库文档转ddl建表语句" tabindex="-1"><a class="header-anchor" href="#python将数据库文档转ddl建表语句" aria-hidden="true">#</a> Python将数据库文档转DDL建表语句</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>项目启动阶段先设计了数据库文档，再将数据库文档转化为建表语句（DDL）时，无论是手写sql还是用客户端工具，都需要涉及大量的复制操作。十分劳累</p><h2 id="_2-思路" tabindex="-1"><a class="header-anchor" href="#_2-思路" aria-hidden="true">#</a> 2. 思路</h2><p>将数据库word的word 复制到excel，读取excel。根据自己的业务规则读取</p><blockquote><p>读取整份数据库文档word，读取word 格式影响较大。而且涉及到的数据表太多，我们批量替换很容易出问题。还是单表操作更保险</p></blockquote><p>数据库word</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210518101735640.png" alt="image-20210518101735640" tabindex="0" loading="lazy"><figcaption>image-20210518101735640</figcaption></figure><p>复制后的excel</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210518101832347.png" alt="image-20210518101832347" tabindex="0" loading="lazy"><figcaption>image-20210518101832347</figcaption></figure><h2 id="_3-代码实现" tabindex="-1"><a class="header-anchor" href="#_3-代码实现" aria-hidden="true">#</a> 3. 代码实现</h2><p>提供一个思路，每个公司的数据库文档格式并不一致，适当改动即可</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> xlrd

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    data_file <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&#39;temp.xls&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 查看工作表</span>
    data_file<span class="token punctuation">.</span>sheet_names<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># print(&quot;sheets：&quot; + str(data_file.sheet_names()))</span>
    ddlSql <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment"># 遍历所有工作表，获取对应的下标位置</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data_file<span class="token punctuation">.</span>sheet_names<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 按照下标读取对应工作表</span>
        sheet <span class="token operator">=</span> data_file<span class="token punctuation">.</span>sheet_by_index<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token comment"># 拼接建表语句</span>
        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;CREATE TABLE &quot;</span>
        count <span class="token operator">=</span> <span class="token number">0</span>
        table_wz_name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        table_yw_name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        table_primary_key <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                table_name <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;T_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                table_zw_name <span class="token operator">=</span> table_name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                table_yw_name <span class="token operator">=</span> <span class="token string">&quot;T_&quot;</span> <span class="token operator">+</span> table_name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                ddlSql <span class="token operator">+=</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;(\\n&quot;</span>
            <span class="token keyword">elif</span> count <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
                zwm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                ywm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
                gs <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                bz <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> ywm<span class="token punctuation">:</span>
                    <span class="token keyword">if</span> zwm <span class="token operator">==</span> <span class="token string">&#39;主键&#39;</span><span class="token punctuation">:</span>
                        table_primary_key <span class="token operator">=</span> ywm
                        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> gs <span class="token operator">+</span> <span class="token string">&quot; NOT NULL&quot;</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> gs
                <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\n&quot;</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    ddlSql <span class="token operator">+=</span> <span class="token string">&quot;,\\n&quot;</span>
            count <span class="token operator">+=</span> <span class="token number">1</span>

        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;);&quot;</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>ddlSql<span class="token punctuation">)</span>

        <span class="token keyword">if</span> table_primary_key<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>
                <span class="token string">&quot;ALTER TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; ADD CONSTRAINT PK_&quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; PRIMARY KEY (&quot;</span> <span class="token operator">+</span> table_primary_key <span class="token operator">+</span> <span class="token string">&quot;);&quot;</span><span class="token punctuation">)</span>

        commentSql <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        commentSql <span class="token operator">+=</span> <span class="token string">&quot;COMMENT ON TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; IS &#39;&quot;</span> <span class="token operator">+</span> table_zw_name <span class="token operator">+</span> <span class="token string">&quot;&#39;;\\n&quot;</span>
        count2 <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># 拼接字段注释和表注释</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> count2 <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
                zwm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                ywm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
                gs <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                bz <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> ywm<span class="token punctuation">:</span>
                    commentSql <span class="token operator">+=</span> <span class="token string">&quot;COMMENT ON COLUMN &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; IS &#39;&quot;</span> <span class="token operator">+</span> zwm
                    <span class="token keyword">if</span> bz<span class="token punctuation">:</span>
                        commentSql <span class="token operator">+=</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> bz <span class="token operator">+</span> <span class="token string">&quot;)&#39;;\\n&quot;</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        commentSql <span class="token operator">+=</span> <span class="token string">&quot;;\\n&quot;</span><span class="token punctuation">;</span>
            count2 <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span>commentSql<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> T_SYS_USER<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_USER<span class="token punctuation">(</span>
	USER_ID NUMBER<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	DEPT_ID NUMBER<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	USER_NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	NICK_NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	USER_TYPE VARCHAR2<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	EMAIL VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	PHONENUMBER VARCHAR2<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	SEX <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	AVATAR VARCHAR2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	PASSWORD VARCHAR2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">STATUS</span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	DEL_FLAG <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	LOGIN_IP VARCHAR2<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	LOGIN_DATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	CREATE_BY VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	CREATE_TIME <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	UPDATE_BY VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	UPDATE_TIME <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	REMARK VARCHAR2<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">TABLE</span> T_SYS_USER <span class="token operator">IS</span> <span class="token string">&#39;用户信息表&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_ID <span class="token operator">IS</span> <span class="token string">&#39;用户ID;
COMMENT ON COLUMN T_SYS_USER.DEPT_ID IS &#39;</span>部门ID<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_NAME <span class="token operator">IS</span> <span class="token string">&#39;用户账号;
COMMENT ON COLUMN T_SYS_USER.NICK_NAME IS &#39;</span>用户名字<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_TYPE <span class="token operator">IS</span> <span class="token string">&#39;用户类型(00：系统用户)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>EMAIL <span class="token operator">IS</span> <span class="token string">&#39;用户邮箱;
COMMENT ON COLUMN T_SYS_USER.PHONENUMBER IS &#39;</span>手机号码<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>SEX <span class="token operator">IS</span> <span class="token string">&#39;用户性别(0：男，1：女，2：未知)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>AVATAR <span class="token operator">IS</span> <span class="token string">&#39;用户头像;
COMMENT ON COLUMN T_SYS_USER.PASSWORD IS &#39;</span>密码<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span><span class="token keyword">STATUS</span> <span class="token operator">IS</span> <span class="token string">&#39;帐号状态(0：正常，1：停用)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>DEL_FLAG <span class="token operator">IS</span> <span class="token string">&#39;删除标志(0：代表存在，2：代表删除)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>LOGIN_IP <span class="token operator">IS</span> <span class="token string">&#39;最后登录IP;
COMMENT ON COLUMN T_SYS_USER.LOGIN_DATE IS &#39;</span>最后登录时间<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>CREATE_BY <span class="token operator">IS</span> <span class="token string">&#39;创建者;
COMMENT ON COLUMN T_SYS_USER.CREATE_TIME IS &#39;</span>创建时间<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>UPDATE_BY <span class="token operator">IS</span> <span class="token string">&#39;更新者;
COMMENT ON COLUMN T_SYS_USER.UPDATE_TIME IS &#39;</span>更新时间<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>REMARK <span class="token operator">IS</span> &#39;备注<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","python-db-ddl.html.vue"]]);export{r as default};
