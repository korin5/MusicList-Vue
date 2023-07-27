import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AddMusicPage from '../pages/AddMusicPage.vue'
import MusicListPage from '../pages/MusicListPage.vue'
import AddPlayerPage from '../pages/AddPlayerPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes: Array<RouteRecordRaw> = [
    {//在地址为空时，直接跳转/井草圣二
        path: '/',
        redirect: '/player/井草圣二'
    },
    {
        path: '/player/',
        redirect: '/player/井草圣二'
    },
    {
        path: '/player/:player',
        name: 'MusicListPage',
        component: MusicListPage
    },
    {
        path: '/addmusic',
        name: 'AddMusicPage',
        component: AddMusicPage
    },
    {
        path: '/addplayer',
        name: 'AddPlayerPage',
        component: AddPlayerPage
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFoundPage  
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;
