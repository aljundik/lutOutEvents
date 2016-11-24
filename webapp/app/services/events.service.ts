import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Event } from '../models/event.class';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  
  private organizerURL = 'api/organizer';
  
  private extractData(res: Response) {
    let body = res.json();
    console.log('body: ', body);
    return body.data || body || { };
  }

  constructor(private http: Http) { }
  
  addEvent(organizerId:string, event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(event);
    
    return this.http.post(this.organizerURL + '/' + organizerId + '/event', body, options)
          .map(this.extractData);
  }

  getEvents() {
    return this.http.get('dist/mocks/events.json')
          .map(response => <Event[]>response.json().eventsData as Event[]);
  }
  
  getEventsByOrganizer(organizerId: string) {
    return this.http.get(this.organizerURL+'/'+ organizerId +'/event')
          .map(response => <Event[]>response.json() as Event[]);
  }

}
