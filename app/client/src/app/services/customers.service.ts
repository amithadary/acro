import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomersService {
  constructor(
    private _http: HttpClient
  ) {}
}