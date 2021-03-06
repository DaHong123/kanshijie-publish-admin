import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载element组件库
import ElementUI from 'element-ui'
// 加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 全局注册element组件
Vue.use(ElementUI)

Vue.config.productionTip = false

// 创建vue根实例
// 把router配置到根实例中
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
