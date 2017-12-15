import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Super delicious',
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pepperoni_pizza_%282%29.png',
      [
        new Ingredient('dough', 1),
        new Ingredient('sauce', 1),
        new Ingredient('cheese', 1)
      ]
    ),
    new Recipe(
      'Cheeseburger',
      'Classic Dish',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png',
      [
        new Ingredient('bun', 1),
        new Ingredient('hamburger', 1),
        new Ingredient('cheese', 2)
      ]
    )
  ];

  constructor() { }

  addRecipe(recipe: Recipe) {
    console.log('added recipe', recipe)
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice())
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice(0);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }

}
