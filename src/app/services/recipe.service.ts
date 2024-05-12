import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { recipeDB } from "./recipeDB.service";
import { User } from "../models/user.model";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})

export class recipeService
{
  constructor(
    private recipeDB:recipeDB,
    private userService:UserService,
    private router:Router,
  ){}

  recipes:Recipe[] = this.recipeDB.getRecipes();

  getAllRecipes():Recipe[]
  {
    return this.recipes;
  }

  getRecipeByID(recipeID:number)
  {
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

  getRecipesByUserID(userID: number):Recipe[]
  {
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

  getLinkedRecipesByID(recipeID:number): Recipe[]
  {
    const recipe: Recipe = this.getRecipeByID(recipeID);
    var linkedRecipes: Recipe[] = [];

    if(!recipe.linkedRecipes)
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

  getAuthor(recipeID: number):User
  {
    return this.userService.getUserByID(this.getRecipeByID(recipeID).authorID);
  }

  navigateToRecipeByID(recipeID:number)
  {
    this.router.navigateByUrl(`recipe/${recipeID}`);
  }
}
