<script>
  export default {
    created() {
      fetch('../../assets/articles.json')
        .then((response) => response.json())
        .then((result) => {
          this.articles = result[this.n]
          console.log(this.articles.title)
        })
    },

    data() {
      return {
        slide: 0,
        sliding: null,
        articles: null,
        n: Math.floor(Math.random() * 6)
      }
    }
  }
</script>
<style scoped></style>
<template>
  <div v-if="articles !== null">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide :caption="articles.title" :img-src="articles.picture" />
    </b-carousel>
  </div>
</template>
