<template>
	<div>
		<svg width="200" height="200">
			<polygon :points="points"></polygon>
			<circle cx="100" cy="100" r="90"></circle>
		</svg>
		<label>Sides:</label>
		<input type="range" min="3" max="500" v-model.number="sides">
		<label>Minimum Radius:{{minRadius}}%</label>
		<input type="range" min="0" max="90" v-model.number="minRadius">
		<label>Update Interval:{{updateInterval}} milliseconds</label>
		<input type="range" min="10" max="2000" v-model.number="updateInterval">
	</div>
</template>

<script>
	export default{
		name:'dosvg',
		data(){
			var defaultSides = 10;
			var stats = Array.apply(null,{length:defaultSides}).map(()=>{return 100});
			console.log(stats);
			return {
				stats:stats,
				points:generatePoints(stats),
				sides:defaultSides,
				minRadius:50,
				interval:null,
				updateInterval:500
			}
		},
		watch:{
			sides(newSides,oldSides){
				var sidesDifference = newSides - oldSides;
				if(sidesDifference>0){
					for(var i = 0 ; i < sidesDifference;i++){
						this.stats.push(this.newRandomValue())
					}
				}else{
					var absoluteSidesDifference = Math.abs(sidesDifference);
					for(var i = 1; i <=absoluteSidesDifference;i++){
						this.stats.shift();
					}
				}
			}
		}
	}

	function valueToPoint(value,index,total){
		var x = 0,
			y = -value*0.9,
			angle = Math.PI*2/total*index,
			cos = Math.cos(angle),
			sin = Math.sin(angle),
			tx = x*cos-y*sin+100,
			ty = x*sin + y*cos+100;

		return {
			x:tx,
			y:ty
		}
	}
	function generatePoints(stats){
		var total = stats.length;

		return stats.map((stat,index)=>{
			var point = valueToPoint(stat,index,total);
			return point.x+','+point.y
		}).join(' ');
	}
</script>

<style>
	svg{
		margin:0 auto;
		display: block;
	}
	polygon{
		fill:#41b883;
	}
	circle{
		fill:transparent;
		stroke:#35495e;
	}
	input[type="range"] {
	  display: block;
	  width: 100%;
	  margin-bottom: 15px;
	}

</style>