import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // private property to store name value
  private readonly _name: string;

  /**
   * Component constructor
   */
  constructor() {
    this._name = 'Marie';
  }

  /**
   * Returns private property _name
   */
  get name(): string {
    return this._name;
  }
}
