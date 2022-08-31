import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as l}from"./app.a2c1bbbb.js";const s={},t=l(`<h1 id="mockito\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#mockito\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> Mockito\u4F7F\u7528\u6848\u4F8B</h1><h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><ul><li><p>\u9700\u6C42</p><p>\u6709\u4E00\u6BB5\u4E1A\u52A1\u903B\u8F91\uFF0C\u9700\u8981\u5BF9\u7ED9\u5B9A\u7684\u8BF7\u6C42\uFF08\u5982http\u8BF7\u6C42\uFF09\u505A\u5904\u7406\uFF0C</p></li><li><p>\u5E38\u89C4\u6D4B\u8BD5:</p><ol><li>\u9700\u8981\u628A\u4EE3\u7801\u90E8\u7F72\u5230\u670D\u52A1\u5668\u4E0A</li><li>\u8FD8\u9700\u8981\u6784\u9020\u5E76\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\uFF08\u524D\u7AEF\u914D\u5408/postman\u8FDB\u884C\u6D4B\u8BD5\uFF09</li><li>\u7B49\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u624D\u80FD\u4EA4\u7ED9\u4E1A\u52A1\u5904\u7406</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E1A\u52A1\u4EE3\u7801
public boolean handleRequest(HttpServletRequest request) {
  String module = request.getParameter(&quot;module&quot;);
  if (&quot;live&quot;.equals(module)) {
      // handle module live request
      return true;
  } else if (&quot;user&quot;.equals(module)) {
      // handle module user request
      return true;
  }
  return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5E38\u89C4\u6D4B\u8BD5\u9762\u4E34\u7684\u95EE\u9898</p></li></ul><ol><li>\u64CD\u4F5C\u7E41\u7410</li><li>\u4E00\u6B21\u6027\u64CD\u4F5C</li><li>\u7B49\u5F85\u65F6\u95F4\u6F2B\u957F</li></ol><h2 id="\u4F7F\u7528mockito\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528mockito\u6D4B\u8BD5" aria-hidden="true">#</a> \u4F7F\u7528Mockito\u6D4B\u8BD5</h2><p>\u56DE\u987E\u9700\u6C42\uFF1A</p><pre><code>1. \u7ED9\u5B9A\u4E00\u4E2A\u7279\u5B9A\u7684\u8F93\u5165\uFF08\u8FD9\u4E2A\u8F93\u5165\u53EF\u80FD\u4E0D\u5BB9\u6613\u521B\u5EFA\uFF0C\u5982HttpRequest\uFF09
2. \u9A8C\u8BC1\u5176\u8F93\u51FA\u7ED3\u679C\u662F\u5426\u6B63\u786E
</code></pre><p>\u4E5F\u5C31\u662F\u6211\u4EEC\u9A8C\u8BC1\u7684\u8FC7\u7A0B\u8981\u5C3D\u53EF\u80FD\u7684\u65B9\u4FBF\uFF0C<strong>\u800C\u4E0D\u662F\u628A\u5927\u90E8\u5206\u65F6\u95F4\u8017\u8D39\u5728\u9A8C\u8BC1\u8FC7\u7A0B</strong>\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Test
public void handleRequestTestLive() throws Exception {
    HttpServletRequest request = mock(HttpServletRequest);
    when(request.getParameter(&quot;module&quot;)).thenReturn(&quot;live&quot;);
    
    boolean ret = handleRequest(request);
    assertEquals(true, ret)
}

@Test
public void handleRequestTestUser() throws Exception {
    HttpServletRequest request = mock(HttpServletRequest);
    when(request.getParameter(&quot;module&quot;)).thenReturn(&quot;user&quot;);
    
    boolean ret = handleRequest(request);
    assertEquals(true, ret)
}

@Test
public void handleRequestTestNone() throws Exception {
    HttpServletRequest request = mock(HttpServletRequest);
    when(request.getParameter(&quot;module&quot;)).thenReturn(null);
    
    boolean ret = handleRequest(request);
    assertEquals(false, ret)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u9996\u5148\u6A21\u62DF\u51FA\u4E00\u4E2A\u5047\u5BF9\u8C61</p></li><li><p>\u8BBE\u7F6E\u8FD9\u4E2A\u5047\u5BF9\u8C61\u884C\u4E3A</p><p>\u8FD9\u4E2A\u884C\u4E3A\u4F1A\u5F71\u54CD\u6211\u4EEC\u4E1A\u52A1\u7ED3\u679C</p></li><li><p>\u9A8C\u8BC1<strong>\u5404\u79CD\u8F93\u5165</strong>\u4E0B\uFF0C\u4E1A\u52A1\u903B\u8F91\u6B63\u786E\u6027</p></li></ol>`,10),r=[t];function d(u,a){return i(),n("div",null,r)}var c=e(s,[["render",d],["__file","Mockito\u4F7F\u7528\u6848\u4F8B.html.vue"]]);export{c as default};
