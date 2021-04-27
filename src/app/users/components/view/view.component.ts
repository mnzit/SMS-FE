import { Component } from '@angular/core';
import { GenericResponse } from 'src/app/shared/dto/genericResponse';
import { IUser } from '../../dto/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  response: GenericResponse<IUser[]> | undefined;

  constructor(private userService: UserService) {

    this.userService.getAllUsers().subscribe(

      (response) => this.response = response
    )
  }


}
