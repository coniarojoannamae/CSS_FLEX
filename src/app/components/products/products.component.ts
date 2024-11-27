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
