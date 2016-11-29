<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <transition>
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header';
import myNav from './components/nav';
import myFooter from './components/foot';

export default {
  name: 'app',
  components: {
    myHeader,
    myNav,
    myFooter
  }
}
</script>

<style lang="less">
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  ::-webkit-scrollbar{
    width:8px;
    height:8px;
  }
  ::-webkit-scroll-track{
    background-color:#ddd;
  }
  ::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.6);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-button{
    display: #888;
    display: none;
  }
</style>
