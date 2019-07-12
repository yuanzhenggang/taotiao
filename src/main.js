import Vue from 'vue'
import App from './App.vue'
//将所有的导入文件都放在入口文件main.js中
import ElementUI from 'element-ui'
//引入样式
import 'element-ui/lib/theme-chalk/index.css'

//将新建的路由文件在入口文件中导入@代表根目录
import router from '@/routers'

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios
//在全局注册组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  //配置路由
  router,
  render: h => h(App)
}).$mount('#app')
