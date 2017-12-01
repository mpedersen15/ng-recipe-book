import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputEl: ElementRef;
  @ViewChild('amountInput') amountInputEl: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredientName = this.nameInputEl.nativeElement.value;
    const ingredientAmount = this.amountInputEl.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);

    this.slService.addIngredient(ingredient);
  }

}
