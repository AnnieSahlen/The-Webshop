<script>
  export default {
    created() {
      fetch('../../assets/articles.json')
        .then((response) => response.json())
        .then((result) => {
          this.articles = result[0]
          console.log(this.articles)
        })
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>
<template>
  <p>hej</p>
  <div>
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
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      />
    </b-carousel>
  </div>
</template>
