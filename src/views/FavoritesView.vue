<script>
  export default {
    computed: {
      favorites() {
        return this.$store.state.favorites
      }
    }
  }
</script>

<template>
  <div class="container-fluid">
    <!-- Rad 1 your favorites -->
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h1 style="padding-bottom: 50px">Your favorites</h1>
      </div>
    </div>

    <div>
      <div>
        <ol>
          <li
            style="list-style: none"
            :key="index"
            v-for="(product, index) in favorites"
          >
            <!-- Rad 2 * antal varor -->
            <div class="row" id="row">
              <div class="col-2">
                <img style="height: 50px" :src="product.image" alt="" />
              </div>
              <div class="col-1">{{ product.size }}</div>
              <div class="col-6">{{ product.title }}</div>
              <div class="col-1">
                {{ 'Price:' + ' ' + '£' + product.price }}
              </div>
              <div class="col-sm-2 col-lg-1">
                <button
                  class="btn btn-secondary btn-sm"
                  @click="
                    this.$store.commit('removeItemFromFavorites', {
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      index: index
                    })
                  "
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
