import { ThrowStmt } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Transaction } from '@interfaces';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: [
    '../transactions.component.scss',
    './transaction-form.component.scss'
  ]
})
export class TransactionFormComponent implements OnInit {
  @Input()
  public initialTransaction = {
    id: '',
    id_customer: '',
    created_at: '',
    total_price: '',
    currency: '',
    cc_type: '',
    cc_number: ''
  };

  @Output()
  private submitEvent = new EventEmitter<Transaction>();

  @Output()
  private cancelEvent = new EventEmitter<null>();

  public form: FormGroup;
  public editFlag = false;

  private setForm(initial) {
    this.form = new FormGroup({
      id_customer: new FormControl(initial.id_customer, Validators.required),
      total_price: new FormControl(initial.total_price, Validators.required),
      currency: new FormControl(initial.currency, Validators.required),
      cc_type: new FormControl(initial.cc_type, Validators.required),
      cc_number: new FormControl(initial.cc_number, Validators.required)
    })
  }

  public onSubmit(form: FormGroup) {
    if(form.valid) {
      this.submitEvent.emit(form.value);
      if(!this.editFlag) form.reset();
    }
  }
  public onCancel() {
    this.cancelEvent.emit();
  }

  ngOnInit() {
    if(this.initialTransaction.id_customer) this.editFlag = true;
    this.setForm(this.initialTransaction);
  }
}