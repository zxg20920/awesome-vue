Vue.js权威指南 学习记录
---

书本问题：
---

P1
    
    中间部分：
    
    MVX模式是什么 => MVC

    MVC框架最早出现在Jaca领域 => Java

P10

    例子写的是 v-for="tab in tabs"

    可是后面的例子的data里面是 todos => tabs

P14

    最上面

    <div v-bind:click="action"></div>

    这个是事件绑定

    改成 v-on:click 或者 简写的 @click

P15

    v-if 的案例

    <p v-if=greeting">Hello</p> 少了一个引号 => v-if="greeting"

P20

    v-repeat部分都可以不看，已过期

    全部跳过，从P29的 v-for 开始看

P29

    v-for例子里面， class="item-{{$index}}" 写重复了，去掉一个

    new Vue({
        ...
        parentMessage:'滴滴'
        ...
    });

    parentMessage 应该放在 data 属性里面

P30

    组件 v-for 例子上面写了一段话：

    对于组件内的<p>标签，我们可以使用<slot>

    去掉。

P30

    最上面的 $splice 例子都错了，改成下面这样：

    var index = demo.items.indexOf(item);
    if(index !== -1){
        demo.items.splice(index,1);
    }

    而 demo.items.$remove(0)

    也应该改成：

    demo.items.$remove(item)
