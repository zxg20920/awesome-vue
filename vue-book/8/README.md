学习笔记
---

transition特性可以和

    v-if

    v-show

    v-for (只有插入和删除时候触发，使用vue-animated-list插件)

    动态组件（见组件一章）

比如 transition =  'boom';

.boom-transition 会始终在元素上 

.boom-enter 定义进入过渡的开始状态，只应用一帧，然后立刻删除

.boom-leave 定义离开过渡的的结束状态，在离开过滤开始时生效，结束以后删除

默认是 

.v-transition
    
.v-enter

.v-leave

---

可以声明自定义的CSS过渡类名，这些自定义的类名会覆盖默认的类名。

当需要和地方三的CSS动画库 比如 Animate.css 配合的时候，代码：

    <div v-show="ok" class="animated" transition="bounce">Watch me bounce></div>

    Vue.transition('bounce',{
        enterClass:'bounceInLeft',
        leaveClass:'bounceOutRight'
    });
