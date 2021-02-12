import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featurecategory = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  OnSelect(feature:string){
      this.featurecategory.emit(feature);
  }
}
