import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome.component';
import { EventsComponent } from '../components/events.component';
import { EventDetailPageComponent } from '../components/eventdetailpage.component';
import { OrganizerComponent } from '../components/organizer.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: WelcomeComponent },
        { path: 'events', component: EventsComponent },
        { path: 'event/:id', component: EventDetailPageComponent },
        { path: 'addOrganizer', component: OrganizerComponent },
        { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
