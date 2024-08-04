import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeecrudService } from '../employeecrud.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    employee:Employee=new Employee(0,'',0);
    message:any;

    constructor(public service:EmployeecrudService){}

    public register():void
  {
    let response = this.service.addEmployee(this.employee);
    response.subscribe((data)=>this.message=data)
  } 
}
