import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent }   from '../components/app.component';
import { WelcomeComponent } from '../components/welcome.component';
import { PageNotFoundComponent } from '../components/pagenotfound.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
    
  ],
  declarations: [ AppComponent, WelcomeComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }