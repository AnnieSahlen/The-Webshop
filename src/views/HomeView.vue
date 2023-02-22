<style>
  .home-pictures img {
    width: 100%;
  }

  .home-pictures {
    align-items: center;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 1;
    z-index: -1;
  }

  @media (max-width: 375px) {
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
  }
  .call-to-action1 {
    display: flex;
    text-align: center;
    font-size: 60px;
    letter-spacing: 2px;
    position: absolute;
    padding-top: 350px;
    padding-left: 600px;
    width: 30%;
  }

  .call-to-action1 a {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 10px 30px;
  }

  .call-to-action2 {
    display: flex;
    text-align: center;
    font-size: 60px;
    letter-spacing: 2px;
    position: absolute;
    padding-top: 250px;
    padding-left: 600px;
    width: 30%;
  }

  .call-to-action2 a {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 10px 30px;
  }
</style>

<template>
  <h1>Webshop</h1>

  <div class="home-pictures">
    <div class="call-to-action1">
      <a href="">Women</a>
    </div>
    <img alt="" src="/assets/woman-new.jpg" />
    <div class="call-to-action2">
      <a href="">Men</a>
    </div>
    <img alt="" src="/assets/men-new.jpg" />
    <img alt="" src="/assets/watch-new.jpg" />
  </div>
</template>
