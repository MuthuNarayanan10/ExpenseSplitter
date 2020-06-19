import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { NewPasswordComponent } from './new-password/new-password.component';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { RootNavComponent } from './root-nav/root-nav.component';
import { MatListModule } from '@angular/material/list';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountModule } from './account/account.module';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import { RouterModule } from '@angular/router';
import { InviteComponent } from './invite/invite.component'








const Routes=[
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:ForgetPassComponent},
  {path:'forget-pass', component:RegisterComponent},
  {path:'verify-mail', component:VerifyMailComponent},
  {path:'new-password', component:NewPasswordComponent},

  {path:'invite', component:InviteComponent},

  

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    
    ForgetPassComponent,
    VerifyMailComponent,
    NewPasswordComponent,
  
    RootNavComponent,
    CreateAccountComponent,
    NavbarComponent,
    InviteComponent,
  

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    AccountModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
