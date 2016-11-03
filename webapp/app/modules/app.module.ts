import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from '../components/app.component';
import { WelcomeComponent } from '../components/welcome.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';
import { AboutComponent } from '../components/about.component';
import { LoginComponent } from '../components/login.component';
import { EventsComponent } from '../components/events.component';
import { NavigationComponent } from '../components/navigation.component';
import { EventListComponent } from '../components/eventlist.component';

import { EventsService }   from '../services/events.service';

import { ScheduleModule } from 'primeng/components/schedule/schedule';

@NgModule({
  imports:      [ 
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'events', component: EventsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
    ScheduleModule
    
  ],
  providers: [
    EventsService
  ],
  declarations: [ AppComponent, WelcomeComponent, PageNotFoundComponent, 
                  AboutComponent, LoginComponent, NavigationComponent,
                  EventsComponent, EventListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }