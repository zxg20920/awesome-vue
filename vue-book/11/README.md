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
