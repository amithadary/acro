import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '@interfaces';

@Component({
  selector: 'transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['../transactions.component.scss']
})
export class TransactionViewComponent {
  @Input()
  public transaction: Transaction;

  @Output()
  private deleteEvent = new EventEmitter<null>();

  @Output()
  private editEvent = new EventEmitter<null>();

  onDelete() {
    this.deleteEvent.emit();
  }
  onEdit() {
    this.editEvent.emit();
  }
}