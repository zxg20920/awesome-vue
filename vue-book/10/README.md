学习笔记
---

实例属性：

组件树访问

$parent

$root

$children

$refs (v-ref)

DOM访问

$el

$els (v-el)

数据访问

$data

$options

---

实例方法

内部插入

$appendTo

把el所指定的DOM元素或者片段插入到目标元素中

$appendTo(elementOrSelector,callback)

同级插入

$after

把el所指定的DOM元素或者片段插入到目标元素之后

$before

把el所指定的DOM元素或者片段插入到目标元素之前

删除

$remove

把el所指定的DOM元素或者片段插入从DOM中删除

$remove(callback)

延迟

$nextTick

在下次DOM更新循环后执行指定的回调函数。使用该方法可以保证DOM中的内容已经和最新数据保持同步。

$nextTick(callback)

---

Event

触发

$dispatch

用来派发事件，即现在当前的实例触发，沿着父链一层一层向上，如果对于的监听函数返回false就停止

$broadcast

用来广播事件，遍历当前实例的$children，如果对于的监听函数返回false就停止

$emit

用来触发事件，可以传参数

监听

$on

监听实例上的自定义事件，有callback

$once

监听实例上的自定义事件，只触发一次，有callback

删除

$off

没有参数，删除所有的事件监听器。提供了一个，删除对应的所有监听器。两个提供，删除对应事件的对应回调
