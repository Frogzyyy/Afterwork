export class Ingredient
{
  name!:string;
  logoUrl?:string;
  amount!:number;
  type!:"solid"|"liquid"|"unit"|"FM";
}
