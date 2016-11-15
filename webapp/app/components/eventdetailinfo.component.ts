import { Component, Input, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event.class';


@Component({
  selector: 'event-detail-info',
  template: `
    <div class="container">
      <div class="row">
          <div class="col-md-8">
                <a href="#" >
                <img class="img-responsive" src="https://fthmb.tqn.com/Y5CZYRvcCiboeqyAoL_h-0B4Mp0=/768x0/filters:no_upscale()/about/halloween-party-game-56a325465f9b58b7d0d095cd.jpg" alt="">
                </a>
              <h3>Details:</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
          </div>
          <div class="col-md-4 event_right_part">
          <h3>Halloween Party</h3>
          Organized by  <i>Student Union</i>                                               
          <img class="float_right"  width="50" src="http://www.indievox.com/public/anniversary/six/image/fb-share-button.png" >
          <hr>
          <div *ngIf="event" class="well event-box-details">
              <div class="row">
                <div class="col-xs-10">
                  <div class="row">
                    <i class="fa fa-calendar col-xs-2 event-box__info__icon"></i>
                    <div class="col-xs-10 event-box__info__data">{{event.date | date:'yMMMMd'}}</div>
                  </div>
                  <div class="row">
                    <i class="fa fa-clock-o col-xs-2 event-box__info__icon"></i>
                    <div class="col-xs-10 event-box__info__data">{{event.date | date:'jms'}}</div>
                  </div>
                  <div class="row">
                    <i class="fa fa-money col-xs-2 event-box__info__icon"></i>
                    <div class="col-xs-10 event-box__info__data">{{event.price | currency:'EUR':true:'1.2-2'}}</div>
                  </div>
                </div>
                <div class="col-xs-2">
                  <i class="fa fa-calendar-plus-o event-box__info__icon"></i>
                </div>
              </div>
          </div>
          <hr>
          <h3>Location</h3>
          <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:px;width:px;'><div id='gmap_canvas' style='height:300px;width:100%;'></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(61.05499289999999,28.18966279999995),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(61.05499289999999,28.18966279999995)});infowindow = new google.maps.InfoWindow({content:'<strong>lappeenranta university of technology</strong><br>lappeenranta<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
          </div>
      </div>
  </div>
  `
})
export class EventDetailInfoComponent implements OnInit {
  event: Event;
  
  constructor(private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //     let selectedId= params['id'];
    //     console.log(selectedId);
    //   });
    this.eventsService.getEvents()
          .subscribe(data => this.event = data[0]);
    
  }

}