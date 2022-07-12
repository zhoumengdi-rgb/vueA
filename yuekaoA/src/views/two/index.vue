<template>
    <div>
        <List :list="list"></List>
    </div>
</template>

<script>
import List from "./list"
export default {
    components:{
        List
    },
    name:"Parent",
    data(){
        return{
            list: [{
                name: "经济",
                children: [{
                    name: "如家",
                    children: [{
                        name: "上江路-如家"
                        },
                        {
                        name: "望江路-如家"
                        }]
                    },{
                    name: "7天",
                    children: [{
                        name: "长江路-7天"
                        },
                        {
                        name: "望江路-7天"
                        }]
                    }]
            }]    
        }
    }
}
</script>
