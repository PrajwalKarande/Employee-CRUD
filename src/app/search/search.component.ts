import { Component } from '@angular/core';
import { EmployeecrudService } from '../employeecrud.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../Employee';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private service:EmployeecrudService){}
  
  id:number | undefined
  result:any
  public findEmp()
  {
    let remp=(this.service.getEmp(this.id))
    remp.subscribe((data)=>this.result=data)
  }

}
