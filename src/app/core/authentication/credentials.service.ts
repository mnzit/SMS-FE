import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {


  constructor() { }


  logOut(){
    sessionStorage.removeItem("TOKEN");
    sessionStorage.removeItem("ROLE");
  }
}
