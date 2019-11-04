import { Injectable } from '@angular/core';
import { API } from '../../app-config';
import { Rfid } from '../../interfaces/rfid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RfidService {

  apiURL: string = API;

  constructor(public http: HttpClient) { }

  //CRUD para RFID

  getRfid(){
    return this.http.get(`${this.apiURL}/rfids`)
  }

  createRfid(rfid: Rfid){
    return this.http.post(`${this.apiURL}/rfids/`,rfid);
  }

  updateRfid(rfid: Rfid){
    return this.http.put(`${this.apiURL}/rfids/${rfid.id}`,rfid);
  }

  deleteRfid(id: number){
    return this.http.delete(`${this.apiURL}/rfids/${id}`);
  }

  getRfidById(id: number){
    return this.http.get(`${this.apiURL}/rfids/${id}`);
  }
  
}
