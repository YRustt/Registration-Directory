import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  main_department: string = null;

  private querySubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private departmentCreateService: DepartmentCreateService) {
    this.querySubscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.main_department = queryParam['main_department'];
      }
    )
  }

  ngOnInit() {
  }

  onImageChanged(event) {
    this.imageFile = event.target.files[0];
  }

  createDepartment() {
    this.departmentCreateService.createDepartment(this.name, this.description, this.imageFile, this.main_department).subscribe(data => {
      this.router.navigate(['department/' + data['id']]);
    });
  }
}
