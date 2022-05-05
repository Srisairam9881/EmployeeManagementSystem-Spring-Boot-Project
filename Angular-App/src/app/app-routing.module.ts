import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';

const routes: Routes = [
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employees-list',component:EmployeeListComponent},
  {path:'',redirectTo:'employees-list',pathMatch:'full'},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
