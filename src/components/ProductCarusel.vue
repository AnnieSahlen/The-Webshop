<script>
  export default {
    created() {
      fetch('https://dummyjson.com/products/category/womens-dresses')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
        })
    },
    data() {
      return { products: null }
    }
  }
</script>
<style></style>
<template>
  <div calss="container-fluid">
    <div class="row">
      <div class="col-6" :key="product.id" v-for="product in products">
        {{ products }}
      </div>
    </div>
  </div>
</template>
