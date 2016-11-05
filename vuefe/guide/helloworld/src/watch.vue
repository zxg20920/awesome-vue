<template>
	<div>
		<p>Ask a yes/no question</p>
		<input type="text" v-model="question">
		<p>{{answer}}</p>
		<img :src="answerImg">
	</div>
</template>

<script>
	import axios from 'axios'
	import lodash from 'lodash'
	export default {
		name:'watch',
		data () {
			return {
				question:'',
				answer:'I cannot give you an answer until you ask a question!',
				answerImg:''
			}
		},
		watch:{
			question (newQuestion) {
				this.answer = 'Waiting for you to stop typing';
				this.getAnswer();
			}
		},
		methods:{
			getAnswer:_.debounce(
				function(){
					var vm = this;
					if(this.question.indexOf('?') === -1){
						vm.answer = 'Questions usually contain a question mark.';
						return;
					}
					vm.answer = 'Thinking...';
					axios.get('https://yesno.wtf/api')
						.then(function(res){
							vm.answer = _.capitalize(res.data.answer)
							vm.answerImg = res.data.image
						})
						.catch(function(err){
							vm.answer = 'Error!Could not reach the API.' + err;
						})
				},500
			)
		}
	}
</script>