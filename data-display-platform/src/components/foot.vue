<template>
  <footer>
  	<p>Copyright © <span>Cody1991</span> 2016 </p>
  </footer>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
	footer{
		position: fixed;
		bottom:0;
		right: 0;
		left:243px;
		border-top:solid 1px rgba(16,16,16,0.1);
		background-color:rbga(238,238,238,0.6);
		color:#777;
		box-shadow: 0 0 10px #eee;
		p{
			line-height: 40px;
			font-size: 12px;
			margin-left: 24px;
			span{
				color:rgba(0,0,0,0.9);
				font-weight: 700;
			}
		}
	}

</style>
