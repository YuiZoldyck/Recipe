<template>
  <div class="center">
    <h1>Thank you for shopping with us!</h1> 
    <h2> Your cart total is THB  {{getTotal}}</h2>
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
            var total = this.$root.$data.cart;
            let result = 0;
            for(let i = 0;i < total.length; i++ ) {
                result += total[i].price * total[i].quantity
            }
            return result;
        }
        
    },
    methods: {

    }
}

<style>
.center {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    float: none;
}
</style>