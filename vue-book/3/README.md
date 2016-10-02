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
