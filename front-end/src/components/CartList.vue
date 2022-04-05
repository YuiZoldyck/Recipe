<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="quantity">
        <p>Quantity: {{product.quantity}}</p>
      </div>
      <div class="price">
        <p>
        <font size="-3">THB</font> {{product.price}} <br>
        Total: <font size="-3">THB</font> {{product.total = product.price * product.quantity}}</p>
        <button class="auto" @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array,
  },
  methods: {
    removeFromCart(product_id) {

      let result = this.$root.$data.cart.find((res) => {
        if (res.id == product_id) {
          return res.id;
        }
      });

      if (result) {
        for (let i = this.$root.$data.cart.length-1; i >= 0; i--) {
          if (this.$root.$data.cart[i].id == product_id && this.$root.$data.cart[i].quantity > 1){
            const newFoodObject = {
              ...this.$root.$data.cart[i],
              quantity: this.$root.$data.cart[i].quantity - 1,
            };
            this.$set(this.$root.$data.cart, i, newFoodObject);
          }
          if (this.$root.$data.cart[i].id == product_id && this.$root.$data.cart[i].quantity == 1) {
            this.$delete(this.$root.$data.cart, this.$root.$data.cart.indexOf(result));
          }
        }
      }

      
    } 
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #FFEAE5;
  color: #8F7261;
  padding: 10px 30px;
  height: 55px;
}
.info h1 {
  font-size: 15px;
  text-align: center;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.price {
  display: flex;
}

.price h2 {
  font-size: 0.9 em;
  align-content: center;
}

.price p {
  font-size: 0.7em;
  align-content: center;
}

.quantity p{
  font-size: 0.9em;

}

button {
  height: 50px;
  width: 50%;
  background: #fff7da;
  color: #8D7263;
  border: 1px solid black;

}

.auto {
  margin-left: auto;
}
</style>