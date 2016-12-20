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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
        this.organizerURL = 'api/organizer';
        this.eventsURL = 'api/events';
        this.newOrganizerURL = 'api/newOrganizer';
        this.newEventURL = 'api/newEvent';
        this.newSubscribeURL = 'api/eventSubscription';
    }
    EventsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || body || {};
    };
    EventsService.prototype.sortByDate = function (a, b) {
        a = new Date(a.eventStartDate);
        b = new Date(b.eventStartDate);
        return a < b ? -1 : a > b ? 1 : 0;
    };
    EventsService.prototype.sortByPrice = function (a, b) {
        a = parseFloat(a.eventPrice);
        b = parseFloat(b.eventPrice);
        return a < b ? -1 : a > b ? 1 : 0;
    };
    EventsService.prototype.deleteEvent = function (event) {
        return this.http.delete(this.newEventURL + '/' + event._id);
    };
    EventsService.prototype.addEvent = function (organizerId, event) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(event);
        return this.http.post(this.newEventURL, body, options)
            .map(this.extractData);
    };
    EventsService.prototype.getEvent = function (eventId) {
        return this.http.get(this.newEventURL + '/' + eventId)
            .map(function (response) { return response.json(); });
    };
    EventsService.prototype.editEvent = function (event) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(event);
        return this.http.put(this.newEventURL + '/' + event._id, body, options);
    };
    EventsService.prototype.getSubscribedEventsByStudent = function (studentId) {
        return this.http.get(this.newEventURL + '/student/' + studentId)
            .map(function (response) { return response.json(); });
    };
    EventsService.prototype.getAllEvents = function () {
        return this.http.get(this.newEventURL)
            .map(function (response) { return response.json(); });
    };
    EventsService.prototype.getEventsByOrganizer = function (organizerId) {
        return this.http.get(this.newEventURL + '/organizer/' + organizerId)
            .map(function (response) { return response.json(); });
    };
    EventsService.prototype.subscribe = function (userId, eventId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify({ studentId: userId });
        return this.http.put(this.newSubscribeURL + '/' + eventId, body, options);
    };
    EventsService.prototype.unSubscribe = function (userId, eventId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify({ studentId: userId });
        return this.http.delete(this.newSubscribeURL + '/' + eventId + '/user/' + userId, options);
    };
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map