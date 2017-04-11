import { Component, OnInit} from '@angular/core';
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
                    <p>Название новости: {{news?.Name}}</p>
                    <p>Автор новости: {{news?.Author}}</p>
                    <p>Текст новости: {{news?.Text}}</p>
                    <p>Рейтинг новости: {{news?.Raiting}}</p>
                    <p>Дата новости: {{news?.Date|date:'yyyy-MM-dd HH:mm'}}</p>
                 </li>
                
          

<div class="ui raised segment">   
    <form #news="ngForm" (ngSubmit)="postNews(news.value)"  class="ui form">
 
      <div class="field">  
        <input type="text" id="skuInput" name="Name" ngModel>  
      </div>
        <div class="field">  
        <input type="text" id="skuInput" name="Author" ngModel>  
      </div>
        <div class="field">  
        <input type="text" id="skuInput" name="Text" ngModel>  
      </div>

      <button type="submit" class="ui button">Submit</button>  
    </form>  
  </div>  
           
`
    ,
})
@Injectable()
export class AppComponent {
    newses: News[] = [];
    constructor(public http: Http) {
    }

    getNews() {
        this.http.get('http://localhost:5188/api/values')
            .map(res => res.json())
            .subscribe(newses => {
                for (let index in newses) {
                    let news = newses[index];
                    this.newses.push({ Id: news.Id, Name:news.Name, Author: news.Author, Text: news.Text, Raiting: news.Raiting , Date:news.Date});
                    }});
    }

    postNews(form: any) {
        console.log(form);
        let headers = new Headers({ 'Content-Type':'application/json;charset=utf-8' });
        return this.http.post('http://localhost:5188/api/values', JSON.stringify(form), { headers: headers })
            .map((resp: Response) => resp.json()).subscribe();
    }
}
   



