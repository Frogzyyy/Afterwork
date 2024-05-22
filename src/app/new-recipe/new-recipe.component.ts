import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss'
})
export class NewRecipeComponent implements OnInit
{
  recipeForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}


  ngOnInit()
  {}

  onSubmitForm()
  {
    console.log(this.recipeForm.value);
  }
}
