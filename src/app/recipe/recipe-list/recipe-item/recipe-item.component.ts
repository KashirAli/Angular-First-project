import { Component,
   Input,
   OnInit,
   Output ,
   EventEmitter} from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   
@Input() public recipe:{name:string,description:string,imagePath:string};
 @Output() public recipeSelect=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(){
    this.recipeSelect.emit();
  }
}
