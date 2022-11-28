import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
 data:any=[
  {
    "name":"Sachin",
    "designation":"software trainee",
    "salary":25000,
    "Company":"Nest"
   },
   {
    "name":"Akhil",
    "designation":"software trainee",
    "salary":20000,
    "Company":"Infosys"
   },
   {
    "name":"Aby",
    "designation":"software trainee",
    "salary":25000,
    "Company":"Qburst"
   },
   {
    "name":"Jaya",
    "designation":"software trainee",
    "salary":35000,
    "Company":"Gadgeaon"
   },
   {
    "name":"Anoop",
    "designation":"Business",
    "salary":15000,
    "Company":"Teachnook"
   }
   
 ]
}
