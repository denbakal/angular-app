import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "./signup.service";
import {ValidateEmailNotTaken} from "./async-email.validator";

@Component({
  selector: 'signup-component',
  templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        ValidateEmailNotTaken.createValidator(this.signupService)
      ]
    });
  }
}
