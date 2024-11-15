import { Component,Input,OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { recipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-hub',
  templateUrl: './recipe-hub.component.html',
  styleUrl: './recipe-hub.component.scss'
})
export class RecipeHubComponent implements OnInit
{
  constructor(private recipeService:recipeService){}

  @Input() recipes!:Recipe[];  

  ngOnInit()
  {
    this.recipes=this.recipeService.getAllRecipes();
  }
  onViewRecipe(recipeID:number)
  {
    this.recipeService.navigateToRecipeByID(recipeID);
  }
}
