import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: '',component: LoginComponent},
  {path: 'signup2',component: Signup2Component},
  {path: 'signup3',component: Signup3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
