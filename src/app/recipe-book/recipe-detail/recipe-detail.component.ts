import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { RecipeService } from './../recipe.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent{
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  addToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);

    alert(this.recipe.ingredients.length + ' ingredients were added to the Shopping List');
  }

}
