import { Component } from "@angular/core";

@Component({
    selector: 'nwt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    title: string = "";

    constructor(){
        this.title = 'Angular';
    }
}