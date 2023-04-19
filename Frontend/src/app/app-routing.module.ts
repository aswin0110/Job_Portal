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

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'signup', component:SignupComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'career', component:CareerComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'admin',component:AdminComponent},
<<<<<<< HEAD
  {path:'alumni', component:AlumniComponent}
=======
  {path:'alumni',component:AlumniComponent},

>>>>>>> 381e586eb76aa0cc452a6c60c5de3541fcd67428
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
