import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <main role="main">
      <router-outlet></router-outlet>
    <main>
  `
})
export class AppComponent {}