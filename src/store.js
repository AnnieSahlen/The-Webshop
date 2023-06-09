import { createStore } from 'vuex'

/*
getters: {
}
*/
// const users = window.localStorage.getItem('users')
// const user = window.localStorage.getItem('user')

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

    addToFavorites(state, product) {
      // let found = false
      // // if (state.favorites.includes(this.state.product)) {
      // if (
      //   this.$store.state.favorites.find((element) => {
      //     if (element.id === product.id) {
      //       this.found = true
      //     }
      //   })
      // ) {
      //   console.log('Already added')
      //   found = true
      // }
      // else {
      // if (found === false) {
      state.favorites.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.size
      })
      // }
    },

    removeItemFromFavorites(state, product) {
      state.favorites.splice(product.index, 1)
    },

    setSize(state, size) {
      state.size = size
    },

    removeItemFromCart(state, product) {
      if (state.cart[product.index].counter > 1) {
        console.log(state.cart[product.index].counter)
        state.cart[product.index].counter--
      } else {
        state.cart.splice(product.index, 1)
      }
    },

    total(state) {
      state.total = Object.values(this.state.cart).reduce(
        (accumulator, value) => Math.round(accumulator + value.price),
        0
      )
    },

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

      /* this.commit('saveUsers')*/
    },

    logIn(state, obj) {
      const { email, password } = obj
      /*console.log(email)*/

      const user = state.users.filter((u) => u.email === email)[0]

      if (user) {
        if (user.password === password) {
          state.user = user
          this.commit('saveUser')
          document.location.href = '/'
        }
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
    favorites: [],

    users: window.localStorage.getItem('users')
      ? JSON.parse(window.localStorage.getItem('users'))
      : [], //users ? JSON.parse(users) : [],
    user: window.localStorage.getItem('user')
      ? JSON.parse(window.localStorage.getItem('user'))
      : [] //user ? JSON.parse(user) : {},

    //users: users ? JSON.parse(users) : [],
    //user: user ? JSON.parse(user) : {},

    // counter: null,
  }

//Det som händer ovanför med users är typ en if-sats. Om den hittar users från localstorage så sätts users(state)
//till users(variabeln) från localstorage men om users inte hittas i localstorage så sätts den
//till en tom array.
//Den tittar på variabeln högst upp i filen.

export default createStore({ mutations, state, strict: true })
