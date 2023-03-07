import { createStore } from 'vuex'

const mutations = {
    addItemToCart(state, product) {
      console.log(product)
      state.cart.push({
        title: product.title,
        price: product.price,
        image: product.image
      })

      // console.log('hej')
    },

    total(state) {
      state.total = Object.values(this.state.cart).reduce(
        (accumulator, value) => accumulator + value.price,
        0
      )
    },

    removeItemFromCart(state, product, index) {
      console.log(
        'ta bort: ' +
          // state.cart.indexOf(product) +
          index +
          ' ' +
          product.title +
          ' ' +
          state.cart
      )
      state.cart.splice(index, 1)
      // state.cart.splice(state.cart.indexOf(product), 1)
    },

    // this.$router.go(0)

    womanClick(state) {
      state.fetchUrl =
        "https://fakestoreapi.com/products/category/women's%20clothing"
    },
    menClick(state) {
      state.fetchUrl =
        "https://fakestoreapi.com/products/category/men's%20clothing"
    }
  },
  state = {
    fetchUrl: "https://fakestoreapi.com/products/category/men's%20clothing",
    page: 'products',
    cart: [],
    products: '',
    total: 0
  }

export default createStore({ mutations, state, strict: true })
