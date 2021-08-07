import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Transaction } from '@interfaces';

const api = './api/transactions';

@Injectable()
export class TransactionsService {
  constructor(
    private _http: HttpClient
  ) {}

  private _transactionsChange = new BehaviorSubject<null>(null);

  public transactionsCount$: Observable<number> = this._transactionsChange.pipe(
    switchMap(() => this._http.get<number>(`${api}/count`))
  )

  public getTransactions(page, limit): Observable<Transaction[]> {
    return this._transactionsChange.pipe(
      switchMap(() => this._http.get<Transaction[]>(`${api}/all/${page}/${limit}`))
    )
  }
  public createTransaction(transaction: Transaction): void {
    this._http.post<any>(`${api}/transaction/`, transaction)
    .subscribe(
      success => {
        this._transactionsChange.next(null);
      }
    )
  }
  public updateTransaction(transaction: Transaction): void {
    this._http.put<any>(`${api}/transaction`, transaction)
    .subscribe(
      success => {
        this._transactionsChange.next(null);
      }
    )
  }
  public deleteTransaction(id: Transaction['id']): void {
    this._http.delete<any>(`${api}/transaction/${id}`)
    .subscribe(
      success => {
        this._transactionsChange.next(null);
      }
    )    
  }
}