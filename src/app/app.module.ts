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
import {CounterComponent} from "./counter/counter.component";
import {EventBus} from "./core/event/event-bus.service";
import {PersonsComponent} from "./persons/persons.component";
import {VideoService} from "./video/video.service";
import {VideoComponent} from "./video/video.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./store/counter.reducer";
import {StoreComponent} from "./store/store.component";
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user/list/user-list.component";
import {UserProfileComponent} from "./user/profile/user-profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },

  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'videos', component: VideoComponent },
  { path: 'store', component: StoreComponent },

  { path: 'users', component: UserComponent, children: [
    {path: '', component: UserListComponent},
    {path: 'profile', component: UserProfileComponent}
  ]},

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
    ConfirmDialogComponent,
    CounterComponent,
    PersonsComponent,
    VideoComponent,
    StoreComponent,
    UserComponent,
    UserListComponent,
    UserProfileComponent
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
    RouterModule.forRoot(routes, {useHash: true}),
    StoreModule.forRoot({counter: counterReducer})
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
    ConfirmDialogService,
    EventBus,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
