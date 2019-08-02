<template>
    <header>
        <span>o</span>
        <span><input type="text" placeholder="送至八维教育"
            @click="Clic"
        ></span>
        <span>城市</span>
    </header>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        Clic(){
            this.$router.push({
                path:"/city"
            })
        }
    },
   
}
</script>
<style>
    header{
        width: 100%;
        height: 44px;
        background: #fcc;
        display: flex;
    }
    header span{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }

</style>