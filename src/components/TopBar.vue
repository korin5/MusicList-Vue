<template>
  <v-app-bar color="teal" elevation=0>

    <!-- 侧边栏按钮 -->
    <v-app-bar-nav-icon v-if="props.navbtn" icon="mdi-menu" class="ml-2" v-show="!store.drawer||1"
      @click.stop="() => { store.drawer = !store.drawer }"></v-app-bar-nav-icon>
    <v-app-bar-title>{{props.title}}</v-app-bar-title>

    <v-btn v-if="props.upbtn" @click="addMusic()" prepend-icon="mdi-plus" rounded="lg" variant="tonal" class="mr-6">
      单曲
      <!-- <UploadMusicDialog></UploadMusicDialog> -->
    </v-btn>

  </v-app-bar>
</template>

<script setup lang="ts">
import UploadMusicDialog from './MusicListPage/UploadMusicDialog.vue'
import { useStateStore } from '../stores/store'
import { useRouter, useRoute } from 'vue-router'

const store = useStateStore()

const router = useRouter()
const route = useRoute()

const props = defineProps(['navbtn','upbtn','title'])

function addMusic() {
  router.push({ path: '/addmusic' })
}
</script>