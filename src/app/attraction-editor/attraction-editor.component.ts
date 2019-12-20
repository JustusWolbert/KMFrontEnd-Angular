import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Attraction } from '../attraction/attraction';

@Component({
  selector: 'attraction-editor-root',
  templateUrl: './attraction-editor.component.html',
  styleUrls: ['./attraction-editor.component.css']
})

export class AttractionEditorComponent {
  constructor(private fb: FormBuilder){}
  attractionForm = this.fb.group({
    tourName: [''],
    artistName: [''],
    category: [''],
    description: ['']
  });



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("hi");
    console.warn(this.attractionForm.value);
  }
}
