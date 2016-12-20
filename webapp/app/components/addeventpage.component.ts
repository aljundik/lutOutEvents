import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event.class';

@Component({
  template: `
    <navigation></navigation>
    <div class="container">
    <h1 *ngIf="!editMode">Add New Event</h1>
    <h1 *ngIf="editMode">Edit Event</h1>
      <img *ngIf="!newEvent" class="center-block" src="./dist/img/loading-medium.gif">
      <form *ngIf="newEvent" (ngSubmit)="addEvent(newEvent)">
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
          <textarea [(ngModel)]="newEvent.eventAddress" class="form-control" id="address" name="address" placeholder="Add Details of the Location"></textarea>
        </div>
        <div class="form-group">
          <label>Drag the pin to the event location</label>
          <sebm-google-map [latitude]="newEvent.eventLatitude" [longitude]="newEvent.eventLongitude">
            <sebm-google-map-marker [latitude]="newEvent.eventLatitude" [longitude]="newEvent.eventLongitude" [markerDraggable]="marker.draggable" (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>
          </sebm-google-map>
        </div>
        <input [(ngModel)]="newEvent.eventOrganizer" type="hidden" name="eventOrganizer" id="eventOrganizer">
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
  editMode: boolean;
  userId: string;
  eventId: string;
  
  marker = {
    latitude: 61.064965,
    longitude: 28.092443,
    draggable: true
  }
  newEvent : Event;
  
  constructor(private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  
  ngOnInit(){
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.route.params.forEach((params: Params) => {
         this.userId = params['id'];
         
         if (params['eventId']) {
           this.editMode = true;
           this.eventId = params['eventId'];
         } else {
           this.editMode = false;
         }
       });
    
    console.log('editMode: ', this.editMode);
    
    if (this.editMode) {
      this.eventsService.getEvent(this.eventId)
        .subscribe(data => this.fillEeventData(data));
    }
    else{
      this.newEvent = new Event("","","","","","","https://thumbs.dreamstime.com/t/people-hands-holding-colorful-straight-word-event-many-caucasian-letters-characters-building-isolated-english-white-54680491.jpg", 0,"", this.marker.latitude, this.marker.longitude, this.userId); 
    }
  }
  
  fillEeventData(data) {
    this.newEvent = data;
    this.newEvent.eventAddress = data.eventLocation.address;
    this.newEvent.eventLatitude = data.eventLocation.latitude;
    this.newEvent.eventLongitude = data.eventLocation.longitude;
  }
  
  addEvent(newEvent: Event) {
    if (this.editMode) {
      this.editEvent(newEvent)
    } else {
      this.eventsService.addEvent(this.userId, newEvent)
        .subscribe(user => this.addEventSuccess(user), err=> this.addEventError(err));  
    }
  }
  
  editEvent(event: Event) {
    this.eventsService.editEvent(event)
        .subscribe(user => this.addEventSuccess(user), err=> this.addEventError(err)); 
  }
  
  addEventSuccess(user) {
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3500);
  }
  
  addEventError(err) {
    this.showErrorMessage = true;
    
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3500);
  }
  
  markerDragEnd(m, $event) {
    this.newEvent.eventLatitude = $event.coords.lat;
    this.newEvent.eventLongitude = $event.coords.lng;
  }
  
  // mapClicked($event) {
  //   this.marker.active = false;
  //   console.log('Clicked: ', $event.coords);
  //   this.newEvent.eventLatitude = $event.coords.lat;
  //   this.newEvent.eventLongitude = $event.coords.long;
  //   this.marker.active = true;
  // }
  
}