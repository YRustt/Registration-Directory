import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DepartmentDetailService } from './services/department-detail.service';


@Component({
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  providers: [DepartmentDetailService]
})
export class DepartmentDetailComponent implements OnInit {
  department_id: number;

  departments;
  staff;

  searchValue;

  constructor(private activatedRoute: ActivatedRoute, private departmentDetailService: DepartmentDetailService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => {
      this.department_id = +data;

      this.departmentDetailService.getDepartments(this.department_id).subscribe(data => {
        this.departments = data;
      });

      this.departmentDetailService.getDetail(this.department_id).subscribe(data => {
        this.staff = data['staff'];
      });
    });
  }

}
