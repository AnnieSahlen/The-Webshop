<script>
  // import HamburgerMenu from './HamburgerMenu.vue'

  export default {
    // components: { HamburgerMenu },
    data: function () {
      return {
        menuOpen: false
      }
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .dropdown-after {
    height: 40vh;
    width: 100vw;
    transition: height 0.2s, width 0.2s ease;
  }
  .navlist {
    list-style: none;
    padding: 0;
  }
  .navlistitem {
    text-align: center;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #3c2502;
    background-color: #e9dbbc;
  }
  .navlist :hover {
    color: #a08c5b;
  }
</style>

<template>
  <!-- <HamburgerMenu /> -->

  <!--Header: hamburgerikonen-->
  <div class="container-fluid mx-0 px-0">
    <div class="row gy-2 mx-0 px-0 mt-4 mb-4">
      <div class="col-6">
        <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
          <i class="bi bi-list" style="font-size: 1.3rem; color: #5f4338" />
        </button>
      </div>

      <!--Header: ikonerna till höger-->
      <div class="col-6 nav-icons">
        <i class="bi bi-search" style="font-size: 1.3rem; color: #5f4338" />
        <RouterLink to="/cart"
          ><i
            class="bi bi-bag-dash"
            style="font-size: 1.3rem; color: #5f4338"
          />
        </RouterLink>
        <i class="bi bi-heart" style="font-size: 1.3rem; color: #5f4338" />
        <i class="bi bi-door-open" style="font-size: 1.3rem; color: #5f4338" />
      </div>

      <!--Loggan-->
      <div class="col-12 text-center">
        <RouterLink to="/"><h1>Webshop</h1></RouterLink>
      </div>

      <!--När man trycker på hamburgerikonen-->
      <div
        class="row dropdown mx-0 px-0"
        :class="{ 'dropdown-after': menuOpen }"
      >
        <ul class="navlist">
          <RouterLink to="/"><li class="navlistitem">Home</li></RouterLink>
          <!-- <RouterLink to="/productgallery"
            ><li class="navlistitem">Product Gallery</li></RouterLink
          > -->
          <RouterLink to="/cart"><li class="navlistitem">Cart</li></RouterLink>
          <RouterLink to="/about"
            ><li class="navlistitem">About</li></RouterLink
          >
          <RouterLink to="/contact"
            ><li class="navlistitem">Contact</li></RouterLink
          >
        </ul>
      </div>
    </div>
  </div>
</template>
