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
    }
    EventsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('body: ', body);
        return body.data || body || {};
    };
    EventsService.prototype.addEvent = function (organizerId, event) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(event);
        return this.http.post(this.organizerURL + '/' + organizerId + '/event', body, options)
            .map(this.extractData);
    };
    EventsService.prototype.getEvents = function () {
        return this.http.get('dist/mocks/events.json')
            .map(function (response) { return response.json().eventsData; });
    };
    EventsService.prototype.getEventsByOrganizer = function (organizerId) {
        return this.http.get(this.organizerURL + '/' + organizerId + '/event')
            .map(function (response) { return response.json(); });
    };
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map