import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = 'http://localhost:3100/api/courses';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  getById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.http.put<Course>(`${this.url}/${course.id}`, course);
    } else {
      return this.http.post<Course>(this.url, course);
    }
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
