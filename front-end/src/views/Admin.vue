<template>
  <div class="admin">
    <h1>Add/Edit/Delete a Recipe on the Page!</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add an Recipe</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Recipe Name">
        <input v-model="description" placeholder="Recipe">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addRecipe">
        <h2>{{addRecipe.title}}</h2>
        <textarea v-model="description"></textarea>
        <img :src="addRecipe.path" />
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete an Recipe</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectRecipe(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findRecipe">
        <input v-model="findRecipe.title">
        <input v-model="findRecipe.description">
        <p></p>
        <img :src="findRecipe.path" />
      </div>
      <div class="actions" v-if="findRecipe">
        <button @click="deleteRecipe(findRecipe)">Delete</button>
        <button @click="editRecipe(findRecipe)">Edit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  data() {
    return {
      title: "",
      file: null,
      addRecipe: null,
      recipes: [],
      findTitle: "",
      findRecipe: null,
      description: "",
    }
  },
  computed: {
    suggestions() {
      return this.recipes.filter(recipe => 
        recipe.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
    }
  },
  created() {
    this.getRecipes();
  },
  /* eslint-disable */
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/recipes', {
          title: this.title,
          recipe: this.recipe,
          path: r1.data.path,
          description: this.description,
        });
        this.addRecipe = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectRecipe(recipe) {
      this.findTitle = "";
      this.findDescription = "";
      this.findRecipe = "";
      this.findRecipe = recipe;
    },
    async deleteRecipe(recipe) {
      try {
        await axios.delete("/api/recipes/" + recipe._id);
        this.findRecipe = null;
        this.getRecipes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editRecipe(recipe) {
      try {
        await axios.put("/api/recipes/" + recipe._id, {
          title: this.findRecipe.title,
          description: this.findRecipe.description,
        });
        this.findRecipe = null;
        this.getRecipes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
  /* eslint-disable */
}
</script>
