import { AdditionalNotes } from "./additional-notes.model";
import { Ingredient } from "./ingredient.model";
import { recipeType } from "./recipe-type.model";

export class Recipe
{
  id!:number;
  types?:recipeType[];
  imageURL!:string;
  title!:string;
  ingredients!:Ingredient[];
  adNotes?:AdditionalNotes;
  method?:string[];
  authorID!:number;
  linkedRecipes?:number[];
}
