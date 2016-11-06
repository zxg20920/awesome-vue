<template>
	<div id="demo1">
		<input type="number" v-model.number="number" step="20">
		<p>{{animatedNumber}}</p>
	</div>
</template>

<script>
	import TWEEN from 'tween.js'
	export default {
		name:'demo1',
		data(){
			return {
				number:0,
				animatedNumber:0
			}
		},
		watch:{
			number(newValue,oldValue){
				var vm = this;
				function animate(time){
					requestAnimationFrame(animate);
					TWEEN.update(time);
				}
				new TWEEN.Tween({
					tweeningNumber:oldValue
				}).easing(TWEEN.Easing.Quadratic.Out)
				.to({
					tweeningNumber:newValue
				},500)
				.onUpdate(function(){
					vm.animatedNumber = this.tweeningNumber.toFixed(0);
				})
				.start();

				animate();
			}
		}
	}
</script>