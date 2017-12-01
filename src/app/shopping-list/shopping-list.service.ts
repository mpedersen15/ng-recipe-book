import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientsUpdated = new EventEmitter();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(0);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice(0));
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.emit(this.ingredients.slice(0));
  }

}
