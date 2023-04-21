import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminComponent } from './components/admin/admin.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { ManageacComponent } from './components/admin/manageac/manageac.component';
import { VerifyjobComponent } from './components/admin/verifyjob/verifyjob.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { AlumniManageJobpostComponent } from './components/alumni-manage-jobpost/alumni-manage-jobpost.component';
import { AlumniManageAccountComponent } from './components/alumni-manage-account/alumni-manage-account.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { JobpostComponent } from './components/employee/jobpost/jobpost.component';
import { StudentProfileCreateComponent } from './components/student-profile-create/student-profile-create.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'signup', component:SignupComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'career', component:CareerComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'jobapplication', component:JobApplicationComponent},
  {path:'studentProfileCreate', component:StudentProfileCreateComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'manage',component:ManageacComponent},
    {path:'verify',component:VerifyjobComponent},
    {path:'',component:AnalyticsComponent}
  ]  
},
  {path:'alumni', component:AlumniComponent,
  children:[
    {path:'manageJobPost', component:AlumniManageJobpostComponent},
    {path:'manageAccount', component:AlumniManageAccountComponent}
  ]
},
{path:'employee',component:EmployeeComponent,
  children:[
    {path:'jobpost',component:JobpostComponent},
    
  ]  
},

]
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
