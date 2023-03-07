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
    computed: {
      sortedProducts() {
        if (this.order === null) {
          return this.products
        }

        if (this.products !== null) {
          const products = [...this.products]
          if (this.order === 'low') {
            products.sort((a, b) => a.price - b.price)
          } else if (this.order === 'high') {
            products.sort((a, b) => b.price - a.price)
          } else if (this.order === 'alpha') {
            products.sort((a, b) => a.title.localeCompare(b.title))
          }
          return products
        } else {
          return null
        }
      }
    },

    data() {
      return {
        products: null,
        order: null
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
    height: 120px;
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
    text-align: center;
    margin-bottom: 10px;
  }
</style>
<template>
  <!-- drop down filter -->
  <div id="button">
    <b-dropdown
      id="sort"
      text="Sort"
      class="m-md-2"
      size="sm"
      variant="primary"
    >
      <b-dropdown-item @click="order = 'low'"
        >Lowest price first</b-dropdown-item
      >
      <b-dropdown-item @click="order = 'high'"
        >Higest price first</b-dropdown-item
      >
      <b-dropdown-item @click="order = 'alpha'"
        >Alphabetic order</b-dropdown-item
      >
    </b-dropdown>
  </div>

  <!-- cards -->
  <div class="container-fluid">
    <div class="row gy-4">
      <div
        class="col-6 col-sm-3"
        align="center"
        :key="product.id"
        v-for="product in sortedProducts"
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
              <h6>€ {{ product.price }}</h6>
            </div>
          </div>
        </div>

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
