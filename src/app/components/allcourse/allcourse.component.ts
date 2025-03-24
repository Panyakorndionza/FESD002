import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Course } from '../../classes/course'

@Component({
  selector: 'app-allcourse',
  imports: [FormsModule],
  templateUrl: './allcourse.component.html',
  styleUrl: './allcourse.component.css'
})
export class AllcourseComponent {
  course: Course | undefined
  courses: Course[] = []
  userService: UserService = inject(UserService)
  ngOnInit(): void {
    this.course = new Course();
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
}
