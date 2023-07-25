<template>
  <v-app-bar color="teal" >

    <!-- 侧边栏按钮 -->
    <v-app-bar-nav-icon icon="mdi-menu" class="ml-2" v-show="!store.drawer" @click.stop="()=>{store.drawer = !store.drawer}"></v-app-bar-nav-icon>

    <v-app-bar-title>曲目列表</v-app-bar-title>

    <v-btn prepend-icon="mdi-plus" rounded="lg" variant="tonal" class="mr-6">
      单曲
      <!-- <UploadMusicDialog></UploadMusicDialog> -->
    </v-btn>

  </v-app-bar>
</template>

<script setup lang="ts">
import UploadMusicDialog from '../components/UploadMusicDialog.vue'
import { useStateStore } from '../stores/store'
const store = useStateStore()
</script>