import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from '../components/app.component';
import { WelcomeComponent } from '../components/welcome.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';
import { AboutComponent } from '../components/about.component';
import { LoginComponent } from '../components/login.component';
import { EventsComponent } from '../components/events.component';
import { NavigationComponent } from '../components/navigation.component';
import { EventListComponent } from '../components/eventlist.component';
import { ScheduleModule } from 'primeng/components/schedule/schedule';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'events', component: EventsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
    ScheduleModule
    
  ],
  declarations: [ AppComponent, WelcomeComponent, PageNotFoundComponent, 
                  AboutComponent, LoginComponent, EventsComponent, NavigationComponent, EventListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }