<template>
	<div>
		<input type="number" step="20" v-model.number="first">
		+
		<input type="number" step="20" v-model.number="second">
		=
		{{result}}
		<p>
			<calc-animated :value="first"></calc-animated>
			+
			<calc-animated :value="second"></calc-animated>
			=
			<calc-animated :value="result"></calc-animated>
		</p>
	</div>
</template>

<script>
	import calcAnimated from './calc-animated.vue'
	export default {
		name:'calc',
		components:{
			calcAnimated
		},
		data(){
			return{
				first:20,
				second:40
			}
		},
		computed:{
			result(){
				return this.first+this.second;
			}
		}
	}
</script>