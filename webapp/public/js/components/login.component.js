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
var student_service_1 = require('../services/student.service');
var login_service_1 = require('../services/login.service');
var student_class_1 = require('../models/student.class');
var user_class_1 = require('../models/user.class');
var LoginComponent = (function () {
    function LoginComponent(studentService, loginService, router) {
        this.studentService = studentService;
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.setState = function (state) {
        this.state = state;
    };
    LoginComponent.prototype.clearNewStudent = function () {
        this.lastStudentName = this.newStudent ? this.newStudent.studentName : "";
        this.newStudent = new student_class_1.Student("", "", "", "");
    };
    LoginComponent.prototype.clearLoginUser = function () {
        this.loginUser = new user_class_1.User("", "", "", "", "", "");
    };
    LoginComponent.prototype.addStudent = function (student) {
        var _this = this;
        this.studentService.addStudent(student)
            .subscribe(function (student) { return _this.addStudentSuccess(student); });
    };
    LoginComponent.prototype.addStudentSuccess = function (student) {
        var _this = this;
        this.showNewStudentSuccessMessage = true;
        setTimeout(function () {
            _this.showNewStudentSuccessMessage = false;
        }, 3500);
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.loginService.login(user)
            .subscribe(function (user) { return _this.loginSuccess(user); }, function (err) { return _this.loginError(err); });
    };
    LoginComponent.prototype.loginSuccess = function (user) {
        this.router.navigateByUrl('events/' + user._id);
    };
    LoginComponent.prototype.loginError = function (error) {
        this.loginFailed = true;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.state = 'login';
        this.clearLoginUser();
        this.clearNewStudent();
        this.showNewStudentSuccessMessage = false;
        this.loginFailed = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <div class=\"col-xs-12 col-sm-4 col-sm-offset-8 login-box\">\n      <div class=\"row\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs login-box__nav\" role=\"tablist\">\n          <li role=\"presentation\" [class.active]=\"state==='login'\" (click)=\"setState('login')\"><a role=\"tab\">Login</a></li>\n          <li role=\"presentation\" [class.active]=\"state==='register'\" (click)=\"setState('register')\"><a role=\"tab\">Register</a></li>\n        </ul>\n      </div>\n      <div class=\"login-box__form-container\">\n        <form *ngIf=\"state==='login'\" (ngSubmit)=\"login(loginUser)\">\n          <input [(ngModel)]=\"loginUser.userUserName\" class=\"col-xs-12 form-control login-box__field\" type=\"text\" name=\"userUserName\" placeholder=\"Username\">\n          <input [(ngModel)]=\"loginUser.userPassword\" class=\"col-xs-12 form-control login-box__field\" type=\"password\" name=\"password\" placeholder=\"Password\">\n          <button class=\"col-xs-12 btn btn-primary login-box__button\" type=\"submit\">Login!</button>\n          <p *ngIf=\"loginFailed\" class=\"col-xs-12 bg-danger\">Login error</p>\n        </form>\n        <form *ngIf=\"state==='register'\" (ngSubmit)=\"addStudent(newStudent)\">\n          <div class=\"form-group\">\n            <label for=\"studentEmail\">E-mail</label>\n            <input [(ngModel)]=\"newStudent.studentEmail\" class=\"form-control login-box__field\" type=\"text\" id=\"studentEmail\" name=\"studentEmail\" placeholder=\"E-mail\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"studentName\">Name</label>\n            <input [(ngModel)]=\"newStudent.studentName\" class=\"col-xs-12 form-control login-box__field\" type=\"text\" id=\"studentName\" name=\"studentName\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"studentUserName\">User Name</label>\n            <input [(ngModel)]=\"newStudent.studentUserName\" class=\"col-xs-12 form-control login-box__field\" type=\"text\" id=\"studentUserName\" name=\"studentUserName\" placeholder=\"User name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"studentPassword\">Password</label>\n            <input [(ngModel)]=\"newStudent.studentPassword\" class=\"form-control\" type=\"password\" id=\"studentPassword\" name=\"studentPassword\" placeholder=\"Password\">\n          </div>\n          <button class=\"col-xs-12 btn btn-primary login-box__button\" type=\"submit\">Register</button>\n          <p *ngIf=\"showNewStudentSuccessMessage\" class=\"col-xs-12 bg-success\">Student {{lastStudentNameme}} added successfully! You can now login</p>\n          <p *ngIf=\"false\" class=\"bg-danger\">Error: Coudn't register 'studentName'. Try again later.</p>\n        </form>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map