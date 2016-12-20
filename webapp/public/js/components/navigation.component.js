"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.backUrl = '/events/' + this.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavigationComponent.prototype, "showBackOption", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            template: "\n    <div class=\"container-fluid navigation-box\">\n      <div class=\"container\">\n        <nav class=\"navbar navbar-default\">\n          <div class=\"container-fluid\">\n            <ul class=\"nav navbar-nav\">\n              <li *ngIf=\"showBackOption\" class=\"backOption\" [routerLink]=\"backUrl\"><p class=\"fa fa-arrow-left\" aria-hidden=\"true\"></p><p class=\"text-center\">Go Back</p></li>\n              <li><p [routerLink]=\"['']\">Logout</p></li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map