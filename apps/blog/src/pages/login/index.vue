<script setup lang="ts">
import { postLogin } from '@/pages/login/api'
import { onMounted } from 'vue'
onMounted(() => {
  postLogin()
})
</script>

<template>
  <div></div>
</template>
