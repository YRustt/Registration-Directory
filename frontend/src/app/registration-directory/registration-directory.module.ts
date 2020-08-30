import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [DepartmentsComponent, DepartmentDetailComponent, DepartmentCreateComponent],
  exports: [DepartmentsComponent, DepartmentDetailComponent, DepartmentCreateComponent]
})
export class RegistrationDirectoryModule { }
