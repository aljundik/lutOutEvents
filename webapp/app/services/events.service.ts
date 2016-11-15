import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Event } from '../models/event.class';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('dist/mocks/events.json')
          .map(response => <Event[]>response.json().eventsData as Event[]);
  }

}
