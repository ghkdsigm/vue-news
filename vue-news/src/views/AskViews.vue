<template>
   <div v-for="ask in asks" :key="ask">{{ask.title}}</div>   
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState({
            asks: state => state.asks
        })
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>