<template>
	<button @click="increment">
		{{counter}}
	</button>
</template>

<script>
	export default {
		name:'counter',
		data(){
			return {
				counter:0
			}
		},
		methods:{
			increment(){
				this.counter+=1;
				this.$emit('increment');
			}
		}
	}
</script>