import { Component,Input,OnInit } from '@angular/core';
import { CdkDrag, Point } from '@angular/cdk/drag-drop';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-linked-recipe',
  templateUrl: './linked-recipe.component.html',
  styleUrl: './linked-recipe.component.scss',
  standalone:true,
  imports:[CdkDrag]
})
export class LinkedRecipeComponent implements OnInit
{
  @Input () recipe$!:Observable<Recipe>;
  author$!:Observable<User>;
  authorID!:number;
  drapPosition:Point = {x:0,y:0};

  constructor(private userService:UserService){}

  ngOnInit()
  {
    this.recipe$.subscribe(val => this.authorID = val.authorID);
    this.author$ = this.userService.getUserByID(this.authorID);
  }

  reInitPosition()
  {
    this.drapPosition = {x:0,y:0};
  }

  onViewUserProfile()
  {
    this.userService.navigateToUserProfileById(this.authorID);
  }
}
