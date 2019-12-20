import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'organiser-root',
  templateUrl: './organiser.component.html'
})

export class OrganiserComponent{
  tourName : string;
  artistName : string;
  category : string;
  description : string;
  test: string;
}
