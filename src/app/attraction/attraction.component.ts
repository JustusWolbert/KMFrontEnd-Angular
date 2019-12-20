import { Component } from '@angular/core';
import { Attraction } from './attraction';
import { AttractionService } from './attraction.service';

@Component({
  selector: 'attraction-root',
  templateUrl: './attraction.component.html',
  providers: [AttractionService]
})

export class AttractionComponent{
  attr : Attraction;
  attrList: Attraction[] = []

  constructor(private attractionService: AttractionService){
    this.attractionService.getAttractionList().subscribe(ab => this.attrList = ab);
  }
}
//console.log(ab)
