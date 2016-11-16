import { Component } from '@angular/core';

import { StudentService } from '../services/student.service';
import { Student } from '../models/student.class';

@Component({
  selector:'login',
  template: `
    <div class="col-xs-12 col-sm-4 col-sm-offset-8 login-box">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs login-box__nav" role="tablist">
          <li role="presentation" [class.active]="state==='login'" (click)="setState('login')"><a role="tab">Login</a></li>
          <li role="presentation" [class.active]="state==='register'" (click)="setState('register')"><a role="tab">Register</a></li>
        </ul>
      </div>
      <div class="login-box__form-container">
        <form *ngIf="state==='login'">
          <input class="col-xs-12 form-control login-box__field" type="text" name="email" placeholder="E-mail">
          <input class="col-xs-12 form-control login-box__field" type="password" name="password" placeholder="Password">
          <button [routerLink]="['/events']" class="col-xs-12 btn btn-primary login-box__button" type="submit">Login!</button>
        </form>
        <form *ngIf="state==='register'" (ngSubmit)="addStudent(newStudent)">
          <div class="form-group">
            <label for="studentEmail">E-mail</label>
            <input [(ngModel)]="newStudent.studentEmail" class="form-control login-box__field" type="text" id="studentEmail" name="studentEmail" placeholder="E-mail">
          </div>
          <div class="form-group">
            <label for="studentName">Name</label>
            <input [(ngModel)]="newStudent.studentName" class="col-xs-12 form-control login-box__field" type="text" id="studentName" name="studentName" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="studentUserName">User Name</label>
            <input [(ngModel)]="newStudent.studentUserName" class="col-xs-12 form-control login-box__field" type="text" id="studentUserName" name="studentUserName" placeholder="User name">
          </div>
          <div class="form-group">
            <label for="studentPassword">Password</label>
            <input [(ngModel)]="newStudent.studentPassword" class="form-control" type="password" id="studentPassword" name="studentPassword" placeholder="Password">
          </div>
          <button class="col-xs-12 btn btn-primary login-box__button" type="submit">Register</button>
          <p *ngIf="showNewStudentSuccessMessage" class="col-xs-12 bg-success">Student {{lastStudentNameme}} added successfully! You can now login</p>
          <p *ngIf="false" class="bg-danger">Error: Coudn't register 'studentName'. Try again later.</p>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent{
  state: string;
  newStudent: Student;
  lastStudentName: string;
  showNewStudentSuccessMessage: boolean;
  
  constructor(private studentService: StudentService) {}
  setState(state:string) {
    this.state= state;
  }
  
  clearNewStudent() {
    this.lastStudentName = this.newStudent? this.newStudent.studentName:"";
    this.newStudent = new Student("","","","");
  }
  
  addStudent(student: Student) {
    console.log(student);
    this.studentService.addStudent(student)
      .subscribe(student => this.addStudentSuccess(student));
  }
  
  addStudentSuccess(student: Student) {
    this.showNewStudentSuccessMessage = true;
    
    setTimeout(() => {
      this.showNewStudentSuccessMessage = false;
    }, 3500);
  }
  
  ngOnInit() {
    
    this.state = 'login';
    this.clearNewStudent();
    this.showNewStudentSuccessMessage = false;
  }
  
}