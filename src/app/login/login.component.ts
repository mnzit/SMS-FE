import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  errorMsg: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
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
      this.loginService
        .login(this.formGroup.value)
        .subscribe(
          (data: HttpResponse<any>) => {
            sessionStorage.setItem("TOKEN", "" + data.headers.get('Authorization'));
            console.log(data);
            sessionStorage.setItem("ROLE", data.body.data.authorities)
            this.router.navigate(["dashboard"])
          },
          (error) => { this.errorMsg = error.error.resultDescription; }
        );
    }
  }

}
