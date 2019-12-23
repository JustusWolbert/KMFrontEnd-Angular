import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Attraction } from '../attraction/attraction';
import { AttractionService } from '../attraction/attraction.service';

@Component({
  selector: 'attraction-editor',
  templateUrl: './attraction-editor.component.html',
  styleUrls: ['./attraction-editor.component.css'],
  providers: [AttractionService]
})

export class AttractionEditorComponent {
  constructor(
    private fb: FormBuilder,
    private as: AttractionService){}

  attractionForm = this.fb.group({
    tourName: [''],
    artistName: [''],
    category: [''],
    description: ['']
  });

  onSubmit() {
    const result: Attraction = Object.assign({}, this.attractionForm.value);
    this.as.postAttraction(result).subscribe();
    console.log(result);
  }
}
