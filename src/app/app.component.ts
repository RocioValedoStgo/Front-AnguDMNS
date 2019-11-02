import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asistencia';
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getCustomers().subscribe((res)=>{
      
      });
    }

    
  }
