<template>
  <div>
    <h1>Your Cart</h1>
    <CartList :products="cart" />
    <h2 class="center " v-if="this.$root.$data.cart.length == 0">Empty Cart</h2>
    <h2>Your Cart Total: THB {{getTotal}}</h2>

    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'BrowsePage',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },

    getTotal(){
       var total = this.$root.$data.cart
       let result = 0;
       for(let i = 0;i < total.length; i++ ) {
         result += total[i].price * total[i].quantity
       }
       return result;
     }

  },
  methods: {
    checkout(){
      alert('Thank you for shopping here! Your total purchase today is THB ' + this.getTotal + '!')
    }
  }
}
</script>


<style scoped>
* {
  color: #90705D;
}

.center {
  text-align: center;
  padding-bottom: 15%;
}
.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item img {
    width: 75px;
}

.menu-item h2{
    color: black;
    float: left;
    text-align: left;
    padding: 0;
}

button {
  height: 50px;
  background: #fff7da;
  color: #8D7263;
  border: 1px solid black;
}
</style>