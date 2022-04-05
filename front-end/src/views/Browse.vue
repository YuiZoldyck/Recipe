<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Taiwanese')" href="#" class="pure-menu-link browsea">Taiwanese</a></li>
      <li class="pure-menu-item"><a @click="select('Dessert')" href="#" class="pure-menu-link browsea">Dessert</a></li>
      <li class="pure-menu-item"><a @click="select('Baked')" href="#" class="pure-menu-link browsea">Baked</a></li>
      <li class="pure-menu-item"><a @click="select('Thai')" href="#" class="pure-menu-link browsea">Thai</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowsePage',
  components: {
    ProductList
  },
  data() {
    return {
      foodType: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.foodType === this.foodType);
    }
  },
  methods: {
    select(foodType) {
      this.foodType = foodType;
    }
  }
}
</script>

<style>

.browsea {
  color: #95816A;
  font-size: 1.5em;
}
</style>