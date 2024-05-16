import { AdditionalNotes } from "./additional-notes.model";
import { Ingredient } from "./ingredient.model";
import { recipeType } from "./recipe-type.model";

export class Recipe
{
  id!:number;
  authorID!:number;
  title!:string;
  types?:recipeType[];
  imageURL!:string[];
  ingredients!:Ingredient[];
  adNotes?:AdditionalNotes;
  method?:string[];
  linkedRecipes?:number[];
}
