import { Component,Input,OnInit } from '@angular/core';
import { CdkDrag,Point } from '@angular/cdk/drag-drop';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-linked-recipe',
  templateUrl: './linked-recipe.component.html',
  styleUrl: './linked-recipe.component.scss',
  standalone:true,
  imports:[CdkDrag]
})
export class LinkedRecipeComponent implements OnInit
{
  @Input () recipe!:Recipe;
  author!:User;
  drapPosition:Point = {x:0,y:0};

  constructor(private userService:UserService){}

  ngOnInit()
  {
    this.author = this.userService.getUserByID(this.recipe.authorID);
  }

  reInitPosition()
  {
    this.drapPosition = {x:0,y:0};
  }

  onViewUserProfile()
  {
    this.userService.navigateToUserProfileById(this.author.id);
  }
}
