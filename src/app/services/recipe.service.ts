import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { User } from "../models/user.model";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})

export class recipeService
{
  constructor(
    private userService:UserService,
    private router:Router,
    private http:HttpClient
  ){}

  serverURL:string = `http://localhost:3000/`;

  getAllRecipes(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(this.serverURL+'recipes');
  }

  getRecipeByID(recipeID:number):Observable<Recipe>
  {
    return this.http.get<Recipe>(this.serverURL+'recipes/'+recipeID);
  }

  getRecipesByUserID(userID: number):Recipe[]
  {
    let userRecipes: Recipe[] = [];

    this.getAllRecipes().subscribe({
      next : (recipes) => {
        for(var i = 0 ; i < recipes.length ; i++){
          if(recipes[i].authorID == userID)
          {
            userRecipes.push(recipes[i]);
          }
        }
      }
    });
    return userRecipes;
  }
/*
  getLinkedRecipesByID(recipeID:number):Observable<Recipe[]>
  {
    const recipe: Observable<Recipe> = this.getRecipeByID(recipeID);
    let linkedRecipes: Observable<Recipe[]>;

    if(!recipe.subscribe(val => val.linkedRecipes))
    {
      throw new Error('Recipe has not any linked recipes');
    }

    else
    {
      for(var i = 0 ; i < recipe.linkedRecipes.length ; i++)
      {
        linkedRecipes.push(this.getRecipeByID(recipe.linkedRecipes[i]));
      }
    }
    return linkedRecipes;
    
  }
*/
  getAuthor(recipeID: number):Observable<User>
  {
    var user:any;
    this.getRecipeByID(recipeID).subscribe((value) =>{user.id = value.authorID});
    return this.userService.getUserByID(user.id);
  }

  navigateToRecipeByID(recipeID:number)
  {
    this.router.navigateByUrl(`recipe/${recipeID}`);
  }
}
