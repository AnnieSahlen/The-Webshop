<script>
  export default {
    data() {
      return {}
    },
    computed: {
      cart() {
        return this.$store.state.cart
      }
    },

    methods: {
      removeItemFromCart(product) {
        this.cart.splice(this.cart.indexOf(product), 1)
      }
    }
  }
</script>

<template>
  {{ cart.length }} in cart

  <div class="container-fluid">
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h1 style="padding-bottom: 50px">Your products</h1>
      </div>
    </div>

    <div>
      <div>
        <ol>
          <li
            style="list-style: none"
            :key="index"
            v-for="(product, index) in cart"
          >
            <div class="row" id="row">
              <div class="col-3">
                <img style="height: 50px" :src="product.image" alt="" />
              </div>

              <div class="col-3">{{ product.title }}</div>
              <div class="col-3">{{ 'Price:' + ' ' + product.price }}</div>
              <div class="col-3">
                <button
                  class="btn btn-secondary btn-sm"
                  @click="removeItemFromCart(product)"
                >
                  Remove from chart
                </button>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
  body {
    margin: 0;
  }

  #row {
    padding-bottom: 30px;
  }
</style>
