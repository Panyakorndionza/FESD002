import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllcourseComponent } from './components/allcourse/allcourse.component';
import { CourseComponent } from './components/course/course.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'allcourse', component: AllcourseComponent},
  {path: 'course', component: CourseComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
