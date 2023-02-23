<style>
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
    <li>
      <RouterLink to="/productgallery"
        ><img alt="" src="/assets/woman-new-logga.jpg"
      /></RouterLink>
    </li>
    <RouterLink to="/productgallery"
      ><img alt="" src="/assets/men-new-logga.jpg" />
    </RouterLink>
    <img alt="" src="/assets/watch-new.jpg" />
  </div>
</template>
