//封装axios
import axios from 'axios'

const instance = axios.create({
    baseURL:'http://ttapi.research.itcast.cn/mp/v1_0',
    headers: {
        Authorization:'Bearer' + JSON.parse(Window.sessionStorage.getItem('hm-toutiao')).token
    }
})
//添加请求拦截器
instance.interceptors.request.use(config=> {
    const user = window.sessionStorage.getItem('hm-toutiao')
    if(user) {
        //config请求配置对象
        //修改config
        config.headers =  {
            Authorization: 'Bearer '+JSON.parse(user).token
        }
    }
    return config
},error=>{
    return Promise.reject(error)
});

//响应拦截器
instance.interceptors.response.use(response => {
    return response
},(error)=> {
    //做自己的事情 错误的时候
    //如果响应状态码是401 拦截到登录页面
    //error.response.status  状态码
    if(error.response.status === 401) {
        //hash是location提供获取#后的地址的属性
        location.hash = '#/login'
    }
    return Promise.reject(error)
})
//导出
export default instance