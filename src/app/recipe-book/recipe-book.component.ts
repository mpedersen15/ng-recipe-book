import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
            this.selectedRecipe = recipe;
        });
    }

    ngOnInit() {
    }
}
