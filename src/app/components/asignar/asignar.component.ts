import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer/customer.service';
import { Rfid } from '../../interfaces/rfid';
import { RfidService } from '../../services/rfid/rfid.service';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {

  customer: Customer = {
    name: null,
    ap_pat: null,
    ap_mat: null,
    matricula: null,
    email: null,
    gender: null,
    serial: null,
    rfid: false
  };

  rfid: Rfid = {
    serial: null,
    status: null
  };
  
  Customers: Customer[]; 
  Rfids: Rfid[];

  customerSelect = false;
  rfidSelect = false;

  customerName: string;
  rfidSerial: string;

  constructor(private customerService: CustomerService, private rfidService: RfidService) {
    this.getAllCustomers();
    this.getAllRfids();
  }

  ngOnInit() {}

  getAllCustomers() {
    this.customerService.getUnassigned().subscribe((
      response: Customer[] ) => {
        this.Customers = response;       
      }
    );
  }

  getAllRfids() {
    this.rfidService.getUnassigned().subscribe((
      response: Rfid[] ) => {
        this.Rfids = response;
      }
    );
  }

  selectCustomer(id) {
    this.customerService.getCustomerById(id).subscribe((
      response: Customer[] ) => {
        this.customerName = response[0].name;
        this.customerSelect = true;
      }
    )
  }

  selectRfid() {
    
  }

  removeCustomer() {
    this.customerSelect = false;
    console.log('Alumno Removido');
  }

  removeRfid() {
    this.rfidSelect = false;
    console.log('Rfid Removido');
  }

  asignar() {
   
  }

}
