import { Component,
   Input,
   OnInit,
   } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   
@Input() public recipe:{name:string,description:string,imagePath:string,ingredient:Ingredient[]};
 
  constructor(private _recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  recipeSelected(){
    this._recipeService.recipeSelect.emit(this.recipe);
  }
}
