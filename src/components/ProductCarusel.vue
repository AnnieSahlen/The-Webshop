<script setup lang="ts">
  import { ref } from 'vue'

  const slide = ref(0)
</script>
<style>
  .cell {
    background-color: blue;
  }
</style>
<template>
  <div calss="container">
    <div class="row">
      <div class="cell">1</div>
      <div class="cell">2</div>
      <div class="cell">3</div>
      <div class="cell">4</div>
      <div class="cell">5</div>
      <div class="cell">6</div>
      <div class="cell">7</div>
      <div class="cell">8</div>
      <div class="cell">9</div>
      <div class="cell">10</div>
    </div>
  </div>

  <b-carousel v-model="slide" controls>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=2" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=3" />
  </b-carousel>
</template>
