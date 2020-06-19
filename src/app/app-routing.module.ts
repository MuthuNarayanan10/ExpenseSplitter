import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component'
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { NewPasswordComponent } from './new-password/new-password.component'

import { InviteComponent } from './invite/invite.component'






const routes: Routes = [


    
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',

  },
  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path:"invite",component:InviteComponent},
  {path: 'register', component: RegisterComponent},
  {path:'forget-pass', component:ForgetPassComponent},
  {path:'verify-mail', component:VerifyMailComponent},
  {path:'new-password', component:NewPasswordComponent},

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,


  ],

})
export class AppRoutingModule { }
