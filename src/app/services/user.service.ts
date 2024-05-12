import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { userDB } from "./userDB.service";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})

export class UserService
{
  constructor(
    private userDB:userDB,
    private router:Router
  ){}

  users:User[] = this.userDB.getUsers();

  getAllUsers():User[]
  {
    return this.users;
  }

  getUserByID(userID:number):User
  {
    const user = this.users.find(user => user.id === userID);

    if(!user)
    {
      throw new Error('User not found by getUserByID()');
    }
    else
    {
      return user;
    }
  }

  navigateToUserProfileById(userID:number)
  {
    this.router.navigateByUrl("user/"+userID);
  }
}
