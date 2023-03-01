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
      // this.fetchAgain()
      // fetch(this.$store.state.fetchUrl)
      //   .then((response) => response.json())
      //   .then((result) => {
      //     this.products = result

      //     console.log(this.products)
      //   })
    },
    data() {
      return {
        products: null
      }
    },
    methods: {
      // womanClick() {
      //   console.log('hej')
      // },
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
<style></style>
<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div
        class="col-6 col-sm-3"
        align="center"
        :key="product.id"
        v-for="product in products"
      >
        <ModalCard
          :title="product.title"
          :price="product.price"
          :product-id="product.id"
          :description="product.description"
          :image="product.image"
        />
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
          :data-bs-target="'#exampleModal-' + product.id"
        >
          <b-card-text align="left"> Price: {{ product.price }} </b-card-text>
        </b-card>
        <!-- WET: Dubbel kod för att få fler kort -->
        <ModalCard
          :title="product.title"
          :price="product.price"
          :product-id="product.id"
          :description="product.description"
          :image="product.image"
        />
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
          :data-bs-target="'#exampleModal-' + product.id"
        >
          <b-card-text align="left"> Price: {{ product.price }} </b-card-text>
        </b-card>
        <!-- WET: Dubbel kod för att få fler kort -->
      </div>
    </div>
  </div>
</template>
