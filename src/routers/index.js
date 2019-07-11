//导入router对象
import VueRouter from 'vue-router'
//引入vue 文件
import Vue from 'vue'
import login from '../views/login'
//注册
Vue.use(VueRouter)
//初始化路由对象（配置路由规则）
const router = new  VueRouter({
    //规则
    routes:[
        {name:'login',path:'/login',component:login}
    ]
})
//导出
export default router