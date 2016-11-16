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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('../components/app.component');
var welcome_component_1 = require('../components/welcome.component');
var pagenotfound_component_1 = require('../components/pagenotfound.component');
var about_component_1 = require('../components/about.component');
var login_component_1 = require('../components/login.component');
var events_component_1 = require('../components/events.component');
var navigation_component_1 = require('../components/navigation.component');
var eventlist_component_1 = require('../components/eventlist.component');
var eventdetailpage_component_1 = require('../components/eventdetailpage.component');
var eventdetailinfo_component_1 = require('../components/eventdetailinfo.component');
var organizer_component_1 = require('../components/organizer.component');
var events_service_1 = require('../services/events.service');
var organizer_service_1 = require('../services/organizer.service');
var student_service_1 = require('../services/student.service');
var schedule_1 = require('primeng/components/schedule/schedule');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                schedule_1.ScheduleModule
            ],
            providers: [
                events_service_1.EventsService,
                organizer_service_1.OrganizerService,
                student_service_1.StudentService
            ],
            declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, pagenotfound_component_1.PageNotFoundComponent,
                about_component_1.AboutComponent, login_component_1.LoginComponent, navigation_component_1.NavigationComponent,
                events_component_1.EventsComponent, eventlist_component_1.EventListComponent, eventdetailpage_component_1.EventDetailPageComponent, eventdetailinfo_component_1.EventDetailInfoComponent,
                organizer_component_1.OrganizerComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map