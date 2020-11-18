<template>
  <div class="login-container">

    <!-- 配置form表单验证 -->
    <el-form class="login-form" ref="login-form" :model="user" :rules="formRules">
  <el-form-item prop="mobile">
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <el-form-item prop="code">
    <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
  </el-form-item>
   <el-form-item prop="agree">
   <el-checkbox class="" v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
   </el-form-item>
  <el-form-item>
    <el-button class="login-btn" type="primary" @click="onLogin" :loading="loginLoading">登录</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {
  },
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: false // 一开始默认是false，是否同意
      },
      // checked: false,
      loginLoading: false,
      formRules: { // 表单验证规则配置
        // 要验证的数据名称：规则列表[]
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|4|5|6|7|8|9]\d{9}$/, message: '请输入正确的手机号码格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'change' }
        ],
        agree: [
          { // 自定义校验规则
          // 验证通过：callback（）
          // 验证失败：callback（new Error（'错误信息'))
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选同意用户协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据(根据接口要求绑定数据)
      // const user = this.user
      // 表单验证（validate方法是异步的）
      this.$refs['login-form'].validate(valid => {
      // 如果表单验证失败
        if (!valid) {
          return
        }
        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 开启登录中 loading.....
      this.loginLoading = true
      login(this.user).then(res => {
        console.log(res)
        // 登录成功消息提示
        this.$message({
          message: '登录成功',
          center: true,
          type: 'success'
        })
        // 关闭loading
        this.loginLoading = false

        // 跳转到首页
        this.$router.push('/')
        // 另一种写法：
        // this.$router.push({
        //   name: 'home'
        // })

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
