import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event.class';

@Component({
  selector:'event-list',
  template: `
    <h2 class="section-title">Events</h2>
    <div *ngFor="let event of events">
      <div class="col-xs-12 col-lg-6 event-box">
        <h3 class="col-xs-12 event-box__title">{{event.name}}</h3>
        <div class="col-xs-12 event-box__info-section">
          <div class="event-box__info">
            <i class="fa fa-calendar event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.date | date:'yMMMd'}}</div>
          </div>
          <div class="event-box__info">
            <i class="fa fa-clock-o event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.date | date:'jms'}}</div>
          </div>
          <div class="event-box__info">
            <div class="fa fa-money event-box__info__icon"></div>
            <div class="text-center event-box__info__data">{{event.price | currency:'EUR':true:'1.2-2'}}</div>
          </div>
          <div class="event-box__info event-box__info--pointer" [routerLink]="['/event', event.id]">
            <div class="fa fa-eye event-box__info__icon"></div>
            <div class="text-center event-box__info__data">See Details</div>
          </div>
          <div class="event-box__info event-box__info--pointer">
            <div class="fa fa-calendar-plus-o event-box__info__icon"></div>
            <div class="event-box__info__data">Add</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent{
  events: Event[];
  
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
        .subscribe(data => this.events = data);
  }

}