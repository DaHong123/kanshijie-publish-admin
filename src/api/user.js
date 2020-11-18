// 存放用户请求相关模块

import request from '@/utils/request.js'
// 用户信息
export const login = data => {
  return request({
    method: 'post',
    url: '/mp/v1_0/authorizations',
    // data用来设置post请求体
    data
    // 登录成功
  })
}
// 获取用户信息
export const getUserProfile = () => {
  return request({
    method: 'get',
    url: '/mp/v1_0/user/profile',
    // 后端要求把需要授权的用户身份放到请求头中
    // axios可以通过headers选项设置请求头
    headers: {
      // 属性名和值都得看接口要求
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzcxNjkwNzcsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.Mg8oB5siVdmYD6AdLKbPF7RXYn1q1tdE-Wd2AflPcZ0'
    }
  })
}
// 修改用户信息
// export const updateUser = () => {
// }
