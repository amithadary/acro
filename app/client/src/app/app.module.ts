import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '@modules';
import { AppRoutingModule } from './app-routing.module';

import { 
  TransactionsService, 
  CustomersService 
} from '@services';

import { AppComponent } from './app.component';
  import { MenuComponent } from './components/menu/menu.component';
  import { TransactionsComponent } from './components/transactions/transactions.component';
    import { TransactionFormComponent } from './components/transactions/transaction-form/transaction-form.component';
    import { TransactionViewComponent } from './components/transactions/transaction-view/transaction-view.component';
  import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
      MenuComponent,
      TransactionsComponent,
        TransactionFormComponent,
        TransactionViewComponent,
      CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [
    TransactionsService, 
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
