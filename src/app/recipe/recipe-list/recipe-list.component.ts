import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  public recipes:Recipe[] = [
    new Recipe('First Recipe','this is the first recipe','https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg'),
    new Recipe('Second Recipe','this is the Second recipe','https://therecipecritic.com/wp-content/uploads/2019/12/creamy_sausage_tortellini-368x463.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  recipeisselected(ecipe:Recipe){      this.recipeWasSelected.emit(ecipe);
  }
}
