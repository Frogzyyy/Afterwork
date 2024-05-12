import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-method',
  templateUrl: './recipe-method.component.html',
  styleUrl: './recipe-method.component.scss'
})
export class RecipeMethodComponent
{
  @Input() method!:string;
}
