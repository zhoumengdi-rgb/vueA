<template>
    <div>
        姓名:<input type="text" v-model="obj.name"/>
        电话:<input type="number" v-model="obj.phone"/>
        地址:<select v-model="obj.address">
            <option value="北京">北京</option>
            <option value="陕西">陕西</option>
            <option value="和别">和别</option>
            <option value="上海">上海</option>
        </select>
        详细地址:<input type="text" v-model="obj.detail"/>
        <button @click="addItem">添加</button>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
           obj:{
               name:"",
               phone:"",
               address:"",
               detail:""
           } 
        }
    },
    methods:{
        ...mapActions(['addSync']),
        addItem(){
            this.addSync(this.obj);
            this.$router.go(-1)
        }
    }

}
</script>