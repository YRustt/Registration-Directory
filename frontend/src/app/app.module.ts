import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationDirectoryModule } from './registration-directory/registration-directory.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentsComponent } from './registration-directory/components/departments/departments.component';
import { DepartmentDetailComponent } from './registration-directory/components/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './registration-directory/components/department-create/department-create.component';
import { LoginComponent } from './auth/components/login/login.component';

import { LoginService } from './auth/components/login/services/login.service';
import { GuardService } from './auth/components/login/services/guard.service';


const appRouters: Routes = [
  { path: '', component: DepartmentsComponent, canActivate: [GuardService] },
  { path: 'department/create', component: DepartmentCreateComponent, canActivate: [GuardService]},
  { path: 'department/:id', component: DepartmentDetailComponent, canActivate: [GuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RegistrationDirectoryModule,
    AuthModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [LoginService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
