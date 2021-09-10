import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Output()
  childText: EventEmitter<string> = new EventEmitter<string>();
  users:any[] = [];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users =this.usersService.getAllUsers();
  }

  passMsg(){
    this.childText.emit(" this is child component text");
  }

}
