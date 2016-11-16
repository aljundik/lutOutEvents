import { Component } from '@angular/core';

import { Organizer } from '../models/organizer.class';
import { OrganizerService } from '../services/organizer.service';

@Component({
  template: `
    <div class="container">
      
      <h1>Add new Organizer</h1>
      <form>
        <div class="form-group">
          <label for="organizerName">Organizer Name</label>
          <input [(ngModel)]="organizer.organizerName" type="text" class="form-control" id="organizerName" name="organizerName" placeholder="Organizer Name">
        </div>
        <div class="form-group">
          <label for="organizerUserName">User Name</label>
          <input [(ngModel)]="organizer.organizerUserName" type="text" class="form-control" id="organizerUserName" name="organizerUserName" placeholder="User Name">
        </div>
        <div class="form-group">
          <label for="organizerEmail">Email address</label>
          <input [(ngModel)]="organizer.organizerEmail" type="email" class="form-control" id="organizerEmail" name="organizerEmail" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="organizerPassword">Password</label>
          <input [(ngModel)]="organizer.organizerPassword" type="password" class="form-control" id="organizerPassword" name="organizerPassword" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="organizerDescription">Add description</label>
          <textarea [(ngModel)]="organizer.organizerDescription" class="form-control" rows="3" id="organizerDescription" name="organizerDescription"></textarea>
        </div>
        <div class="form-group">
          <label for="organizerLogo">Choose a logo for the organization</label>
          <input [(ngModel)]="organizer.organizerLogo" type="text" class="form-control" id="organizerLogo" name="organizerLogo" placeholder="Choose file">
        </div>
        <button (click)="addOrganizer(organizer, $event)" type="submit" class="btn btn-default">Add</button>
      </form>
      <p *ngIf="showSuccessMessage" class="col-xs-12 bg-success">Organizer '{{organizer.organizerName}}' added successfully!</p>
    </div>
  `
  
})
export class OrganizerComponent {
  organizer: Organizer;
  
  lastOrganizerName: string;
  showSuccessMessage: boolean;
  
  constructor(private organizerService: OrganizerService) {}
  
  addOrganizer(organizer: Organizer, event) {
    event.preventDefault();
    this.organizerService.addOrganizer(organizer)
      .subscribe(organizer => this.addOrganizerSuccess(organizer));
  }
  
  addOrganizerSuccess(organizer: Organizer) {
    console.log(organizer);
    this.clearOrganizer();
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3500);
  }
  
  clearOrganizer() {
    this.lastOrganizerName = this.organizer ? this.organizer.organizerName:"";
    this.organizer = new Organizer("","","","","","");
  }
  
  ngOnInit() {
    this.clearOrganizer();
    this.showSuccessMessage = false;
  }
}