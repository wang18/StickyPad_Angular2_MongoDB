import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiserviceService {

  constructor(private http: Http) { }

  getNotes(): Observable<any> {
    const url = 'https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W';
    return this.http.get(url).map( res => {
      const data = res.json();
      return data;
    });
  }

  deleteNote(noteId): Observable<any> {
    const url = 'https://api.mongolab.com/api/1/databases/stickypad/collections/notes/'
      + noteId + '?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W';
    return this.http.delete(url).map( res => {
      const data = res.json();
      return data;
    });
  }

  addNote(text){
    const url = 'https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    const note = {'text': text};
    const body = JSON.stringify(note);
    return this.http.post(url, body, options).subscribe( res => {
      const data = res.json();
      return data;
    });
  }
}
