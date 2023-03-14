<script>
  export default {
    data() {
      return {
        // counter: 1
        // quntity: 1
      }
    },
    methods: {
      changeCounter: function (number) {
        this.counter += +number
        console.log(this.counter)
        /* om det är ett nummer och är större än noll, returnera DET angivna nummret, annars returnera noll*/
        /* ! och isNaN är båda negativa och då blir det postivt, (inte och inte ett number blir number )*/
        !isNaN(this.counter) && this.counter > 0
          ? this.counter
          : (this.counter = 1)
      }
    },
    // props: {
    //   quantity: {
    //     type: Number,
    //     required: true
    //   }
    // },
    computed: {}
  }
</script>
<style>
  .quantity {
    width: 30px;
    text-align: center;
  }
</style>

<template>
  <div class="quantity-container">
    <button class="btn-minus" type="text" @click="changeCounter('-1')">
      -
    </button>
    <input class="quantity" type="text" :value="counter" />
    <button class="btn-plus" type="text" @click="changeCounter('1')">+</button>
  </div>
</template>
