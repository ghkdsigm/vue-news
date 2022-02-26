<template>
  <div id="app">
    <Header />
    <transition name="page">
      <RouterView />
    </transition>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  components:{
    Header
  }
}
</script>

<style>
body{
  margin:0; padding:0;
}
a {
  color:#34495e;
  text-decoration: none;
}
a:hover {color:#42b883;text-decoration: underline;}
.page-enter-active, .page-leave-active{
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
