import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('AmountInput') AmountInput:ElementRef;
 @Output() public newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    const nameVal = this.nameInput.nativeElement.value;
    const amtVal = this.AmountInput.nativeElement.value;
    const ingredientAdd = new Ingredient(nameVal,amtVal);
    this.newIngredient.emit(ingredientAdd);
  }
}
