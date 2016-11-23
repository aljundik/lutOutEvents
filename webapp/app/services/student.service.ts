import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Student } from '../models/student.class';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }
  
  private studentURL = 'api/student';
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  addStudent(student: Student) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(student);
    return this.http.post(this.studentURL, body, options)
          .map(this.extractData);
  }
  
  getStudentById(studentId: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.studentURL + '/' + studentId)
          .map(this.extractData);
  }

}
