import { createStore } from 'vuex'

const mutations = {
    addItemToCart(state, product) {
      this.state.cart.push(product.title + 'price:' + product.price)

      // console.log('hej')
    },

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
