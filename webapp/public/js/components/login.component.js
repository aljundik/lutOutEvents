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
var LoginComponent = (function () {
    function LoginComponent() {
        this.state = 'login';
    }
    LoginComponent.prototype.setState = function (state) {
        this.state = state;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <div class=\"col-xs-12 col-sm-4 col-sm-offset-9 login-box\">\n      <div class=\"row\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs login-box__nav\" role=\"tablist\">\n          <li role=\"presentation\" [class.active]=\"state==='login'\" (click)=\"setState('login')\"><a role=\"tab\">Login</a></li>\n          <li role=\"presentation\" [class.active]=\"state==='register'\" (click)=\"setState('register')\"><a role=\"tab\">Register</a></li>\n        </ul>\n      </div>\n      <div class=\"login-box__form-container\">\n        <form *ngIf=\"state==='login'\">\n          <input class=\"col-xs-12 form-control login-box__field\" type=\"text\" name=\"email\" placeholder=\"E-mail\"/>\n          <input class=\"col-xs-12 form-control login-box__field\" type=\"password\" name=\"password\" placeholder=\"Password\"/>\n          <button [routerLink]=\"['/events']\" class=\"col-xs-12 btn btn-primary login-box__button\" type=\"button\">Login!</button>\n        </form>\n        <form *ngIf=\"state==='register'\">\n          <input class=\"col-xs-12 form-control login-box__field\" type=\"text\" name=\"email\" placeholder=\"E-mail\"/>\n          <input class=\"col-xs-12 form-control login-box__field\" type=\"text\" name=\"name\" placeholder=\"Name\"/>\n          <input class=\"col-xs-12 form-control login-box__field\" type=\"password\" name=\"password\" placeholder=\"Password\"/>\n          <button [routerLink]=\"['/events']\" class=\"col-xs-12 btn btn-primary login-box__button\" type=\"button\">Register</button>\n        </form>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map