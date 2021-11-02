<template>
  <div class="aside">
     <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router>
      <template v-for="(nav, navIndex) in navList">
        <el-submenu
          :index="nav.router || navIndex"
          v-if="nav.subNavList"
          :key="navIndex">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ nav.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
            v-for="(subNav, subNavIndex) in nav.subNavList"
            :key="subNavIndex"
            :index="subNav.router">{{ subNav.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          :index="nav.router || navIndex"
          :key="navIndex"
          v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{ nav.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

const initNavList = [
  {
    title: '权限管理',
    icon: '',
    router: '',
    subNavList: [
      {
        title: '角色管理',
        icon: '',
        router: '/role'
      },
      {
        title: '菜单管理',
        icon: '',
        router: '/menu'
      },
      {
        title: '资源管理',
        icon: '',
        router: '/resource'
      }
    ]
  },
  {
    title: '课程管理',
    icon: '',
    router: '/course'
  },
  {
    title: '用户管理',
    icon: '',
    router: '/user'
  },
  {
    title: '广告管理',
    icon: '',
    router: '',
    subNavList: [
      {
        title: '广告列表',
        icon: '',
        router: '/advert'
      },
      {
        title: '广告位列表',
        icon: '',
        router: '/advert-space'
      }
    ]
  }
]

export default Vue.extend({
  name: 'AppAside',
  data () {
    return {
      navList: initNavList
    }
  },
  methods: {
    handleOpen (key: string, router: string) {
      console.log(key, router)
    },
    handleClose (key: string, router: string) {
      console.log(key, router)
    }
  }
})
</script>

<style>

</style>
