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

<style>

</style>
