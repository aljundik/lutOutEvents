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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
var OrganizerService = (function () {
    function OrganizerService(http) {
        this.http = http;
        this.organizerURL = 'api/organizer';
    }
    OrganizerService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('body: ', body);
        return body.data || body || {};
    };
    OrganizerService.prototype.addOrganizer = function (organizer) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var body = JSON.stringify(organizer);
        return this.http.post(this.organizerURL, body, options)
            .map(this.extractData);
    };
    // addEvent(newEvent: Event, organizerId) {
    //  /api/organizer/"organizerId" /event
    // }
    OrganizerService.prototype.getOrganizerById = function (organizerId) {
        console.log('URL: ' + this.organizerURL + '/' + organizerId);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.organizerURL + '/' + organizerId)
            .map(this.extractData);
    };
    OrganizerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrganizerService);
    return OrganizerService;
}());
exports.OrganizerService = OrganizerService;
//# sourceMappingURL=organizer.service.js.map