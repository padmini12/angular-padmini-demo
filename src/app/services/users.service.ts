import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): any{
    return [
      {id:1, name: "purvi",city: "Indore", salary:5000, dob: new Date("10-01-2000")},
      {id:2, name: "rashmi",city: "Dewas", salary:6000, dob: new Date("10-01-2001")},
      {id:3, name: "gargi",city: "Bhopal", salary:7000, dob: new Date("10-01-2002")},
      {id:4, name: "divya",city: "Sarangpur", salary:8000, dob: new Date("10-01-2003")},
      {id:5, name: "jyoti",city: "Harda", salary:9000, dob: new Date("10-01-2004")},
    ];
  }
}
