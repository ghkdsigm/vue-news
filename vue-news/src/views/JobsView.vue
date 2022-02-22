<template>
   <!-- <div v-for="job in this.$store.state.jobs" :key="job">{{job.title}}</div> -->
   <p v-for="job in this.$store.state.jobs" :key="job">
       <a :href="job.url">
           {{job.title}}
       </a>
   </p>
</template>

<script>
//import { fetchJobsList } from '../api/index.js'

export default {
    created(){
        // fetchJobsList()
        // .then(res => this.jobs = res.data)
        // .catch(error => console.log(error))
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style>