import { NgModule } from "@angular/core";
import { CoursesListComponent } from "./list/courses-list.component";
import { CoursesEditComponent } from "./edit/courses-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReplacePipe } from "../shared/pipes/replace.pipe";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CoursesListComponent, CoursesEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", redirectTo: "courses", pathMatch: "full" },
      { path: "courses", component: CoursesListComponent },
      { path: "courses/edit/:id", component: CoursesEditComponent },
    ]),
    SharedModule,
  ],
})
export class CourseModule {}
