import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthenticationGuardService } from './authentication-guard.service';
import { AnsweringComponent } from './answering/answering.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'about-us', component:AboutUsComponent, canActivate:[AuthenticationGuardService]},
  {path:'contact', component:ContactUsComponent},
  {path:'login',component:LoginAdminComponent},
  {path:'test',component:AnsweringComponent},
  {path:'add-question',component:AddNewQuestionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
