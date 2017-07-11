import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {  Routes, RouterModule } from '@angular/router';
import { MdDialogModule } from "@angular/material";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.components';

import { HeroService } from "./hero.service";
import { AuthService } from "./auth/auth.service";
import { AboutGuard } from './about/about.guard';
import { AuthGuard } from './auth/auth.guard';
import { httpFactory } from "./interceptor/http.factory";
import {NotFoundComponent} from "./core/not-found.component";
import {ContactComponent} from "./contact/contact.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogComponent} from "./dialog/confitm-dialog.component";
import {ConfirmDialogService} from "./dialog/shared/confirm-dialog.service";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent,
    ContactComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ContactComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    JsonpModule,
    MdDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    HeroService,
    AboutGuard,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    AuthService,
    AuthGuard,
    ConfirmDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
