import { Component,Input,OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { recipeService } from '../services/recipe.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit
{
  constructor(
    private recipeService:recipeService,
    private userService:UserService
  ){}

  @Input() recipe!:Recipe;
  author!:User;

  ngOnInit()
  {
   // this.author = this.recipeService.getAuthor(this.recipe.id);
  }

  onViewUserProfile(userID:number)
  {
    this.userService.navigateToUserProfileById(userID);
  }
}
