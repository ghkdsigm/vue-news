<template>
   <!-- <div v-for="job in this.$store.state.jobs" :key="job">{{job.title}}</div> -->
   <ListItem/>
   <!-- <ul class="news-list">
       <li v-for="item in jobs" :key="item" class="post">
            <div class="points">
                {{item.points || 0}}
            </div>
            <div>
                <p class="news-title">
                    <a :href="item.url">
                        {{item.title}}
                    </a>
                </p>
                <small class="link-title">
                    {{item.time_ago}} by 
                    <a :href="item.url">{{item.domain}}</a>
                </small>
            </div>
       </li>
   </ul> -->
   
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
    components:{
        ListItem
    }
}
</script>

<style scoped>

</style>