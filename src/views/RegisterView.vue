<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="Name"
            placeholder="Name"
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Username"
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
            placeholder="Password"
          />
        </div>

        <router-link class="btn btn-secondary" to="/register"
          >Create Account</router-link
        >
      </div>
    </div>
  </div>
  <br />
</template>

<script>
  export default {}
</script>
