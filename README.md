# ACT26CSSFLEX

## What CSS Flexbox?
CSS Flexbox, short for Flexible Box Layout, is a layout model in CSS designed to simplify the alignment, distribution, and spacing of elements within a container. It is especially useful for creating responsive and dynamic layouts.

### Firebase: https://cssflexsvfc-4a.web.app
### Hashnode: https://act4.hashnode.dev/activity-26-css-flex

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
 // product.component.css
.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .product-card {
    flex: 1 1 30%; /* Grow to fill space, base width of 30% */
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .product-card:hover {
    transform: scale(1.05);
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .product-name {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .product-description {
    font-size: 1em;
    color: #555;
  }
  
  .product-price {
    font-size: 1.2em;
    color: #28a745;
  }

//  product.component.html
<div class="product-container">
    <div class="product-card" *ngFor="let product of products">
      <img [src]="product.image" alt="{{ product.name }}" class="product-image">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <span class="product-price">{{ product.price | currency }}</span>
    </div>
  </div>



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

//employee-cards.component.css
.employee-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .employee-card {
    flex: 1 1 20%; /* Base width of 20% */
    margin: 15px;
    padding: 15px;
    border: 1px solid #007bff;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .employee-card:hover {
    transform: scale(1.05);
  }
  
  .employee-image {
    width: 100px; /* Set a fixed width for the image */
    height: 100px; /* Set a fixed height for the image */
    border-radius: 50%; /* Make the image circular */
    margin-bottom: 10px;
  }
  
  .employee-name {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .employee-position {
    font-size: 1em;
    color: #555;
  }

//employee-cards.component.html
<div class="employee-container">
    <div class="employee-card" *ngFor="let employee of employees">
      <img [src]="employee.photo" alt="{{ employee.name }}" class="employee-image">
      <h4 class="employee-name">{{ employee.name }}</h4>
      <p class="employee-position">{{ employee.position }}</p>
    </div>
  </div>


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

//student-profile.component.css
.profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height of the viewport */
    background-color: #f4f4f4; /* Light background color */
  }
  
  .profile-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    max-width: 400px; /* Maximum width of the card */
  }
  
  .profile-image {
    width: 150px; /* Set a fixed width for the image */
    height: 150px; /* Set a fixed height for the image */
    border-radius: 50%; /* Make the image circular */
    margin-bottom: 15px;
  }
  
  .profile-name {
    font-size: 1.8em;
    margin: 10px 0;
  }
  
  .profile-major {
    font-size: 1.2em;
    color: #555;
  }
  
  .profile-bio {
    font-size: 1em;
    color: #777;
    margin-top: 10px;
  }

//student-profile.component.html
<div class="profile-container">
    <div class="profile-card">
      <img [src]="student.photo" alt="{{ student.name }}" class="profile-image">
      <h2 class="profile-name">{{ student.name }}</h2>
      <p class="profile-major">Major: {{ student.major }}</p>
      <p class="profile-bio">{{ student.bio }}</p>
    </div>
  </div>
