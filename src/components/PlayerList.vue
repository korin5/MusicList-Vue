<template>
    <v-list v-model:selected="playerSelect" mandatory class=" rounded-be-xl rounded-te-xl">
        <v-list-subheader>乐手</v-list-subheader>

        <v-list-item v-for="(player, i) in playerList" :key="i" :value="player.name" :title='player.name' color="teal"
            class="w-100 ma-0 pt-2 pb-2" size="x-large" :prependAvatar='player.prependAvatar'>
        </v-list-item>

        <v-btn prepend-icon="mdi-plus" class="w-100 ma-0 pa-2" rounded="0" variant="text"  size="x-large" color="teal">乐手</v-btn>
        <!-- <v-btn prepend-icon="mdi-plus" class="w-100 ma-0 pa-2" rounded="0" variant="text"  size="x-large" color="teal">添加单曲</v-btn> -->
    </v-list>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { useDataStore } from '../stores/store'
import { useRouter, useRoute } from 'vue-router'

const playerSelect = ref(['井草圣二'])
const store = useDataStore()
const playerList = computed(() => store.playerList)

const router = useRouter()
const route = useRoute()


watch(playerSelect, async () => {
    router.replace({ path: '/' + playerSelect.value })
    store.getMusicList(playerSelect.value)
})


watch(() => route.params, async () => {
    store.getMusicList(route.params.player)
    let player = route.params.player
    // console.log('route.params.player: ' + player)
    // console.log('playerSelect.value: ' + playerSelect.value)
})

</script>