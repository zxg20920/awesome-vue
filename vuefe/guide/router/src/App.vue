<template>
  <div id="app">
    <h1>hello App!</h1>
    <p>
      <router-link to="/foo">go to foo</router-link>
      <router-link to="/bar">go to bar</router-link>
    </p>
    <hr>
    <p>
    <!-- 当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。 -->
      <router-link :to="{name:'user',params:{id:'foo'}}">go to user foo</router-link>
      <router-link :to="{name:'user',params:{id:'bar'}}">go to user bar</router-link>
    </p>
    <p>
      <router-link to="/user/foo/post/day1">go to user foo post day1</router-link>
    </p>
    <router-view name="default"></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.router-link-active{
  color:red;
}
</style>
