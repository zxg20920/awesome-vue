<template>
	<div>
		<input type="text" v-model="query">
		<transition-group
			name="list"
			tag="ul"
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@leave="leave"
		>
			<li v-for="(item,index) in computedList"
				:key="item.msg"
				:data-index="index"
				class="list-item"
			>
				{{item.msg}}
			</li>
		</transition-group>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		name:'list',
		data(){
			return {
				query:'',
				lists:[
					{
						'msg':'Bruce'
					},
					{
						'msg':'jakie'
					},
					{
						'msg':'cody'
					}
				]
			}
		},
		computed:{
			computedList(){
				var vm = this;
				return this.lists.filter( (item) => {
					// console.log(item.msg);
					// console.log(vm.query);
					return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
				})
			}
		},
		methods:{
			beforeEnter(el){
				el.style.opacity = 0;
				el.style.height = 0;
			},
			enter(el,done){
				var delay = el.dataset.index * 150;

				setTimeout(()=>{
					Velocity(
						el,
						{
							opacity:1,
							height:'1.6em'
						},{
							complete:done
						}
					)
				},delay)
			},
			leave(el,done){
				var delay = el.dataset.index*150;
				setTimeout(()=>{
					Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
				},delay);
			}
		}
	}
</script>

<style>
	.list-item{
		display: block;
	}
</style>