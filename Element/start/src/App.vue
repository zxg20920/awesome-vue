<template>
  <div id="app">
    <DatetimePicker></DatetimePicker>
    <hr>
    <DatePicker></DatePicker>
    <hr>
    <TimePicker></TimePicker>
    <hr>
    <Slider></Slider>
    <hr>
    <ElSwitch></ElSwitch>
    <hr>
    <ElSelect></ElSelect>
    <hr>
    <InputNumber></InputNumber>
    <hr>
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
import InputNumber from './components/input-number'
import ElSelect from './components/select'
import ElSwitch from './components/switch'
import Slider from './components/slider'
import TimePicker from './components/time-picker'
import DatePicker from './components/date-picker'
import DatetimePicker from './components/datetime-picker'

export default {
  name: 'app',
  components: {
    Layout,
    Icon,
    ElButton,
    Radio,
    Checkbox,
    ElInput,
    InputNumber,
    ElSelect,
    ElSwitch,
    Slider,
    TimePicker,
    DatePicker,
    DatetimePicker
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
