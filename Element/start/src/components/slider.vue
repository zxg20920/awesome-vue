<template>
	<div class="slider">
		<el-slider v-model="value1"></el-slider>
		<el-slider v-model="value2"></el-slider>
		<el-slider v-model="value3"></el-slider>		
		<el-slider v-model="value4" :step="10"></el-slider>		
		<el-slider v-model="value5" :step="10" show-stops></el-slider>		
		<el-slider v-model="value6" show-input></el-slider>		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				value1:0,
				value2:50,
				value3:42,
				value4:0,
				value5:0,
				value6:0
			}
		}
	}
</script>

<style scoped>
	
</style>