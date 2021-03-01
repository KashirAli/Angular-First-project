import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingService{
    public newIngredient = new EventEmitter<Ingredient>();
    private ingredients:Ingredient[]=[

        new Ingredient('Apple' ,10),
        new Ingredient('Banana',30)
      
      ];
    
      getIngredients(){
          return this.ingredients.slice();
      }
    
}