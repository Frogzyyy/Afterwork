import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { userDB } from "./userDB.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class UserService
{
  constructor(
    private router:Router,
    private http:HttpClient
  ){}

  serverURL:string = `http://localhost:3000/`;

  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.serverURL+'users');
  }

  getUserByID(userID:number):Observable<User>
  {
    return this.http.get<User>(this.serverURL+'users/'+userID);
  }

  navigateToUserProfileById(userID:number)
  {
    this.router.navigateByUrl("user/"+userID);
  }
}
