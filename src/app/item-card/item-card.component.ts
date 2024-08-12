import { MockItemService } from './../mock-item.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent implements OnInit {
  items: any[] = []

  constructor(private mockItemService: MockItemService) { }

  ngOnInit(): void {
    this.items = this.mockItemService.getItems()
  }
}
