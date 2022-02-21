<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './components/header'

export default {
  components:{
    Header
  }
  ,
  methods:{
    fetchData(){
      
    }
  }
}
</script>

<style>
</style>
