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
var student_service_1 = require('../services/student.service');
var organizer_service_1 = require('../services/organizer.service');
var EventsComponent = (function () {
    function EventsComponent(studentService, organizerService, route, router) {
        this.studentService = studentService;
        this.organizerService = organizerService;
        this.route = route;
        this.router = router;
    }
    EventsComponent.prototype.mapStudentInfo = function (student) {
        console.log('mapping student data', student);
        this.user = new user_class_1.User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
    };
    EventsComponent.prototype.mapOrganizerInfo = function (organizer) {
        console.log('mapping organizer data', organizer);
        this.user = new user_class_1.User(organizer._id, organizer.organizerName, organizer.organizerEmail, organizer.organizerUserName, "", "organizer");
    };
    EventsComponent.prototype.getUserInfo = function (userId) {
        var _this = this;
        this.studentService.getStudentById(userId)
            .subscribe(function (data) { return _this.mapStudentInfo(data); }, function (error) {
            return _this.organizerService.getOrganizerById(userId)
                .subscribe(function (data) { return _this.mapOrganizerInfo(data); });
        });
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
            template: "\n    <navigation></navigation>\n    <div class=\"container\">\n      <h2>My LUT Calendar</h2>\n      <p-schedule [events]=\"events\"></p-schedule>\n      <event-list *ngIf=\"user\" [user]=\"user\"></event-list>\n      <img *ngIf=\"!user\" class=\"center-block\" src=\"./dist/img/loading-medium.gif\">\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, organizer_service_1.OrganizerService, router_1.ActivatedRoute, router_1.Router])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map