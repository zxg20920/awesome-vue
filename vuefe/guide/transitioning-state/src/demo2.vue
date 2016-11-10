<template>
	<div>
		<input type="text"
		v-model="colorQuery"
		@keyup.enter="updateColor"
		placeholder="Enter a color">
		<button @click="updateColor">Update</button>
		<p>Preview:</p>
		<span
			:style="{backgroundColor:tweenedCSSColor}"
			class="preview"
		></span>
		<p>{{tweenedCSSColor}}</p>
	</div>
</template>

<script>
	import TWEEN from 'tween.js'
	import Color from './color.js'

	export default {
		name:'demo2',
		data(){
			return {
				colorQuery:'',
				color:{
					red:0,
					green:0,
					blue:0,
					alpha:1
				},
				tweenedColor:{}
			}
		},
		created(){
			this.tweenedColor = Object.assign({},this.color);

			console.log(this.tweenedColor);
			
		},
		methods:{
			updateColor(){
				this.color = new Color(this.colorQuery).toRGB();
				this.colorQuery = '';

				// console.log(this.color.toString());
			}
		},
		watch:{
			color(){
				console.log(this.color.toString());
				var vm = this;
				function animate(time){

					requestAnimationFrame(animate);
					TWEEN.update(time);
				}
				new TWEEN.Tween(this.tweenedColor)
					.to(this.color,750)
					.start();

				animate();
			}
		},
		computed:{
			tweenedCSSColor(){
				return new Color({
					red:this.tweenedColor.red,
					green:this.tweenedColor.green,
					blue:this.tweenedColor.blue,
					alpha:this.tweenedColor.alpha
				}).toCSS();
			}
		}
	}
</script>

<style>
	.preview{
		display: inline-block;
		width: 50px;
		height: 50px;
	}
</style>