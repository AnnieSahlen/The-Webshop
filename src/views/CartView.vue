<script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart
      },
      total() {
        this.$store.commit('total')
        return this.$store.state.total
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
  }

  #row {
    padding-bottom: 30px;
  }

  .btn {
    background-color: primary;
  }
</style>

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
              <div class="col-2">
                <img style="height: 50px" :src="product.image" alt="" />
              </div>
              <!-- insert amout here for desktop /Flutra -->
              <div class="col-1">{{ product.counter }} st</div>
              <div class="col-1">{{ product.size }}</div>
              <div class="col-6 lh-sm">{{ product.title }}</div>
              <div class="col-1">
                {{ 'Price:' + ' ' + '€' + product.price }}
              </div>
              <div class="col-sm-1 col-lg-1">
                <button
                  class="btn btn-danger btn-sm"
                  @click="
                    this.$store.commit('removeItemFromCart', {
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      index: index
                    })
                  "
                >
                  <i class="bi bi-trash3-fill" />
                  <!-- Remove -->
                </button>
                <!-- insert amout here for desktop /Flutra -->
              </div>
            </div>
          </li>
        </ol>
      </div>
      <!-- Rad 4 total amount -->
      <div class="col-12" style="text-align: center" v-if="cart.length === 0">
        <p>Your cart is empty.</p>
        <routerLink to="/#">
          <button
            type="button"
            class="btn btn-primary"
            style="margin: 30px, display: flex;"
          >
            To products
          </button>
        </routerLink>
      </div>

      <div v-if="cart.length > 0" class="row" style="padding-top: 20px">
        <div class="col-3" />
        <div class="col-3">
          <h4>Total amount:</h4>
        </div>
        <div class="col-3">
          <h4>€ {{ total }}</h4>
        </div>
        <div class="col-3" />
      </div>

      <div class="row">
        <div class="col-12" style="text-align: center">
          <RouterLink to="/pay">
            <button
              v-if="cart.length > 0"
              type="button"
              class="btn btn-primary"
              style="margin: 30px"
            >
              To payment
            </button>
          </RouterLink>
          <RouterLink to="/productgallery">
            <button
              v-if="cart.length > 0"
              type="button"
              class="btn btn-primary"
              style="margin: 30px"
            >
              Keep shopping
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
