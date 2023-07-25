import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes:any = [
    {
        path: '/',
        name: 'MainView',
        component: MainView,
        children: [
            {//在地址为空时，直接跳转/井草圣二
                path: '/',
                name:'default',
                redirect: '/井草圣二'
            },
            {
                path: '/:player',
                name:'player',
                component: MainView
            }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;
