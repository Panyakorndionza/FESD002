import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../classes/course';
import { hostIp } from '../classes/project-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(hostIp + 'list/');
  }
  public getPromote(): Observable<any> {
    return this.http.get(hostIp + 'promote/')
  }
  public postCreate(course: Course): Observable<any> {
    return this.http.post(hostIp + 'create/',course)
  }
  public putUpdate(course: Course): Observable<any> {
    return this.http.put(hostIp + 'update/',course)
  }
  public deleteCourse(course: Course): Observable<any> {
    return this.http.delete(hostIp + 'delete/',{body:course})
  }
}
