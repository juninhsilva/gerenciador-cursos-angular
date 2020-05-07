import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
@NgModule({
  declarations: [NavbarComponent, Error404Component],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '**', component: Error404Component }]),
  ],
  exports: [NavbarComponent, Error404Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
