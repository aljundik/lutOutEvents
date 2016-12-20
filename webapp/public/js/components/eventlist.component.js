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
        this.outputEvent = new core_1.EventEmitter();
        this.organizerType = 'organizer';
        this.studentType = 'student';
    }
    EventListComponent.prototype.isSusbscribed = function (event) {
        if (event.students && event.students.indexOf(this.userId) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EventListComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.eventsService.deleteEvent(event)
            .subscribe(function (data) { return _this.sucessDelete(data, event); });
    };
    EventListComponent.prototype.sucessDelete = function (data, event) {
        var index = this.events.indexOf(event);
        this.events.splice(index, 1);
        this.outputEvent.emit(true);
    };
    EventListComponent.prototype.subscribeEvent = function (event) {
        var _this = this;
        if (this.isSusbscribed(event)) {
            this.eventsService.unSubscribe(this.userId, event._id)
                .subscribe(function (data) { return _this.successSubscription(data, event); });
        }
        else {
            this.eventsService.subscribe(this.userId, event._id)
                .subscribe(function (data) { return _this.successSubscription(data, event); });
        }
    };
    EventListComponent.prototype.successSubscription = function (data, event) {
        var index = this.events.indexOf(event);
        if (this.isSusbscribed(event)) {
            var studentIndex = event.students.indexOf(this.userId);
            this.events[index].students.splice(studentIndex, 1);
        }
        else {
            var studentIndex = event.students.indexOf(this.userId);
            this.events[index].students.splice(studentIndex, 0, this.userId);
            console.log('subscribed!');
        }
        this.outputEvent.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_class_1.User)
    ], EventListComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EventListComponent.prototype, "events", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventListComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EventListComponent.prototype, "outputEvent", void 0);
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'event-list',
            template: "\n    <h2 class=\"section-title\">Events</h2>\n    <div *ngIf=\"user.userType === organizerType\" class=\"row\">\n      <button routerLink=\"/event/addEvent/{{user.userId}}\"  class=\"btn btn-default\" type=\"button\">Add New Event</button>\n    </div>\n    <img *ngIf=\"!events\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n    <div *ngFor=\"let event of events\">\n      <div class=\"col-xs-12 col-md-8 col-md-push-2 event-box\">\n        <h3 class=\"col-xs-12 event-box__title\">{{event.eventTitle}}</h3>\n        <div class=\"col-xs-12 event-box__info-section\">\n          <div class=\"event-box__info\">\n            <img src=\"./dist/img/calendar.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventStartDate | date:'yMMMd'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <img src=\"./dist/img/alarm-clock.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventStartDate | date:'shortTime' : 'ISO'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <img src=\"./dist/img/money.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventPrice | currency:'EUR':true:'1.2-2'}}</div>\n          </div>\n          <div class=\"event-box__info event-box__info--pointer\" [routerLink]=\"['/event', event._id,'user', userId]\">\n            <img src=\"./dist/img/loupe.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">See Details</div>\n          </div>\n          <div (click)=\"subscribeEvent(event)\" *ngIf=\"user.userType === studentType\" class=\"event-box__info event-box__info--pointer\">\n            <div *ngIf=\"isSusbscribed(event)\" class=\"fa fa-heart event-box__info__icon\"></div>\n            <div *ngIf=\"!isSusbscribed(event)\" class=\"fa fa-heart-o event-box__info__icon\"></div>\n            <div *ngIf=\"!isSusbscribed(event)\" class=\"event-box__info__data\">Add</div>\n            <div *ngIf=\"isSusbscribed(event)\" class=\"event-box__info__data\">Remove Event</div>\n          </div>\n          <div *ngIf=\"user.userType === organizerType\" class=\"event-box__info event-box__info--pointer\">\n            <div class=\"row\">\n              <div class=\"col-xs-6 event-box__control\"><i (click)=\"deleteEvent(event)\" class=\"fa fa-trash-o\"></i></div>\n              <div class=\"col-xs-6 event-box__control\"><i routerLink=\"/event/addEvent/event/{{event._id}}\" class=\"fa fa-pencil\"></i></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=eventlist.component.js.map