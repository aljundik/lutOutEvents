import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { User } from '../models/user.class';
import { Event } from '../models/event.class';
import { CalendarEvent } from '../models/calendarevent.class';
import { StudentService } from '../services/student.service';
import { EventsService } from '../services/events.service';
import { OrganizerService } from '../services/organizer.service';

@Component({
  template: `
    <navigation></navigation>
    <div class="container">
      <h2>My LUT Calendar</h2>
      <p-schedule *ngIf="calendarEvents" [events]="calendarEvents"></p-schedule>
      <event-list *ngIf="user && events && userId" [user]="user" [events]="events" [userId]="userId" (outputEvent)="updateCalendar($event)"></event-list>
      <img *ngIf="!user || !events" class="center-block" src="./dist/img/loading-medium.gif">
    </div>
  `
  
})
export class EventsComponent {
  userId: string;
  user : User;
  calendarEvents : CalendarEvent[];
  events: Event[];
  subscribedEvents: Event[];
  organizerType = 'organizer';
  studentType = 'student';
  
  constructor(private studentService: StudentService,
              private organizerService: OrganizerService,
              private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router){}
  
  private mapStudentInfo(student) {
    this.user = new User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
    this.getAllEvents();
    this.getSubscribedEventsByStudent(student._id);
  }
  
  private mapOrganizerInfo(organizer) {
    this.user = new User(organizer._id, organizer.organizerName, organizer.organizerEmail, organizer.organizerUserName, "", "organizer");
    this.getEventsByOrganizer(this.user);  
  }
  
  getUserInfo(userId) {
    this.studentService.getStudentById(userId)
        .subscribe(data => this.mapStudentInfo(data),
                    error => 
                    this.organizerService.getOrganizerById(userId)
                              .subscribe(data => this.mapOrganizerInfo(data))
                  )
  }
  
  mapOrganizerEventsData(data){
    this.events = data;
    this.calendarEvents = [];
    for (let event of data) {
      if (this.calendarEvents) {
        this.calendarEvents.push(new CalendarEvent(event.eventTitle, event.eventStartDate, event.eventEndDate));
      } else {
        this.calendarEvents = [(new CalendarEvent(event.eventTitle, event.eventStartDate, event.eventEndDate))];
      }
    }
  }
  
  mapStudentCalendarEvents(data){
    this.calendarEvents = [];
    for (let event of data) {
      if (this.calendarEvents) {
        this.calendarEvents.push(new CalendarEvent(event.eventTitle, event.eventStartDate, event.eventEndDate));
      } else {
        this.calendarEvents = [(new CalendarEvent(event.eventTitle, event.eventStartDate, event.eventEndDate))];
      }
    }
  }
  
  getEventsByOrganizer(user: User) {
    this.eventsService.getEventsByOrganizer(user.userId)
        .subscribe(data => this.mapOrganizerEventsData(data));
  }
  
  getAllEvents(){
    this.eventsService.getAllEvents()
        .subscribe(data => this.events = data);
  }
  
  getSubscribedEventsByStudent(userId:string){
    console.log('USER ID:!!!! ', this.userId);
    this.eventsService.getSubscribedEventsByStudent(this.userId)
        .subscribe(data => this.mapStudentCalendarEvents(data));
  }
  
  updateCalendar(){
    if (this.user.userType === this.studentType) {
      this.getSubscribedEventsByStudent(this.userId);
    } else {
      this.getEventsByOrganizer(this.user); 
    }
  }
  
  ngOnInit() {

    this.route.params.forEach((params: Params) => {
         this.userId = params['id'];
         this.getUserInfo(this.userId);
       });
  }
}