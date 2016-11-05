<template>
	<div>
		<input type="text" 
		v-model="newTodo"
		@keyup.enter="addNewTodo"
		placeholder="Add a todo" 
		>
		<ul>
			<li is="todo"
			v-for="(todo,index) in todosList"
			:title="todo"
			@remove="todosList.splice(index,1)"></li>
		</ul>
		<p>{{todosList}}</p>
	</div>
</template>

<script>
	import todo from './todo.vue';
	export default {
		name:'todos',
		components:{
			todo
		},
		data(){
			return {
				newTodo:'',
				todosList:[
					'learn js',
					'learn vue'
				]
			}
		},
		methods:{
			addNewTodo(){
				this.todosList.push(this.newTodo);
				this.newTodo = '';
			}
		}
	}
</script>