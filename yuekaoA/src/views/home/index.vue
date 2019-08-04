<template>
    <div class="wrap">
        <!-- 二级路由出口 home下的  --> 
        <router-view class="con"></router-view>

        <footer>
            <router-link to="/home/send" tag="span">派送</router-link>
            <router-link to="/home/classify" tag="span">分类</router-link>
            <router-link to="/home/vip" tag="span">会员</router-link>
            <router-link to="/home/car" tag="span">购物车</router-link>
            <router-link to="/home/my" tag="span">我的</router-link>
        </footer>
    </div>
</template>


<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con{
        width: 100%;
         flex: 1;
    }
    footer{
        width: 100%;
        height: 44px;
        display: flex;
        background: #eee;
        justify-content: space-around;
        align-items: center;
    }
    .active{
        color:red;
    }

</style>
