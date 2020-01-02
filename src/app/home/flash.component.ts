import { Component, Input } from '@angular/core';
import { Attraction } from '../attraction/attraction';

@Component({
  selector: 'flash',
  styleUrls: ['./flash.component.css'],
  templateUrl: './flash.component.html'
})
export class FlashComponent {
  @Input() attraction : Attraction;
  mijnvar = "joshua-fuller.jpg";
}
