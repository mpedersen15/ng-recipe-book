import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditting.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editItem = this.slService.getIngredient(index);

        this.slForm.setValue({
          name :this.editItem.name,
          amount : this.editItem.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    console.log(form);
    const value = form.value;
    if (this.editMode) {
      this.slService.updateIngredient(this.editIndex, new Ingredient(value.name, value.amount));
      this.editMode = false;
    }else {
      this.slService.addIngredient(new Ingredient(value.name, value.amount));
    }

    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
