import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
<<<<<<< HEAD
import { AlumniComponent } from './components/alumni/alumni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AdminComponent } from './components/admin/admin.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { EmployeeComponent } from './components/employee/employee.component';
>>>>>>> 56de68d20c59ee85c5de89381b2d39f637241cee

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LoginpageComponent,
    FooterComponent,
    SignupComponent,
    CareerComponent,
    ContactusComponent,
    AboutusComponent,
<<<<<<< HEAD
    AlumniComponent
=======
    AdminComponent,
    AlumniComponent,
    EmployeeComponent
>>>>>>> 56de68d20c59ee85c5de89381b2d39f637241cee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
