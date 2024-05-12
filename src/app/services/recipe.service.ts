import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { recipeDB } from "./recipeDB.service";
import { User } from "../models/user.model";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})

export class recipeService
{
  constructor(
    private recipeDB:recipeDB,
    private userService:UserService,
    private router:Router,
    private http:HttpClient
  ){}

  recipes:Recipe[] = [];//this.recipeDB.getRecipes();

  getAllRecipes():Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  /*getRecipeByID(recipeID:number):Observable<Recipe>
  {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${recipeID}`);
    
    const recipe = this.recipes.find(recipe => recipe.id === recipeID);

    if(!recipe)
    {
      throw new Error('Recipe not found by getRecipeByID()');
    }
    else
    {
      return recipe;
    }
  }

  getRecipesByUserID(userID: number):Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes/authorID/${userID}`);
    /*
    let userRecipes: Recipe[] = [];

    for(var i = 0 ; i < this.recipes.length ; i++)
    {
      if(this.recipes[i].authorID == userID)
      {
        userRecipes.push(this.recipes[i]);
      }
    }
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

  getAuthor(recipeID: number):Observable<User>
  {

    return this.userService.getUserByID(this.getRecipeByID(recipeID));
  }
*/
  navigateToRecipeByID(recipeID:number)
  {
    this.router.navigateByUrl(`recipe/${recipeID}`);
  }
}
