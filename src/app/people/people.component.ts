import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/types/person.type';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private _people: Person[];
  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {
    this._people = {} as Person[];
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach((k: string) => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
   }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    this._http.get<Person[]>(this._backendURL.allPeople)
      .subscribe({ next: (people: Person[]) => this._people = people });
  }

}
