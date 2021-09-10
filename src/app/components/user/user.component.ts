import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  errorText:string = "Loading..";

  constructor(private route:ActivatedRoute, private usersService:UsersService) { }
  
  ngOnInit(): void {
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.usersService.getUser(id).subscribe((data: any)=>{
        this.user = data;
      },(error: any)=>{
        this.errorText = error.message;
      });
    }
  }



}
