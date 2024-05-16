<script setup lang="ts"></script>

<template>
  <div>
    <ul>
      <li v-for="item in 10000" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
