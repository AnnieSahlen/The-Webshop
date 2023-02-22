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
<style>
  img {
    width: 50%;
    height: 50%;
  }
</style>
<template>
  <ProductCarousel />
  <div class="container-fluid">
    <div class="row">
      <div class="col-6" :key="product.id" v-for="product in products">
        <ul>
          <li><img :src="product.images[0]" /></li>
          <li>{{ product.title }}</li>
          <li>Price: {{ product.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
