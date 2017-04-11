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
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.newses = [];
    }
    AppComponent.prototype.getNews = function () {
        var _this = this;
        this.http.get('http://localhost:5188/api/values')
            .map(function (res) { return res.json(); })
            .subscribe(function (newses) {
            for (var index in newses) {
                var news = newses[index];
                _this.newses.push({ Id: news.Id, Name: news.Name, Author: news.Author, Text: news.Text, Raiting: news.Raiting, Date: news.Date });
            }
        });
    };
    AppComponent.prototype.postNews = function (form) {
        console.log(form);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('http://localhost:5188/api/values', JSON.stringify(form), { headers: headers })
            .map(function (resp) { return resp.json(); }).subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<button (click) = \"getNews()\">Open all of news</button>\n                <li *ngFor=\"let news of newses\">\n                    <p>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: {{news?.Name}}</p>\n                    <p>\u0410\u0432\u0442\u043E\u0440 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: {{news?.Author}}</p>\n                    <p>\u0422\u0435\u043A\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: {{news?.Text}}</p>\n                    <p>\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: {{news?.Raiting}}</p>\n                    <p>\u0414\u0430\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: {{news?.Date|date:'yyyy-MM-dd HH:mm'}}</p>\n                 </li>\n                \n          \n\n<div class=\"ui raised segment\">   \n    <form #news=\"ngForm\" (ngSubmit)=\"postNews(news.value)\"  class=\"ui form\">\n \n      <div class=\"field\">  \n        <input type=\"text\" id=\"skuInput\" name=\"Name\" ngModel>  \n      </div>\n        <div class=\"field\">  \n        <input type=\"text\" id=\"skuInput\" name=\"Author\" ngModel>  \n      </div>\n        <div class=\"field\">  \n        <input type=\"text\" id=\"skuInput\" name=\"Text\" ngModel>  \n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>  \n    </form>  \n  </div>  \n           \n",
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map