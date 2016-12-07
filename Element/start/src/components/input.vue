<template>
	<div class="input">
		<el-input placeholder="请输入内容" v-model="input"></el-input>
		<el-input placeholder="请输入内容" v-model="input" disabled></el-input>
		{{input}}	
		<el-input placeholder="请选择日期" v-model="input2" icon="time"
			@click="handleIconClick"></el-input>
		<hr>
		<el-input
			type="textarea"
			:autosize="{minRows:4,maxRows:8}"
			placeholder="请输入内容"
			v-model="textarea"
		></el-input>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				input:'',
				input2:'',
				textarea:''
			}
		},
		methods:{
			handleIconClick(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	
</style>