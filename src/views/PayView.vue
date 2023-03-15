<script>
  export default {
    methods: {
      combineEvents: function () {
        this.$store.commit('changeEmail', this.x)
        this.$store.commit('refresh')
      }
    },

    // varför fungerar inte ovan metod, x is undefined?
    data() {
      return { x: '' }
    }
  }
</script>

<style scoped>
  .container-fluid {
    width: 300px;
  }

  label {
    display: inline;
    margin-top: 10px;
  }

  input {
    display: inline;
    margin-top: 20px;
  }

  .col-sm-12 {
    border: double;
    border-radius: 2%;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
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

  .formpaymentdeliver {
    display: flex;
    flex-direction: row;
  }

  .text {
    text-align: left;
  }

  @media only screen and (min-width: 600px) {
    .container-fluid {
      width: 400px;
    }
  }

  @media only screen and (min-width: 800px) {
    .container-fluid {
      width: 600px;
    }
  }

  @media only screen and (min-width: 900px) {
    .container-fluid {
      width: 800px;
    }
  }
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <p>Summary of your order:</p>
        <p :key="index" v-for="(product, index) in $store.state.cart">
          {{ product.title }} £{{ product.price }}
        </p>
        <p style="font-weight: bold">Total: £{{ $store.state.total }}</p>
      </div>
      <div class="col-sm-12" id="contactinformation">
        <h4>Contactinformation</h4>
        <form action="">
          <input id="first-name" name="first-name" placeholder="Firstname" />
          <input id="sur-name" name="sur-name" placeholder="Surnamne" />
          <input id="email" name="email" placeholder="Email" v-model="x" />
          <input
            id="phonenumber"
            name="phonenumber"
            placeholder="Phonenumber"
          />
          <input
            id="streetadress"
            name="streetadress"
            placeholder="Streetadress"
          />
          <input id="city" name="city" placeholder="City" />
          <input id="postalcode" name="postalcode" placeholder="Postal code" />
        </form>
      </div>
    </div>

    <!-- Form for delivery -->
    <div class="row">
      <div class="col-sm-12">
        <h4>Delivery</h4>

        <form class="formpaymentdeliver col-12">
          <input
            class="col-2"
            type="radio"
            id="paypal"
            name="delivery"
            value="Homedelivery"
          />
          <label class="col-4 text" for="homedelivery">Homedelivery</label>
          <input
            class="col-2"
            type="radio"
            id="pickup"
            name="delivery"
            value="Pick-up"
          />
          <label class="col-4 text" for="pick-up">Pick-Up</label>
        </form>
      </div>
    </div>

    <!-- Form for payment -->
    <div class="row">
      <div class="col-sm-12">
        <h4>Payment</h4>
        <p>You total amount is: £{{ $store.state.total }}.</p>
        <p>Please choose desired payment option.</p>

        <form class="formpaymentdeliver col-12">
          <input
            class="col-1"
            type="radio"
            id="paypal"
            name="payment"
            value="Paypal"
          />
          <label class="col-3 text" for="paypal"> Paypal</label>
          <!--  -->

          <input
            class="col-1"
            type="radio"
            id="creditcard"
            name="payment"
            value="Creditcard"
          />
          <label class="col-3 text" for="creditcard"> Creditcard</label>
          <!--  -->
          <input
            class="col-1"
            type="radio"
            id="invoice"
            name="payment"
            value="Invoice"
          />
          <label class="col-3 text" for="invoice"> Invoice</label>
          <!-- <i class="bi bi-receipt" /> -->
        </form>
      </div>
    </div>
  </div>
  <div id="confirmationbutton">
    <RouterLink to="/confirmation">
      <button
        type="button"
        class="btn btn-primary"
        style="margin: 30px"
        @click="combineEvents"
      >
        Confirmation
      </button>
    </RouterLink>
  </div>
</template>
