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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var AddNewsComponent = (function () {
    function AddNewsComponent(http) {
        this.http = http;
    }
    AddNewsComponent.prototype.postNews = function (form) {
        console.log(form);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('http://localhost:5188/Home/CreateNews', JSON.stringify(form), { headers: headers })
            .subscribe();
    };
    return AddNewsComponent;
}());
AddNewsComponent = __decorate([
    core_1.Component({
        selector: 'news-app',
        templateUrl: './app/addNews/addNews.component.html',
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AddNewsComponent);
exports.AddNewsComponent = AddNewsComponent;
//# sourceMappingURL=addNews.component.js.map