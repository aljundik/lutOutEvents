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
var EventDetailPageComponent = (function () {
    function EventDetailPageComponent(eventsService, route, router) {
        this.eventsService = eventsService;
        this.route = route;
        this.router = router;
    }
    EventDetailPageComponent.prototype.ngOnInit = function () {
        // this.route.params.forEach((params: Params) => {
        //     this.userId = params['id'];
        //     this.eventId = params['eventId'];
        //     this.getEvent(this.userId);
        //   });
    };
    EventDetailPageComponent.prototype.getEvent = function (organizerId, eventId) {
        var _this = this;
        this.eventsService.getEvent(organizerId, eventId)
            .subscribe(function (data) { return _this.event = data; });
    };
    EventDetailPageComponent = __decorate([
        core_1.Component({
            template: "\n    <navigation></navigation>\n    <event-detail-info *ngIf=\"!event\" [event]=\"event\"></event-detail-info>\n    <img *ngIf=\"event\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_1.ActivatedRoute, router_1.Router])
    ], EventDetailPageComponent);
    return EventDetailPageComponent;
}());
exports.EventDetailPageComponent = EventDetailPageComponent;
//# sourceMappingURL=eventdetailpage.component.js.map