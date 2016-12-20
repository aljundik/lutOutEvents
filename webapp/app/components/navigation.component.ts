import { Component, Input } from '@angular/core';

@Component({
  selector:'navigation',
  template: `
    <div class="container-fluid navigation-box">
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li *ngIf="showBackOption" class="backOption" [routerLink]="backUrl"><p class="fa fa-arrow-left" aria-hidden="true"></p><p class="text-center">Go Back</p></li>
              <li><p [routerLink]="['']">Logout</p></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  `
})
export class NavigationComponent{
  @Input() userId: string;
  @Input() showBackOption: boolean;
  backUrl: string;
  
  ngOnInit() {
    this.backUrl='/events/' + this.userId;
  }
}