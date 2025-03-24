import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Course } from '../../classes/course'
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-course',
  imports: [FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  course: Course | undefined
  courses: Course[] = []
  userService: UserService = inject(UserService)
  ngOnInit(): void {
    this.course = new Course();
    this.course.promote = '1';
    this.getData()
  }

  public getData(): void {
    this.userService.getAll().subscribe(res => {
      if (res.OnlineCourse) {
        this.courses = res.OnlineCourse
      } else {
        console.log('Error Test')
      }
    })
  }

  statusSuccess = false
  statusUnsuccess = false
  public createCourse(): void {
    this.course!.course_image = 'course' + this.course!.course_id + '.png';
    this.userService.postCreate(this.course!).subscribe({
      next: (res) => {
        if (res.result) {
          this.statusSuccess = true
          this.statusUnsuccess = false
        }else {
          this.statusSuccess = false
          this.statusUnsuccess = true
        }
      },
      error: (err) => {
        this.statusSuccess = false;
        this.statusUnsuccess = true;
      }
    });
  }
  public updateCourse(): void {
    this.course!.course_image = 'course' + this.course!.course_id + '.png';
    this.userService.putUpdate(this.course!).subscribe({
      next: (res) => {
        if (res.result) {
          this.statusSuccess = true
          this.statusUnsuccess = false
        }else {
          this.statusSuccess = false
          this.statusUnsuccess = true
        }
      },
      error: (err) => {
        this.statusSuccess = false;
        this.statusUnsuccess = true;
      }
    })
  }
  public deleteCourse(): void {
    this.userService.deleteCourse(this.course!).subscribe({
      next: (res) => {
        if (res.result) {
          this.statusSuccess = true
          this.statusUnsuccess = false
        }else {
          this.statusSuccess = false
          this.statusUnsuccess = true
        }
      },
      error: (err) => {
        this.statusSuccess = false;
        this.statusUnsuccess = true;
      }
    })
  }
}
