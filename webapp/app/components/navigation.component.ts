import { Component } from '@angular/core';

@Component({
  selector:'navigation',
  template: `
    <div class="container-fluid navigation-box">
      <div class="container">
        <nav class="col-xs-12">
          <div class="row">
            <a href="#">All Events</a>
            <a href="#">My Calendar</a>
            <a [routerLink]="['']">Logout</a>
          </div>
        </nav>
      </div>
    </div>
  `
})
export class NavigationComponent{}