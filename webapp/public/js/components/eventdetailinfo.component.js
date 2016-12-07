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
var EventDetailInfoComponent = (function () {
    function EventDetailInfoComponent(eventsService, route, router) {
        this.eventsService = eventsService;
        this.route = route;
        this.router = router;
    }
    EventDetailInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.forEach((params: Params) => {
        //     let selectedId= params['id'];
        //     console.log(selectedId);
        //   });
        this.eventsService.getAllEvents()
            .subscribe(function (data) { return _this.event = data[0]; });
    };
    EventDetailInfoComponent = __decorate([
        core_1.Component({
            selector: 'event-detail-info',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n                <a href=\"#\" >\n                <img class=\"img-responsive\" src=\"https://fthmb.tqn.com/Y5CZYRvcCiboeqyAoL_h-0B4Mp0=/768x0/filters:no_upscale()/about/halloween-party-game-56a325465f9b58b7d0d095cd.jpg\" alt=\"\">\n                </a>\n              <h3>Details:</h3>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  \n          </div>\n          <div class=\"col-md-4 event_right_part\">\n          <h3>Halloween Party</h3>\n          Organized by  <i>Student Union</i>                                               \n          <img class=\"float_right\"  width=\"50\" src=\"http://www.indievox.com/public/anniversary/six/image/fb-share-button.png\" >\n          <hr>\n          <div *ngIf=\"event\" class=\"well event-box-details\">\n              <div class=\"row\">\n                <div class=\"col-xs-10\">\n                  <div class=\"row\">\n                    <i class=\"fa fa-calendar col-xs-2 event-box__info__icon\"></i>\n                    <div class=\"col-xs-10 event-box__info__data\">{{event.date | date:'yMMMMd'}}</div>\n                  </div>\n                  <div class=\"row\">\n                    <i class=\"fa fa-clock-o col-xs-2 event-box__info__icon\"></i>\n                    <div class=\"col-xs-10 event-box__info__data\">{{event.date | date:'jms'}}</div>\n                  </div>\n                  <div class=\"row\">\n                    <i class=\"fa fa-money col-xs-2 event-box__info__icon\"></i>\n                    <div class=\"col-xs-10 event-box__info__data\">{{event.price | currency:'EUR':true:'1.2-2'}}</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-2\">\n                  <i class=\"fa fa-calendar-plus-o event-box__info__icon\"></i>\n                </div>\n              </div>\n          </div>\n          <hr>\n          <h3>Location</h3>\n          <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:px;width:px;'><div id='gmap_canvas' style='height:300px;width:100%;'></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(61.05499289999999,28.18966279999995),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(61.05499289999999,28.18966279999995)});infowindow = new google.maps.InfoWindow({content:'<strong>lappeenranta university of technology</strong><br>lappeenranta<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>\n          </div>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_1.ActivatedRoute, router_1.Router])
    ], EventDetailInfoComponent);
    return EventDetailInfoComponent;
}());
exports.EventDetailInfoComponent = EventDetailInfoComponent;
//# sourceMappingURL=eventdetailinfo.component.js.map