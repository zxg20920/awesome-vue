<template>
  <div id="app">
    <demo1></demo1>
    <hr>
    <demo2></demo2>
    <hr>
    <!-- <dosvg></dosvg> -->
    <calc></calc>
  </div>
</template>

<script>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
// import dosvg from './dosvg.vue'
import calc from './calc.vue'
export default {
  name: 'app',
  components:{
    demo1,
    demo2,
    // dosvg,
    calc
  },
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
</style>
