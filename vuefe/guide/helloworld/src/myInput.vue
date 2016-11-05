<template>
	<div>
		<label :for="randomId">{{label}}</label>
		<input :id="randomId" :value="value" @input="onInput">
	</div>
</template>

<script>
	export default {
		name:'my-input',
		props:['value','label'],
		data(){
			return {
				randomId:'input-' + Math.random()
			}
		},
		methods:{
			onInput(event){
				this.$emit('input',event.target.value)
			}
		}
	}
</script>