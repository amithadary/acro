import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TransactionsService } from '@services';

import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Transaction } from '@interfaces';

@Component({
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  constructor(
    private _transactionsService: TransactionsService
  ) {}

  // Pagination
  private _paginationEvent = new BehaviorSubject<PageEvent>({pageIndex: 0, pageSize: 25, length: NaN})
  public paginationOptions = {
    pageSize: 25,
    pageSizeOptions: [25, 50, 100, 500, 1000]
  }
  onPaginationEvent(e: PageEvent) {
    this._paginationEvent.next(e);
  }

  // Edit State Management
  onEditClick(transaction: Transaction) {
    transaction.editState = true;
  }
  onCancelClick(transaction: Transaction) {
    transaction.editState = false;
  }

  // Transactions
  public transactionsCount$: Observable<number> = this._transactionsService.transactionsCount$;
  public transactions$: Observable<Transaction[]> = this._paginationEvent.pipe(
    switchMap((e: PageEvent) => {
      return this._transactionsService.getTransactions(e.pageIndex, e.pageSize);
    })
  )

  // Event Handlers
  onCreate(transaction: Transaction) {
    this._transactionsService.createTransaction(transaction);
  }
  onUpdate(transaction: Transaction, wanted: Transaction) {
    const payload = Object.assign({}, transaction, wanted);
    this._transactionsService.updateTransaction(payload);
  }
  onDelete(id: Transaction['id']) {
    this._transactionsService.deleteTransaction(id);
  }

  // Utils.
  trackById(i, transaction) {
    return transaction.id;
  }
}