import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './components/transactions/transactions.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {path: 'transactions', component: TransactionsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: '**', redirectTo: 'transactions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
