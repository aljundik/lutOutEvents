import { Component } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { User } from '../models/user.class';
import { StudentService } from '../services/student.service';
import { OrganizerService } from '../services/organizer.service';

@Component({
  template: `
    <navigation></navigation>
    <div class="container">
      <h2>My LUT Calendar</h2>
      <p-schedule [events]="events"></p-schedule>
      <event-list *ngIf="user" [user]="user"></event-list>
      <img *ngIf="!user" class="center-block" src="./dist/img/loading-medium.gif">
    </div>
  `
  
})
export class EventsComponent {
  userId: string;
  user : User;
  
  constructor(private studentService: StudentService,
              private organizerService: OrganizerService,
              private route: ActivatedRoute,
              private router: Router){}
  
  private mapStudentInfo(student) {
    console.log('mapping student data', student);
    this.user = new User(student._id, student.studentName, student.studentEmail, student.studentUserName, "", "student");
  }
  
  private mapOrganizerInfo(organizer) {
    console.log('mapping organizer data', organizer);
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
  
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
         this.userId = params['id'];
         this.getUserInfo(this.userId);
       });
  }
}