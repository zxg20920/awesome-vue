<template>
	<span>{{tweeningValue}}</span>
</template>

<script>
	import TWEEN from 'tween.js'

	export default{
		name:'calc-animated',
		props:{
			value:{
				type:Number,
				required:true
			}
		},
		data(){
			return {
				tweeningValue:0
			}
		},
		mounted:function(){
			this.tween(0,this.value);
		},
		watch:{
			value(newVal,oldVal){
				this.tween(oldVal,newVal)
			}
		},
		methods:{
			tween(startValue,endValue){
				var vm = this;
				function animate(time){
					requestAnimationFrame(animate);
					TWEEN.update(time);
				}
				new TWEEN.Tween({
					tweeningValue:startValue
				}).to({
					tweeningValue:endValue
				},500)
				.onUpdate(function(){
					vm.tweeningValue = this.tweeningValue.toFixed(0)
				})
				.start();

				animate();
			}
		}
	}
</script>