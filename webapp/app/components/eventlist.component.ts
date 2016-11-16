import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { EventsService } from '../services/events.service';
import { StudentService } from '../services/student.service';
import { OrganizerService } from '../services/organizer.service';
import { Event } from '../models/event.class';
import { User } from '../models/user.class';
import { Student } from '../models/student.class';
import { Organizer } from '../models/organizer.class';

@Component({
  selector:'event-list',
  template: `
    <h2 class="section-title">Events</h2>
    <div class="row">
      <button routerLink="/event/addEvent/{{userId}}"  class="btn btn-default" type="button">Add New Event</button>
    </div>
    <div *ngFor="let event of events">
      <div class="col-xs-12 col-lg-6 event-box">
        <h3 class="col-xs-12 event-box__title">{{event.name}}</h3>
        <div class="col-xs-12 event-box__info-section">
          <div class="event-box__info">
            <i class="fa fa-calendar event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.date | date:'yMMMd'}}</div>
          </div>
          <div class="event-box__info">
            <i class="fa fa-clock-o event-box__info__icon"></i>
            <div class="text-center event-box__info__data">{{event.date | date:'jms'}}</div>
          </div>
          <div class="event-box__info">
            <div class="fa fa-money event-box__info__icon"></div>
            <div class="text-center event-box__info__data">{{event.price | currency:'EUR':true:'1.2-2'}}</div>
          </div>
          <div class="event-box__info event-box__info--pointer" [routerLink]="['/event', event.id]">
            <div class="fa fa-eye event-box__info__icon"></div>
            <div class="text-center event-box__info__data">See Details</div>
          </div>
          <div class="event-box__info event-box__info--pointer">
            <div class="fa fa-calendar-plus-o event-box__info__icon"></div>
            <div class="event-box__info__data">Add</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent{
  user: User;
  events: Event[];
  userId: string;
  
  constructor(private eventsService: EventsService,
              private studentService: StudentService,
              private organizerService: OrganizerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
         let selectedId= params['id'];
         this.userId = selectedId;
         console.log('This is the ID: ', selectedId);
         //this.getUserInfo(selectedId);
       });
    this.getEvents();
  }
  
  mapStudentInfo(student) {
    console.log('mapping student data', student);
    this.user = new User(student._id, 
                        student.studentName, 
                        student.studentEmail, 
                        student.studentUserName, 
                        "", "student");
  }
  
  mapOrganizerInfo(organizer) {
    console.log('mapping organizer data', organizer);
    this.user = new User(organizer._id, 
                        organizer.studentName, 
                        organizer.studentEmail, 
                        organizer.studentUserName, 
                        "", "organizer");
  }
  
  // getUserInfo(userId) {
  //   this.studentService.getStudentById(userId)
  //       .subscribe(data => this.mapStudentInfo(data),
  //                   error => 
  //                   this.organizerService.getOrganizerById(userId)
  //                             .subscribe(data => this.mapOrganizerInfo(data))
  //                 )
  // }
  
  getEventsByOrganizer(user) {
    this.eventsService.getEventsByOrganizer(user.id)
        .subscribe(data => this.events = data);
  }
  
  getEvents(){
    this.eventsService.getEvents()
      .subscribe(data => this.events = data);
  }

}