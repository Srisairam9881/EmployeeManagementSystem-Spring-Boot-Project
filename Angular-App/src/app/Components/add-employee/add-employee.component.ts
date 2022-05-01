import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/EmpolyeeClass/employee';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee()
  {
  this.employeeService.addEmployee(this.employee).subscribe(data=>{
  alert("Record has been Added Successfully...");
  this.goToEmployeeList();
  },error=>console.log("Something went worng!!!!"));
  }
  onSubmit()
  {
  this.addEmployee();
  }
  goToEmployeeList(){
  this.router.navigate(['employees-list']);
  }
}
