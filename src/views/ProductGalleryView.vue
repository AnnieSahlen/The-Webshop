<script>
  export default {
    created() {
      // fetch('https://avancera.app/cities/')
      fetch('https://dummyjson.com/products/category/womens-dresses')
        .then((response) => response.json())
        .then((result) => {
          this.products = result.products
        })
    },
    data() {
      return {
        products: null
      }
    }
  }
</script>
<style></style>
<template>
  <ProductCarousel />
  <div class="container-fluid">
    <div class="row">
      <div class="col-6" :key="product.id" v-for="product in products">
        <b-card
          :title="product.title"
          :img-src="product.images[0]"
          img-alt="Image"
          img-top
          tag="article"
          style="max-height;: 5rem"
          class="mb-2"
        >
          <b-card-text> Price: {{ product.price }} </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
