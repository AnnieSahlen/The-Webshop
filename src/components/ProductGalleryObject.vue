<style scoped>
  .card {
    margin: auto;
    border: 0px;
  }
  card-body {
    margin: auto;
  }
  img {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    max-height: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .card-title {
    font-size: smaller;
  }

  .card:hover {
    transform: scale(1.1);
  }
</style>

<template>
  <div class="card h-100" style="width: 10rem">
    <img src="/assets/example-picture.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Example product</h5>
      <h6>€ 25</h6>
    </div>
  </div>
</template>
