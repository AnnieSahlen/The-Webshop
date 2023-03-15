<style scoped>
  /* Verkar inte påverka modalkortet utan endast B-cad? */
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
  input[type-radio] {
    margin: 50px;
  }
  .bi-heart {
    color: black;
  }
  .bi-heart-active {
    color: red;
  }
</style>

<script>
  export default {
    created() {
      //if(produkt finns i vuex favoriter)
      // this.favoriteActive = true;
      // console.log(this.favoriteActive)
      this.$store.state.favorites.find((element) => {
        // console.log(element.id + ' ' + this.productId)
        if (element.id === this.productId) {
          this.favoriteActive = true
        }
      })

      this.$watch(
        () => this.$store.state.value,
        () => {
          this.onUpdateSize()
        },
        { immediate: true }
      )
    },

    data() {
      return {
        //           value: ''
        favoriteActive: false
      }
    },

    computed: {
      size: {
        get() {
          return this.$store.state.size
        },
        set(value) {
          this.$store.commit('setSize', value)
          console.log(value)
        }
      }
    },
    emits: ['update-size'],
    methods: {
      onUpdateSize() {
        this.$store.commit('setSize', this.value)
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      productId: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
      // counter: {
      //   type: Number,
      //   required: true
      // }
    }
  }
</script>

<template>
  <div
    class="modal fade"
    :id="'exampleModal-' + productId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <!-- Picture, description, price -->
        <div class="modal-body">
          <ProductCarousel :image="image" />
          <div>{{ description }}</div>
        </div>
        <div class="modal-footer">
          <div class="container-fluid">
            <!-- <form action="" @submit.prevent="onSubmit()"> -->
            <div class="row">
              <div class="col-2">€ {{ price }}</div>

              <!-- choose size -->
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="'flexRadioDefault' + productId"
                  :id="'flexRadioDefault1' + productId"
                  v-model="size"
                  value="S"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  S
                </label>
              </div>
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="'flexRadioDefault' + productId"
                  :id="'flexRadioDefault1' + productId"
                  v-model="size"
                  value="M"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  M
                </label>
              </div>
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="'flexRadioDefault' + productId"
                  :id="'flexRadioDefault1' + productId"
                  v-model="size"
                  value="L"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  L
                </label>
                <div>
                  <h6>{{ $store.state.size }}</h6>
                </div>
              </div>
              <!-- Test quantity section -->
              <!-- <div class="col-4"><QuantitySection /></div> -->
              <!-- end of Test quantity section -->
              <!-- Add to chart button -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                @click="
                  this.$store.commit('addItemToCart', {
                    title: this.title,
                    price: this.price,
                    image: this.image,
                    size: this.size
                    // counter: this.counter
                    // quantity: 1
                  })
                "
                :disabled="$store.state.size === undefined"
              >
                Add to Cart
              </button>
            </div>
            <!-- </form> -->
            <!-- plats för error meddelanden -->
            <div>{{}}</div>

            <!--Add to Favorites-button-->
            <!-- <i
              @click="
                this.$store.commit('addToFavorites', {
                  title: this.title,
                  price: this.price,
                  image: this.image,
                  size: this.size
                }),
                  (favoriteActive = !favoriteActive)
              "
              class="bi bi-heart"
              :class="{ 'bi-heart-active': favoriteActive }"
              style="font-size: 1.3rem"
            /> -->

            <!--Experiment buttons-->
            <i
              v-if="!favoriteActive"
              @click="
                this.$store.commit('addToFavorites', {
                  id: this.productId,
                  title: this.title,
                  price: this.price,
                  image: this.image,
                  size: this.size
                }),
                  (favoriteActive = !favoriteActive)
              "
              class="bi bi-heart"
              style="font-size: 1.3rem; color: black"
            />
            <i
              v-if="favoriteActive"
              @click="
                this.$store.commit('removeItemFromFavorites', {
                  id: this.productId,
                  title: this.title,
                  price: this.price,
                  image: this.image,
                  size: this.size
                }),
                  (favoriteActive = !favoriteActive)
              "
              class="bi bi-heart"
              style="font-size: 1.3rem; color: red"
            />

            <!-- <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              @click="
                this.$store.commit('addToFavorites', {
                  title: this.title,
                  price: this.price,
                  image: this.image,
                  size: this.size
                })
              "
            >
              Add to Favorites
            </button> -->
            <!-- </div>  -->

            <!-- @click="this.$store.commit('addToFavorites(item)')" -->

            <!-- <RouterLink to="/cart"><li class="navlistitem">Cart</li></RouterLink> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
