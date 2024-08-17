import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ItemCardComponent } from "../item-card/item-card.component";
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ItemCardComponent, RouterModule, HttpClientModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers: any[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAllOffers()
  }

  fetchAllOffers(): void{
    this.apiService.getAllOffers().subscribe({
      next:(response: any) => {
        this.offers = response.data
        console.log('Offers fetched successfully', this.offers)
      },
      error: (err) => {
        console.error('Error fetching offers', err)
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }

  // Default image path
  defaultImageUrl = 'https://plus.unsplash.com/premium_photo-1681414843759-4243acfe43f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb21vfGVufDB8fDB8fHww';

  // Method to handle the error event
  setDefaultImage(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = this.defaultImageUrl;
  }
}
