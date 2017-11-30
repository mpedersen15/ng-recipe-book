import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputEl;
  @ViewChild('amountInput') amountInputEl;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredientName = this.nameInputEl.nativeElement.value;
    const ingredientAmount = this.amountInputEl.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(ingredient);
  }

}
