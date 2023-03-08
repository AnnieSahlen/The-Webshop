<script>
  export default {
    data() {
      return { totalamount: 0 }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      },
      selectedSize() {
        return this.$store.state.selectedSize
      }
    }
  }
</script>

<template>
  <div class="container-fluid">
    <!-- Rad 1 your products -->
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
            <!-- Rad 2 * antal varor -->
            <div class="row" id="row">
              <div class="col-3">
                <img style="height: 50px" :src="product.image" alt="" />
              </div>

              <div class="col-3">{{ product.title }}</div>
              <div class="col-3">{{ 'Price:' + ' ' + product.price }}</div>
              <div class="col-3">
                <button
                  class="btn btn-secondary btn-sm"
                  @click="
                    this.$store.commit('removeItemFromCart', {
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      index: index
                    })
                  "
                >
                  Remove
                </button>
                <div>{{ product.size }}</div>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <!-- Rad 4 total amount -->
      <div v-if="cart.length > 0" class="row" style="padding-top: 20px">
        <div class="col-3" />
        <div class="col-3">
          <h4>Total amount:</h4>
        </div>
        <!-- <div class="col-3" :key="index" v-for="(product, index) in cart">
          {{ totalamount }}
        </div> -->
        <!-- ???????????Hur lägga totalen????? -->
        <div class="col-3" />
      </div>
    </div>

    <div class="row">
      <div class="col-12" style="text-align: center">
        <button
          v-if="cart.length > 0"
          type="button"
          class="btn btn-success"
          style="margin: 30px"
        >
          To payment
        </button>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    margin: 0;
  }

  #row {
    padding-bottom: 30px;
  }
</style>
