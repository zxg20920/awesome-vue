<template>
	<div class="radio">
	 <el-radio v-model="radio" label="1">备选1</el-radio>
	 <el-radio v-model="radio" label="2">备选2</el-radio>
	 <p>{{radio}}</p>
	 <hr>
	 <el-radio disabled v-model="radio1" label="1">备选1</el-radio>
	 <el-radio disabled v-model="radio1" label="2">备选2</el-radio>
	 <p>{{radio1}}</p>
	 <hr>
	 <el-radio-group v-model="radio2">
		<el-radio :label="1">1</el-radio>
		<el-radio :label="2">2</el-radio>
		<el-radio :label="3">3</el-radio>
	 </el-radio-group>
	 <p>{{radio2}}</p>
	 <hr>
	 <el-radio-group v-model="radio3" @change="onChange">
		<el-radio-button label="上海">上海</el-radio-button>
		<el-radio-button label="深圳">深圳</el-radio-button>
		<el-radio-button label="广州">广州</el-radio-button>
		<el-radio-button label="北京" disabled>北京</el-radio-button>
	 </el-radio-group>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				radio:'1',
				radio1:'1',
				radio2:2,
				radio3:'深圳'
			}
		},
		methods:{
			onChange(value){
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	
</style>