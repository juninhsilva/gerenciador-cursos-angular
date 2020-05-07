import { Course } from 'src/app/shared/models/course';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReplacePipe } from './pipes/replace.pipe';
import { StarComponent } from './components/star/star.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [StarComponent, ReplacePipe],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [StarComponent, ReplacePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
