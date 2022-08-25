import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.cd971695.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mybatis\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2-\u7EA7\u8054\u67E5\u8BE2-mapper\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#mybatis\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2-\u7EA7\u8054\u67E5\u8BE2-mapper\u6A21\u677F" aria-hidden="true">#</a> Mybatis\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2\uFF08\u7EA7\u8054\u67E5\u8BE2\uFF09Mapper\u6A21\u677F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728\u5B9E\u9645\u751F\u6D3B\u4E2D\u4E00\u5BF9\u591A\u7EA7\u8054\u5173\u7CFB\u6709\u8BB8\u591A\uFF0C\u4F8B\u5982\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u6709\u591A\u4E2A\u8BA2\u5355\uFF0C\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u6709\u591A\u4E2A\u89D2\u8272</p><h2 id="_2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u5B9E\u73B0</h2><h3 id="_2-1-\u591A\u5BF9\u591A\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u591A\u5BF9\u591A\u5B9E\u73B0" aria-hidden="true">#</a> 2.1 \u591A\u5BF9\u591A\u5B9E\u73B0</h3><p>\u4EE5\u4E00\u4E2A\u7528\u6237\u62E5\u6709\u591A\u4E2A\u89D2\u8272\uFF0C\u4E00\u4E2A\u89D2\u8272\u62E5\u6709\u591A\u4E2A\u7528\u6237</p><p>SysUserMapper</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>\n<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>\n<span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>\n<span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zszdevelop.system.mapper.SysUserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_id<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nick_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span>  <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>roles<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.util.List<span class="token punctuation">&quot;</span></span>        <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RoleResult<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RoleResult<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysRole<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>roleId<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_id<span class="token punctuation">&quot;</span></span>        <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>roleName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_name<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_status<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        select u.user_id,  u.user_name, u.nick_name,\n        r.role_id, r.role_name,  r.status as role_status\n        from sys_user u\n		    left join sys_user_role ur on u.user_id = ur.user_id\n		    left join sys_role r on r.role_id = ur.role_id\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Long<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n		where u.user_id = #{userId}\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u591A\u5BF9\u4E00\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-2-\u591A\u5BF9\u4E00\u5B9E\u73B0" aria-hidden="true">#</a> 2.2 \u591A\u5BF9\u4E00\u5B9E\u73B0</h3><p>\u4EE5\u4E00\u4E2A\u7528\u6237\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u5355\u4F4D\uFF0C\u4E00\u4E2A\u5355\u4F4D\u6709\u591A\u4E2A\u7528\u6237</p><p>SysUserMapper</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>\n<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>\n<span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>\n<span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zszdevelop.system.mapper.SysUserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_id<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nick_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept<span class="token punctuation">&quot;</span></span>    <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDept<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptResult<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n  \n  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptResult<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDept<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptId<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span>     <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parentId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent_id<span class="token punctuation">&quot;</span></span>   <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_name<span class="token punctuation">&quot;</span></span>   <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orderNum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>order_num<span class="token punctuation">&quot;</span></span>   <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leader<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leader<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_status<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ancestors<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ancestors<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RoleResult<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysRole<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>roleId<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_id<span class="token punctuation">&quot;</span></span>        <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>roleName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_name<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role_status<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        select u.user_id,  u.user_name, u.nick_name,\n        d.dept_id, d.parent_id, d.dept_name, d.order_num, d.leader, d.status as dept_status,d.ancestors\n        from sys_user u\n		    left join sys_dept d on u.dept_id = d.dept_id\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>\n\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Long<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUserVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n		where u.user_id = #{userId}\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 12);
const _hoisted_13 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}
var Mybatis___Mapper___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mybatis\u4E00\u5BF9\u591AMapper\u6A21\u677F.html.vue"]]);
export { Mybatis___Mapper___html as default };
