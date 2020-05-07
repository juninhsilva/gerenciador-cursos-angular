import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "src/app/shared/models/course";
import { CourseService } from "src/app/shared/services/course.service";

@Component({
  templateUrl: "./courses-edit.component.html",
  styleUrls: ["./courses-edit.component.css"],
})
export class CoursesEditComponent implements OnInit {
  course: Course;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.courseService.getById(this.route.snapshot.params.id).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  save() {
    this.courseService.save(this.route.snapshot.params.id).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
