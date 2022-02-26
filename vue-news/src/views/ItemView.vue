<template>
  <div>      
      <h2> {{itemInfo.title}} </h2>
      write by <router-link :to="`/user/${itemInfo.user}`">{{itemInfo.user}}</router-link>
      <div v-html="itemInfo.content">  </div>
      <!-- item -->
  </div>
</template>

<script>
export default {
    computed:{
        itemInfo(){
            return this.$store.state.item;
        }
    },
    created(){       
        const itemname = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemname)
    }
}
</script>

<style>

</style>