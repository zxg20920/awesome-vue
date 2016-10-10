<!-- 支持lang配置多种语言 -->
<!-- 只支持单个template标签 -->
<template>
    <div id="app">
        <p>Welcome</p>
    </div>
</template>

<!-- 默认支持babel 来编译es6语法糖 -->
<!-- 对于7.0及以上的版本，使用babel6 如果使用babel5，需要使用6.x版本 -->
<!-- 支持通过import方法引入其他.vue后缀的组件文本 -->
<!-- 只支持单个script -->
<script>
    export default{

    }
</script>

<!-- 支持lang配置多重预编译语法 -->
<!-- 支持scope属性，这样css只应用到当前组件的元素中，类似于shadow dom，但是不需要任何插件支持 -->
<!-- 可以有多个style -->
<!-- 内置postcss 和 autoprefixer 自动添加浏览器前缀 -->
<style>
    html{
        height: 100%;
    }
</style>

