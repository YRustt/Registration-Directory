import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegistrationDirectoryModule } from './registration-directory/registration-directory.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, RegistrationDirectoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
