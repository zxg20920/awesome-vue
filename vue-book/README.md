Vue.js权威指南 学习记录
---

书本问题
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

P59

    例子代码里面的

    methods:{
        click:function(){
            ...
        }
    }

    click 改成 toggleShow

P60
    
    4.3.2 涉及v-repeat的部分跳过不看

P71

    最上面的链式调用，过滤器 reverse 不是内置的，这里会报错

    vue.js:1023 [Vue warn]: Failed to resolve filter: reverse

    后面会讲解自定义过滤器

P96 
    
    我把例子的代码改成下面这样，效果更加明显
    
    Vue.transition('stagger', {
        stagger: function(index) {
            console.log(Math.min(300, index * 50));
            // 设置大点看得出效果
            return Math.max(300, index * 500);
        }
    });

P112

    HTML特性不区分大小写...的例子，

    组件注册里面的 props 数组是 ['myComponent']

    而下面HTML代码里面写的是 

    <child my-message='hello!'></child>

    可以把组件组件的 props 数组改成 ['myMessage']

P114

    最上面的 

    data:function(){
        return {
            info:{
                name:'顺风车'
            }
        }
    }

    这里首先实例不是一个组件，data应该只是一个对象

    接着按照结果的图片，info.name的值应该是 '顺风车、专车'。改成这样：

    data: {
        msg: 'hello world',
        info: {
            name: '顺风车、专车'
        }
    }
