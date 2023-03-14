<template>
  <div class="container">
    <div class="row">
      <h2>Hello {{ this.$store.state.user.name }}</h2>
      <a style="cursor: pointer" @click="this.$store.commit('logOut')">
        Log out
        <i
          class="bi bi-door-closed"
          style="font-size: 1.3rem; color: #5f4338"
        />
      </a>
    </div>
  </div>
</template>
<style>
  .card-text {
    text-align: center;
  }
</style>
