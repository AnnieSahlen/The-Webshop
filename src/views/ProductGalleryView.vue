<script>
  export default {
    created() {
      // https://dummyjson.com/products/category/womens-dresses
      fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(this.products)
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
  .card-img-top {
    width: 100%;
    height: auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
  }
  .card-title {
    font-size: small;
  }
</style>
<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-6"
        align="center"
        :key="product.id"
        v-for="product in products"
      >
        <b-card
          :title="product.title"
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 10rem"
          class="mb-2"
        >
          <b-card-text> Price: {{ product.price }} </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
