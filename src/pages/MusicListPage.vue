
<template>
    <v-layout>

        <!-- 顶栏 -->
        <TopBar navbtn="1" upbtn="1" title="曲目列表"></TopBar>
        
        <!-- 侧边栏 -->
        <NavBar playerList="1" ></NavBar>

        <!-- 主视图 -->
        <MainView></MainView>

    </v-layout>
</template>
<script setup lang='ts'>
import { ref, computed, onMounted, watch } from "vue";
import TopBar from "../components/TopBar.vue";
import NavBar from "../components/NavBar.vue";
import MainView from "../components/MusicListPage/MainView.vue";
import { useDataStore } from "../stores/store";
import {state} from "../scripts/state.js"
import { useRouter, useRoute } from 'vue-router'

const store = useDataStore()

const router = useRouter()
const route = useRoute()

onMounted(()=>{
    // get请求乐手
    store.getPlayerList()

    // GET请求曲目
    store.getMusicList(route.params.player.toString())

})
</script>

<style scoped></style>