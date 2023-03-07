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

<style scoped>
  /* img {
    object-fit: contain;
  } */
  /* carousel-item {
    width: 50%;
  } */
</style>

<template>
  <!-- enligt boots är classen d-bock w-100, men ändrade här till-50 verkar funka ok just nu på orginal bilderna men inte på tshirt bilderna-->
  <div class="b-carousel-ram w-50">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide :img-src="image" />
      <b-carousel-slide :img-src="image" />
      <!-- <b-carousel-slide img-src="../../assets/dummy-picture.jpg" /> -->
    </b-carousel>
  </div>
</template>
