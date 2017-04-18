import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector: 'news-app',
    templateUrl: './app/addNews/addNews.component.html'    
    ,
})
@Injectable()
export class AddNewsComponent {
    constructor(public http: Http) {
    }

    postNews(form: any) {
        console.log(form);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('http://localhost:5188/Home/CreateNews', JSON.stringify(form), { headers: headers })
            .subscribe();
    }
}
