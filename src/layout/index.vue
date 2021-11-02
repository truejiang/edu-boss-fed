<template>
  <el-container>
  <el-aside width="200px">
    <app-aside></app-aside>
  </el-aside>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'

export default Vue.extend({
  components: { AppAside, AppHeader }
})
</script>

<style lang="scss" >
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-aside {
  background-color: #D3DCE6;
}
.el-header {
  background-color: #fff;
}
.el-main {
  background-color: #e9eef3;
}
</style>
