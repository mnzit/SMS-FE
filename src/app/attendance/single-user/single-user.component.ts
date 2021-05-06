import { Component, OnInit } from '@angular/core';
import { UserAttendanceHistory } from 'src/app/shared/dto/user-attendance-history';
import { AttendanceService } from 'src/app/shared/services/attendance.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  response: UserAttendanceHistory | undefined;

  constructor(private attendanceService: AttendanceService) {
    let userId = sessionStorage.getItem("USERID")!;
    this.attendanceService.getUserAttendanceHistory(userId).subscribe((response) => {
      this.response = response.data;
    })
  }

  ngOnInit(): void {
  }

}
