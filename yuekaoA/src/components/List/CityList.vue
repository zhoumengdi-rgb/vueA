<template>
    <div>
        <Header></Header>
    </div>
</template>
<script>
import Header from "./page/header"
export default {
    data(){
        return{

        }
    },
    components:{
        Header
    },
    mounted() {
        this.axios.get("api/")
    },
}
</script>
