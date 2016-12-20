import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Event } from '../models/event.class';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  
  private organizerURL = 'api/organizer';
  private eventsURL = 'api/events';
  
    private newOrganizerURL = 'api/newOrganizer';
  private newEventURL = 'api/newEvent';
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || { };
  }

  constructor(private http: Http) { }
  
  sortByDate (a, b) {
    a = new Date(a.eventStartDate);
    b = new Date(b.eventStartDate);
    return a<b ? -1 : a>b ? 1 : 0;
  }
  
  sortByPrice (a, b) {
    a = parseFloat(a.eventPrice);
    b = parseFloat(b.eventPrice);
    return a<b ? -1 : a>b ? 1 : 0;
  }
  
  deleteEvent(event: Event){
    return this.http.delete(this.newEventURL + '/' + event._id);
  }
  
  addEvent(organizerId:string, event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(event);
    
    return this.http.post(this.newEventURL, body, options)
          .map(this.extractData);
  }
  
  getEvent(eventId: string){
    return this.http.get(this.newEventURL + '/'+ eventId)
          .map(response => <Event> response.json() as Event);
  }
  
  editEvent(event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(event);
    
    return this.http.put(this.newEventURL + '/' + event._id, body, options);
  }

  getAllEvents() {
    return this.http.get(this.newEventURL)
          .map(response => <Event[]>response.json() as Event[]);
  }
  
  getEventsByOrganizer(organizerId: string) {
    return this.http.get(this.newEventURL+'/organizer/'+ organizerId)
          .map(response => <Event[]>response.json() as Event[]);
  }

}
