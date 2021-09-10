import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: number = 0
  dashboardText:string = "dashboard text";
  // @Output
  // uname:string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = Number(this.route.snapshot.paramMap.get('id'));
  }

}
