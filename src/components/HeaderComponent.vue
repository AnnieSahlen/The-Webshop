<script>
  // import HamburgerMenu from './HamburgerMenu.vue'

  export default {
    // components: { HamburgerMenu },
    data: function () {
      return {
        menuOpen: false,
        miniMenuOpen: false
      }
    },
    methods: {
      hideMenuOnClick() {
        this.menuOpen = false
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      }
    }
    // Computed tillagd av Sandra för att kunna lägga till antal varor i varukorgen.
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@500&family=Playfair+Display:ital,wght@0,700;0,900;1,400&display=swap');

  .nav-icons {
    display: flex;
    justify-content: space-evenly;
  }
  h1 {
    color: #a08c5b;
    font-family: 'Merienda', cursive;
    text-shadow: 0px 4px 4px #adabab;
  }
  a {
    text-decoration: none;
  }
  /*Styling för hamburgermenyn*/
  .hamburger {
    width: 45px;
    height: 45px;
    border: none;
    background-color: white;
    /* border-radius: 4px; */
  }
  .dropdown {
    height: 0px;
    transition: height 0.2s ease;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    overflow: hidden;
  }
  .dropdown-after {
    height: auto;
    width: 100vw;
    transition: height 0.2s, width 0.2s ease;
    z-index: 10;
    position: absolute;
    /* border-bottom: 6px solid #a08c5b; */
    top: 100%;
    background-color: white;
  }
  .nested-dropdown {
    height: 0px;
    transition: height 0.2s ease;
    overflow: hidden;
  }
  .nested-dropdown-after {
    height: auto;
    width: 100vw;
    transition: height 0.2s, width 0.2s ease;
  }
  .navlist {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .navlistitem {
    text-align: center;
    padding: 10px;
    margin: 5px 0px;
    color: #3c2502;
    background-color: #e9dbbc;
  }
  .navlist :hover {
    color: #a08c5b;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    .hamburger {
      display: none;
    }
    .dropdown {
      height: auto;
    }
    .dropdown-after {
      display: flex;
      justify-content: center;
      position: fixed;
    }
    .navlist {
      display: flex;
      justify-content: space-evenly;
      /* max-width: 900px; */
    }
    .navlistitem {
      background-color: white;
      color: #3c2502;
    }
    .mini-navlist {
      display: flex;
      flex-direction: column;
      /* position: absolute; */
    }
    .nested-dropdown,
    .nested-dropdown-after {
      max-width: fit-content;
    }
  }
</style>

<template>
  <!-- <HamburgerMenu /> -->

  <!--Header: hamburgerikonen-->
  <div class="container-fluid mx-0 px-0" style="position: relative">
    <div class="row gy-2 mx-0 px-0 mt-4 mb-4">
      <div class="col-6 order-sm-last">
        <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
          <i class="bi bi-list" style="font-size: 1.3rem; color: #5f4338" />
        </button>
      </div>

      <!--Header: ikonerna till höger-->

      <div class="col-6 nav-icons order-sm-2">
        <i
          @click="hideMenuOnClick"
          class="bi bi-search"
          style="font-size: 1.3rem; color: #5f4338"
        />
        <RouterLink to="/cart"
          ><i
            class="bi bi-bag-dash"
            style="font-size: 1.3rem; color: #5f4338"
          />
          <span v-if="cart.length > 0" style="color: black">
            {{ cart.length }}</span
          >
          <!-- Ovanstående span tillagd av Sandra för att lägga till antal varor i cart -->
        </RouterLink>
        <i class="bi bi-heart" style="font-size: 1.3rem; color: #5f4338" />
        <!-- Här nedanför är lite nytt med inloggningen av Jennifer -->
        <!--Första if satsen kollar om det finns någon inloggad--><RouterLink
          v-if="Object.keys($store.state.user).length === 0"
          to="/Login"
          ><i class="bi bi-door-open" style="font-size: 1.3rem; color: #5f4338"
        /></RouterLink>
        <!--Andra if satsen kollar om det inte finns någon inloggad-->
        <RouterLink to="/user" v-if="Object.keys($store.state.user).length > 0">
          <i class="bi bi-person" style="font-size: 1.3rem; color: #5f4338" />
        </RouterLink>
      </div>

      <!--Loggan-->
      <div class="col-12 col-sm-6 text-center order-sm-1">
        <RouterLink to="/"><h1>Webshop</h1></RouterLink>
      </div>

      <!--När man trycker på hamburgerikonen-->
      <div
        class="dropdown mx-0 px-0 order-sm-3"
        :class="{ 'dropdown-after': menuOpen }"
      >
        <!--Tog bort class "row" från diven ovan. Skriver kommentar ifall nåt skulle bli galet.-->
        <ul class="navlist">
          <RouterLink to="/"
            ><li class="navlistitem" @click="hideMenuOnClick">
              Home
            </li></RouterLink
          >

          <!--Product Gallery-länken-->
          <li class="navlistitem" @click="miniMenuOpen = !miniMenuOpen">
            Product Gallery
            <div
              class="row nested-dropdown mx-0 px-0"
              :class="{ 'nested-dropdown-after': miniMenuOpen }"
            >
              <ul class="navlist mini-navlist">
                <RouterLink to="/productgallery"
                  ><li
                    @click="this.$store.commit('womanClick'), hideMenuOnClick()"
                    class="navlistitem"
                  >
                    Women
                  </li></RouterLink
                >
                <RouterLink to="/productgallery"
                  ><li
                    @click="this.$store.commit('menClick'), hideMenuOnClick()"
                    class="navlistitem"
                  >
                    Men
                  </li></RouterLink
                >
              </ul>
            </div>
          </li>

          <!--Cart, About och Contact-->
          <RouterLink to="/cart"
            ><li class="navlistitem" @click="hideMenuOnClick">
              Cart
            </li></RouterLink
          >
          <RouterLink to="/about"
            ><li class="navlistitem" @click="hideMenuOnClick">
              About
            </li></RouterLink
          >
          <RouterLink to="/contact"
            ><li class="navlistitem" @click="hideMenuOnClick">
              Contact
            </li></RouterLink
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<!--Koden till hamburgermenyn är inspirerad av https://codepen.io/Infamous5b9ae1d83a/pen/GOmzBr-->
