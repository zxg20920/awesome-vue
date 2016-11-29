<template>
  <div class="main_content">
		<div id="difficultpie"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import '../../node_modules/echarts/theme/vintage.js';
export default {
  name: 'difficult',
  data () {
    return {
      chart:null,
      course: ['模电', '都很难', '全不难', '数电', '复变', '电路实验', '大物'],
      courseDiff: [
          {value:13, name:'模电'},
          {value:5, name:'都很难'},
          {value:5, name:'全不难'},
          {value:3, name:'数电'},
          {value:2, name:'复变'},
          {value:2, name:'电路实验'},
          {value:1, name:'大物'}
        ],
       courseBar: [13, 5, 5, 3, 2, 2, 1]
    }
  },
  methods:{
  	drawpie(id){
  		this.chart = echarts.init(document.getElementById(id));
			this.chart.setOption({
				title:{
					text:'课程难度调查',
					left:'center',
					top:10,
					textStyle:{
						fontSize:24,
						fontWeight:400
					},
				},
				tooltip:{
					trigger:'item',
					formatter:"{a} <br/> {b} : {c} ({d}%)"
				},
				toolbox:{
					feature:{
						saveAsImage:{},
						dataView:{}
					},
					right:15,
					top:10
				},
				legend:{
					orient:'vertical',
					left:5,
					top:15,
					data:this.course
				},
				series:[{
					name:'人数',
					type:'pie',
					radius:'70%',
					center:['50%','60%'],
					data:this.courseDiff,
					itemStyle:{
						emphasis:{
							shadowBlur:10,
							shadowOffset:0,
							shadowColor:'rgba(0,0,0,0.5)'
						}
					}
				}]
			})
  	}
  },
  mounted(){
  	this.$nextTick(()=>{
  		this.drawpie('difficultpie');
  	})
  }
}
</script>

<style lang="less">
	#difficultpie{
		position: relative;
		left:50%;
		margin-left: -400px;
		width: 800px;
		height: 600px;
		border:solid #faf6f3 2px;
		box-shadow: 0 0 10px #f7d098;
		border-radius: 10px;
	}
	@media screen and(max-width:1090px){
		#difficultpie{
			position: absolute;
			left:415px;

		}
	}
</style>
