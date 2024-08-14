import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { error } from 'console';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent implements OnInit {
  items: any[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAllProducts()
  }

  fetchAllProducts(): void {
    this.apiService.getAllProducts().subscribe({
      next: (data: any) => {
        this.items = data.data;
        console.log('Data fetched successfully', data);
      },
      error: (err) => {
        console.error('Error fetching data', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }
}
