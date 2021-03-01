import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  public ingredients:Ingredient[]=[];
  constructor(private _shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingService.getIngredients();
    this._shoppingService.newIngredient.subscribe(
      (Ingredient:Ingredient)=>{
        this.ingredients.push(Ingredient);
      }
    );
  }

 
}
