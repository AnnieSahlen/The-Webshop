<script>
  export default {
    props: {
      msg: {
        required: true,
        type: String
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <p>{{ msg }}</p>
</template>
