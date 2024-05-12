import { Component,Input } from '@angular/core';
import { recipeType } from '../models/recipe-type.model';

@Component({
  selector: 'app-tags-section',
  templateUrl: './tags-section.component.html',
  styleUrl: './tags-section.component.scss'
})
export class TagsSectionComponent
{
  @Input () tag!:recipeType;
}
