<template>
	<div>
		<button @click="show=!show">
			Toggle
		</button>
		<transition name="fade">
			<p v-if="show">Hello</p>
		</transition>
		<transition name="slide-fade">
			<p v-if="show">Hello</p>
		</transition>
		<hr>
		<transition name="fade" mode="out-in">
			<!-- <button v-if="isEditing" key="save">
				Save
			</button>
			<button v-else key="edit">
				Edit
			</button> -->
			<button :key="isEditing" @click="isEditing = !isEditing">
				{{isEditing?'Save':'Edit'}}
			</button>
		</transition>
		<hr>
		<transition name="component-fade" mode="out-in">
			<component :is="view"></component>
		</transition>
		<div>
			<input type="radio" v-model="view" value="v-a">A
			<input type="radio" v-model="view" value="v-b">B
		</div>
		<hr>
		<button @click="add">Add</button>
		<button @click="remove">Remove</button>
		<button @click="shuffle">shuffle</button>

		<transition-group name="list" tag="p" style="position:relative">
			<span v-for="item in items" :key="item" class="list-item">
				{{item}}
			</span>
		</transition-group>
		<hr>
<!-- 		<transition-group name="flip-list" tag="ul">
			<li v-for="item in items" :key="item">
				{{item}}
			</li>
		</transition-group> -->
	</div>
</template>

<script>
	import lodash from 'lodash'
	export default{
		name:'transition-1',
		data(){
			return {
				view:'v-a',
				show:true,
				isEditing:true,
				items:[1,2,3,4,5,6,7,8,9],
				nextNum:10
			}
		},
		components:{
			'v-a':{
				template:'<div>Component A</div>'
			},
			'v-b':{
				template:'<div>Component B</div>'
			}
		},
		methods:{
			randomIndex(){
				return Math.floor(Math.random()*this.items.length);
			},
			add(){
				this.items.splice(this.randomIndex(),0,this.nextNum++);
			},
			remove(){
				this.items.splice(this.randomIndex(),1)
			},
			shuffle(){
				this.items = _.shuffle(this.items);
			}
		}
	}
</script>

<style lang="less">
	// .flip-list-move{
	// 	transition:transform 2s;		
	// }
	// .list-move{
	// 	transition:transform 1s;
	// }
	.list-item{
		display:inline-block;
		margin-right: 10px;
		transition:all 1s;
	}
	// .list-enter-active,.list-leave-active{
	// 	transition:all 1s;
	// }
	.list-enter,.list-leave-active{
		opacity:0;
		transform:translateY(30px);
	}
	.list-leave-active{
		position: absolute;
	}
	.fade-enter-active,.fade-leave-active{
		transition:opacity 0.5s;
	}
	.fade-enter,.fade-leave-active{
		opacity:0;
	}
	.slide-fade-enter-active{
		transition:all 0.3s ease;
	}
	.slide-fade-leave-active{
		transition:all 0.8s cubic-bezier(1.0,0.5,0.8,1.0);
	}
	.slide-fade-enter,.slide-fade-leave-active{
		padding-left:10px;
		opacity:0;
	}
	.component-fade-enter-active,.component-fade-leave-active{
		transition:opacity 0.5s;
	}
	.component-fade-enter,.component-fade-leave-active{
		opacity:0;
	}

</style>