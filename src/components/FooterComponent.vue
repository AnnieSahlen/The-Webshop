<script></script>

<style>
  #item1 {
    grid-area: header;
  }
  #item2 {
    grid-area: fb;
    padding-left: 60px;
  }
  #item3 {
    grid-area: li;
  }
  #item4 {
    grid-area: in;
    padding-right: 100px;
  }
  #item5 {
    grid-area: pp;
    padding-left: 100px;
  }
  #item6 {
    grid-area: cc;
    padding-right: 60px;
  }
  #item7 {
    grid-area: footer;
  }
  #item8 {
    grid-area: em;
  }

  #grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header header'
      'fb li in em em pp cc'
      'footer footer footer footer footer footer footer';
    background-color: #a08c5b;
    text-align: center;
    align-content: end;
    width: 50%;
    height: 200px;
    gap: 1px;
  }

  #item7 {
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 25px;
  }

  i {
    font-size: 30px;
  }
</style>

<template>
  <div id="grid-container">
    <div id="item1" />
    <div id="item2"><i class="bi bi-facebook" /></div>
    <div id="item3"><i class="bi bi-linkedin" /></div>
    <div id="item4"><i class="bi bi-instagram" /></div>
    <div id="item5"><i class="bi bi-paypal" /></div>
    <div id="item6"><i class="bi bi-credit-card-2-back" /></div>
    <div id="item7">&copy; Copywright</div>
    <div id="item8" />
    <div id="item9" />
  </div>
</template>
