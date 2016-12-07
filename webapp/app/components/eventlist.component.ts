import { Component, Input } from '@angular/core';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event.class';
import { User } from '../models/user.class';
import { Student } from '../models/student.class';
import { Organizer } from '../models/organizer.class';

@Component({
  selector:'event-list',
  template: `
    <h2 class="section-title">Events</h2>
    <div *ngIf="user.userType === organizerType" class="row">
      <button routerLink="/event/addEvent/{{user.userId}}"  class="btn btn-default" type="button">Add New Event</button>
    </div>
    <img *ngIf="!events" class="center-block" src="./dist/img/loading-medium.gif">
    <div *ngFor="let event of events">
      <div class="col-xs-12 col-lg-6 event-box">
        <div *ngIf="user.userType === organizerType" class="row">
          <h3 class="col-xs-10 event-box__title">{{event.eventTitle}}</h3>
          <div class="col-xs-2">
            <div class="row">
              <div class="col-xs-6"><i (click)="deleteEvent(event)" class="fa fa-trash-o"></i></div>
              <div class="col-xs-6"><i routerLink="/event/addEvent/{{user.userId}}/event/{{event._id}}" class="fa fa-pencil"></i></div>
            </div>
          </div>
        </div>
        <h3 *ngIf="user.userType === studentType" class="col-xs-12 event-box__title">{{event.eventTitle}}</h3>
        <div class="col-xs-12 event-box__info-section">
          <div class="event-box__info">
            <i class="fa fa-calendar event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'yMMMd'}}</div>
          </div>
          <div class="event-box__info">
            <i class="fa fa-clock-o event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'jms'}}</div>
          </div>
          <div class="event-box__info">
            <div class="fa fa-money event-box__info__icon"></div>
            <div class="text-center event-box__info__data">{{event.eventPrice | currency:'EUR':true:'1.2-2'}}</div>
          </div>
          <div class="event-box__info event-box__info--pointer" [routerLink]="['/event', event._id]">
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
  @Input() user: User;
  @Input() events: Event[];
  
  organizerType = 'organizer';
  studentType = 'student';
  
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }
  
  deleteEvent(event: Event){
    this.eventsService.deleteEvent(this.user.userId, event)
      .subscribe(data => this.sucessDelete(data, event));
  }
  
  sucessDelete(data: any, event:Event){
    console.log(data);
    let index = this.events.indexOf(event);
    this.events.splice(index, 1);
  }

}