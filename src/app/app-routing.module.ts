import { NewOperationComponent } from './new-operation/new-operation.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OperationsComponent } from './operations/operations.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewOperationComponent },
  { path: '**', component:  ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
