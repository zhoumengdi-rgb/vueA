<template>
    <div class="itembox">
        <p>历史地址</p>
        <div class="item" v-for="(item,index) in res" :key="index">
            <p>{{item.name}}</p>
            <p>{{item.tel}}</p>
            <p>{{item.ress}}</p>
        </div>
        <button 
          @click="ToUpdata"
        >新增地址</button>
    </div>
</template>

<script>
export default {
    props:['res'],
    methods: {
        ToUpdata(){
            this.$router.push({
                path:"/updata"
            })
        }
    },
}
</script>
<style lang="">
    .itembox{
        width: 100%;
        height: auto;
    }
    .item{
        width: 100%;
        height: 90px;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        padding-top: 20px;
    }
</style>
