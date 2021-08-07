import { Customer } from '@interfaces';

export interface Transaction {
  id: string;
  id_customer: string;
  total_price: number;
  currency: string;
  cc_type: string;
  cc_number: string;
  created_at: string;
  updated_at: string;
  customer?: Customer;
  [key: string]: any;
}