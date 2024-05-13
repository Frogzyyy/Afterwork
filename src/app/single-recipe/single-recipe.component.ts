import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
import { recipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.scss',
})
export class SingleRecipeComponent implements OnInit
{
  recipe$!:Observable<Recipe>;
  author$!:Observable<User>;
  linkedRecipes$!:Observable<Recipe[]>;
  userID!:number;

  constructor(
    private recipeService:recipeService,
    private route:ActivatedRoute,
    private userService:UserService
  ){}

  ngOnInit()
  {
    this.recipe$ = this.recipeService.getRecipeByID(+this.route.snapshot.params['id']);
    this.recipe$.subscribe(val => this.userID = val.authorID);
    this.author$ = this.recipeService.getAuthor(this.userID);
    //this.linkedRecipes$ = this.recipeService.getLinkedRecipesByID(this.recipe.id);
  }

  onViewUserProfile()
  {
    this.userService.navigateToUserProfileById(this.userID);
  }
}
