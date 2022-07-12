<template>
    <div>
        <header>
            <span @click="$router.push('/list')">送至:{{show}}</span>
        </header>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data(){
        return{
            swiperOption:{}
        }
    },
    computed:{
        ...mapGetters(['show'])
    },
    methods:{
        ...mapActions(['getList'])
    },
    created(){
        this.getList()
    }
}
</script>



