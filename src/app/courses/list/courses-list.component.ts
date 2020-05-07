import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[];

  _courses: Course[];

  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAll();
  }

  set filter(value: string) {
    this._filterBy = value;
    this._courses = this.courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }

  getAll() {
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this._courses = this.courses;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteById(id: string) {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.warn('Deleted');
        this.getAll();
      },
      error: (err) => console.error(err)
    });
  }
}
