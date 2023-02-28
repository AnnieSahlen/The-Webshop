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
      img-width="100"
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
