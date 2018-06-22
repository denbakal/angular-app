import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {  Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from "@angular/material";

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
import {SignupComponent} from "./async/signup.component";
import {SignupService} from "./async/signup.service";
import {BannerComponent} from "./banner/banner.component";
import {BannerAsyncComponent} from "./banner/async/banner-async.component";
import {TwainComponent} from "./twain/twain.component";
import {WelcomeComponent} from "./welcome/welcome.component";

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
  { path: 'async', component: SignupComponent },

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
    UserProfileComponent,
    SignupComponent,
    BannerComponent,
    BannerAsyncComponent,
    TwainComponent,
    WelcomeComponent
  ],
  entryComponents: [
    ContactComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    MatDialogModule,
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
    VideoService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
