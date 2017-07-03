import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log("Sign in: " + this.login);
    this.authService.authenticate(this.login, this.password)
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
          console.log("success" + JSON.stringify(data));
        },
        error => {
          console.error(error);
        }
      );
  }

  onLogout(): void {
    this.authService.logout();
  }
}
