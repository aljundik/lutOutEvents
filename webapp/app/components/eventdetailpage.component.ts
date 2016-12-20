import { Component, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Event } from '../models/event.class';
import { User } from '../models/user.class';
import { EventsService } from '../services/events.service';
import { StudentService } from '../services/student.service';
import { OrganizerService } from '../services/organizer.service';

@Component({
  template: `
    <navigation *ngIf="userId" [userId]="userId" [showBackOption]="true"></navigation>
    <event-detail-info *ngIf="event && user" [event]="event" [user]="user"></event-detail-info>
    <img *ngIf="!event || !user" class="center-block" src="./dist/img/loading-medium.gif">
  `
  
})
export class EventDetailPageComponent {
  event: Event;
  user: User;
  userId: string;
  eventId: string;
  
  constructor(private eventsService: EventsService,
            private studentService: StudentService,
            private organizerService: OrganizerService,
            private route: ActivatedRoute,
            private router: Router) { }
  
  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
        this.userId = params['id'];
        this.eventId = params['eventId'];
        this.getUserInfo(this.userId);
        this.getEvent(this.eventId)
      });
       
  }
  
  private mapStudentInfo(student) {
    this.user = new User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
  }
  
  private mapOrganizerInfo(organizer) {
    this.user = new User(organizer._id, organizer.organizerName, organizer.organizerEmail, organizer.organizerUserName, "", "organizer");
  }
  
  getUserInfo(userId) {
    this.studentService.getStudentById(userId)
        .subscribe(data => this.mapStudentInfo(data),
                    error => 
                    this.organizerService.getOrganizerById(userId)
                              .subscribe(data => this.mapOrganizerInfo(data))
                  )
  }
  
  getEvent(eventId:string) {
    this.eventsService.getEvent(eventId)
        .subscribe(data => this.event = data);
  }
}