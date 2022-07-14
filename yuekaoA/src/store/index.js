//4个核心
import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
      state:{  //组件间共享的数据
           list:[],
           chooseId:0
      },
      //想修改state的值 必须通过mutations
      mutations:{
           setList(state,list){ //2个参数 1:state  2:触发函数时传的参数
              state.list = list;
           },
           addItem(state,obj){
              state.list.push(obj);
           },
           choose(state,id){
               state.chooseId = id;
           }
      },
      getters:{ //里面也是方法 方法当属性来用
           show(state){ //方法必须return
               let target = state.list.length>0 && state.list.find(item => item.id === state.chooseId); //找对象
                return `${target.detail}`
           }
      },
      actions:{ //对数据进行异步操作(异步任务) 卸载actions里面
        getList({commit}){ //2个参数 1:和store实例有相同的属性和方法
            axios.get('/api/list').then(res =>{
                if(res.data.code === 1){
                    commit("setList",res.data.data)
                    console.log(1111);
                }
            })
        },
        addSync({commit},obj){
            axios.post('/api/add',obj).then(res =>{
                if(res.data.code === 1){
                    commit('addItem',res.data.data)
                }
            })
        }
     }
})

// {
//     id:0,
//     name:"周孟迪",
//     address:"北京",
//     detail:"北京八为",
//     phone:"13422232"
// }
