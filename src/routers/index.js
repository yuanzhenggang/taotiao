//导入router对象
import VueRouter from 'vue-router'
//引入vue 文件
import Vue from 'vue'
import login from '@/views/login'

//导入home分支
import Home from '@/views/home'
import Welcome from '@/views/welcome'

//导入404页面
import NotFound from '@/views/404'


//注册
Vue.use(VueRouter)
//初始化路由对象（配置路由规则）
const router = new  VueRouter({
    //规则
    routes:[
        {name:'login',path:'/login',component:login},
        {
            
            path:'/',
            name:'home',
            component:Home,
            children: [
            {path:'/',name:'welcome',component:Welcome}
        ]
        },
        {path:'*',name:'404',component:NotFound}
        //注意别加引号给组件
    ]
})
//注册一个全局的前置导航守卫
// router.beforeEach((to,from,next) => {
//     const user = window.sessionStorage.getItem('hm-toutiao')
//     if(to.path!=='/login'&& !user) return next('/login')
//     next()
// })
//导出
export default router