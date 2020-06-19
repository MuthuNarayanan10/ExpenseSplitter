import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewExpensesComponent } from './new-expenses/new-expenses.component';

const routes: Routes = [
 
  {path :'',
  component:DashboardComponent,
  children:[{
    path:'my-account',
    component:MyAccountComponent
  },
  {
    
    path:'new-expenses',
    component:NewExpensesComponent
  },

  {
    path:'new-account',
    component:NewAccountComponent
  }
]
},
  {path :'main-nav',component:MainNavComponent}

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
