import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard.component';
import {PersonsComponent} from './persons.component';
import {SubComponent} from './sub.component';

@NgModule({
  declarations: [
    AppComponent,
	DashboardComponent,
	PersonsComponent,
	SubComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
