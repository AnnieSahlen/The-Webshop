<script>
  export default {
    data() {
      return { x: '' }
    }
  }
</script>

<style scoped>
  label {
    display: flex;
    margin-top: 10px;
  }

  input {
    display: flex;
    margin-top: 20px;
  }

  .col-sm-12 {
    /* display: flex; */
    border: double;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
    /* justify-content: center; */
  }

  #confirmationbutton {
    display: flex;
    justify-content: center;
  }

  label,
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <p>Summary of your order:</p>
        <p :key="index" v-for="(product, index) in $store.state.cart">
          {{ product.title }} {{ product.price }}
        </p>
        <p style="font-weight: bold">Total: {{ $store.state.total }}</p>
      </div>
      <div class="col-sm-12" id="contactinformation">
        <h4>Contactinformation</h4>
        <form action="">
          <input id="sur-name" placeholder="Efternamn" type="text" />
          <input id="first-name" name="first-name" placeholder="Förnamn" />
          <input id="email" placeholder="Email" type="text" v-model="x" />
          <input id="phonenumber" placeholder="Phonenumber" type="text" />
          <input id="streetadress" placeholder="Streetadress" type="text" />
          <input id="city" placeholder="City" type="text" />
          <input id="postalcode" placeholder="Postal code" type="text" />
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h4>Delivery</h4>
        <form id="radio">
          <label for="homedelivery">Homedelivery</label>
          <input
            type="radio"
            id="paypal"
            name="delivery"
            value="Homedelivery"
          />
          <label for="pick-up">Pick-Up</label>
          <input type="radio" id="pickup" name="delivery" value="Pick-up" />
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h4>Payment</h4>
        <p>You total amount is: {{ $store.state.total }}.</p>
        <p>Please choose desired payment option.</p>

        <form>
          <label for="paypal"><i class="bi bi-paypal" /> Paypal</label>
          <input type="radio" id="paypal" name="payment" value="Paypal" />

          <label for="creditcard"
            ><i class="bi bi-credit-card-2-back" /> Creditcard</label
          >
          <input
            type="radio"
            id="creditcard"
            name="payment"
            value="Creditcard"
          />
          <label for="invoice"><i class="bi bi-receipt" /> Invoice</label>
          <input type="radio" id="invoice" name="payment" value="Invoice" />
        </form>
      </div>
    </div>
  </div>
  <div id="confirmationbutton">
    <RouterLink to="/confirmation">
      <button
        type="button"
        class="btn btn-success"
        style="margin: 30px"
        @click="$store.commit('changeEmail', x)"
      >
        Confirmation
      </button>
    </RouterLink>
  </div>
</template>
