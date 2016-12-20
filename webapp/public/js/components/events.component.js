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
var calendarevent_class_1 = require('../models/calendarevent.class');
var student_service_1 = require('../services/student.service');
var events_service_1 = require('../services/events.service');
var organizer_service_1 = require('../services/organizer.service');
var EventsComponent = (function () {
    function EventsComponent(studentService, organizerService, eventsService, route, router) {
        this.studentService = studentService;
        this.organizerService = organizerService;
        this.eventsService = eventsService;
        this.route = route;
        this.router = router;
        this.organizerType = 'organizer';
        this.studentType = 'student';
    }
    EventsComponent.prototype.mapStudentInfo = function (student) {
        this.user = new user_class_1.User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
        this.getAllEvents();
        this.getSubscribedEventsByStudent(student._id);
    };
    EventsComponent.prototype.mapOrganizerInfo = function (organizer) {
        this.user = new user_class_1.User(organizer._id, organizer.organizerName, organizer.organizerEmail, organizer.organizerUserName, "", "organizer");
        this.getEventsByOrganizer(this.user);
    };
    EventsComponent.prototype.getUserInfo = function (userId) {
        var _this = this;
        this.studentService.getStudentById(userId)
            .subscribe(function (data) { return _this.mapStudentInfo(data); }, function (error) {
            return _this.organizerService.getOrganizerById(userId)
                .subscribe(function (data) { return _this.mapOrganizerInfo(data); });
        });
    };
    EventsComponent.prototype.mapOrganizerEventsData = function (data) {
        this.events = data;
        this.calendarEvents = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var event_1 = data_1[_i];
            if (this.calendarEvents) {
                this.calendarEvents.push(new calendarevent_class_1.CalendarEvent(event_1.eventTitle, event_1.eventStartDate, event_1.eventEndDate));
            }
            else {
                this.calendarEvents = [(new calendarevent_class_1.CalendarEvent(event_1.eventTitle, event_1.eventStartDate, event_1.eventEndDate))];
            }
        }
    };
    EventsComponent.prototype.mapStudentCalendarEvents = function (data) {
        this.calendarEvents = [];
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var event_2 = data_2[_i];
            if (this.calendarEvents) {
                this.calendarEvents.push(new calendarevent_class_1.CalendarEvent(event_2.eventTitle, event_2.eventStartDate, event_2.eventEndDate));
            }
            else {
                this.calendarEvents = [(new calendarevent_class_1.CalendarEvent(event_2.eventTitle, event_2.eventStartDate, event_2.eventEndDate))];
            }
        }
    };
    EventsComponent.prototype.getEventsByOrganizer = function (user) {
        var _this = this;
        this.eventsService.getEventsByOrganizer(user.userId)
            .subscribe(function (data) { return _this.mapOrganizerEventsData(data); });
    };
    EventsComponent.prototype.getAllEvents = function () {
        var _this = this;
        this.eventsService.getAllEvents()
            .subscribe(function (data) { return _this.events = data; });
    };
    EventsComponent.prototype.getSubscribedEventsByStudent = function (userId) {
        var _this = this;
        console.log('USER ID:!!!! ', this.userId);
        this.eventsService.getSubscribedEventsByStudent(this.userId)
            .subscribe(function (data) { return _this.mapStudentCalendarEvents(data); });
    };
    EventsComponent.prototype.updateCalendar = function () {
        if (this.user.userType === this.studentType) {
            this.getSubscribedEventsByStudent(this.userId);
        }
        else {
            this.getEventsByOrganizer(this.user);
        }
    };
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.userId = params['id'];
            _this.getUserInfo(_this.userId);
        });
    };
    EventsComponent = __decorate([
        core_1.Component({
            template: "\n    <navigation></navigation>\n    <div class=\"container\">\n      <h2>My LUT Calendar</h2>\n      <p-schedule *ngIf=\"calendarEvents\" [events]=\"calendarEvents\"></p-schedule>\n      <event-list *ngIf=\"user && events && userId\" [user]=\"user\" [events]=\"events\" [userId]=\"userId\" (outputEvent)=\"updateCalendar($event)\"></event-list>\n      <img *ngIf=\"!user || !events\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, organizer_service_1.OrganizerService, events_service_1.EventsService, router_1.ActivatedRoute, router_1.Router])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map