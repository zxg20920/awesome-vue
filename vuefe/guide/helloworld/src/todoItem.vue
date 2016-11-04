<template>
	<li>
		{{todo.text}}
	</li>
</template>

<script>
	export default {
		name:'todo-item',
		props:['todo'],
		data (){
			return {

			}
		}
	}
</script>