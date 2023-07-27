import { createRouter, createWebHistory, createWebHashHistory,RouteRecordRaw } from 'vue-router'
import AddMusicPage from '../pages/AddMusicPage.vue'
import MusicListPage from '../pages/MusicListPage.vue'
import AddPlayerPage from '../pages/AddPlayerPage.vue'
import NotFound from '../pages/NotFoundPage.vue'

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;
