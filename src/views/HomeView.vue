<style>
  .homePictures img {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  @media (max-width: 375px) {
    .homePictures {
      width: 100%;
      position: absolute;
      right: 0;
      bottom: 1;
      z-index: -1;
    }
  }
  @media (min-width: 375px) {
    .homePictures {
      flex-wrap: wrap;
      width: 50%;
    }
  }
</style>

<template>
  <h1>Hem</h1>
  <div class="homePictures">
    <img alt="" src="/assets/woman.jpg" />
    <img alt="" src="/assets/men.jpg" />
    <img alt="" src="/assets/watch.jpg" />
  </div>
</template>
