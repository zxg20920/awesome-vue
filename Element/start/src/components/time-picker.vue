<template>
	<div class="time-picker">
		<el-time-select
			v-model="value1"
			:picker-options="{
				start:'08:30',
				step:'00:15',
				end:'18:30'
			}"
			placeholder="选择时间">
		</el-time-select>
		<br>
		<el-time-picker
			v-model="value2"
			:picker-options="{
				selectableRange:'18:30:00 - 20:30:00'
			}"
			>
		</el-time-picker>
		<br>
		<el-time-select
			placeholder="开始时间"
			v-model="startTime"
			:picker-options="{
				start:'08:30',
				step:'00:15',
				end:'18:30'
			}"
			>
		</el-time-select>
		<el-time-select
			placeholder="结束时间"
			v-model="endTime"
			:picker-options="{
				start:'08:30',
				step:'00:15',
				end:'18:30',
				minTime:startTime
			}"
			>
		</el-time-select>
		<br>
		<el-time-picker
			is-range
			v-model="value3"
			placeholder="选择时间范围">

		</el-time-picker>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				value1:'',
				value2:new Date(2016,9,10,18,40),
				value3:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],
				startTime:'',
				endTime:''
			}
		}
	}
</script>

<style scoped>
	
</style>