import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DreamService {
  private serverUrl = 'http://127.0.0.1:5000';
  private testUrl = this.serverUrl + '/test/';
  private uploadUrl = this.serverUrl + '/post/'

  constructor(
    private http: Http
  ) { }

  private extractData(res: Response){
    console.log("Extract data is reading: " + res);
    let body = res.json();
    // return body.data || { };
    return body;
  }


  private handleError (error: any) {
    console.log("Please select valid addresses for transportation");
    console.log("Error!!! " + error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);

  }

  getTest(): Promise<any>{
    console.log("Trying to get test from the service!: ");

    return this.http.get(this.testUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  upload(name: string): Promise<any>{
    console.log("Trying to upload files via the service");
    let body = JSON.stringify(name);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.uploadUrl, body, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }
}
