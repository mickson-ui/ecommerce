import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  items: any[] = [];
  loading: boolean = true; // Initialize loading state to true

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.loading = true; // Ensure loading is true before fetching data
    this.apiService.getAllProducts().subscribe({
      next: (response: any) => {
        this.items = response.data;
        console.log('Data fetched successfully', this.items);
        this.loading = false; // Set loading to false after data is fetched
      },
      error: (err) => {
        console.error('Error fetching data', err);
        this.loading = false; // Set loading to false in case of error
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }
}
