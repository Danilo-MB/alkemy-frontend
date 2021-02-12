import { RouterModule } from '@angular/router';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { OperationsService } from './services/operations.service';
import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OperationsComponent } from './operations/operations.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { SignupService } from './services/signup.service';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperationsComponent,
    ErrorPageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    NewOperationComponent,
    SummaryComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    SignupService,
    LoginService,
    OperationsService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
