import { createStore } from 'vuex'

/*
getters: {
}
*/
const users = window.localStorage.getItem('users')
const user = window.localStorage.getItem('user')

const mutations = {
    addItemToCart(state, product) {
      state.cart.push({
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size,
        counter: product.counter
      })
    },

    setSize(state, size) {
      state.size = size
    },

    total(state) {
      state.total = Object.values(this.state.cart).reduce(
        (accumulator, value) => accumulator + value.price,
        0
      )
    },

    // Ovan tillagt av Sandra
    // Funktionen använder Object.values() för att hämta en array av alla värden (alltså objekt) som finns i cart-objektet. Sedan använder den reduce() metoden på arrayen för att summera priset av varje objekt i varukorgen.

    // reduce() metoden tar två argument: en reduceringsfunktion och en startvärde för ackumulatorn. I det här fallet används en anonym funktion som tar två parametrar: accumulator (som är ackumulatorn) och value (som är det nuvarande objektet i iterationen). Funktionen lägger sedan till priset på det nuvarande objektet till ackumulatorn och returnerar det uppdaterade värdet.

    // Till slut returnerar total() funktionen det totala priset som beräknats med hjälp av reduce() metoden.

    changeEmail(state, x) {
      state.mail = x
    },

    refresh(state) {
      state.cart = []
    },
    //Här nedansför kommer lite nytt från Jennifer
    createUser(state, obj) {
      const user = {
        name: obj.name,
        user_name: obj.user_name,
        email: obj.email,
        password: obj.password
      }

      state.users.push(user)

      this.commit('saveUsers')
    },

    logIn(state, obj) {
      const { email, password } = obj
      const user = state.users.filter((u) => u.email === email)[0]

      if (user) {
        if (user.password === password) {
          state.user = user
          this.commit('saveUser')
          document.location.href = '/'
        }
      } else {
        // Kanske ska skriva något för att visa felmeddelande att ingen användare med den
        // epostadressen hittades?
      }
    },

    logOut(state) {
      state.user = {}
      window.localStorage.removeItem('user')
      document.location.href = '/'
    },

    saveUsers(state) {
      window.localStorage.setItem('users', JSON.stringify(state.users))
    },

    saveUser(state) {
      window.localStorage.setItem('user', JSON.stringify(state.user))
    },

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
    value: '',
    size: '',
    mail: '',

    users: users ? JSON.parse(users) : [],
    user: user ? JSON.parse(user) : {},

    counter: null,
    quantity: 1
  }

//Det som händer ovanför med users är typ en if-sats. Om den hittar users från localstorage så sätts users(state)
//till users(variabeln) från localstorage men om users inte hittas i localstorage så sätts den
//till en tom array.
//Den tittar på variabeln högst upp i filen.

export default createStore({ mutations, state, strict: true })
