import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.formGroup = this.formBuilder.group({
      emailAddress: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.formGroup.valid) {
      console.log("Login triggered : " + JSON.stringify(this.formGroup.value));
      this
        .loginService
        .login(this.formGroup.value)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error(error)
          })
    }
  }

}
