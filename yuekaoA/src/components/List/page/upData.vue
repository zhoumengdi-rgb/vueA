<template>
    <div class="updata">
        <header><span>编辑地址</span></header>
        <div>
            <p><span>联系人</span><input type="text" placeholder="请输入联系人"
                v-model="ren"
            ></p>
            <p><span>手机号</span><input type="text" placeholder="请输入手机号"
                v-model="tel"
            ></p>
            <p><span>详细地址</span><input type="text" placeholder="请输入详细地址"
                v-model="ress"
            ></p>
            <button @click="ok">完成</button>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            ren:"",
            tel:"",
            ress:""
        }
    },
    methods: {
        ok(){
               
        }
    },
}
</script>

<style lang="">
    header{
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
</style>

