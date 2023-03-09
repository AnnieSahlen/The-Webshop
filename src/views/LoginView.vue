<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <div class="mb-3">
          <form @submit.prevent="Submit">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              required
              aria-describedby="emailHelp"
            />
          </form>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"
            required
          />
        </div>
        <router-link
          class="btn btn-secondary"
          v-if="!$store.state.email"
          to="/login"
        >
          Login
        </router-link>

        <a v-if="$store.state.email" @click="logout"> Logout </a>
        <router-link class="btn btn-secondary" to="/register"
          >Create Account</router-link
        >
      </div>

      <div class="col-md-3" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      Submit() {
        this.$store.commit('login', this.form.email)
      }
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
</style>
