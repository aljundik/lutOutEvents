import { Component, Input, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Event } from '../models/event.class';
import { User } from '../models/user.class';


@Component({
  selector: 'event-detail-info',
  template: `
    <div class="container">
      <div class="row">
        <h2 class="text-center">{{event.eventTitle}}</h2>
      </div>
      <div class="row">
        <p class="text-center">by {{event.organizer.organizerName}}</p>
      </div>
      <div class="row">
        <img class="image-detail" src="{{event.eventImage[0]}}">
      </div>
      <div class="row">
        <p class="description-detail">{{event.eventDescription}}</p>
      </div>
      <div class="row">
        <div class="col-xs-12 event-box__info-section">
          <div class="event-box__info event-box__info--detail">
            <img src="./dist/img/calendar.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'yMMMd'}}</div>
          </div>
          <div class="event-box__info event-box__info--detail">
            <img src="./dist/img/alarm-clock.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventStartDate | date:'jms'}}</div>
          </div>
          <div class="event-box__info event-box__info--detail">
            <img src="./dist/img/money.png" width="40px" height="40px">
            <div class="text-center event-box__info__data">{{event.eventPrice | currency:'EUR':true:'1.2-2'}}</div>
          </div>
          <div *ngIf="user.userType === studentType" class="event-box__info event-box__info--detail event-box__info--pointer">
            <div *ngIf="isSusbscribed()" class="fa fa-heart event-box__info__icon"></div>
            <div *ngIf="!isSusbscribed()" class="fa fa-heart-o event-box__info__icon"></div>
            <div *ngIf="!isSusbscribed()" class="event-box__info__data">Add</div>
            <div *ngIf="isSusbscribed()" class="event-box__info__data">Remove Event</div>
          </div>
        </div>
      </div>
      <div class="row">
        <h2>Where?</h2>
        <p>{{event.eventLocation.address}}</p>
        <sebm-google-map [latitude]="event.eventLocation.latitude" [longitude]="event.eventLocation.longitude">
          <sebm-google-map-marker [latitude]="event.eventLocation.latitude" [longitude]="event.eventLocation.longitude"></sebm-google-map-marker>
        </sebm-google-map>
      </div>
    </div>
  `
})
export class EventDetailInfoComponent implements OnInit {
  @Input() event: Event;
  @Input() user: User;

  ngOnInit() {
    
  }

}