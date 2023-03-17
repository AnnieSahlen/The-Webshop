import FashonArticles from '../components/FashonArticles.vue';

<style scoped>
  .home-pictures img {
    width: 100%;
  }

  .home-pictures {
    align-items: center;
    width: 100%;
    /*position: absolute;*/
    right: 0;
    bottom: 1;
    z-index: -1;
  }
</style>

<template>
  <div class="home-pictures">
    <RouterLink to="/productgallery">
      <img
        @click="this.$store.commit('womanClick')"
        alt="womans clothing"
        src="/assets/woman-new-logga-brown.jpg"
    /></RouterLink>
    <RouterLink to="/productgallery"
      ><img
        @click="this.$store.commit('menClick')"
        alt="mens clothing"
        src="/assets/men-new-logga-brown.jpg"
      />
    </RouterLink>
    <RouterLink to="/productgallery"
      ><img
        @click="this.$store.commit('jeweleryClick')"
        alt="accessories"
        src="/assets/watch-new-logga-brown.jpg"
      />
    </RouterLink>
    <FashonArticles />
  </div>
</template>
