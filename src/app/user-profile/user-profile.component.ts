import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { recipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit
{
  constructor(
    private userService:UserService,
    private recipeService:recipeService,
    private route:ActivatedRoute
  ){}

  user!:User;
  userRecipes$!:Observable<Recipe[]>;

  ngOnInit()
  {
    this.user = this.userService.getUserByID(+this.route.snapshot.params['id']);
    // this.userRecipes$ = this.recipeService.getRecipesByUserID(this.user.id);
  }

  onViewRecipe(recipeID:number)
  {
    this.recipeService.navigateToRecipeByID(recipeID);
  }
}
