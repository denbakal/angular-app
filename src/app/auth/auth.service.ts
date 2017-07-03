import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {map} from "rxjs/operator/map";
import {Observable} from "rxjs/Observable";
import {User} from "./user.model";
import {AUTH_CONFIG} from "./auth-config.vars";
import {Auth} from "./auth.model";

@Injectable()
export class AuthService {
  bearerKey: string = 'bearer-token';
  refreshKey: string = 'refresh-token';
  authenticated: boolean;
  result: User;

  constructor(private http: Http) {
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  authenticate(login: string, password: string): Observable<Auth> {
    console.log("Authenticate with login: " + login);

    let encodedData = btoa(AUTH_CONFIG.CLIENT_ID + ":" + AUTH_CONFIG.SECRET);
    console.log("encodedData: " + encodedData);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Authorization', 'Basic ' + encodedData);

    let body = 'grant_type=password&username=' + login + '&password=' + password;
    let options = new RequestOptions({ headers: headers });

    return this.http.post(AUTH_CONFIG.TOKEN_ENDPOINT, body, options)
      .map(res => {
        let auth = res.json() as Auth;

        if (auth && auth.access_token) {
          localStorage.setItem(this.bearerKey, auth.access_token);
          localStorage.setItem(this.refreshKey, auth.refresh_token);
          this.authenticated = true;
        }

        return auth;
      });
  }

  logout(): void {
    localStorage.removeItem(this.bearerKey);
    localStorage.removeItem(this.refreshKey);
    this.authenticated = false;
  }

  /*-------------------------------*/

  getSample(): Observable<User> {
    return this.http.get('/users/23')
      .map(res => res.json() as User);

    /*this.http.get('/users/23')
     .map(res => res.json() as User)
     .subscribe(
     data => this.result = data,
     error => console.error('There was an error: ' + error),
     () => console.log('Complete')
     );*/
  }
}
