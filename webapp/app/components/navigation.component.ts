import { Component } from '@angular/core';

@Component({
  selector:'navigation',
  template: `
    <div class="container-fluid navigation-box">
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li><a href="#">All Events</a></li>
              <li><a href="#">My Calendar</a></li>
              <li><a [routerLink]="['']">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  `
})
export class NavigationComponent{}