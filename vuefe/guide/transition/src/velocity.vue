<template>
	<div>
		<button @click="show=!show">Toggle</button>
		<transition
			@before-enter="beforeEnter",
			@enter="enter"
			@leave="leave"
			:css="false">
			<p v-if="show">Demo</p>
		</transition>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		name:'velocity',
		data(){
			return{
				show:true
			}
		},
		methods:{
			beforeEnter:function(el){
				el.style.opacity=0;
			},
			enter:function(el,done){
				Velocity(el,{
					opacity:1,
					fontSize:'1.4em'
				},{
					duration:300
				});

				Velocity(el,{
					fontSize:'1em'
				},{
					complete:done
				})
			},
			leave:function(el,done){
				Velocity(el,{
					translateX:'15px',
					rotateZ:'50deg'
				},{
					duration:600
				});
				Velocity(el,{
					rotateZ:'100deg'
				},{
					loop:2
				});
				Velocity(el,{
					rotateZ:'45deg',
					translateY:'30px',
					translateX:'30px',
					opacity:0
				},{
					complete:done
				})
			}
		}
	}
</script>