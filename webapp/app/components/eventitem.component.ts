import { Component } from '@angular/core';

@Component({
  selector:'login',
  template: `
    <div class="col-xs-12 col-sm-4 col-sm-offset-9 login-box">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs login-box__nav" role="tablist">
          <li role="presentation" [class.active]="state==='login'" (click)="setState('login')"><a role="tab">Login</a></li>
          <li role="presentation" [class.active]="state==='register'" (click)="setState('register')"><a role="tab">Register</a></li>
        </ul>
      </div>
      <div class="login-box__form-container">
        <form *ngIf="state==='login'">
          <input class="col-xs-12 form-control login-box__field" type="text" name="email" placeholder="E-mail"/>
          <input class="col-xs-12 form-control login-box__field" type="password" name="password" placeholder="Password"/>
          <button [routerLink]="['/events']" class="col-xs-12 btn btn-primary login-box__button" type="button">Login!</button>
        </form>
        <form *ngIf="state==='register'">
          <input class="col-xs-12 form-control login-box__field" type="text" name="email" placeholder="E-mail"/>
          <input class="col-xs-12 form-control login-box__field" type="text" name="name" placeholder="Name"/>
          <input class="col-xs-12 form-control login-box__field" type="password" name="password" placeholder="Password"/>
          <button [routerLink]="['/events']" class="col-xs-12 btn btn-primary login-box__button" type="button">Register</button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent{
  state: string;
  constructor() {
    this.state = 'login';
  }
  setState(state:string) {
    this.state= state;
  }
}