# ACT26CSSFLEX

## What CSS Flexbox?
CSS Flexbox, short for Flexible Box Layout, is a layout model in CSS designed to simplify the alignment, distribution, and spacing of elements within a container. It is especially useful for creating responsive and dynamic layouts.

### Firebase: https://cssflexsvfc-4a.web.app

```typescript
## Product Layout
//products.model.ts
export interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
  }

//product.component.ts
import { Component } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Sunglasses',
      description: 'Life is too short to wear boring sunglasses.',
      price: 29.99,
      image: 'sunglasses.jpg'
    },
    {
      name: 'Shirt',
      description: 'You can have anything you want in life if you dress for it.',
      price: 39.99,
      image: 'shirt.jpg'
    },
    {
      name: 'Bag',
      description: 'Life is short; buy the handbag',
      price: 19.99,
      image: 'bag.jpg'
    },
    {
      name: 'Shoes',
      description: 'I still have my feet on the ground, I just wear better shoes.',
      price: 49.99,
      image: 'shoes.jpg'
    },
    {
      name: 'Pants',
      description: 'No matter how you feel, get up, dress up and show up.',
      price: 59.99,
      image: 'pants.jpg'
    },
  ];
}


## Employee Cards
//employee-cards.model.ts
export interface Employee {
    name: string;
    position: string;
    photo: string;
 }

//employee-cards.component.ts
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

## Student profiles
//student-profile.model.ts
export interface Student {
    name: string;
    major: string;
    bio: string;
    photo: string;
 }

//student-profile.component.ts
import { Component } from '@angular/core';
import { Student } from './student-profile.model';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  // Sample student data
  student: Student = {
    name: 'Coniaro, Joanna Mae',
    major: 'Bachelor of Science in Information Technology',
    bio: 'A passionate learner and aspiring software developer.',
    photo: 'coniaro.jpg'
  };
}

