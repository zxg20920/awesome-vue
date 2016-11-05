<template>
	<div>
		<div v-for="(value,key,index) in object">
			{{index}}. {{key}} : {{value}}
		</div>
		<div>
			<span v-for="n in 10">{{n}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'loop',
		data(){
			return {
				object: {
			      FirstName: 'John',
			      LastName: 'Doe',
			      Age: 30
			    }
			}
		}
	}
</script>