import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    public recipeSelect = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = [
        new Recipe('First Recipe',
        'this is the first recipe',
        'https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg',
        [new Ingredient('pizza',10),new Ingredient('banana',4)]),
        new Recipe('Second Recipe',
        'this is the Second recipe',
        'https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg',
        [new Ingredient('bun',10),new Ingredient('milk',4)])
      ];

      constructor(private _slservie:ShoppingService){}
    getRecipe(){
        return this.recipes.slice();
    }
    recipeToShopping(ingredient:Ingredient[]){
        this._slservie.addIngredient(ingredient);
    }

}