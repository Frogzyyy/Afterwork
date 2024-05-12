import { Component,Input } from '@angular/core';
import { AdditionalNotes } from '../models/additional-notes.model';

@Component({
  selector: 'app-additional-notes',
  templateUrl: './additional-notes.component.html',
  styleUrl: './additional-notes.component.scss'
})
export class AdditionalNotesComponent
{
  @Input() adNotes!:AdditionalNotes;
}
