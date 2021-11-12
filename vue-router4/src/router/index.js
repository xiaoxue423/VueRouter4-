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
        path:'/users/:id',
        name:'User',
        component: () => import(/* webpackChunkName:"user" */'../views/User.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router