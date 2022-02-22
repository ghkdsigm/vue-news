<template>
   <div v-for="ask in this.$store.state.asks" :key="ask">{{ask.title}}</div>
</template>

<script>
// import { fetchAskList } from '../api/index.js'

export default {
    // data(){
    //     return{
    //         asks:[]
    //     }
    // },
    // created(){
    //     fetchAskList()
    //     .then(res => this.asks = res.data)
    //     .catch(error => console.log(error))
    // }
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>