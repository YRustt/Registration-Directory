import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PersonCreateService } from './services/person-create.service';


@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
  providers: [PersonCreateService]
})
export class PersonCreateComponent implements OnInit {
  surname: string = null;
  name: string = null;
  patronymic: string = null;
  date_of_birth: Date = null;
  address: string = null;
  home_phone: string = null;
  mobile_phone: string = null;
  email: string = null;
  avatar: File = null;
  department: string = null;

  private querySubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personCreateService: PersonCreateService) {
    this.querySubscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.department = queryParam['department'];
      }
    )
  }

  ngOnInit() {
  }

  onImageChanged(event) {
    this.avatar = event.target.files[0];
  }

  createPerson() {
    this.personCreateService.createPerson(this.surname, this.name, this.patronymic, this.date_of_birth, this.address, this.home_phone, this.mobile_phone, this.email, this.avatar, this.department).subscribe(data => {
      this.router.navigate(['department/' + this.department]);
    });
  }
}
