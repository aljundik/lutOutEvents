import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from '../components/app.component';
import { WelcomeComponent } from '../components/welcome.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';
import { AboutComponent } from '../components/about.component';
import { LoginComponent } from '../components/login.component';
import { EventsComponent } from '../components/events.component';
import { NavigationComponent } from '../components/navigation.component';
import { EventListComponent } from '../components/eventlist.component';
import { EventDetailPageComponent } from '../components/eventdetailpage.component';
import { EventDetailInfoComponent } from '../components/eventdetailinfo.component';
import { OrganizerComponent } from '../components/organizer.component';
import { AddEventComponent } from '../components/addeventpage.component';

import { EventsService }   from '../services/events.service';
import { OrganizerService }   from '../services/organizer.service';
import { StudentService }   from '../services/student.service';
import { LoginService } from '../services/login.service';

import { ScheduleModule } from 'primeng/components/schedule/schedule';

@NgModule({
  imports:      [ 
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScheduleModule
  ],
  providers: [
    EventsService,
    OrganizerService,
    StudentService,
    LoginService
  ],
  declarations: [ AppComponent, WelcomeComponent, PageNotFoundComponent, 
                  AboutComponent, LoginComponent, NavigationComponent,
                  EventsComponent, EventListComponent, EventDetailPageComponent, EventDetailInfoComponent,
                  OrganizerComponent, AddEventComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }