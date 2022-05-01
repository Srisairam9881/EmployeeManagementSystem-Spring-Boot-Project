import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
