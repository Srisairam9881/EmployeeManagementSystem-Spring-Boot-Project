import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../EmpolyeeClass/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl="http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) { }

  //Add Employee
  addEmployee(employee:Employee):Observable<object>
  {
  return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  //Employees List
  getEmployeesList():Observable<Employee[]>
  {
  return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  //Get Employee By Id
  getEmployeeById(id:number):Observable<Employee>
  {
  return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  //Update Employee
  updateEmployee(id:number,employee:Employee):Observable<object>
  {
  return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  //delete Employee
  deleteEmployee(id:number):Observable<object>
  {
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
