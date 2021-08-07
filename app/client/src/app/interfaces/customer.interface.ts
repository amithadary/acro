export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  country: string;
  city: string;
  street: string;
  phone: string;
  created_at: string;
  updated_at: string;
  [key: string]: any;
}