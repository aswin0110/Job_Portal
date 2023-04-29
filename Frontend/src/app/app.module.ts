import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AlumniComponent } from './components/alumni/alumni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManageacComponent } from './components/admin/manageac/manageac.component';
import { VerifyjobComponent } from './components/admin/verifyjob/verifyjob.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { JobpostComponent } from './components/employee/jobpost/jobpost.component';
import { StudentProfileCreateComponent } from './components/student-profile-create/student-profile-create.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { ManagejobComponent } from './components/employee/managejob/managejob.component';
import { ProfilematchComponent } from './components/employee/profilematch/profilematch.component';
import { ManageaccountComponent } from './components/employee/manageaccount/manageaccount.component';
import { EmployeracComponent } from './components/admin/employerac/employerac.component';
import { JobpostformComponent } from './components/employee/jobpostform/jobpostform.component';
import { EmployeefrontComponent } from './components/employee/employeefront/employeefront.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth.guard';
import { MaterialModule } from 'material.module';
import { AlumniManageAccountComponent } from './components/alumni-manage-account/alumni-manage-account.component';
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
    AlumniComponent,
    AdminComponent,
    EmployeeComponent,
    ManageacComponent,
    VerifyjobComponent,
    AnalyticsComponent,
    JobpostComponent,
    StudentProfileCreateComponent,
    JobApplicationComponent,
    ManagejobComponent,
    ProfilematchComponent,
    ManageaccountComponent,
    EmployeracComponent,
    JobpostformComponent,
    EmployeefrontComponent,
    AlumniManageAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MaterialModule
    
    
  ],
  providers: [LoginService,AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
