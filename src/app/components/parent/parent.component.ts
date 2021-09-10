import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() dText:string = "defaultText";
  
  // username:string = "jon";
  
  cText:string = "child component default text";
  
  constructor() { }

  ngOnInit(): void {
  }

  getChildText(data: string){
    this.cText = data;
  }

}
