import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: Http) { }

  onClick() {
    const headers: Headers = new Headers({ 'content-Type': 'application/json' });
    const option = new RequestOptions({ headers: headers });
    this.http.get('https://httpbin.org/get')
      .subscribe(
      data => {
        if (data) {
          console.log(data);
        }
      },
      err => {
        console.log("Error occured.")
      }
      );
  }
}
