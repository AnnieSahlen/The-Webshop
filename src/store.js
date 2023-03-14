import { createStore } from 'vuex'

/*
getters: {
}
*/

const mutations = {
    addItemToCart(state, product) {
      state.cart.push({
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size
      })
    },
    addToFavorites(state, product) {
      state.favorites.push({
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size
      })
      console.log('Halåe')
    },
    removeItemFromFavorites(state, product) {
      state.favorites.splice(product.index, 1)
    },
    setSize(state, size) {
      state.size = size
    },

    login(state, email) {
      state.email = email
      localStorage.setItem('email', email)
      alert('logged in')
    },

    logout(state) {
      state.email = ''
      localStorage.removeItem('email')
      alert('logged out')
    },
    setsomethingStore(state) {
      if (localStorage.getItem('email')) {
        state.email = localStorage.getItem('email')
      }
    },

    removeItemFromCart(state, product) {
      state.cart.splice(product.index, 1)
    },
    total(state) {
      state.total = Object.values(this.state.cart).reduce(
        (accumulator, value) => accumulator + value.price,
        0
      )
    },

    changeEmail(state, x) {
      state.mail = x
    },

    // Funktionen använder Object.values() för att hämta en array av alla värden (alltså objekt) som finns i cart-objektet. Sedan använder den reduce() metoden på arrayen för att summera priset av varje objekt i varukorgen.

    // reduce() metoden tar två argument: en reduceringsfunktion och en startvärde för ackumulatorn. I det här fallet används en anonym funktion som tar två parametrar: accumulator (som är ackumulatorn) och value (som är det nuvarande objektet i iterationen). Funktionen lägger sedan till priset på det nuvarande objektet till ackumulatorn och returnerar det uppdaterade värdet.

    // Till slut returnerar total() funktionen det totala priset som beräknats med hjälp av reduce() metoden.

    womanClick(state) {
      state.fetchUrl =
        "https://fakestoreapi.com/products/category/women's%20clothing"
    },
    menClick(state) {
      state.fetchUrl =
        "https://fakestoreapi.com/products/category/men's%20clothing"
    },
    jeweleryClick(state) {
      state.fetchUrl = 'https://fakestoreapi.com/products/category/jewelery'
    }
  },
  state = {
    fetchUrl: "https://fakestoreapi.com/products/category/men's%20clothing",
    page: 'products',
    cart: [],
    products: '',
    total: 0,
    email: '',
    value: '',
    size: '',
    mail: '',
    favorites: []
  }

export default createStore({ mutations, state, strict: true })
