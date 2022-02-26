import { createRouter, createWebHistory } from 'vue-router'
import AskViews from '../views/AskViews.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

export default createRouter ({
    //Hash
    history:createWebHistory(),
    //pages
    routes:[
        {
            path:'/news',
            name:'news',
            component:NewsView
        },
        {
            path:'/ask',
            name:'ask',
            component:AskViews
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/user/:id',
            component:UserView
        },
        {
            path:'/item/:id',
            component:ItemView
        }
    ]
})




// const routes = [
//     {
//       path: "/",
//       name: "NewsView",
//       component:NewsView
//     },
//     {
//       path: "/ask",
//       name: "AskViews",
//       component:AskViews
//     },
//     {
//       path: "/jobs",
//       name: "JobsView",
//       component:JobsView
//     }
//   ];
  
//   const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
//   });
  
//   export default router;