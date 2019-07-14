import { resolve } from "path";
import Axios from "axios";

// 1.xhr请求
const xhr1 = new XMLHttpRequest()
xhr1.open('get','http://localhost:3000/a')
xhr1.send()
xhr1.oncload = function() {
    const data =  JSON.parse(xhr1.responseText)
    const xhr2 = new XMLHttpRequest()
    xhr2.open('get','http://localhost:3000/b/'+data.id)
    xhr2.send()
    xhr2.onload = function() {
        console.log(xhr2.responseText)
    }
}
// 2.promise的方式
const axios = function(url) {
    return new Promise((resvole,reject)=> {
        const xhr = new XMLHttpRequest()
        xhr.open('get',url)
        xhr.send()
        xhr.onload = function() {
            resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function() {
            reject(new Error('error'))
        }
    })
}
Axios('http://localhost:3000/a')
.then(data => {
    return axios('http://localhost:3000/b'+data.id)
})
.then(data=> {
    console.log(data)
})

// 3.使用async await进行调用。注意await必须在async修饰的函数内使用
    const getData = async function() {
        //1.获取a
        const aData = await axios('http://localhost:3000/a')
        //获取B
        const bData = await axios('http://localhost:3000/b'+aData.id)
        Console.log(bData)
    }
    getData()



