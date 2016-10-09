学习笔记
---

开始学习组件啦

---

数据传递

props

组件通信

slot

---

props默认是单向绑定，父组件的属性变化的时候，传到给子组件，但是反过来不会。
这样防止子组件无意修改父组件的状态。

不过我们可以加上修饰符

.sync

.once

    <child :msg="parentMsg"></child>

    <child :msg.sync="parentMsg"></child>

    <child :msg.once="parentMsg"></child>

---

如果props是一个对象或者数组，那么是按引用传递的，子组件修改了会影响父元素的状态

---

props可以是一个对象，然后指定各种类型的验证

    props:{
        propA:'null',
        propM:[String,Number]
        ...
    }

参考 P114

---

可以给 props 里面写一个 coerce 函数，设置值钱转值

---

直接访问子组件

    <comp v-ref:child></comp>

    <comp v-ref:some-child></comp>

    this.$refs.child

    this.$refs.someChild

---
    
动态绑定组件

    <component :is="currentView"></component>

加上keep-alive ，如果切换出去组件保留在内存中，可以保留它的状态，避免重新渲染

---

activate钩子可以在切入组件前进行一些操作

---

transition-mode 指定他们两个动态组件之间如何过渡

    in-out 新组件先过渡进入，等他过渡完，当前的组件过渡出去

    out-in 和上面相反

---

    <component v-for="item in items"></component>

组件之间的作用域是孤立的，上面的代码无法传递数据到组件内部，我们使用 props

    <component-for="item in items" :item="item" :index="$index"></component-for>

---

生命周期：

init

实例开始初始化时同步调用，这个时候数据观测，事件和watcher都还没初始化

created

实例创建以后同步调用。实例已经解析选项，以为已经建立：数据绑定、计算属性、方法、watcher/时间回调。但是还没有DOM编译，$el还不存在

beforeComplie

在编译开始前调用

compiled

编译结束以后调用。此时所有指令生效，因而数据的变化将处罚DOM更新，但是不担保$el 已插入文档

ready

编译结束和$el第一次插入文档后调用。如在第一次attached钩子之后调用。注意，必须是VUE插入(比如 vm.$appendTo()等方法或指令更新)才能触发 ready钩子

attached

vm.$el插入DOM时候调用。必须是指令或实例方法（如$appendTo()插入），直接操作vm.$el不会触发钩子

...

P137
