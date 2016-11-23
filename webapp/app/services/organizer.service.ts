import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Organizer } from '../models/organizer.class';
import 'rxjs/add/operator/map';

@Injectable()
export class OrganizerService {

  constructor(private http: Http) { }
  
  private organizerURL = 'api/organizer';
  
  private extractData(res: Response) {
    let body = res.json();
    console.log('body: ', body);
    return body.data || body || { };
  }

  addOrganizer(organizer: Organizer) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(organizer);
    
    return this.http.post(this.organizerURL, body, options)
          .map(this.extractData);
  }
  
  // addEvent(newEvent: Event, organizerId) {
  //  /api/organizer/"organizerId" /event
  // }
  
  getOrganizerById(organizerId: string) {
    console.log('URL: ' + this.organizerURL + '/' + organizerId);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.organizerURL + '/' + organizerId)
          .map(this.extractData);
  }

}
