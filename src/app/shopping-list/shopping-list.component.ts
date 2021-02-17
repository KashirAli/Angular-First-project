import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients:Ingredient[]=[

    new Ingredient('Apple' ,10),
    new Ingredient('Banana',30)
  
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getData(value){
    this.ingredients.push(value);
    console.log(value);
  }
}
