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
  .card {
    margin: auto;
    border: 0px;
  }
  card-body {
    margin: auto;
  }
  img {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    max-height: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .card-title {
    font-size: smaller;
  }
  #button {
    text-align: center;
    margin-bottom: 10px;
  }
  .card:hover {
    transform: scale(1.1);
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

  <!-- cards, varför går ej col-xs-6???-->
  <div class="container-fluid">
    <div class="row gy-4">
      <div
        class="col-6 col-sm-3"
        align="center"
        :key="product.id"
        v-for="product in sortedProducts"
      >
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
  <div class="container-fluid">
    <div class="row gy-4">
      <div
        class="col-6 col-sm-3"
        align="center"
        :key="product.id"
        v-for="product in sortedProducts"
      >
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
    </div>
  </div>
</template>
