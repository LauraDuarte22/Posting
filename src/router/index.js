import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import WorkProcess from '../views/WorkProcess.vue'
import WorkContent from '../components/WorkContent.vue'

const routes =[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/proceso-de-trabajo',
        name:'WorkProcess',
        component:WorkProcess
    },
    {
        path:'/trabajos',
        name:'WorkContent',
        component:WorkContent
    }
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;