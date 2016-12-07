<template>
  <div class="layout">
    <el-row>
      <el-col :span="24"> 
        <div class="bg-purple-dark">
          col 24
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12"> 
        <div class="bg-purple-dark">
          col 12
        </div>
      </el-col>
      <el-col :span="12"> 
        <div class="bg-purple-dark">
          col 12
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8"> 
        <div class="bg-purple-dark">
          col 8
        </div>
      </el-col>
      <el-col :span="8"> 
        <div class="bg-purple-dark">
          col 8
        </div>
      </el-col>
      <el-col :span="8"> 
        <div class="bg-purple-dark">
          col 8
        </div>
      </el-col>
    </el-row>
    <!-- 增加间隔 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <!-- 偏移 -->
      <el-col :span="6" :offset="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <!-- flex布局 -->
    <el-row type="flex">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg-purple-dark">
          col-6
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'layout',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row{
  margin-bottom: 10px;
}
.bg-purple-dark{
  background-color: #99a9bf;
  border-radius: 100px;
}
</style>
