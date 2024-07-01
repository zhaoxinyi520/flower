<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-box">
    <RouterView />
  </div>
</template>

<style scoped>
.main-box{
  width: 100%;
  height: 100%;
}
@media (min-width: 1024px) {
  .main-box {
    height: 100%;
  }
}
</style>
