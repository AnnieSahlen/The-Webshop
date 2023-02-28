<!-- Script ----------------------------- -->

<script>
  export default {
    // Fetch
    // created() {
    //   fetch("url")
    //     .then((response) => response.json())
    //     .then((result) => {
    //       this.products = result
    //       // console.log(this.products)
    //     })
    // },

    // Data
    data() {
      return {
        page: 'products'
        // cart: [],
        // products: null
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      }
    },
    // Methods
    methods: {
      // addItemToCart(product) {
      //   this.cart.push(
      //     product.title +
      //       'price:' +
      //       product.price +
      //       'description' +
      //       product.description
      //   )

      //   console.log(this.cart)
      // },
      removeItemFromCart(product) {
        this.cart.splice(this.cart.indexOf(product), 1)
      },
      navigateTo(page) {
        this.page = page
      }
    }
  }
</script>

<!-- Template -------------------------------- -->

<template>
  <!-- Header Products/Cart ------------- -->
  <header>
    <button @click="navigateTo('products')">View Products</button>
    {{ cart.length }} in cart
    <button @click="navigateTo('cart')">View Cart</button>
  </header>

  <!-- If cart ---------------------- -->

  <div v-if="page === 'cart'">
    <h1>Your Cart</h1>
    <ol>
      <li :key="index" v-for="(product, index) in cart">
        <div style="background-color: red">
          {{ product.title }} <br />{{ product.price }}
        </div>

        <button @click="removeItemFromCart(product)">Remove from chart</button>
      </li>
    </ol>
  </div>

  <!-- If products ------------------- -->

  <!-- <div v-if="page === 'products'">
    <h1>Products</h1>
    <ol>
      <li
        :key="index"
        v-for="(product, index) in products"
        style="list-style-type: none; padding-bottom: 20px"
      >
        <img :src="product.image" style="width: 30px" />
        <div>{{ product.title }}</div>
        <br /><br />
        <div>{{ product.price }}</div>

        <button @click="addItemToCart(product)">Add to chart</button>
      </li>
    </ol>
  </div> -->
</template>

<style>
  body {
    margin: 0;
  }

  header {
    height: 60px;
    background-color: #eee;
    box-shadow: 2px 2px 5px #999;
    text-align: right;
    font-size: 30px;
    padding-top: 20px;
  }
</style>

<!-- https://www.youtube.com/watch?v=fB6smjNEFtU minut 21  -->
