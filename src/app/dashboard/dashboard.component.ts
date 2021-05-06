import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AttendanceService } from '../shared/services/attendance.service';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showToggle: boolean = false;

  constructor(
    private attendanceService: AttendanceService,
    private toastr: ToastrService
  ) {

    let beginningTime = moment('8:30am', 'h:mma');
    let endTime = moment('8:32am', 'h:mma');

    setInterval(() => {
      let currTime = moment(new Date(), 'h:mma')
      if (currTime.isAfter(beginningTime) && currTime.isBefore(endTime)) {
        if (!this.showToggle) {
          this.showToggle = true;
        }
      } else {
        if (this.showToggle) {
          this.showToggle = false;
        }
      }

    }, 1000)
  }

  ngOnInit(): void {
  }

  performAttendance() {


    let userId = sessionStorage.getItem("USERID")!;
    this.attendanceService
      .saveAttendance(userId)
      .subscribe((response) => {
        console.log(response.status);
        this.toastr.info(response.resultDescription);
      })
  }

}
