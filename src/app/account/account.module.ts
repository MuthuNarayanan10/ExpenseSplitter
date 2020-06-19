import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MyAccountComponent } from './my-account/my-account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewExpensesComponent } from './new-expenses/new-expenses.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
   
    DashboardComponent,
  
    MainNavComponent,
  
    MyAccountComponent,
  
    NewAccountComponent,
  
    NewExpensesComponent,
  
    AddExpenseComponent,
  
    ExpenseListComponent,
  
    AddUserComponent,
  
    UserListComponent
  
   
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AccountModule { }
