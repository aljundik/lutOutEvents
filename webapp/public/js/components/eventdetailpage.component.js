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
var user_class_1 = require('../models/user.class');
var events_service_1 = require('../services/events.service');
var student_service_1 = require('../services/student.service');
var organizer_service_1 = require('../services/organizer.service');
var EventDetailPageComponent = (function () {
    function EventDetailPageComponent(eventsService, studentService, organizerService, route, router) {
        this.eventsService = eventsService;
        this.studentService = studentService;
        this.organizerService = organizerService;
        this.route = route;
        this.router = router;
    }
    EventDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.userId = params['id'];
            _this.eventId = params['eventId'];
            _this.getUserInfo(_this.userId);
            _this.getEvent(_this.eventId);
        });
    };
    EventDetailPageComponent.prototype.mapStudentInfo = function (student) {
        this.user = new user_class_1.User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
    };
    EventDetailPageComponent.prototype.mapOrganizerInfo = function (organizer) {
        this.user = new user_class_1.User(organizer._id, organizer.organizerName, organizer.organizerEmail, organizer.organizerUserName, "", "organizer");
    };
    EventDetailPageComponent.prototype.getUserInfo = function (userId) {
        var _this = this;
        this.studentService.getStudentById(userId)
            .subscribe(function (data) { return _this.mapStudentInfo(data); }, function (error) {
            return _this.organizerService.getOrganizerById(userId)
                .subscribe(function (data) { return _this.mapOrganizerInfo(data); });
        });
    };
    EventDetailPageComponent.prototype.getEvent = function (eventId) {
        var _this = this;
        this.eventsService.getEvent(eventId)
            .subscribe(function (data) { return _this.event = data; });
    };
    EventDetailPageComponent = __decorate([
        core_1.Component({
            template: "\n    <navigation *ngIf=\"userId\" [userId]=\"userId\" [showBackOption]=\"true\"></navigation>\n    <event-detail-info *ngIf=\"event && user\" [event]=\"event\" [user]=\"user\"></event-detail-info>\n    <img *ngIf=\"!event || !user\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, student_service_1.StudentService, organizer_service_1.OrganizerService, router_1.ActivatedRoute, router_1.Router])
    ], EventDetailPageComponent);
    return EventDetailPageComponent;
}());
exports.EventDetailPageComponent = EventDetailPageComponent;
//# sourceMappingURL=eventdetailpage.component.js.map