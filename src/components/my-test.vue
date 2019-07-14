<template>
    <div class="container">
        <p>头部</p>
        <p class="contain">
            <!-- 在卡槽里协定习时时备用的 -->
            <slot name="con" :test='testName'></slot>
        </p>
        <p>底部<slot name='fot'></slot></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testName:'组件内部数据'
        }
    }

}
</script>

<style>

</style>
