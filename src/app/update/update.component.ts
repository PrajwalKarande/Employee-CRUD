import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeecrudService } from '../employeecrud.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  employee:Employee=new Employee(0,'',0);
  message:any;
  constructor(private service:EmployeecrudService){}
  
  public updateEmp()
  {
    let id=this.employee.empid
    let resp = this.service.updateEmployee(this.employee,id)
    resp.subscribe((data)=>this.message=data)
  }

}
