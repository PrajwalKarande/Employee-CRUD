import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeecrudService } from '../employeecrud.service';
import { Employee } from '../Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-delete',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './search-delete.component.html',
  styleUrl: './search-delete.component.css'
})
export class SearchDeleteComponent implements OnInit{
  constructor(private service:EmployeecrudService){}
  employee:any;
  ngOnInit()
  {
    let result = this.service.getAllEmployee()
    result.subscribe((data)=>this.employee=data);
  }

  public deleteEmp(id:number)
  {
    let result=this.service.deleteEmployee(id)
    result.subscribe((data)=>this.employee=data)
  }

}
