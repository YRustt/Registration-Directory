import { Component, OnInit } from '@angular/core';

import { DepartmentsService } from './services/departments.service';


@Component({
  selector: 'departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentsService]
})
export class DepartmentsComponent implements OnInit {
  main_departments;

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.departmentsService.getData().subscribe(data => this.main_departments = data)
  }

}
