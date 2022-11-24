import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as s,b as i,d as c,e as r,r as l}from"./app.80b5c814.js";const u={},o=c(`<h1 id="rabbitmq\u7BA1\u7406-\u7528\u6237\u7BA1\u7406-user" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7BA1\u7406-\u7528\u6237\u7BA1\u7406-user" aria-hidden="true">#</a> RabbitMQ\u7BA1\u7406 - \u7528\u6237\u7BA1\u7406\uFF1Auser</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728 RabbitMQ \u4E2D\uFF0C<strong>\u7528\u6237</strong> \u662F\u8BBF\u95EE\u63A7\u5236\uFF08Access Control\uFF09\u7684\u57FA\u672C\u5355\u5143\uFF0C\u4E14\u7528\u6237\u53EF\u4EE5\u8DE8\u8D8A\u591A\u4E2A vhost \u6388\u6743\u3002\u4F7F\u7528\u6807\u51C6\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u6765\u8BA4\u8BC1\u7528\u6237\u3002</p><h2 id="_2-\u521B\u5EFA\u7528\u6237-add-user" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u7528\u6237-add-user" aria-hidden="true">#</a> 2. \u521B\u5EFA\u7528\u6237\uFF1Aadd_user</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl add_user <span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl add_user test1 123456</span>
Creating user <span class="token string">&quot;test1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4FEE\u6539\u5BC6\u7801-change-password" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539\u5BC6\u7801-change-password" aria-hidden="true">#</a> 3. \u4FEE\u6539\u5BC6\u7801\uFF1Achange_password</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl change_password <span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token punctuation">{</span>newpassword<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl change_password test1 1234567</span>
Changing password <span class="token keyword">for</span> user <span class="token string">&quot;test1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6E05\u9664\u5BC6\u7801-clear-password" tabindex="-1"><a class="header-anchor" href="#_4-\u6E05\u9664\u5BC6\u7801-clear-password" aria-hidden="true">#</a> 4. \u6E05\u9664\u5BC6\u7801\uFF1Aclear_password</h2><p>\u6E05\u9664\u5BC6\u7801\u540E\uFF0C\u8BE5\u7528\u6237\u5C31\u4E0D\u80FD\u4F7F\u7528\u5BC6\u7801\u767B\u5F55\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl change_password <span class="token punctuation">{</span>username<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-\u9A8C\u8BC1\u7528\u6237\u5BC6\u7801-authenticate-user" tabindex="-1"><a class="header-anchor" href="#_5-\u9A8C\u8BC1\u7528\u6237\u5BC6\u7801-authenticate-user" aria-hidden="true">#</a> 5. \u9A8C\u8BC1\u7528\u6237\u5BC6\u7801\uFF1Aauthenticate_user</h2><p>\u53EF\u4EE5\u9A8C\u8BC1\u7528\u6237\u5BC6\u7801\u662F\u5426\u5339\u914D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl authenticate_user <span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token punctuation">{</span>newpassword<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9A8C\u8BC1\u5931\u8D25</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl authenticate_user test1 123456</span>
Authenticating user <span class="token string">&quot;test1&quot;</span>
Error: failed to authenticate user <span class="token string">&quot;test1&quot;</span>

<span class="token comment"># \u9A8C\u8BC1\u6210</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl authenticate_user test1 1234567</span>
Authenticating user <span class="token string">&quot;test1&quot;</span>
Success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u7528\u6237\u5217\u8868-list-users" tabindex="-1"><a class="header-anchor" href="#_6-\u7528\u6237\u5217\u8868-list-users" aria-hidden="true">#</a> 6. \u7528\u6237\u5217\u8868\uFF1Alist_users</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl list_users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_users</span>
Listing <span class="token function">users</span>
test1   <span class="token punctuation">[</span><span class="token punctuation">]</span>
admin   <span class="token punctuation">[</span>administrator<span class="token punctuation">]</span>
guest   <span class="token punctuation">[</span>administrator<span class="token punctuation">]</span>
<span class="token comment"># \u53EF\u4EE5\u770B\u5230\u6709 3 \u4E2A\u7528\u6237</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u62EC\u53F7\u4E2D\u7684\u662F\u89D2\u8272\u7C7B\u578B\uFF0C\u6709 5 \u79CD\uFF1A</p><ul><li><p>none\uFF1A\u65E0\u4EFB\u4F55\u89D2\u8272\u3002\u65B0\u521B\u5EFA\u7684\u4E3A\u8FD9\u79CD\uFF1B\u600E\u4E48\u663E\u793A\u7684\u662F\u6CA1\u6709\uFF1F</p></li><li><p>management\uFF1A\u53EF\u4EE5\u8BBF\u95EE web \u7BA1\u7406\u9875\u9762\uFF08\u4E0B\u4E00\u8282\u8BB2\u89E3\uFF09</p></li><li><p>policymaker\uFF1A</p><p>\u5305\u542B management \u7684\u6240\u6709\u6743\u9650\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7BA1\u7406 <strong>\u7B56\u7565\uFF08Policy\uFF09</strong> \u548C <strong>\u53C2\u6570\uFF08Parameter\uFF09</strong>\uFF08\u4E0B\u4E00\u7AE0\u8BB2\u89E3\uFF09</p></li><li><p>monitoring\uFF1A</p><p>\u5305\u542B management \u7684\u6240\u6709\u6743\u9650\uFF0C\u5E76\u4E14\u53EF\u4EE5\u770B\u5230\u6240\u6709\u8FDE\u63A5\u3001\u4FE1\u9053\u53CA\u8282\u70B9\u76F8\u5173\u7684\u4FE1\u606F</p></li><li><p>administrator\uFF1A</p><p>\u6700\u9AD8\u6743\u9650\uFF0C\u5305\u542B monitoring \u7684\u6240\u6709\u6743\u9650\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7BA1\u7406\u7528\u6237\u3001\u865A\u62DF\u4E3B\u673A\u3001\u6743\u9650\u3001\u7B56\u7565\u3001\u53C2\u6570\u7B49\u3002</p></li></ul><h2 id="_7-\u8BBE\u7F6E\u89D2\u8272-set-user-tags" tabindex="-1"><a class="header-anchor" href="#_7-\u8BBE\u7F6E\u89D2\u8272-set-user-tags" aria-hidden="true">#</a> 7. \u8BBE\u7F6E\u89D2\u8272 set_user_tags</h2><p>\u53EF\u4EE5\u7ED9\u7528\u6237\u8BBE\u7F6E\u89D2\u8272\uFF0C\u8BBE\u7F6E\u89D2\u8272\u4E4B\u540E\uFF0C\u73B0\u6709\u7684\u89D2\u8272\u4F1A\u88AB\u5220\u9664\u3002\u4E5F\u5C31\u662F\u4EE5\u8FD9\u6B21\u8BBE\u7F6E\u7684\u89D2\u8272\u4E3A\u51C6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl set_user_tags <span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token punctuation">{</span>tag <span class="token punctuation">..</span>.<span class="token punctuation">}</span>

tag \uFF1A\u8868\u793A\u8981\u8BBE\u7F6E\u7684\u89D2\u8272\uFF0C\u53EF\u4EE5\u591A\u4E2A\uFF0C\u7A7A\u683C\u9694\u5F00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_user_tags test1 management policymaker</span>
Setting tags <span class="token keyword">for</span> user <span class="token string">&quot;test1&quot;</span> to <span class="token punctuation">[</span>management,policymaker<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B\u7528\u6237\uFF0C\u5C31\u770B\u5230\u4E86\u521A\u521A\u8BBE\u7F6E\u7684\u89D2\u8272</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_users</span>
Listing <span class="token function">users</span>
test1   <span class="token punctuation">[</span>management, policymaker<span class="token punctuation">]</span>
admin   <span class="token punctuation">[</span>administrator<span class="token punctuation">]</span>
guest   <span class="token punctuation">[</span>administrator<span class="token punctuation">]</span>

<span class="token comment"># \u4E0D\u5E26 tag \u5C31\u662F\u6E05\u7A7A\u89D2\u8272</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_user_tags test1</span>
Setting tags <span class="token keyword">for</span> user <span class="token string">&quot;test1&quot;</span> to <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u5220\u9664\u7528\u6237-delete-user" tabindex="-1"><a class="header-anchor" href="#_8-\u5220\u9664\u7528\u6237-delete-user" aria-hidden="true">#</a> 8. \u5220\u9664\u7528\u6237\uFF1Adelete_user</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl delete_user <span class="token punctuation">{</span>username<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl delete_user test1</span>
Deleting user <span class="token string">&quot;test1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,35),d={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/05/02.html",target:"_blank",rel:"noopener noreferrer"},p=r("\u7528\u6237\u7BA1\u7406\uFF1Auser");function m(b,v){const n=l("ExternalLinkIcon");return e(),t("div",null,[o,s("p",null,[s("a",d,[p,i(n)])])])}const k=a(u,[["render",m],["__file","rabbitmq-y-manange-user.html.vue"]]);export{k as default};
