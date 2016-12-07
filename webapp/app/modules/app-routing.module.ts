import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome.component';
import { EventsComponent } from '../components/events.component';
import { EventDetailPageComponent } from '../components/eventdetailpage.component';
import { OrganizerComponent } from '../components/organizer.component';
import { AddEventComponent } from '../components/addeventpage.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: WelcomeComponent },
        { path: 'events/:id', component: EventsComponent },
        { path: 'organizer/:id/event/:eventId', component: EventDetailPageComponent },
        { path: 'event/addEvent/:id', component: AddEventComponent },
        { path: 'event/addEvent/:id/event/:eventId', component: AddEventComponent },
        { path: 'addOrganizer', component: OrganizerComponent },
        { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
