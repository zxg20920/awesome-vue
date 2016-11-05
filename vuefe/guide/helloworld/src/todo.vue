<template>
	<li>
		{{title}}
		<button @click="$emit('remove')">X</button>
	</li>
</template>

<script>
	export default {
		name:'todo',
		props:['title'],
		data(){
			return {

			}
		}
	}
</script>