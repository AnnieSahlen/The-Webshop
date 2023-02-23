<script>
  import HamburgerMenu from './HamburgerMenu.vue'

  export default {
    components: { HamburgerMenu },
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
</style>

<template>
  <HamburgerMenu />
  <div class="container-fluid">
    <div class="row gy-2">
      <div class="col-6">
        <div class="hamburger-wrap">
          <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <i class="bi bi-list" style="font-size: 1.3rem; color: #5f4338" />
          </button>
        </div>
      </div>

      <div class="col-6 nav-icons">
        <i class="bi bi-search" style="font-size: 1.3rem; color: #5f4338" />

        <RouterLink to="/"
          ><i
            class="bi bi-bag-dash"
            style="font-size: 1.3rem; color: #5f4338"
          />
        </RouterLink>

        <i class="bi bi-heart" style="font-size: 1.3rem; color: #5f4338" />

        <i class="bi bi-door-open" style="font-size: 1.3rem; color: #5f4338" />
      </div>
      <div class="col-12 text-center">
        <RouterLink to="/"><h1>Webshop</h1></RouterLink>
      </div>
    </div>
  </div>
</template>

<!-- @click="$router.push('/FavoritesView')" -->
