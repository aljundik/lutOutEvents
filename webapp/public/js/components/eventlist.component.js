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
var EventListComponent = (function () {
    function EventListComponent(eventsService) {
        this.eventsService = eventsService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getEvents()
            .subscribe(function (data) { return _this.events = data; });
    };
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'event-list',
            template: "\n    <h2 class=\"section-title\">Events</h2>\n    <div *ngFor=\"let event of events\">\n      <div class=\"col-xs-12 col-lg-6 event-box\">\n        <h3 class=\"col-xs-12 event-box__title\">{{event.name}}</h3>\n        <div class=\"col-xs-12 event-box__info-section\">\n          <div class=\"event-box__info\">\n            <i class=\"fa fa-calendar event-box__info__icon\"></i>\n            <div class=\"text-center event-box__info__data\">{{event.date | date:'yMMMd'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <i class=\"fa fa-clock-o event-box__info__icon\"></i>\n            <div class=\"text-center event-box__info__data\">{{event.date | date:'jms'}}</div>\n          </div>\n          <div class=\"event-box__info\">\n            <div class=\"fa fa-money event-box__info__icon\"></div>\n            <div class=\"text-center event-box__info__data\">{{event.price | currency:'EUR':true:'1.2-2'}}</div>\n          </div>\n          <div class=\"event-box__info event-box__info--pointer\">\n            <div class=\"fa fa-eye event-box__info__icon\"></div>\n            <div class=\"text-center event-box__info__data\">See Details</div>\n          </div>\n          <div class=\"event-box__info event-box__info--pointer\">\n            <div class=\"fa fa-calendar-plus-o event-box__info__icon\"></div>\n            <div class=\"event-box__info__data\">Add</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=eventlist.component.js.map