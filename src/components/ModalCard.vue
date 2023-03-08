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
</style>

<script>
  export default {
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
            <div class="row">
              <div class="col-2">€ {{ price }}</div>

              <!-- choose size -->
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  S
                </label>
              </div>
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  M
                </label>
              </div>
              <div class="form-check col-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  L
                </label>
              </div>

              <!-- Choose amount -->
              <div class="dropdown col-4">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Amount
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item">1</a></li>
                  <li><a class="dropdown-item">2</a></li>
                  <li><a class="dropdown-item">3</a></li>
                </ul>
              </div>

              <!-- Add to chart button -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                @click="
                  this.$store.commit('addItemToCart', {
                    title: this.title,
                    price: this.price,
                    image: this.image
                  })
                "
              >
                Add to Cart
              </button>
            </div>

            <!-- <RouterLink to="/cart"><li class="navlistitem">Cart</li></RouterLink> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
