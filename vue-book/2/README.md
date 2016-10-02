学习笔记
---

    {{*msg}}

只渲染一次，后面变化也不渲染了

    {{msg}} => v-text

会把全部当做字符串来处理

我们可以写 
    
    {{{msg}}} => v-html

可以在html标签里面使用文本插值

    <p data-id="{{msg}}"></p>

---

可以接受表达式：

    {{cents/1000}}

    {{true ? 1:0}}

    {{example.split(',')}}

不可以接受语句：

    {{var logo = 'msg'}}

    {{if(true) return 'msg'}}

可以增加过滤：

    {{example | toUpperCase}}

也可以串联过滤器：

    {{example | filterA | filterB}}

过滤器还可以加入参数：

    {{example | filterA a b}}

---

    Vue.config.delimiters = ["<%", "%>"];
    Vue.config.unsafeDelimiters = ["<$", "$>"];

可以把

    {{ }} => <% %>

    {{{}}} => <$ $>
