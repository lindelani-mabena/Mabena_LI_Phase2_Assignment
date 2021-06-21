import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthenticationGuardService } from './authentication-guard.service';
import { HttpServiceService } from './http-service.service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AnsweringComponent } from './answering/answering.component';
import { ChosefieldComponent } from './chosefield/chosefield.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
@NgModule({
  declarations: [
    SignUpComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent,
    HeaderComponent,
    MainComponent,
    LoginAdminComponent,
    TemplateDrivenFormComponent,
    AnsweringComponent,
    ChosefieldComponent,
    AddNewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthenticationGuardService,HttpServiceService],
  bootstrap: [MainComponent]
})
export class AppModule { }
