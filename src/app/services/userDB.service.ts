import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({providedIn:'root'})

export class userDB
{
  users: User[] = [{
    id:1,
    name:"Yohann",
    email:"",
    password:"",
    profilePictureURL:"../assets/img/profile-pictures/yohann-PP.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id:2,
    name:"Marie",
    email:"",
    password:"",
    profilePictureURL:"../assets/img/profile-pictures/profile-picture.png"
  },{
    id:3,
    name:"Fannar",
    email:"",
    password:"",
    profilePictureURL:"../assets/img/profile-pictures/profile-picture.png"
  },{
    id:4,
    name:"Ula",
    email:"",
    password:"",
    profilePictureURL:"../assets/img/profile-pictures/profile-picture.png"
  }];

  getUsers():User[]
  {
    return this.users;
  }

}
