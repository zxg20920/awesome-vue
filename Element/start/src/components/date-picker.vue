<template>
	<div class="date-picker">
		<el-date-picker
			v-model="value1"
			type="date"
			placeholder="选择日期"
			:picker-options="pickerOptions0">
		</el-date-picker>
		<br>
		<el-date-picker
			align="right"
			v-model="value2"
			type="date"
			placeholder="选择日期"
			:picker-options="pickerOptions1">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value3"
			type="week"
			format="yyyy 第 WW 周"
			placeholder="选择周">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value4"
			type="month"
			placeholder="选择月">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value5"
			type="year"
			align="right"
			placeholder="选择年">
		</el-date-picker>
		<br>
		<el-date-picker
			v-model="value6"
			type="daterange"
			placeholder="选择日期范围"
			style="width:220px">
		</el-date-picker>
		<p>{{value6}}</p>
		<br>
		<el-date-picker
			v-model="value7"
			type="daterange"
			align="right"
			placeholder="选择日期范围"
			:picker-options="pickerOptions2"
			style="width:220px">
		</el-date-picker>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				value3:'',
				value4:'',
				value5:'',
				value6:'',
				value7:'',
				value1:'',
				pickerOptions0:{
					disabledDate(time){
						return time.getTime()<Date.now()-8.64e7
					}
				},
				value2:'',
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