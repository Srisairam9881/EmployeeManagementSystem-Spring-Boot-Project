import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/EmpolyeeClass/employee';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!:number;
  employee!:Employee;
  constructor(private employeeService:EmployeeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
     this.employee=data;
    });
  }

  updateEmployee(id:number)
  {
  this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number)
  {
  this.employeeService.deleteEmployee(id).subscribe(data=>{
  this.goToEmployeeList();
  });
 }
 private goToEmployeeList()
 {
 this.router.navigate(['employees-list']);
 }
url1="./assets/edit.png";
url2="./assets/delete.png";
url3="./assets/Details-Icon.png";
}
