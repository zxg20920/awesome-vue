<template>
	<div class="select">
		<el-select v-model="value" placeholder="请选择">
			<el-option
				v-for="item in options"
				:label="item.label"
				:value="item.value"
				:disabled="item.disabled">
			</el-option>
		</el-select>
		<p>{{value}}</p>
		<br>
		<el-select v-model="value" disabled placeholder="请选择">
			<el-option
				v-for="item in options"
				:label="item.label"
				:value="item.value"
				:disabled="item.disabled">
			</el-option>
		</el-select>
		<p>{{value}}</p>
		<br>
		<el-select v-model="value" clearable placeholder="请选择">
			<el-option
				v-for="item in options"
				:label="item.label"
				:value="item.value"
				:disabled="item.disabled">
			</el-option>
		</el-select>
		<br>
		<el-select v-model="value" placeholder="请选择">
			<el-option
				v-for="item in options"
				:label="item.label"
				:value="item.value"
				:disabled="item.disabled">
				<span style="float:left">{{item.label}}</span>
				<span style="float:right;color:#8492a6;font-size:13px">{{item.value}}</span>
			</el-option>
		</el-select>
		<br>
		<el-select v-model="value2" 
			allow-create 
			filterable 
			multiple 
			placeholder="请选择">
			<el-option
				v-for="item in options"
				:label="item.label"
				:value="item.value"
				:disabled="item.disabled">
			</el-option>
		</el-select>
		<p>{{value2}}</p>
		<br>
		<el-select v-model="value3" placeholder="请选择">
			<el-option-group
				v-for="group in options2"
				:label="group.label">
				<el-option
					v-for="item in group.options"
						:label="item.label"
						:value="item.value">

				</el-option>
			</el-option-group>
		</el-select>
		<br>
		<el-select v-model="value3" filterable placeholder="请选择">
			<el-option-group
				v-for="group in options2"
				:label="group.label">
				<el-option
					v-for="item in group.options"
						:label="item.label"
						:value="item.value">

				</el-option>
			</el-option-group>
		</el-select>
		<br>
		<el-select
			v-model="value4"
			multiple
			filterable
			remote
			placeholder="请输入关键词"
			:remote-method="remoteMethod"
			:loading="loading">
			<el-option
				v-for="item in options3"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				options: [{
          value: '选项1',
          label: '黄金糕',
          disabled:true
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options3:[],
				value:'',
				value2:[],
				value3:'',
				value4:[],
				list:[],
				loading:false,
				states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
			}
		},
		mounted(){
			this.list = this.states.map(item=>{
				return{
					value:item,
					label:item
				}
			})
		},
		methods:{
			remoteMethod(query){
				if(query !== ''){
					this.loading = true
					setTimeout(()=>{
						this.loading = false
						this.options3 = this.list.filter(item=>{
							return item.label.toLowerCase()
								.indexOf(query.toLowerCase()) > -1
						})
					},200)
				}else{
					this.options3 = []
				}
			}
		}
	}
</script>

<style scoped>

</style>