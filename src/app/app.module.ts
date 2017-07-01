import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.components";
import {HeroComponent} from "./heroes/hero.components";

@NgModule({
  declarations: [
    AppComponent, HeroesComponent, HeroComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
