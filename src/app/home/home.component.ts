import { Component, Input } from '@angular/core';
import { Attraction } from '../attraction/attraction';
import { AttractionService } from '../attraction/attraction.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [AttractionService]
})
export class HomeComponent {
  attrList: Attraction[] = []

  constructor(private attractionService: AttractionService){
    this.attractionService.getAttractionList().subscribe(ab => this.attrList = ab);
  }
}
