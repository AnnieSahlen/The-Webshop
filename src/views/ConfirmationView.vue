<script>
  export default {}
</script>

<style scoped>
  div {
    text-align: center;
    height: 300px;
  }
</style>

<template>
  <div>
    <h1>Confirmation</h1>
    <p style="margin-top: 20px">
      Thank you for your order. Confirmation will be sent to:
      {{ $store.state.mail }}
    </p>
  </div>
</template>
