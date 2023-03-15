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
            v-model="name"
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="u_name"
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

        <button
          class="btn btn-primary"
          @click="
            this.$store.commit('createUser', {
              name: name,
              user_name: u_name,
              email: email,
              password: password
            })
          "
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
  export default {}
</script>
