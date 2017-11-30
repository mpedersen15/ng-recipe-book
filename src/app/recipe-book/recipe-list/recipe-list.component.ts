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
    new Recipe('Pizza', 'Super delicious', 'https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_960_720.png'),
    new Recipe('Cheeseburger', 'Classic Dish', 'https://cdn.pixabay.com/photo/2016/03/05/19/08/abstract-1238262_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe){
    console.log('recipe selected', recipe);
    // this.selectedRecipe = recipe;
    this.recipeSelected.emit(recipe);
  }

}
