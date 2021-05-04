import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenericResponse } from 'src/app/shared/dto/genericResponse';
import { exportExcel } from 'src/app/shared/utils/file-export-util';
import { IUser } from '../../dto/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  response: GenericResponse<IUser[]> | undefined;

  constructor(private userService: UserService, private toastr: ToastrService) {

    this.userService.getAllUsers().subscribe(

      (response) => this.response = response
    )
  }

  download() {
    this.userService
    .downloadUsersExcel()
    .subscribe((inputStream: ArrayBuffer) => {
      if (inputStream) {
        exportExcel(inputStream, 'users');
      }
    }, (error) => {
        this.toastr.error("Error Downloading Excel")
    })
  }
}
