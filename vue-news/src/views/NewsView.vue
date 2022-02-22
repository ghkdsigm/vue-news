<template>
   <div v-for="user in users" :key="user">{{user.title}}</div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
    data(){
        return{
            users:[]
        }
    },
    created(){
        const vm = this;
        fetchNewsList()
        .then(function(res){
            vm.users = res.data;
        })
        .catch(function(error){
            console.log(error);
        })
    }
    // created(){
    //     const vm = this;
    //     axios.get('https://api.hnpwa.com/v0/news/1.json')
    //     .then(function(res){
    //         console.log(res);
    //         vm.users = res.data;
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }
}
</script>

<style>

</style>