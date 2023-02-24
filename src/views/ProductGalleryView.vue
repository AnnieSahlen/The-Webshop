<script>
  export default {
    created() {
      fetch(this.$store.state.fetchUrl)
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
    },
    methods: {
      // onClick() {
      // }
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
    <div class="row h-100">
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
          align="left"
          tag="article"
          style="max-width: 10rem"
          class="mb-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <b-card-text align="left"> Price: {{ product.price }} </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <ProductCarousel />
        </div>
        <div class="modal-footer">
          <div>
            <input
              type="button"
              value="lkjhg"
              class="btn btn-secondary btn-sm dropdown-toggle"
            />Size
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item">1</a></li>
              <li><a class="dropdown-item">2</a></li>
              <li><a class="dropdown-item">3</a></li>
            </ul>
          </div>
          <div class="dropdown">
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
          <button type="button" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
