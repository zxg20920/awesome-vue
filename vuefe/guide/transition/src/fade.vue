<template>
	<div>
		fade in: <input type="range" v-model="fadeInDuration" :max="maxFadeDuration">
		fade out: <input type="range" v-model="fadeOutDuration" :max="maxFadeDuration">
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@leave="leave">
			<p v-if="show">hello</p>
		</transition>
		<button @click="stop=true">Stop it</button>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		name:'fade',
		data(){
			return {
				show:true,
				fadeInDuration:1000,
				fadeOutDuration:1000,
				maxFadeDuration:1500,
				stop:false
			}
		},
		mounted(){
			this.show=false;
		},
		methods:{
			beforeEnter(el){
				el.style.opacity=0;
			},
			enter(el,done){
				var vm = this;
				Velocity(el,{
					opacity:1
				},{
					duration:this.fadeInDuration,
					complete(){
						done();
						if(!vm.stop){
							vm.show=false;
						}
					}
				})
			},
			leave(el,done){
				var vm = this;
				Velocity(el,{
					opacity:0
				},{
					duration:this.fadeOutDuration,
					complete(){
						done();
						vm.show=true;
					}
				})
			}
		}
	}
</script>