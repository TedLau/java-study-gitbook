const e=JSON.parse('{"key":"v-c57df758","path":"/think/deepImpression/drag-sort-problem.html","title":"拖拽排序后端设计思路","lang":"zh-CN","frontmatter":{"description":"1. 背景 最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序 2. 需求描述 允许更改元素的排序；; 允许新增数据，并更新现有排序；; 允许删除数据，并更新现有排序。; 3. 解决方案 3.1 方案一： 全量更新元素位置 适用场景：; 排序元素数量较少 原理：; 每个元素拥有一个字段，表示元素当前排序...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/think/deepImpression/drag-sort-problem.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"拖拽排序后端设计思路"}],["meta",{"property":"og:description","content":"1. 背景 最近做项目的时候遇到一个问题，就是前端需要对图片材料等拖拽排序。但排序后怎么存储？是批量保存所有顺序 2. 需求描述 允许更改元素的排序；; 允许新增数据，并更新现有排序；; 允许删除数据，并更新现有排序。; 3. 解决方案 3.1 方案一： 全量更新元素位置 适用场景：; 排序元素数量较少 原理：; 每个元素拥有一个字段，表示元素当前排序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 需求描述","slug":"_2-需求描述","link":"#_2-需求描述","children":[]},{"level":2,"title":"3. 解决方案","slug":"_3-解决方案","link":"#_3-解决方案","children":[{"level":3,"title":"3.1 方案一： 全量更新元素位置","slug":"_3-1-方案一-全量更新元素位置","link":"#_3-1-方案一-全量更新元素位置","children":[]},{"level":3,"title":"3.2 取中值法（推荐）","slug":"_3-2-取中值法-推荐","link":"#_3-2-取中值法-推荐","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1662476765000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"think/deepImpression/drag-sort-problem.md","localizedDate":"2022年9月6日","autoDesc":true}');export{e as data};