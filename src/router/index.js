import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
export default new router({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/about')
        },
        {
            path: '/service',
            name: 'service',
            component: () => import('@/views/service')
        },
    ]
})