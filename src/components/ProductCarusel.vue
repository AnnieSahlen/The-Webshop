<script setup lang="ts">
  import { ref } from 'vue'
  const slide = ref(0)
</script>

<template>
  <b-carousel v-model="slide" controls>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
  </b-carousel>
</template>
