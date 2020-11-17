import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false

// 创建vue根实例
// 把router配置到根实例中
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
