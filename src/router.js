import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Multi from './views/Multi.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/multi',
        name: 'Multi',
        component: Multi
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

