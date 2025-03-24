import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Course } from '../../classes/course'

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  course: Course | undefined
  courses: Course[] = []
  userService: UserService = inject(UserService)
  ngOnInit(): void {
    this.course = new Course();
    this.getData()
  }

  public getData(): void {
    this.userService.getPromote().subscribe(res => {
      if (res.OnlineCourse) {
        this.courses = res.OnlineCourse
      } else {
        console.log('Error Test')
      }
    })
  }
}
