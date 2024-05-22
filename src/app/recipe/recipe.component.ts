import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
import { recipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit
{
  recipe!:Recipe;
  author!:User;
  linkedRecipes!:Recipe[];

  constructor(
    private recipeService:recipeService,
    private route:ActivatedRoute,
    private userService:UserService
  ){}

  ngOnInit()
  {
    this.recipe = this.recipeService.getRecipeByID(+this.route.snapshot.params['id']);
    this.author = this.recipeService.getAuthor(this.recipe.id);
    this.linkedRecipes = this.recipeService.getLinkedRecipesByID(this.recipe.id);
  }

  onViewUserProfile()
  {
    this.userService.navigateToUserProfileById(this.author.id);
  }
}
