import { HttpClientModule } from '@angular/common/http';
import { OperationsService } from './services/operations.service';
import { SigninService } from './services/signin.service';
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
import { SigninComponent } from './signin/signin.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperationsComponent,
    ErrorPageComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    NewOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SigninService,
    LoginService,
    OperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
