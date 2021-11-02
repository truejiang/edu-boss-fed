<template>
  <div id="app">
    <!-- 根路由路口 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})

</script>

<style lang="scss" scoped>
// @import '~@/styles/variables.scss';
.text {
  color: $success-color;
}
</style>
