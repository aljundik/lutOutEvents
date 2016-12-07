import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Event } from '../models/event.class';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  
  private organizerURL = 'api/organizer';
  private eventsURL = 'api/events';
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || { };
  }

  constructor(private http: Http) { }
  
  deleteEvent(organizerId:string, event: Event){
    console.log('eventId: ', event._id);
    return this.http.delete(this.organizerURL+'/'+ organizerId + '/event/' + event._id);
  }
  
  addEvent(organizerId:string, event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(event);
    
    return this.http.post(this.organizerURL + '/' + organizerId + '/event', body, options)
          .map(this.extractData);
  }
  
  getEvent(organizerId: string, eventId: string){
    return this.http.get(this.organizerURL + '/'+ organizerId +'/event/' + eventId)
          .map(response => <Event> response.json() as Event);
  }
  
  editEvent(organizerId: string, event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(event);
    
    return this.http.put(this.organizerURL + '/' + organizerId + '/event/' + event._id, body, options);
  }

  getAllEvents() {
    return this.http.get(this.eventsURL)
          .map(response => <Event[]>this.formatEvents(response) as Event[]);
  }
  
  formatEvents(response:any) {
    let allEvents = [];
    for (let eventsObject of JSON.parse(response._body)) {
      for (let event of eventsObject.events) {
        allEvents.push(event);
      }
    }
    return allEvents;
  }
  
  getEventsByOrganizer(organizerId: string) {
    return this.http.get(this.organizerURL+'/'+ organizerId +'/event')
          .map(response => <Event[]>response.json() as Event[]);
  }

}
