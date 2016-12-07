<template>
  <div id="app">
    <ElInput></ElInput>
    <hr>
    <Checkbox></Checkbox>
    <hr>
    <Radio></Radio>
    <hr>
    <ElButton></ElButton>
    <hr>
    <Icon></Icon>
    <hr>
    <layout></layout>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import Layout from './components/layout'
import Icon from './components/icon'
import ElButton from './components/button'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import ElInput from './components/input'

export default {
  name: 'app',
  components: {
    Layout,
    Icon,
    ElButton,
    Radio,
    Checkbox,
    ElInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
