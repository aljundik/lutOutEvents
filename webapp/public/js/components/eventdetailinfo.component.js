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
var event_class_1 = require('../models/event.class');
var user_class_1 = require('../models/user.class');
var EventDetailInfoComponent = (function () {
    function EventDetailInfoComponent() {
    }
    EventDetailInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_class_1.Event)
    ], EventDetailInfoComponent.prototype, "event", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_class_1.User)
    ], EventDetailInfoComponent.prototype, "user", void 0);
    EventDetailInfoComponent = __decorate([
        core_1.Component({
            selector: 'event-detail-info',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <h2 class=\"text-center\">{{event.eventTitle}}</h2>\n      </div>\n      <div class=\"row\">\n        <p class=\"text-center\">by {{event.organizer.organizerName}}</p>\n      </div>\n      <div class=\"row\">\n        <img class=\"image-detail\" src=\"{{event.eventImage[0]}}\">\n      </div>\n      <div class=\"row\">\n        <p class=\"description-detail\">{{event.eventDescription}}</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12 event-box__info-section\">\n          <div class=\"event-box__info event-box__info--detail\">\n            <img src=\"./dist/img/calendar.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventStartDate | date:'yMMMd'}}</div>\n          </div>\n          <div class=\"event-box__info event-box__info--detail\">\n            <img src=\"./dist/img/alarm-clock.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventStartDate | date:'jms'}}</div>\n          </div>\n          <div class=\"event-box__info event-box__info--detail\">\n            <img src=\"./dist/img/money.png\" width=\"40px\" height=\"40px\">\n            <div class=\"text-center event-box__info__data\">{{event.eventPrice | currency:'EUR':true:'1.2-2'}}</div>\n          </div>\n          <div *ngIf=\"user.userType === studentType\" class=\"event-box__info event-box__info--detail event-box__info--pointer\">\n            <div *ngIf=\"isSusbscribed()\" class=\"fa fa-heart event-box__info__icon\"></div>\n            <div *ngIf=\"!isSusbscribed()\" class=\"fa fa-heart-o event-box__info__icon\"></div>\n            <div *ngIf=\"!isSusbscribed()\" class=\"event-box__info__data\">Add</div>\n            <div *ngIf=\"isSusbscribed()\" class=\"event-box__info__data\">Remove Event</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <h2>Where?</h2>\n        <p>{{event.eventLocation.address}}</p>\n        <sebm-google-map [latitude]=\"event.eventLocation.latitude\" [longitude]=\"event.eventLocation.longitude\">\n          <sebm-google-map-marker [latitude]=\"event.eventLocation.latitude\" [longitude]=\"event.eventLocation.longitude\"></sebm-google-map-marker>\n        </sebm-google-map>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EventDetailInfoComponent);
    return EventDetailInfoComponent;
}());
exports.EventDetailInfoComponent = EventDetailInfoComponent;
//# sourceMappingURL=eventdetailinfo.component.js.map