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
var organizer_class_1 = require('../models/organizer.class');
var organizer_service_1 = require('../services/organizer.service');
var OrganizerComponent = (function () {
    function OrganizerComponent(organizerService) {
        this.organizerService = organizerService;
    }
    OrganizerComponent.prototype.addOrganizer = function (organizer, event) {
        var _this = this;
        event.preventDefault();
        this.organizerService.addOrganizer(organizer)
            .subscribe(function (organizer) { return _this.addOrganizerSuccess(organizer); });
    };
    OrganizerComponent.prototype.addOrganizerSuccess = function (organizer) {
        var _this = this;
        console.log(organizer);
        this.clearOrganizer();
        this.showSuccessMessage = true;
        setTimeout(function () {
            _this.showSuccessMessage = false;
        }, 3500);
    };
    OrganizerComponent.prototype.clearOrganizer = function () {
        this.lastOrganizerName = this.organizer ? this.organizer.organizerName : "";
        this.organizer = new organizer_class_1.Organizer("", "", "", "", "", "");
    };
    OrganizerComponent.prototype.ngOnInit = function () {
        this.clearOrganizer();
        this.showSuccessMessage = false;
    };
    OrganizerComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container\">\n      \n      <h1>Add new Organizer</h1>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"organizerName\">Organizer Name</label>\n          <input [(ngModel)]=\"organizer.organizerName\" type=\"text\" class=\"form-control\" id=\"organizerName\" name=\"organizerName\" placeholder=\"Organizer Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organizerUserName\">User Name</label>\n          <input [(ngModel)]=\"organizer.organizerUserName\" type=\"text\" class=\"form-control\" id=\"organizerUserName\" name=\"organizerUserName\" placeholder=\"User Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organizerEmail\">Email address</label>\n          <input [(ngModel)]=\"organizer.organizerEmail\" type=\"email\" class=\"form-control\" id=\"organizerEmail\" name=\"organizerEmail\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organizerPassword\">Password</label>\n          <input [(ngModel)]=\"organizer.organizerPassword\" type=\"password\" class=\"form-control\" id=\"organizerPassword\" name=\"organizerPassword\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organizerDescription\">Add description</label>\n          <textarea [(ngModel)]=\"organizer.organizerDescription\" class=\"form-control\" rows=\"3\" id=\"organizerDescription\" name=\"organizerDescription\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organizerLogo\">Choose a logo for the organization</label>\n          <input [(ngModel)]=\"organizer.organizerLogo\" type=\"text\" class=\"form-control\" id=\"organizerLogo\" name=\"organizerLogo\" placeholder=\"Choose file\">\n        </div>\n        <button (click)=\"addOrganizer(organizer, $event)\" type=\"submit\" class=\"btn btn-default\">Add</button>\n      </form>\n      <p *ngIf=\"showSuccessMessage\" class=\"col-xs-12 bg-success\">Organizer '{{organizer.organizerName}}' added successfully!</p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [organizer_service_1.OrganizerService])
    ], OrganizerComponent);
    return OrganizerComponent;
}());
exports.OrganizerComponent = OrganizerComponent;
//# sourceMappingURL=organizer.component.js.map