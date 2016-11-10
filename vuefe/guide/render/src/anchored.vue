<!-- <template>
	<div>
		<h1 v-if="level===1">
			<slot></slot>
		</h1>
		<h2 v-if="level===2">
			<slot></slot>
		</h2>
		<h3 v-if="level===3">
			<slot></slot>
		</h3>
	</div>
</template> -->

<script>
	var getChildrenTextContent = (children) => {
		return children.map((node)=>{
			return node.children
			 ? getChildrenTextContent(node.children)
			 : node.text
		}).join(' ')
	}
	export default {
		name:'anchored',
		props:{
			level:{
				type:Number,
				required:true
			}
		},
		render(createElement){
			var headingId = getChildrenTextContent(this.$slots.default)
							.toLowerCase()
							.replace(/\W+/g,'-')
							.replace(/(^\-|-$)/g,'');
			return createElement(
				'h' + this.level,  // tag name 标签
				// this.$slots.default  // 子组建中的阵列
				[
					createElement('a',{
						attrs:{
							name:headingId,
							href:'#'+headingId
						}
					},this.$slots.default)
				]
			)
		},
		data(){
			return {

			}
		}
	}
</script>