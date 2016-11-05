<template>
	<div>
		<p :class="classObject"></p>
		<p :class="classObject2"></p>
		<p :style="styleObject">styleObject</p>
	</div>
</template>

<script>
	export default{
		name:'styleclass',
		data () {
			return {
				isActive:true,
				error:null,
				classObject:{
					active:true,
					'text-danger':false
				},
				styleObject:{
					color:'red',
					fontSize:'13px'
				}
			}
		},
		computed:{
			classObject2 () {
				return {
					active:this.isActive && !this.error,
					'text-danger':this.error && this.error.type === 'fatal'
				}
			}
		}
	}
</script>