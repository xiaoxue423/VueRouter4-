import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

// 非懒加载
import Home from '../views/Home.vue'

//这些都会传递给createRouter
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // 路由懒加载
        component: () => import(/* webpackChunkName:"about" */'../views/About.vue')
    },
    // 动态段以冒号开始
    {
        path:'/user/:userId',
        name:'User',
        component: () => import(/* webpackChunkName:"user" */'../views/User.vue')
    },{
        path:'/login',
        name:'Login',
        component: () => import(/* webpackChunkName:"login" */'../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router