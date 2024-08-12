import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string
  rating: string
}

@Injectable({
  providedIn: 'root'
})

export class MockItemService {

  constructor() { }


  private items: Item[] = [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1700183069109-b0a91cff80c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sample Item 1',
        price: 199.99,
        description: 'This is a description of the sample item 1.',
        rating: '4.5/5'
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1722218530021-aa1dfba50fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sample Item 2',
        price: 89.49,
        description: 'This is a description of the sample item 2.',
        rating: '4.0/5'
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1714386008526-ed85abfbcfcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sample Item 3',
        price: 50.00,
        description: 'This is a description of the sample item 3.',
        rating: '4.8/5'
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1714386008526-ed85abfbcfcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sample Item 3',
        price: 9.99,
        description: 'This is a description of the sample item 3.',
        rating: '4.8/5'
      }
      ,
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1714386008526-ed85abfbcfcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sample Item 3',
        price: 9.99,
        description: 'This is a description of the sample item 3.',
        rating: '4.8/5'
      }
    ];

    getItems(): Item[]{
      return this.items
    }
  }
