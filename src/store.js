import { createStore } from 'vuex'

const mutations = {
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
    fetchUrl: "https://fakestoreapi.com/products/category/men's%20clothing"
  }

export default createStore({ mutations, state, strict: true })
