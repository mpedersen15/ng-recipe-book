import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);

    alert(this.recipe.ingredients.length + ' ingredients were added to the Shopping List');
  }

}
