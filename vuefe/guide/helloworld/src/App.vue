<template>
  <div id="app">
    <p :title="message2">{{message}}</p>
    <p v-if="seen">v-if</p>
    <ul>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ul>
    <button @click="reverseMessage">reverse message</button>
    <input type="text" v-model="message3">
    <p>{{message3}}</p>
    <ul>
      <todo-item v-for="todo in todos" :todo="todo"></todo-item>
    </ul>
  </div>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message:'Hello Vue.js',
      message2:'You loaded this page on ' + new Date(),
      message3:'',
      seen:true,
      todos:[{
          text:'learn js'
        },{
          text:'learn vue'
        },{
          text:'learn something awesome'
        }
      ]
    }
  },
  methods:{
    reverseMessage () {
      this.message = this.message.split('').reverse().join('');
    }
  },
  components:{
    todoItem
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
