import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../course.service';
import { ICourse } from '../../dto/course';
import { IRole } from '../../dto/role';
import { IUser } from '../../dto/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  formGroup: FormGroup;
  errorMsg: string | undefined;
  roles: IRole[] | undefined;
  courses: ICourse[] | undefined;
  isStudent: boolean = false;
  user: IUser;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.user = {};
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required, Validators.email]],
      contactNo: [null, [Validators.required]],
      address: [null, [Validators.required]],
      role: [null, [Validators.required]],
      course: [null],
      isActive: [null]
    });

    this.userService.getUserById(this.route.snapshot.params.id)
      .subscribe(
        (response: any) => {
          this.user = response.data
          this.studentChecker(null, this.user.role);
          this.formGroup.patchValue(this.user);
        },
        (error) => this.toastr.error(error)
      )

    this.userService.getRoles().subscribe((response) => this.roles = response.data);
  }

  manage() {
    if (this.formGroup.valid) {
      this.userService.updateUser(this.formGroup.value, this.route.snapshot.params.id)
        .subscribe(
          (response) => {
            this.toastr.success(response.resultDescription);
            this.router.navigate(['users'])
          }
        );
    }
  }

  studentChecker(event: any, role: any): void {
    if (role == 3) {
      this.courseService.getCourses().subscribe((response) => this.courses = response.data);
      this.isStudent = true;
    } else {
      this.courses = undefined;
      this.isStudent = false;
    }
  }

}
