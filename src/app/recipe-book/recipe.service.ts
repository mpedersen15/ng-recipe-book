import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
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
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes.slice(0);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
