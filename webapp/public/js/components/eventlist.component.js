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
var user_class_1 = require('../models/user.class');
var EventListComponent = (function () {
    function EventListComponent(eventsService) {
        this.eventsService = eventsService;
        this.organizerType = 'organizer';
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventListComponent.prototype.getEventsByOrganizer = function (user) {
        var _this = this;
        this.eventsService.getEventsByOrganizer(user.id)
            .subscribe(function (data) { return _this.events = data; });
    };
    EventListComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventsService.getEvents()
            .subscribe(function (data) { return _this.events = data; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_class_1.User)
    ], EventListComponent.prototype, "user", void 0);
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'event-list',
            template: "\n    <h2 class=\"section-title\">Events</h2>\n    <div *ngIf=\"user.userType === organizerType\" class=\"row\">\n      <button routerLink=\"/event/addEvent/{{user.userId}}\"  class=\"btn btn-default\" type=\"button\">Add New Event</button>\n    </div>\n    <img *ngIf=\"!events\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n    <div *ngFor=\"let event of events\">\n      <div class=\"col-xs-12 col-lg-6 event-box\">\n        <h3 class=\"col-xs-12 event-box__title\">{{event.name}}</h3>\n        <div class=\"col-xs-12 event-box__info-section\">\n          <div class=\"event-box__info\">\n            <i class=\"fa fa-calendar event-box__info__icon\"></i>\n            <div class=\"text-center event-box__info__data\">{{event.date | date:'yMMMd'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <i class=\"fa fa-clock-o event-box__info__icon\"></i>\n            <div class=\"text-center event-box__info__data\">{{event.date | date:'jms'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <div class=\"fa fa-money event-box__info__icon\"></div>\n            <div class=\"text-center event-box__info__data\">{{event.price | currency:'EUR':true:'1.2-2'}}</div>\n          </div>\n          <div class=\"event-box__info event-box__info--pointer\" [routerLink]=\"['/event', event.id]\">\n            <div class=\"fa fa-eye event-box__info__icon\"></div>\n            <div class=\"text-center event-box__info__data\">See Details</div>\n          </div>\n          <div class=\"event-box__info event-box__info--pointer\">\n            <div class=\"fa fa-calendar-plus-o event-box__info__icon\"></div>\n            <div class=\"event-box__info__data\">Add</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=eventlist.component.js.map