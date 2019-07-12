<template>
    <div class="container">
        <!-- <img src="../../assets/images/welcome.jpg" alt=""> -->
    </div>
</template>

<script>
export default {
    //测试一下，没有其他含义
 created () {
     this.$http.get('articles').then(res => console.log(res.data))
 }
}
</script>

<style>
    .container {
        width:100%;
        height: 100%;
        background: url('../../assets/images/welcome.jpg') no-repeat center
    }
</style>
