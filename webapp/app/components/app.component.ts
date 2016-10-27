import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';
import { WelcomeComponent } from './welcome.component';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <ul class="nav navbar-nav navbar-right">
            <li><a [routerLink]="['']">About</a></li>
            <li><a [routerLink]="['/schedule']">Schedule</a></li>
            <li><a [routerLink]="['/scoreboard']">Scoreboard</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <main role="main">
      <router-outlet></router-outlet>
    <main>
  `
})
export class AppComponent {}