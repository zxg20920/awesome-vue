<template>
	<div class="checkbox">
		<el-checkbox v-model="check">备选</el-checkbox>
		<el-checkbox v-model="check2">备选</el-checkbox>
		<el-checkbox v-model="check3" disabled>备选</el-checkbox>
		<br>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="1">1</el-checkbox>
			<el-checkbox label="2">2</el-checkbox>
			<el-checkbox label="3">3</el-checkbox>
			<el-checkbox label="4" disabled>4</el-checkbox>
			<el-checkbox label="5">5</el-checkbox>
		</el-checkbox-group>
		<p>{{checkList}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				check:true,
				check2:false,
				check3:false,
				checkList:[]
			}
		}
	}
</script>

<style scoped>
	
</style>