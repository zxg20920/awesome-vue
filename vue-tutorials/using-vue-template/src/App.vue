<template>
    <div id="app">
        <h2>This is a grid component built with <a href="https://github.com/bear-front-end/vue-template">vue-template</a></h2>
        <div id="searchBar">
            Search<input type="text" v-model="searchQuery"/>
        </div>
        <grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" :sort-order="sortOrder"></grid>
    </div>
</template>

<script>
import grid from './components/grid.vue';
export default {
    data(){
        return {
            searchQuery:'',
            sortOrder:{
                column:'name',
                order:1
            },
            gridColumns:['name','power'],
            gridData: [{
                    name: 'Chuck Norris',
                    power: Infinity
                }, {
                    name: 'Bruce Lee',
                    power: 9000
                }, {
                    name: 'Jackie Chan',
                    power: 7000
                }, {
                    name: 'Jet Li',
                    power: 8000
                }]
        }
    },
    components:{
        grid
    }
}
</script>

<style lang="less">
    body{
        text-align: center;
    }
    @import url('./assets/style.less');
</style>
