import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    public recipeSelect = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe('First Recipe','this is the first recipe','https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg'),
        new Recipe('Second Recipe','this is the Second recipe','https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg')
      ];
    getRecipe(){
        return this.recipes.slice();
    }
}