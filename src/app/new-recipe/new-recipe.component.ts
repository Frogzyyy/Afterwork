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

  typesTags=[
    {
      value:'savoury',name:'savoury'
    },
    {
      value:'dessert',name:'dessert'
    },
    {
      value:'sauce',name:'sauce'
    },
    {
      value:'prep',name:'prep'
    },
    {
      value:'pastry',name:'pastry'
    },
    {
      value:'ice-cream',name:'ice-cream'
    },
    {value:'cocktail',name:'cocktail'
    }
  ]

  constructor(private formBuilder:FormBuilder){}


  ngOnInit()
  {
    this.recipeForm = this.formBuilder.group({
      title:[null],
      types:new FormArray([]),
      imageURL:[null],
      ingredients:[null],
      adNotes:[null],
      method:[null]
    })
  }

  onSubmitForm()
  {
    console.log(this.recipeForm.value);
  
  }
}
