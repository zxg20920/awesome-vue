<template>
	<div class="computed">
		<hr>
		<p>{{message}}</p>
		<p>{{reverseMessage}}</p>
		<p>{{now}}</p>
		<p>{{nowFun()}}</p>
		<div>
			<input type="text" v-model="firstName">
			<input type="text" v-model="lastName">
			<input type="text" v-model="fullName">
		</div>
	</div>
</template>

<script>
	export default {
		name:'computed',
		data () {
			return {
				message:'hello'	,
				firstName:'foo',
				lastName:'bar',
				fullName:'foo bar'
			}
		},
		// watch: {
		// 	firstName (val) {
		// 		this.fullName = val + ' ' + this.lastName
		// 	},
		// 	lastName (val) {
		// 		this.fullName = this.firstName + ' ' + val
		// 	}
		// },
		methods : {
			nowFun () {
				return new Date();
			}
		},
		computed:{
			reverseMessage () {
				return this.message.split('').reverse().join('');
			},
			now () {
				return new Date();
			},
			fullName: {
				get () {
					return this.firstName + ' ' + this.lastName				
				},
				set (newName) {
					var names = newName.split(' ');
					this.firstName = names[0];
					this.lastName = names[names.length - 1];
				}
			}
		}
	}
</script>