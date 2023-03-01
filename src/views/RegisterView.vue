<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-6">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Name"
            required
            aria-describedby="emailHelp"
          />
          <input
            type="text"
            class="form-control"
            id="fullName"
            placeholder=""
            required
            aria-describedby="emailHelp"
          />

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
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>

        <router-link class="btn btn-secondary" to="/register"
          >Create Account</router-link
        >
      </div>
      <div class="col-md-3" />
    </div>
  </div>
</template>

<script>
  export default {}
</script>
