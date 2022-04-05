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
        <div class="price">
          <h2>THB {{product.price}}</h2>
          <button class="auto" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
      addToCart(product) {
          let exist = false;
          this.$root.$data.cart.forEach(item =>{
              if(item.id == product.id){
                  exist = true;
              }
          });
          if(!exist){
            product.quantity = 1;
            this.$root.$data.cart.push(product)
          } else {
              product.quantity++;
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
  font-size: 1em;
  align-content: center;
  color: #90705D;
}

button {
  height: 50px;
  background: #fff7da;
  color: #8D7263;
  border: 1px solid black;
}

.auto {
  margin-left: auto;
}
</style>