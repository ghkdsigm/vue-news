import { createStore } from "vuex"
import { fetchAskList, fetchJobsList } from '../api/index.js'


export default createStore({
    // module!5
    namespaced: true,

    // data!
    state:() => ({
        asks:[],  
        jobs:[],
    }),
    mutations:{
        SET_ASKS(state, data){
            state.asks = data;
        },
        SET_JOBS(state, data){
            state.jobs = data;
        },
    },
    actions:{
        FETCH_ASK(context){
            fetchAskList()
            .then(res => {
                context.commit('SET_ASKS', res.data)
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
    }
})