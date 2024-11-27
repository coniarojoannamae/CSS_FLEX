import { Component } from '@angular/core';
import { Employee } from './employee-cards.model';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrl: './employee-cards.component.css'
})
export class EmployeeCardsComponent {
  // Sample employee data
  employees: Employee[] = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      photo: 'John Doe.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'Project Manager',
      photo: 'Jane Smith.jpg'
    },
    {
      name: 'Alice Johnson',
      position: 'UX Designer',
      photo: 'Alice Johnson.jpg'
    },
    {
      name: 'Bob Brown',
      position: 'Data Scientist',
      photo: 'Bob Brown.jpg'
    },
    {
      name: 'Charlie Davis',
      position: 'DevOps Engineer',
      photo: 'Charlie Davis.jpg'
    },
  ];
}