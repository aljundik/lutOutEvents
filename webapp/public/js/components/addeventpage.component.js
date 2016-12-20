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
var router_1 = require('@angular/router');
var events_service_1 = require('../services/events.service');
var event_class_1 = require('../models/event.class');
var AddEventComponent = (function () {
    function AddEventComponent(eventsService, route, router) {
        this.eventsService = eventsService;
        this.route = route;
        this.router = router;
        this.marker = {
            latitude: 61.064965,
            longitude: 28.092443,
            draggable: true
        };
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
        this.route.params.forEach(function (params) {
            _this.userId = params['id'];
            if (params['eventId']) {
                _this.editMode = true;
                _this.eventId = params['eventId'];
            }
            else {
                _this.editMode = false;
            }
        });
        console.log('editMode: ', this.editMode);
        if (this.editMode) {
            this.eventsService.getEvent(this.eventId)
                .subscribe(function (data) { return _this.fillEventData(data); });
        }
        else {
            this.newEvent = new event_class_1.Event("", "", "", "", "", "", "https://thumbs.dreamstime.com/t/people-hands-holding-colorful-straight-word-event-many-caucasian-letters-characters-building-isolated-english-white-54680491.jpg", 0, "", this.marker.latitude, this.marker.longitude, this.userId, []);
        }
    };
    AddEventComponent.prototype.fillEventData = function (data) {
        this.newEvent = data;
        console.log('PRICE: ', this.newEvent.eventPrice);
        this.newEvent.eventStartDate = new Date(data.eventStartDate);
        this.newEvent.eventEndDate = new Date(data.eventEndDate);
        this.newEvent.eventAddress = data.eventLocation.address;
        this.newEvent.eventLatitude = data.eventLocation.latitude;
        this.newEvent.eventLongitude = data.eventLocation.longitude;
    };
    AddEventComponent.prototype.addEvent = function (newEvent) {
        var _this = this;
        if (this.editMode) {
            this.editEvent(newEvent);
        }
        else {
            this.eventsService.addEvent(this.userId, newEvent)
                .subscribe(function (user) { return _this.addEventSuccess(user); }, function (err) { return _this.addEventError(err); });
        }
    };
    AddEventComponent.prototype.editEvent = function (event) {
        var _this = this;
        this.eventsService.editEvent(event)
            .subscribe(function (user) { return _this.addEventSuccess(user); }, function (err) { return _this.addEventError(err); });
    };
    AddEventComponent.prototype.addEventSuccess = function (user) {
        var _this = this;
        this.showSuccessMessage = true;
        setTimeout(function () {
            _this.showSuccessMessage = false;
        }, 3500);
    };
    AddEventComponent.prototype.addEventError = function (err) {
        var _this = this;
        this.showErrorMessage = true;
        setTimeout(function () {
            _this.showErrorMessage = false;
        }, 3500);
    };
    AddEventComponent.prototype.markerDragEnd = function (m, $event) {
        this.newEvent.eventLatitude = $event.coords.lat;
        this.newEvent.eventLongitude = $event.coords.lng;
    };
    AddEventComponent = __decorate([
        core_1.Component({
            template: "\n    <navigation></navigation>\n    <div class=\"container\">\n    <h1 *ngIf=\"!editMode\">Add New Event</h1>\n    <h1 *ngIf=\"editMode\">Edit Event</h1>\n      <img *ngIf=\"!newEvent\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n      <form *ngIf=\"newEvent\" (ngSubmit)=\"addEvent(newEvent)\">\n        <div class=\"form-group\">\n          <label for=\"eventTitle\">Event Title</label>\n          <input [(ngModel)]=\"newEvent.eventTitle\" type=\"text\" class=\"form-control\" id=\"eventTitle\" name=\"eventTitle\" placeholder=\"Name of the new event\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventDescription\">Description</label>\n          <textarea [(ngModel)]=\"newEvent.eventDescription\" class=\"form-control\" id=\"eventDescription\" name=\"eventDescription\" placeholder=\"Add more details about the event\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventUrl\">URL</label>\n          <input [(ngModel)]=\"newEvent.eventUrl\" type=\"text\" class=\"form-control\" id=\"eventUrl\" name=\"eventUrl\" placeholder=\"Url of the event\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventStartDate\">Start Date</label>\n          <p-calendar [(ngModel)]=\"newEvent.eventStartDate\" showTime=\"showTime\" class=\"form-control\" id=\"eventStartDate\" name=\"eventStartDate\" hourFormat=\"24\"></p-calendar>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventEndDate\">End Date</label>\n          <p-calendar [(ngModel)]=\"newEvent.eventEndDate\" showTime=\"showTime\" class=\"form-control\" id=\"eventEndDate\" name=\"eventEndDate\" hourFormat=\"24\"></p-calendar>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventImage\">Image URL</label>\n          <input [(ngModel)]=\"newEvent.eventImage\" type=\"text\" class=\"form-control\" id=\"eventImage\" name=\"eventImage\" placeholder=\"pasteUrl\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"eventPrice\">Price</label>\n          <input [(ngModel)]=\"newEvent.eventPrice\" type=\"number\" class=\"form-control\" id=\"eventPrice\" name=\"eventPrice\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address\">Address Details</label>\n          <textarea [(ngModel)]=\"newEvent.eventAddress\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Add Details of the Location\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Drag the pin to the event location</label>\n          <sebm-google-map [latitude]=\"newEvent.eventLatitude\" [longitude]=\"newEvent.eventLongitude\">\n            <sebm-google-map-marker [latitude]=\"newEvent.eventLatitude\" [longitude]=\"newEvent.eventLongitude\" [markerDraggable]=\"marker.draggable\" (dragEnd)=\"markerDragEnd(m, $event)\"></sebm-google-map-marker>\n          </sebm-google-map>\n        </div>\n        <input [(ngModel)]=\"newEvent.eventOrganizer\" type=\"hidden\" name=\"eventOrganizer\" id=\"eventOrganizer\">\n        <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        <p *ngIf=\"showSuccessMessage\" class=\"col-xs-12 bg-success\">Event created successfully!</p>\n        <p *ngIf=\"showErrorMessage\" class=\"col-xs-12 bg-warning\">Error creating event.</p>\n      </form>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_1.ActivatedRoute, router_1.Router])
    ], AddEventComponent);
    return AddEventComponent;
}());
exports.AddEventComponent = AddEventComponent;
//# sourceMappingURL=addeventpage.component.js.map