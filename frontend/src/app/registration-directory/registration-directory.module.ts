import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { FilterPipe } from './components/department-detail/pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [DepartmentsComponent, DepartmentDetailComponent, DepartmentCreateComponent, PersonCreateComponent, FilterPipe],
  exports: [DepartmentsComponent, DepartmentDetailComponent, DepartmentCreateComponent, PersonCreateComponent]
})
export class RegistrationDirectoryModule { }
