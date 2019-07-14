<template>
    <!-- 全屏容器 -->
    <div class="login-container">
        <!-- 卡片 -->
        <el-card class="box-card">
            <img src="../../assets/images/logo_index.png" alt="">
                <!-- 表单 -->
            <el-form  ref="loginForm" :model="loginForm" status-icon :rules="loginRules" >
                <!-- 表单项 -->
                <el-form-item  prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item  prop="code">
                    <!-- 提交按钮 -->
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style='width:280px'></el-input>
                    <el-button style="folat:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                   <el-checkbox v-model="checked"></el-checkbox>
                    我已阅读同意<el-link :underline="false" type="primary">隐私条款</el-link>
                    和<el-link :underline="false" type="primary">用户协议</el-link>
                 </el-form-item>
                <el-form-item>
                    <el-button style="width:100%" type="primary" @click="login()">登录</el-button>
                </el-form-item> 
            </el-form>
        </el-card>

    </div>
</template>

<script>

export default {
    data() {
        //用来校验电话号码的
        const checkMobile = (rule,value,callback)=> {
            //校验逻辑
            if(/^1[3-9]\d{9}$/.test(value)) {
                callback()//成功是不传人任何参数
            }else {
                callback(new Error('手机号码不正确'))
            }
        }
        return {
          //表单对应的对象
            loginForm: {
                mobile:'13911111111',
                code:'246810'
            },

            //表单的校验规则对象
            loginRules: {
                mobile:[
                    {required:true,message:"电话号码必填", trigger:"blur"},
                    {validator:checkMobile,trigger:"blur"}
                ],
                code:[
                    {require:true, message:"验证码必须填",trigger:"blur"},
                    {len:6,message:'必须是6位',trigger:'blur'}
                ]
            },
            //默认选中复选框
            checked:true,
        }
    },
    methods: {
    login () {
    //   整体表单的校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 如果校验成功 进行登录
          this.$http
          .post(
            'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            this.loginForm
          )
          .then(res=> {
              //res是相应对象  包含相应数据
              const data = res.data
            //   后台的返回json内容  已经转换成了对象
            console.log(data)
            //登录成功后：做什么事情？
            //1.跳转到首页
            //2.保存到登录状态
            //2.1  保存登录后返回的用户信息 包含token
            //2.2  使用sessionStorage 来存储 关闭浏览器会话失效
            window.sessionStorage.setItem('hm-toutiao',JSON.stringify(res.data.data))
            //setItem设置是key value的形式，都必须是字符串的形式
            this.$router.push('/')
          })
          .catch(()=> {
              this.$message.error('用户名或密码错误')
          })
        }
      })


    //将以上代码修改成await和async的方式
    //做校验的代码
    // this.$refs.loginForm.validate(async valid=> {
    //     if(valid) {
    //         //当接口调用失败的时候，以下代码出现异常
    //         // try{ 业务逻辑 }catch(err) {错误信息}
    //         try {
    //             const res = await this.$http.post('authorizations',this.loginFrom)
    //             window.sessionStorage.setItem('hm-toutiao',JSON.stringify(res.data.data))
    //             this.$router.push('/')
    //         }catch (err) {
    //             this.$message.error('用户名或密码错误')
    //         }
    //     }
    // })
     }
  }
}

</script>

<style scoped lang='less'>
.login-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    background:url(../../assets/images/login_bg.jpg) no-repeat center /cover;
    .box-card {
        width: 450px;
        height: 350px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        img {
            display: block;
            width: 200px;
            margin: 0 auto;
        }
    }    
}

</style>

