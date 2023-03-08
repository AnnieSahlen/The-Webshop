<script>
  export default {}
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

  .col-md-4 {
    /* border-style: double; */
    padding-bottom: 20px;
    justify-content: center;
  }

  .container-fluid {
    margin-bottom: 20px;
    justify-items: center;
  }

  #confirmationbutton {
    display: flex;
    justify-content: center;
  }
</style>

<template>
  <!-- <div>
    <p>Test: {{ $store.state.cart }}</p>
  </div> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4" id="contactinformation">
        <h4>Contactinformation</h4>
        <form action="">
          <input id="sur-name" placeholder="Efternamn" type="text" />
          <input id="first-name" name="first-name" placeholder="Förnamn" />
          <input id="email" placeholder="Email" type="text" />
          <input id="phonenumber" placeholder="Phonenumber" type="text" />
          <input id="streetadress" placeholder="Streetadress" type="text" />
          <input id="city" placeholder="City" type="text" />
          <input id="postalcode" placeholder="Postal code" type="text" />
        </form>
      </div>
      <div class="col-md-4">
        <h4>Delivery</h4>
        <form>
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
      <div class="col-md-4">
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
      <button type="button" class="btn btn-success" style="margin: 30px">
        Confirmation
      </button>
    </RouterLink>
  </div>
</template>
