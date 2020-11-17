<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="user">
  <el-form-item>
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <el-form-item>
    <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
  </el-form-item>
   <el-form-item>
   <el-checkbox class="" v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
   </el-form-item>
  <el-form-item>
    <el-button class="login-btn" type="primary" @click="onLogin" :loading="loginLoading">登录</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'LoginIndex',
  components: {
  },
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      loginLoading: false
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据(根据接口要求绑定数据)
      const user = this.user
      // 表单验证
      // 验证通过,提交登录
      // 开启登录中 loading.....
      this.loginLoading = true
      request({
        method: 'post',
        url: '/mp/v1_0/authorizations',
        // data用来设置post请求体
        data: user
        // 登录成功
      }).then(res => {
        console.log(res)
        // 登录成功消息提示
        this.$message({
          message: '登录成功',
          center: true,
          type: 'success'
        })
        // 关闭loading
        this.loginLoading = false
        // 登录失败
      }).catch(err => {
        console.log('登录失败', err)
        // 登录失败提示消息
        this.$message({
          message: '登录失败,手机号或验证码错误',
          center: true,
          type: 'error'
        })
        // 关闭loading
        this.loginLoading = false
      })
      // 处理后端响应结果
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("./login_bg(1).jpg") no-repeat;
    background-size: cover;
    .login-form {
      background-color: #fff;
      padding: 50px;
      min-width: 300px;
      .login-btn {
        width: 100%;
      }
    }
}
</style>
