
<template>
    <v-layout>

        <TopBar navbtn="1" upbtn="1" title="曲目列表"></TopBar>
        
        <NavBar playerList="1" ></NavBar>

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

})
</script>

<style scoped></style>