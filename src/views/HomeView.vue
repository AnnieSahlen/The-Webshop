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

  /*@media (max-width: 375px) {
    .home-pictures {
      width: 100%;
      position: absolute;
      right: 0;
      bottom: 1;
      z-index: -1;
    }
  }

  @media (min-width: 980px) {
    .home-pictures {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }*/
</style>

<template>
  <div class="home-pictures">
    <RouterLink to="/productgallery"
      ><img
        @click="this.$store.commit('womanClick')"
        alt="womans clothing"
        src="/assets/woman-new-logga.jpg"
    /></RouterLink>
    <RouterLink to="/productgallery"
      ><img
        @click="this.$store.commit('menClick')"
        alt="mens clothing"
        src="/assets/men-new-logga.jpg"
      />
    </RouterLink>
    <RouterLink to="/productgallery"
      ><img
        @click="this.$store.commit('jeweleryClick')"
        alt="accessories"
        src="/assets/watch-new.jpg"
      />
    </RouterLink>
  </div>
</template>
