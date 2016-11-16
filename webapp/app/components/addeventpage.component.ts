import { Component } from '@angular/core';

import { EventsService } from '../services/events.service';

import { Event } from '../models/event.class';

@Component({
  template: `
    <navigation></navigation>
    <div class="container">
    <h1>Add New Event</h1>
      <form>
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
          <label for="address">Address</label>
          <textarea [(ngModel)]="newEvent.address" class="form-control" id="address" name="address"></textarea>
        </div>
        <button (click)="addEvent(newEvent)" type="submit" class="btn btn-default">Add</button>
      </form>
      <p *ngIf="showSuccessMessage" class="col-xs-12 bg-success">Organizer '{{organizer.organizerName}}' added successfully!</p>
      </div>
  `
  
})
export class AddEventComponent {
  showSuccessMessage: boolean;
  newEvent : Event;
  
  constructor(private eventsService: EventsService) {}
  
  ngOnInit(){
    this.showSuccessMessage = false;
  }
  
}