<template>
	<div>
		<button @click="show = !show">
			Toggle
		</button>
		<transition 
		name="custom-classes-transition"
		enter-active-class="animated tada"
		leave-active-class="animated bounceOutRight">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'animate1',
		data(){
			return {
				show:true
			}
		}
	}
</script>

<style>
	@import '../node_modules/animate.css/animate.min.css'
</style>