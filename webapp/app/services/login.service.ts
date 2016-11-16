import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User } from '../models/user.class';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  
  currentUser: User;
  
  constructor(private http: Http) { }
  
  private loginURL = 'api/login';
  
  private extractData(res: Response) {
    let body = res.json();
    return body;
    
  }

  login(user : User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({userName: user.userUserName, userPassword: user.userPassword});
    return this.http.post(this.loginURL, body, options)
          .map(this.extractData);
  }

}
