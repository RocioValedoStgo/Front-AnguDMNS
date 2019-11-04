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
    rfid: null
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
    let indice = 0;
    this.customerService.getCustomers().subscribe((
      response: { data: Customer[] }) => {
        for(let i=0; i<response.data.length; i++) {
          if(response[i].rfid == false) {
            this.Customers[indice] = response.data[i];
            indice++;
          }
        }
      }
    );
  }

  getAllRfids() {
    let indice = 0;
    this.rfidService.getRfid().subscribe((
      response: { data: Rfid[] }) => {
        for(let i=0; i<response.data.length; i++) {
          if(response[i].status == false) {
            this.Rfids[indice] = response.data[i];
            indice++;
          }
        }
      }
    );
  }

  selectCustomer(id) {
    this.customerService.getCustomerById(id).subscribe((
      response: { data: Rfid[] }) => {
        this.customerName = response[0].data.name;
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
