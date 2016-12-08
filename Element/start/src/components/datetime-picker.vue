<template>
	<div class="datetime-picker">
		<el-date-picker
			v-model="value1"
			type="datetime"
			placeholder="选择日期时间">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value2"
			type="datetime"
			placeholder="选择日期时间"
			:picker-options="pickerOptions1">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value3"
			type="datetimerange"
			placeholder="选择日期时间"
			style="width:350px;">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value4"
			type="datetimerange"
			placeholder="选择日期时间"
			style="width:350px;"
			:picker-options="pickerOptions2">
		</el-date-picker>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				value1:'',
				value2:'',
				value3:'',
				value4:'',
				pickerOptions1:{
					shortcuts:[{
						text:'今天',
						onClick(picker){
							picker.$emit('pick',new Date())
						}
					},{
						text:'昨天',
						onClick(picker){
							const date = new Date()
							date.setTime(date.getTime() - 3600*1000*24)
							picker.$emit('pick',date)
						}
					},{
						text:'一周前',
						onClick(picker){
							const date = new Date()
							date.setTime(date.getTime()-3600*1000*24*7)
							picker.$emit('pick',date)
						}
					}]
				},
				pickerOptions2:{
					shortcuts:[{
						'text':'最近一周',
						onClick(picker){
							const end = new Date()
							const start = new Date()
							start.setTime(start.getTime() - 3600*1000*24*7)
							picker.$emit('pick',[start,end])
						}
					},{
						'text':'最近一个月',
						onClick(picker){
							const end = new Date()
							const start = new Date()
							start.setTime(start.getTime() - 3600*1000*24*30)
							picker.$emit('pick',[start,end])
						}
					},{
						'text':'最近三个月',
						onClick(picker){
							const end = new Date()
							const start = new Date()
							start.setTime(start.getTime() - 3600*1000*24*30*3)
							picker.$emit('pick',[start,end])
						}
					}]
				}
			}
		}
	}
</script>

<style scoped>
	
</style>