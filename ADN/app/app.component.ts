﻿import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { News } from './model';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    template: `<button (click) = "getNews()">Open all of news</button>
                <li *ngFor="let news of newses">
                    <p>ID:{{news?.Id}}</p>
                    <p>Название новости:{{news?.Name}}</p>
                    <p>Автор новости: {{news?.Author}}</p>
                    <p>Текст новости: {{news?.Text}}</p>
                    <p>Рейтинг новости: {{news?.Raiting}}</p>
                    <p>Дата новости: {{news?.Date}}</p>
                    <button (click) = "deleteNews(news.Id)">Удалить</button>
                 </li>
`,
})
@Injectable()
export class AppComponent {
    newses: News[] = [];

    constructor(public http: Http) {
    }

    getNews() {
        this.http.get('http://localhost:5188/Home/GetAllNews')
            .map(res => res.json())
            .subscribe(newses => {
                for (let index in newses) {
                    let news = newses[index];
                    this.newses.push({ Id: news.Id, Name: news.Name, Author: news.Author, Text: news.Text, Raiting: news.Raiting, Date: news.Date });
                }
            });
    }

    deleteNews(Id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5188/Home/DeleteNews', JSON.stringify({ id: Id }), { headers: headers })
            .subscribe();


    }
}