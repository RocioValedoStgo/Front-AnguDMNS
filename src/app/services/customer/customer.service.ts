import { Injectable } from '@angular/core';
import { API } from '../../app-config';
import { Customer } from '../../interfaces/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para Customer (Alumno)

  getCustomers(){
    return this.http.get(`${this.apiURL}/customers`)
  }

  createCustomer(customer: Customer) {
    return this.http.post(`${this.apiURL}/customers/`,customer);
  }

  updateCustomer(customer: Customer){
    return this.http.put(`${this.apiURL}/customers/${customer.id}`,customer);
  }

  deleteCustomer(id: number){
    return this.http.delete(`${this.apiURL}/customers/${id}`);
  }

  getCustomerById(id: number){
    return this.http.get(`${this.apiURL}/customers/${id}`);
  }

}
