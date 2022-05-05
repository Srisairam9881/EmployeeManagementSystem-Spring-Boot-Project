import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/EmpolyeeClass/employee';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data => {
  this.employee = data;
  }, error => console.log(error));
  }

  updateEmployee()
  {
  this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
  alert("Record has been updated successfully");
  this.goToEmployeeList();
  },error => console.log(error));
  }

  onSubmit()
  {
  this.updateEmployee();
  }

  private goToEmployeeList()
  {
  this.router.navigate(['employees-list']);
  }

}
