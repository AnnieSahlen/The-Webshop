<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    props: {
      image: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  carousel-item {
    width: 50%;
  }
</style>

<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide :img-src="image" />
      <b-carousel-slide img-src="../../assets/dummy-picture.jpg" />
      <b-carousel-slide img-src="../../assets/dummy-picture.jpg" />
    </b-carousel>
  </div>
</template>
