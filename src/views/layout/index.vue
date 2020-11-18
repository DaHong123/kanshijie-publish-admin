<template>
<el-container class="layout-container">
  <!-- 左侧侧边栏 -->
  <el-aside class="aside" width="200px">
    <!-- 引入aside这个组件 -->
    <app-aside class="aside-menu"/>
  </el-aside>
  <el-container>
    <!-- 头部导航栏 -->
    <el-header class="header">
      <div>
        <i class="el-icon-s-fold"></i>
      <span>看世界,实时了解你身边的新闻咨询</span>
      </div>
    <el-dropdown>
      <div class="avatar-wrap">
        <img class="avatar" :src="user.photo" alt="">
        <span>{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人设置</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-header>
    <!-- 中间主体结构 -->
    <el-main class="main">
    <!-- 子路由出口 首页渲染的路由出口-->
    <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import AppAside from './components/aside'
import { getUserProfile } from '@/api/user'
export default {
  name: 'LayoutIndex',
  // 将单独拿出去的aside组件加载进来
  components: {
    AppAside
  },
  data () {
    return {
      user: {} // 当前用户登录信息
    }
  },
  // 初始化请求加载
  created () {
    // 组件初始化好，获取用户资料
    this.loadUserProfile()
  },
  mounted () {

  },
  methods: {
    loadUserProfile () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    }
  }
}
</script>

<style lang='less' scoped>
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  .aside-menu {
    height: 100%;
  }
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.avatar-wrap {
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
