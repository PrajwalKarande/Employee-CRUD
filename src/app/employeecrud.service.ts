import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {

  constructor(private http:HttpClient) {}

  public addEmployee(emp:Employee)
  {
    return this.http.post("http://localhost:8081/emp",emp,{responseType:'text' as 'json'})
  }

  public getAllEmployee()
  {
    return this.http.get("http://localhost:8081/emp")
  }

  public getEmp(id:any)
  {
    return this.http.get("http://localhost:8081/findemp/"+id)
  }

  public deleteEmployee(id:number)
  {
    return this.http.delete("http://localhost:8081/emp/delete/"+id)
  }

  public updateEmployee(Employee:Employee,id:number)
  {
    return this.http.put("http://localhost:8081/emp/"+id,Employee)
  }
}
