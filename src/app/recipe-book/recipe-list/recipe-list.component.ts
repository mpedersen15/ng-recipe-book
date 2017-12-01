import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Super delicious', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pepperoni_pizza_%282%29.png'),
    new Recipe('Cheeseburger', 'Classic Dish', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe){
    console.log('recipe selected', recipe);
    this.recipeSelected.emit(recipe);
  }

}
