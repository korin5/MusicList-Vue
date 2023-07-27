<template>
    <v-navigation-drawer v-model="store.drawer" color="grey-lighten-5">

        <PlayerList v-if="props.playerList"></PlayerList>

    </v-navigation-drawer>
</template>

<script setup lang="ts">
import PlayerList from "./PlayerList.vue"
import { useStateStore } from '../stores/store'
const store = useStateStore()


const props = defineProps(['playerList'])
</script>