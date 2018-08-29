import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url): Observable<any> {
    return this.http.get(environment.apiUrl + '/' + url);
  }

  put(url, id, obj): Observable<any> {
    return this.http.put(environment.apiUrl + '/' + url + '/' + id, obj);
  }

  post(url, obj): Observable<any> {
    return this.http.post(environment.apiUrl + '/' + url, obj);
  }

  delete(url, id): Observable<any> {
    return this.http.delete(environment.apiUrl + '/' + url + '/' + id);
  }

}
