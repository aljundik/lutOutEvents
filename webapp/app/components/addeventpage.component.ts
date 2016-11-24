import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event.class';

@Component({
  template: `
    <navigation></navigation>
    <div class="container">
    <h1>Add New Event</h1>
      <form (ngSubmit)="addEvent(newEvent)">
        <div class="form-group">
          <label for="eventTitle">Event Title</label>
          <input [(ngModel)]="newEvent.eventTitle" type="text" class="form-control" id="eventTitle" name="eventTitle" placeholder="Name of the new event">
        </div>
        <div class="form-group">
          <label for="eventDescription">Description</label>
          <textarea [(ngModel)]="newEvent.eventDescription" class="form-control" id="eventDescription" name="eventDescription" placeholder="Add more details about the event"></textarea>
        </div>
        <div class="form-group">
          <label for="eventUrl">URL</label>
          <input [(ngModel)]="newEvent.eventUrl" type="text" class="form-control" id="eventUrl" name="eventUrl" placeholder="Url of the event">
        </div>
        <div class="form-group">
          <label for="eventStartDate">Start Date</label>
          <input [(ngModel)]="newEvent.eventStartDate" type="datetime-local" class="form-control" id="eventStartDate" name="eventStartDate">
        </div>
        <div class="form-group">
          <label for="eventEndDate">End Date</label>
          <input [(ngModel)]="newEvent.eventEndDate" type="datetime-local" class="form-control" id="eventEndDate" name="eventEndDate">
        </div>
        <div class="form-group">
          <label for="eventImage">Image URL</label>
          <input [(ngModel)]="newEvent.eventImage" type="text" class="form-control" id="eventImage" name="eventImage" placeholder="pasteUrl">
        </div>
        <div class="form-group">
          <label for="eventPrice">Price</label>
          <input [(ngModel)]="newEvent.eventPrice" type="number" class="form-control" id="eventPrice" name="eventPrice">
        </div>
        <div class="form-group">
          <label for="address">Address Details</label>
          <textarea [(ngModel)]="newEvent.address" class="form-control" id="address" name="address" placeholder="Add Details of the Location"></textarea>
        </div>
        <div class="form-group">
          <label>Drag the pin to the event location</label>
          <sebm-google-map [latitude]="newEvent.eventLatitude" [longitude]="newEvent.eventLongitude">
            <sebm-google-map-marker [latitude]="newEvent.eventLatitude" [longitude]="newEvent.eventLongitude" [markerDraggable]="marker.draggable" (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>
          </sebm-google-map>
        </div>
        <button type="submit" class="btn btn-default">Add</button>
        <p *ngIf="showSuccessMessage" class="col-xs-12 bg-success">Event created successfully!</p>
        <p *ngIf="showErrorMessage" class="col-xs-12 bg-warning">Error creating event.</p>
      </form>
      </div>
  `
  
})
export class AddEventComponent {
  showSuccessMessage: boolean;
  showErrorMessage: boolean;
  userId: string;
  
  marker = {
    latitude: 61.064965,
    longitude: 28.092443,
    draggable: true
  }
  newEvent : Event;
  
  constructor(private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.newEvent = new Event("","","","","","https://thumbs.dreamstime.com/t/people-hands-holding-colorful-straight-word-event-many-caucasian-letters-characters-building-isolated-english-white-54680491.jpg", 0,"", this.marker.latitude, this.marker.longitude);
  }
  
  ngOnInit(){
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.route.params.forEach((params: Params) => {
         this.userId = params['id'];
       });
  }
  
  addEvent(newEvent: Event) {
    this.eventsService.addEvent(this.userId, newEvent)
      .subscribe(user => this.addEventSuccess(user), err=> this.addEventError(err));
  }
  
  addEventSuccess(user) {
    console.log('Success!!', user);
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3500);
  }
  
  addEventError(err) {
    console.log('Error!!', err);
    this.showErrorMessage = true;
    
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3500);
  }
  
  markerDragEnd(m, $event) {
    console.log('Dragged: ', $event.coords);
    this.newEvent.eventLatitude = $event.coords.lat;
    this.newEvent.eventLongitude = $event.coords.long;
  }
  
  // mapClicked($event) {
  //   this.marker.active = false;
  //   console.log('Clicked: ', $event.coords);
  //   this.newEvent.eventLatitude = $event.coords.lat;
  //   this.newEvent.eventLongitude = $event.coords.long;
  //   this.marker.active = true;
  // }
  
}