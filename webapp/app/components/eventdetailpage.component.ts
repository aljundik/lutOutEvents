import { Component, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Event } from '../models/event.class';
import { EventsService } from '../services/events.service';

@Component({
  template: `
    <navigation></navigation>
    <event-detail-info *ngIf="!event" [event]="event"></event-detail-info>
    <img *ngIf="event" class="center-block" src="./dist/img/loading-medium.gif">
  `
  
})
export class EventDetailPageComponent {
  event: Event;
  userId: string;
  eventId: string;
  
  constructor(private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router){}
  
  ngOnInit() {
    
    // this.route.params.forEach((params: Params) => {
    //     this.userId = params['id'];
    //     this.eventId = params['eventId'];
    //     this.getEvent(this.userId);
    //   });
       
  }
  
  getEvent(organizerId:string, eventId:string) {
    this.eventsService.getEvent(organizerId, eventId)
        .subscribe(data => this.event = data);
  }
}