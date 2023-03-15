<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
            aria-describedby="emailHelp"
          />

          <!--<div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>-->
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button
          class="btn btn-secondary"
          @click="
            this.$store.commit('logIn', {
              email: email,
              password: password
            })
          "
        >
          Login
        </button>
        <div id="emailHelp" class="form-text">
          Do you not have an account?
          <div class="createaccount">
            <router-link to="/register">Create Account</router-link>
          </div>
        </div>
        <div class="col-md-3" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .container {
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
  .createaccount a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
  #emailHelp {
    padding-top: 2rem;
  }
</style>
