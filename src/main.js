import Vue from 'vue'
import App from './App.vue'
//将所有的导入文件都放在入口文件main.js中
import ElementUI from 'element-ui'
//引入样式
import 'element-ui/lib/theme-chalk/index.css'

//在全局注册组件
Vue.use(ElementUI)

//将新建的路由文件在入口文件中导入@代表根目录
// import router from '@/routers'

// 导入axios
// import axios from 'axios'
// //基准路径
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// // //请求头
// axios.defaults.headers = {
//   // token认证需要字段  值：注意需要加上前缀 ’Bearer ‘
//   Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm-toutiao')).token
// }
// Vue.prototype.$axios = axios

// Vue.config.productionTip = false

new Vue({
  //配置路由
  router,
  render: h => h(App)
}).$mount('#app')
