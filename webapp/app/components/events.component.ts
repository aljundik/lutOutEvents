import { Component } from '@angular/core';
@Component({
  template: `
    <navigation></navigation>
    <div class="container">
      <h2>My LUT Calendar</h2>
      <p-schedule [events]="events"></p-schedule>
      <event-list></event-list>
    </div>
  `
  
})
export class EventsComponent {}