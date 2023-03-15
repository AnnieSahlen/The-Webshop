<script></script>

<style scoped>
  div {
    text-align: center;
    height: 300px;
  }

  span {
    font-weight: bold;
  }
</style>

<template>
  <div>
    <h1>Confirmation</h1>
    <p style="margin-top: 20px">
      Thank you for your order. Confirmation will be sent to:
      <span> {{ $store.state.mail }} </span>
    </p>
  </div>
</template>
