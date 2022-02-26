import { createStore } from "vuex"
import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index.js'


export default createStore({
    // module!5
    namespaced: true,

    // data!
    state:() => ({
        asks:[],  
        jobs:[],
        news:[],
        user:{},
        item:[],
    }),
    mutations:{
        SET_NEWS(state, data){
            state.news = data;
        },
        SET_ASKS(state, data){
            state.asks = data;
        },
        SET_JOBS(state, data){
            state.jobs = data;
        },
        SET_USER(state, data){
            state.user = data;
        },
        SET_ITEM(state, data){
            state.item = data;
        },
    },
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
            .then(res => {
                context.commit('SET_NEWS', res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_ASK(context){
            fetchAskList()
            .then(res => {
                context.commit('SET_ASKS', res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data)
            })
            .catch(error => {
                console.log(error);
            })
        },        
        FETCH_USER({commit}, name){
            fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_ITEM({commit}, id){
            fetchItemInfo(id)
            .then(({data}) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
})