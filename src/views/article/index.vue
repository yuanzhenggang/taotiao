<template>
    <div class="artiale-contain">
        <!-- 筛选容器 -->
        <el-card>
            <!-- 第一个卡片有头部和内容 -->
            <div slot="header">
                <!-- //面包屑导航 -->
               <!-- 挖坑留名 -->
               <my-bread>内容管理</my-bread>
            </div>
            <!-- 筛选容器内容 -->
            <el-form v-model="reqParams" size='small' label-width="80px">

                <el-form-item label="状态：">
                    <!-- label:是选全部的时候status的值 -->
                    <el-radio-group v-model="reqParams.status">
                        <el-radio :label="null" >全部</el-radio>
                        <el-radio :label="0">草稿</el-radio>
                        <el-radio :label="1">待审核</el-radio>
                        <el-radio :label="0">审核通过</el-radio>
                        <el-radio :label="1">审核失败</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="频道">
                    <el-select v-model="reqParams.channel_id">
                        <el-option
                            v-for="item in channelOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间">
                     <el-date-picker
                            v-model="dateValues"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">筛选</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- 结果容器 -->
        <el-card>
           
        </el-card>

    </div>
</template>

<script>
import MyBread from '@/components/my-bread.vue'
export default {
    components: {MyBread},
    data () {
        return {
            // reqParams是提交后台的筛选条件 传参
            // 数据默认数null还是''的区别：去过是null将不会发生字段
            reqParams : {
                status:null, // 这是默认选择第一项
                channel_id: null,
                begin_pubdate:null,
                end_pubdate:null
            },
            //默认频道数据
            changelOptions:[{ name:'Java', id:1}],
            //日期控件的数据
            dareValues:[]
        }
    }

}
</script>

<style>
/* 注意：为啥要用.el-card，这不是一个标签吗？因为el_card是一个组件，解析后是div 或span */
.el-card {
    margin-bottom:25px;
}
</style>
