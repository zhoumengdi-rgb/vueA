<template>
    <div>
        <Header></Header>
        <Cont :res="res"></Cont>
        
    </div>
</template>
<script>
import Header from "./page/header"
import Cont from "./page/cont"

export default {
    data(){
        return{
            res:[]
        }
    },
    components:{
        Header,
        Cont
    },
    mounted() {
        this.axios.get("api/address.json ").then(res =>{
            this.res = res.data;
        })
    },
}
</script>
