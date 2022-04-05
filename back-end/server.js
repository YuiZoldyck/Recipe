const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipeblog', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for recipes in the museum: a title and a path to an image.
const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  recipe: String,
  path: String,
});

// Create a model for recipes in the museum.
const Recipe = mongoose.model('Recipe', recipeSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  console.log('api/photos ' , req.file)
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new recipe in the museum: takes a title and a path to an image.
app.post('/api/recipes', async (req, res) => {
  console.log('api/recipes ' , req.body.title)
  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    recipe: req.body.recipe,
    path: req.body.path,
  });
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the recipes in the museum.
app.get('/api/recipes', async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/recipes/:id', async (req, res) => {
  console.log('Delete ' , req.params.id);
  try {
    await Recipe.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/recipes/:id', async (req, res) => {
  console.log('Edit ' , req.params.id);
  let recipe = await Recipe.findOne({
    _id: req.params.id
  });
  recipe.title = req.body.title;
  recipe.description = req.body.description;
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
