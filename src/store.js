import { createStore } from 'vuex'

const mutations = {
    addItemToCart(state, product) {
      console.log(product)
      this.state.cart.push({
        title: product.title,
        price: product.price,
        image: product.image
      })

      // console.log('hej')
    },

    removeItemFromCart(state, product) {
      console.log(
        'ta bort: ' +
          state.cart.indexOf(product) +
          ' ' +
          product.title +
          ' ' +
          state.cart
      )
      state.cart.splice(state.cart.indexOf(product), 1)
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
    products: ''
  }

export default createStore({ mutations, state, strict: true })
