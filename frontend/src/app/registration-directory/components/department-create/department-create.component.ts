import { Component, OnInit } from '@angular/core';

import { DepartmentCreateService } from './services/department-create.service';


@Component({
  selector: 'department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css'],
  providers: [DepartmentCreateService]
})
export class DepartmentCreateComponent implements OnInit {
  name: string = null;
  description: string = null;
  imageFile: File = null;

  constructor(private departmentCreateService: DepartmentCreateService) { }

  ngOnInit() {
  }

  onImageChanged(event) {
    this.imageFile = event.target.files[0];
  }

  createDepartment() {
    this.departmentCreateService.createDepartment(this.name, this.description, this.imageFile, null).subscribe(data => {
      console.log(data);
    });
  }
}
