<template>
  <div id="app">
    <p :title="message2">{{message | capitalize}}</p>
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
    <computed></computed>
    <hr>
    <watch></watch>
    <hr>
    <styleclass></styleclass>
    <hr>
    <loop></loop>
    <hr>
    <todos></todos>
    <hr>
    <p>{{total}}</p>
    <counter @increment="incrementTotal"></counter>
    <counter @increment="incrementTotal"></counter>
    <hr>
    {{someVal}}
    <input type="text" :value="someVal" @input="someVal = $event.target.value">
    <hr>
    <p>{{myInputVal}}</p>
    <my-input label="Message" v-model="myInputVal"></my-input>
  </div>
</template>

<script>
import todoItem from './todoItem.vue'
import computed from './computed.vue'
import watch from './watch.vue'
import styleclass from './style.vue'
import loop from './loop.vue'
import todos from './todos.vue'
import counter from './counter.vue'
import myInput from './myInput.vue'
export default {
  name: 'app',
  components:{
    todoItem,
    computed,
    watch,
    styleclass,
    loop,
    todos,
    counter,
    myInput
  },
  data () {
    return {
      myInputVal:'hello',
      someVal:'',
      total:0,
      msg: 'Welcome to Your Vue.js App',
      message:'hello Vue.js',
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
    },
    incrementTotal (){
      this.total +=1;
    }
  },
  created () {
    console.log('message is : ' + this.message);
  },
  filters:{
    capitalize:function(val){
      if(!val){
        return;
      }
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1); 
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
