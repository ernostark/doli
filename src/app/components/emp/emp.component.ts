import { Component } from '@angular/core';
import { EmpapiService } from '../../shared/empapi.service';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {

  empList: any[] = [];

  id !: number;
  name !: string;
  city !: string;
  salary !: number;
  empForm !: any;

  constructor(private empapi: EmpapiService){}

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.empapi.getEmployees().subscribe({
      next: (data: any) => {
        console.log(data);
        this.empList = data;
        
      },
      error: (error) => {} 
    });
  }

  saveEmployee(){
    console.log("Mentés...");
    this.empapi.createEmployee(this.empForm).subscribe({
      next: (data: any) => {
        console.log(data);
        
      }
    })
    
  }

}
