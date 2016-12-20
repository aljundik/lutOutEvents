import { Component, Input, Pipe } from '@angular/core';

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
      <div class="col-xs-12 col-md-8 col-md-push-2 event-box">
        <h3 class="col-xs-12 event-box__title">{{event.eventTitle}}</h3>
        <div class="col-xs-12 event-box__info-section">
          <div class="event-box__info">
            <img src="./dist/img/calendar.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'yMMMd'}}</div>
          </div>
          <div class="event-box__info">
            <img src="./dist/img/alarm-clock.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'jms'}}</div>
          </div>
          <div class="event-box__info">
            <img src="./dist/img/money.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventPrice | currency:'EUR':true:'1.2-2'}}</div>
          </div>
          <div class="event-box__info event-box__info--pointer" [routerLink]="['/event', event._id,'user', user.userId]">
            <img src="./dist/img/loupe.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">See Details</div>
          </div>
          <div *ngIf="user.userType === studentType" class="event-box__info event-box__info--pointer">
            <div class="fa fa-heart-o event-box__info__icon"></div>
            <div class="event-box__info__data">Add</div>
          </div>
          <div *ngIf="user.userType === organizerType" class="event-box__info event-box__info--pointer">
            <div class="row">
              <div class="col-xs-6 event-box__control"><i (click)="deleteEvent(event)" class="fa fa-trash-o"></i></div>
              <div class="col-xs-6 event-box__control"><i routerLink="/event/addEvent/event/{{event._id}}" class="fa fa-pencil"></i></div>
            </div>
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
  
  deleteEvent(event: Event){
    this.eventsService.deleteEvent(event)
      .subscribe(data => this.sucessDelete(data, event));
  }
  
  sucessDelete(data: any, event:Event){
    let index = this.events.indexOf(event);
    this.events.splice(index, 1);
  }

}