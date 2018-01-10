import { Component } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private models: any = [];

      constructor(private http: Http){
        this.http.get("https://jsonplaceholder.typicode.com/posts")
        .subscribe(
         (response: any) => {
             console.log(response.json());
             this.models = response.json();
         },
         (error: Response) => {
             console.log(error);
         });
      }
    
}
