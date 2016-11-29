<template>
  <div class="top-container">
	<div class="top-bar clearfix">
		<div class="topbar-nav">
			<ul class="nav-wrap">
				<li class="nav">Vue2 练习</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
	*{
		margin:0;
		padding:0;
	}
	.top-container{
		position:fixed;
		top:0;
		left:0;
		width: 100%;
		height: 60px;
		background-color: #fff;
		box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0, 0, 0, 0.12);
		z-index:100;
		font-family: "Microsoft Yahei", sans-serif;
		.topbar-nav{
			float: left;
			margin-left:40px;
			display: inline-block;
			height: 60px;
			line-height: 60px;
			overflow: hidden;
			.nav{
				font-size: 20px;
			}
		}
	}

</style>
