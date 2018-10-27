const express = require('express');
const routes = express.Router();

//#region Controllers
const CategoryController = require('./controller/CategoryController');
const RecipeController = require('./controller/RecipeController');
//#endregion

//#region Categoty
routes.get('/category', CategoryController.index);
routes.get('/category/:id', CategoryController.show);
routes.post('/category', CategoryController.store);
routes.put('/category/:id', CategoryController.update);
routes.delete('/category/:id', CategoryController.delete);
//#endregion

//#region Recipe
routes.get('/recipe', RecipeController.index);
routes.get('/recipe/:id', RecipeController.show);
routes.post('/recipe', RecipeController.store);
routes.put('/recipe/:id', RecipeController.update);
routes.delete('/recipe/:id', RecipeController.delete);
//#endregion

module.exports = routes;