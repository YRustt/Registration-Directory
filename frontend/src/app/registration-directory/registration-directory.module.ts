import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DepartmentsComponent } from './components/departments/departments.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DepartmentsComponent],
  exports: [DepartmentsComponent]
})
export class RegistrationDirectoryModule { }
