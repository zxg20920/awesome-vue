<template>
	<div class="input-number">
		<el-input-number 
			v-model="num1" 
			@change="handleChange"
			:min="1"
			:max="10">
		</el-input-number>
		<el-input-number 
			:disabled="true"
			v-model="num1" 
			@change="handleChange"
			:min="1"
			:max="10">
		</el-input-number>
		<el-input-number 
			:step="2"
			v-model="num2" 
			@change="handleChange"
			:min="1"
			:max="10"
			>
		</el-input-number>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				num1:1,
				num2:1
			}
		},
		methods:{
			handleChange(value){
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	
</style>