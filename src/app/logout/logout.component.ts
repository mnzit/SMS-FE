import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../core/authentication/credentials.service';

@Component({
  selector: 'app-logout',
  template: '',

})
export class LogoutComponent {

  constructor(private credentialsService: CredentialsService,
    private router: Router) {
    this.router.navigate(["/login"]).then(() => {
      this.credentialsService.logOut();
    });
  }

}
