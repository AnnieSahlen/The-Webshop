import { createStore } from 'vuex'

const mutations = {
    addItemToCart(state, product) {
      state.cart.push({
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size
      })
    },
    setSize(state, size) {
      state.size = size
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

    //   Den här koden definierar en funktion som heter total(), som beräknar totalpriset för alla objekt som finns i cart -enhetens varukorg.

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
    value: '',
    size: '',
    total: 0
  }

export default createStore({ mutations, state, strict: true })
