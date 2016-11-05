<template>
	<div>
		<button @click="shuffle">Shuffle</button>
		<transition-group name="cell" tag="div" class="container">
			<div v-for="cell in cells" :key="cell.id" class="cell">
				{{cell.number}}
			</div>
		</transition-group>
	</div>
</template>

<script>
	import lodash from 'lodash'
	export default {
		name:'sudoku',
		data(){
			return {
				cells:Array.apply(null,{length:81})
					.map((_,index)=>{
						return {
							id:index,
							number:index % 9 + 1
						}
					})
			}
		},
		methods:{
			shuffle(){
				this.cells = _.shuffle(this.cells)
			}
		}
	}
</script>

<style lang="less">
	.container{
		display: flex;
		width: 238px;
		margin-top:10px;
		flex-wrap: wrap;
		.cell{
			width:25px;
			height: 25px;
			display:flex;
			align-items: center;
			justify-content: space-around;
			border:1px solid #aaa;
			margin-right: -1px;
			margin-bottom: -1px;
			&:nth-child(3n){
				margin-right:0;
			}
			&:nth-child(27n){
				margin-bottom:0;
			}
		}
		.cell-move{
			transition:transform 1s;
		}
	}
</style>