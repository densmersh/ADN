import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddNewsComponent } from './addNews/addNews.component';
import { NewsComponent } from './news/news.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, AddNewsComponent, NewsComponent ],
  bootstrap: [AppComponent, AddNewsComponent, NewsComponent ]
})
export class AppModule { }


