学习笔记
---

`v-show` 不支持 `template`

`v-if` 有更高的切换消耗，`v-show`有更高的初始化消耗。需要频繁切换用 `v-show` ，运行不太可能变化的用 `v-if`

---

`v-else` 跟在 `v-if`或者`v-show`后面

---

`v-show` 和`v-else` 一起的时候，`v-show`用在组件上，`v-else`因为优先级的原因会出现问题。不要这样做

可以这样：

    <custom-component v-show="condition"></custom-component>
    <p v-show="!condition"></p>

---

`v-model`在 `input` `select` `text` `checkbox` `radio` 上面创建双向数据绑定

---

`v-model` 指令后面可以添加多个参数 (number lazt debounce)

`number` 如果想自动将用户的输入转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个特性 number (不加的话，那个输入框数字的情况下还是字符串)

`lazy` 把`input`的数据改到在`change`事件中发生 (修改input的时候，触发了input事件但是假如了lazy，会在change才变化)

`debounce` 设置一个小的延时，每次敲击以后延时同步输入框的值和数据。如果每次更新要进行高消耗的操作（随时发送ajax请求）

---

`v-for` 得到一个特殊的作用域，类似ng的隔离作用域。在使用组件的时候我们要明确指定 `props` 属性传递数据，否则组件内获取不了数据。

---

应该避免直接设置数据绑定的数组元素，这些变化不会被vue.js检测到，也不会更新视图渲染。 我们可以使用 $set 方法

    <!-- same as `demo.items[0]` but triggers view update -->

    demo.items.$set(0,{childMsg:'Changed!'});


还有$remove

    var index = demo.items.indexOf(item);
    if(index!==-1){
        demo.items.splice(index,1);
    }

    而是：

    demo.items.$remove(item)

---

`filter` `concat` `slice` 返回的数组将是一个不同的实例。我们可以用新的数组替换原来的数组：

    demo.items = demo.items.filter(function(item){
        return item.childMsg.match(/Hello/);
    });

---

有时候可能需要全新的对象来替换数组。默认情况下，v-for通过数据对象的特征来决定对已有作用域和DOM元素的服用程度，这可能导致重新渲染整个列表。

但是，如果没有对象都有唯一的ID属性，可以使用track-by特性给vue.js一个提示，vue.js尽可能复用已有实例：

    {
        items:[
            {
                _uid:'111'
            },
            {
                _uid:'222'
            }
        ]
    }

=>

    <div v-for="item in items" track-by="_uid">

    </div>

替换数组items的时候，如果遇到一个由 _uid:"111"的对象，它知道这个已有对象的作用域和DOM元素

如果没有唯一的键来追踪， 可以用 track-by='$index' ，强制让 v-for 进入复位更新模式：片段不会被移动，简单的以对应索引的新值刷新，这种模式也可以处理数据数组中重复的值。

这让数据替换非常高效，但是也有一定的代价。这个时候DOM节点不再映射数组元素顺序的改变，不能同步临时状态（比如input的值），以及组件的私有方法。所以如果v-for包含了input或子组件，小心使用 track-by='$index'

---

不能检测到下面的变化：

    直接用索引设置元素：如 vm.items[0] = {}

    修改元素的长度： vm.items.length = 0;

使用 

    vm.items.$set(0,{
        childMsg:'Changed'
    });

    设置为一个空数组

---

$add(key,value)
$set(key,value)
$delete(key)

---

使用 filterBy

    <input type="text" v-model="searchText">
    <ul>
        <li v-for="user in users | filterBy searchText in 'name'">
            {{user.name}}
        </li>
    </ul>

---

v-bind 用于响应更新HTML特性，把一个或多个attribute，或一个组件prop动态绑定到表达式

v-bind:src 可以简写成 :src

绑定 class 或者 style ，支持其他类型的值，如数组或对象

---

绑定 prop 的时候， prop 必须在子组件声明，可以用修饰符指定不同的绑定类型：

.sync 双向绑定

.once 单词绑定

.camel 绑定的特性名字转换回驼峰命名，只能用于普通HTML特性的绑定，通常用于绑定用驼峰命名的SVG特性，比如viewBox

---

.stop event.stopPropagation()

.prevent event.preventDefault()

.self 事件从侦听器绑定的元素本身触发才触发回调

.{keyCode|keyAlias}

    esc 27
    tab 9
    enter 13
    space 32
    delete [8,46]
    up 38
    left 37
    right 39
    down 40

---

v-ref

父组件上注册一个子组件的索引，便于直接访问

不需要表达式，必须提供参数id

可以通过父组件的$refs 对象 访问子组件

v-ref 和 v-for一起使用的时候，注册的值是一个数组，包含了所有的子组件，对应于绑定数组；如果v-for使用在一个对象上，注册的值是一个对象，包括所有子组件，对应于绑定的对象

使用 v-ref:some-ref 设置 this.$ref.someRef

---

v-el,为DOM元素注册一个索引，方便通过所属属性的$els访问这个元素。可以使用v-el:some-el设置this.$els.someEl

    <span v-el:msg>hello</span>

    <span v-el:other-msg>world</span>

通过 this.$els获取对应的DOM元素

    this.$els.msg.textContent => hello
    this.$els.otherMsg.textContent => world

---

