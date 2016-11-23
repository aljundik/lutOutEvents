"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var events_service_1 = require('../services/events.service');
var event_class_1 = require('../models/event.class');
var AddEventComponent = (function () {
    function AddEventComponent(eventsService) {
        this.eventsService = eventsService;
        this.marker = {
            latitude: 61.064965,
            longitude: 28.092443,
            draggable: true
        };
        this.newEvent = new event_class_1.Event("", "", "", "", "", "https://thumbs.dreamstime.com/t/people-hands-holding-colorful-straight-word-event-many-caucasian-letters-characters-building-isolated-english-white-54680491.jpg", 0, "", this.marker.latitude, this.marker.longitude);
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.showSuccessMessage = false;
    };
    AddEventComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('Dragged: ', $event.coords);
        this.newEvent.eventLatitude = $event.coords.lat;
        this.newEvent.eventLongitude = $event.coords.long;
    };
    AddEventComponent = __decorate([
        core_1.Component({
            template: "\n    <navigation></navigation>\n    <div class=\"container\">\n    <h1>Add New Event</h1>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"eventTitle\">Event Title</label>\n          <input [(ngModel)]=\"newEvent.eventTitle\" type=\"text\" class=\"form-control\" id=\"eventTitle\" name=\"eventTitle\" placeholder=\"Name of the new event\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventDescription\">Description</label>\n          <textarea [(ngModel)]=\"newEvent.eventDescription\" class=\"form-control\" id=\"eventDescription\" name=\"eventDescription\" placeholder=\"Add more details about the event\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventUrl\">URL</label>\n          <input [(ngModel)]=\"newEvent.eventUrl\" type=\"text\" class=\"form-control\" id=\"eventUrl\" name=\"eventUrl\" placeholder=\"Url of the event\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventStartDate\">Start Date</label>\n          <input [(ngModel)]=\"newEvent.eventStartDate\" type=\"datetime-local\" class=\"form-control\" id=\"eventStartDate\" name=\"eventStartDate\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventEndDate\">End Date</label>\n          <input [(ngModel)]=\"newEvent.eventEndDate\" type=\"datetime-local\" class=\"form-control\" id=\"eventEndDate\" name=\"eventEndDate\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventImage\">Image URL</label>\n          <input [(ngModel)]=\"newEvent.eventImage\" type=\"text\" class=\"form-control\" id=\"eventImage\" name=\"eventImage\" placeholder=\"pasteUrl\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventPrice\">Price</label>\n          <input [(ngModel)]=\"newEvent.eventPrice\" type=\"number\" class=\"form-control\" id=\"eventPrice\" name=\"eventPrice\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address\">Address Details</label>\n          <textarea [(ngModel)]=\"newEvent.address\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Add Details of the Location\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Drag the pin to the event location</label>\n          <sebm-google-map [latitude]=\"newEvent.eventLatitude\" [longitude]=\"newEvent.eventLongitude\">\n            <sebm-google-map-marker [latitude]=\"newEvent.eventLatitude\" [longitude]=\"newEvent.eventLongitude\" [markerDraggable]=\"marker.draggable\" (dragEnd)=\"markerDragEnd(m, $event)\"></sebm-google-map-marker>\n          </sebm-google-map>\n        </div>\n        <button (click)=\"addEvent(newEvent)\" type=\"submit\" class=\"btn btn-default\">Add</button>\n      </form>\n      <p *ngIf=\"showSuccessMessage\" class=\"col-xs-12 bg-success\">Organizer '{{organizer.organizerName}}' added successfully!</p>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService])
    ], AddEventComponent);
    return AddEventComponent;
}());
exports.AddEventComponent = AddEventComponent;
//# sourceMappingURL=addeventpage.component.js.map