import { createRouter, createWebHistory } from 'vue-router'
import AskViews from '../views/AskViews.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'

export default createRouter ({
    //Hash
    history:createWebHistory(),
    //pages
    routes:[
        {
            path:'/',
            component:NewsView
        },
        {
            path:'/ask',
            component:AskViews
        },
        {
            path:'/jobs',
            component:JobsView
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