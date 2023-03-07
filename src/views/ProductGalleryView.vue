<script>
  export default {
    created() {
      this.$watch(
        () => this.$store.state.fetchUrl,
        () => {
          this.fetchAgain()
        },
        { immediate: true }
      )
    },
    data() {
      return {
        products: null
      }
    },
    methods: {
      fetchAgain() {
        fetch(this.$store.state.fetchUrl)
          .then((response) => response.json())
          .then((result) => {
            this.products = result
          })
      }
    }
  }
</script>
<style scoped>
  .card-body {
    height: 90px;
  }
  img {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    height: 100px;
    width: auto;
  }
  .card-title {
    font-size: smaller;
  }
  #button {
    text-align: right;
  }
  .card:hover {
    transform: scale(1.1);
  }
</style>
<template>
  <!-- drop down filter -->
  <div id="button">
    <b-dropdown
      id="filter"
      text="Filter"
      class="m-md-2"
      size="sm"
      variant="primary"
    >
      <b-dropdown-item>Lowest price first</b-dropdown-item>
      <b-dropdown-item>Higest price first</b-dropdown-item>
      <b-dropdown-item>Alphabetic order</b-dropdown-item>
    </b-dropdown>
  </div>

  <!-- cards -->
  <div class="container-fluid">
    <div class="row gy-4">
      <div
        class="col-6 col-sm-3"
        align="center"
        :key="product.id"
        v-for="product in products"
      >
        <div id="container">
          <div
            class="card h-100"
            style="width: 10rem"
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal-' + product.id"
          >
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
            </div>
          </div>
        </div>
        <!-- <div id="container">
          <div
            class="card h-100"
            style="width: 10rem"
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal-' + product.id"
          >
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
            </div>
          </div>
        </div> -->
        <ModalCard
          :title="product.title"
          :price="product.price"
          :product-id="product.id"
          :description="product.description"
          :image="product.image"
        />
      </div>
    </div>
  </div>
</template>
