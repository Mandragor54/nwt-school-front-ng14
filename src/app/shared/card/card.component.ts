import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../types/person.type';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public person: Person;

  constructor() { 
    this.person = {} as Person;
  }

  ngOnInit(): void {
  }

}
