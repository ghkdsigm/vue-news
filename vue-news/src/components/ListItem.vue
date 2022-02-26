<template>
   <!-- <div v-for="user in users" :key="user">{{user.title}}</div> -->
   <ul class="news-list">
       <li v-for="item in listItems" :key="item" class="post">
            <div class="points">
                {{item.points || 0}}
            </div>
            <div>
                <!--타이틀영역-->
                <p class="news-title">
                    <template v-if="item.domain">
                        <a :href="item.url">
                            {{item.title}}
                        </a>
                    </template>   
                    <template v-else>
                        <router-link :to="`/item/${item.id}`">
                            {{item.title}}
                        </router-link>
                    </template>  
                </p>
                <small class="link-title">
                    {{item.time_ago}} by 
                    <router-link v-if="item.user === ''" :to="`/user/${item.user}`"  class="link-text">{{item.user}}</router-link>
                    <a :href="item.url" v-else>
                        {{item.domain}}
                    </a>
                </small>
            </div>
       </li>
   </ul>
</template>

<script>
// import { mapState } from 'vuex'
export default {    
    created(){
        const name = this.$route.name;
        const dispatch = this.$store.dispatch;        
        if(name === 'news'){
            dispatch('FETCH_NEWS')
        }
        else if(name === 'ask'){
            dispatch('FETCH_ASK')
        }
        else if(name === 'jobs'){
            dispatch('FETCH_JOBS')
        }
    },
    computed:{
        listItems(){
            const name = this.$route.name;
            const store = this.$store.state;
            if(name === 'news'){
                return store.news;
            }
            else if(name === 'ask'){
                return store.asks;
            }
            else if(name === 'jobs'){
                return store.jobs;
            }
        }
    }
}
</script>

<style scoped>
.news-list{
    margin:0;padding:0;
}
.post {
    list-style: none;
    display:flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width:80px;
    height:60px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#42b883;
}
.news-title{
    margin:0;
}
.link-text {
    color:gray;
}
</style>