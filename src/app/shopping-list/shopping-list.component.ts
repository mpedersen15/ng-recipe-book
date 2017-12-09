import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private slSubscription: Subscription;
  ingredients: Ingredient[] = [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.slSubscription = this.slService.ingredientsUpdated.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.slSubscription.unsubscribe();
  }

}
