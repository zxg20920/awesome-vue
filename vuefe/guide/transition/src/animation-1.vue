<template>
	<div>
		<button @click="show=!show">
			Toggle
		</button>
		<transition name="bounce">
			<p v-if="show">Hello</p>
		</transition>

	</div>
</template>

<script>
	export default{
		name:'animation-1',
		data(){
			return {
				show:true
			}
		}
	}
</script>

<style lang="less">
	.bounce-enter-active{
		animation:bounce-in 0.5s;
	}
	.bounce-leave-active{
		animation:bounce-out 0.5s;
	}
	@keyframes bounce-in{
		0%{
			transform:scale(0)
		}
		50%{
			transform:scale(1.5);
		}
		100%{
			transform:scale(1);
		}
	}
	@keyframes bounce-out{
		0%{
			transform:scale(1);
		}
		50%{
			transform:scale(1.5);
		}
		100%{
			transform:scale(0);
		}
	}
</style>