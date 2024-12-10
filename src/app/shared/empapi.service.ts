import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpapiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/employees"

  getEmployees(){    
    return this.http.get(this.url);
  }
  createEmployee(data: any){
    return this.http.post(this.url, data);
  }

  updateEmployee(){}

  deleteEmployee(){}
}
