<template>

    <div class="ma-6 mb-0 text-h1 text-start">{{ store.playerSelect }}</div>

</template>

<script setup lang='ts'>
//<script setup>
import { ref,reactive,computed,onMounted,watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDataStore } from '../../stores/store'

const route = useRoute()
const store = useDataStore()

</script>
