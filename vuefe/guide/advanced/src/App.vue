<template>
  <div id="app">
   <fade></fade>
   <hr>
   <list></list>
   <transition-1></transition-1>
   <animation-1></animation-1>
   <animate-1></animate-1>
   <velocity></velocity>
   <hr>
   <sudoku></sudoku>
   <hr>
  </div>
</template>

<script>
import transition1 from './transition-1.vue'
import animation1 from './animation-1.vue'
import animate1 from './animate.vue'
import velocity from './velocity.vue'
import sudoku from './sudoku.vue'
import list from './list.vue'
import fade from './fade.vue'
export default {
  components:{
    transition1,
    animation1,
    animate1,
    velocity,
    sudoku,
    list,
    fade
  },
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
</style>
