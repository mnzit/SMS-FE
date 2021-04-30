import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../course.service';
import { ICourse } from '../../dto/course';
import { IRole } from '../../dto/role';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  formGroup: FormGroup;
  errorMsg: string | undefined;
  roles: IRole[] | undefined;
  courses: ICourse[] | undefined;
  isStudent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required, Validators.email]],
      contactNo: [null, [Validators.required]],
      address: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]],
      course: [null]
    });
    this.userService.getRoles().subscribe((response) => this.roles = response.data);
  }

  create() {
    if (this.formGroup.valid) {
      this.userService
        .createUser(this.formGroup.value)
        .subscribe(
          (response) => {
            this.toastr.success(response.resultDescription);
            this.router.navigate(['users'])
          }
        );
    }
  }

  studentChecker(event: any, role: number): void {
    if (role == 3) {
      this.courseService.getCourses().subscribe((response) => this.courses = response.data);
      this.isStudent = true;
    } else {
      this.courses = undefined;
      this.isStudent = false;
    }
  }

}
