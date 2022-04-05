<template>
<div class="home">

  <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/>

    <div v-for="recipe in recipes" :key="recipe.id">
      <button type="button" @click="openModal(recipe)">{{recipe.title}}</button>
    </div>

</div>
</template>

<style scoped>
button {
    width: 25%;
    margin: 1%;
    background: #fff7da;
    color: #8D7263;
    border: 1px solid #8c7162;
}
.image h2 {
  font-style: italic;
}

.image p {
  font-size: 12px;
}
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>

<script>
// @ is an alias to /src
import axios from 'axios';
import modal from './Modal';

export default {
  name: 'BlogView',
  components: {
    modal
  },
  data() {
    return {
     modalVisible: false,
     modelData: [],
     recipes: [],
    }
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
        return true;
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
    openModal(recipe) {
      this.modalVisible = true;
      this.modalData = recipe;
      console.log(this.modalData);
    },
  }
}
</script>
