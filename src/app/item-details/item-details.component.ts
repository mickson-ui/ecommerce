import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MockItemService } from '../mock-item.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{
  item: any
  quantity: number = 1
  delivery: number = 2.99

  constructor(
    private route: ActivatedRoute,
    private itemService: MockItemService
  ){}

  ngOnInit(): void{
    const itemId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.item = this.itemService.getItems().find(item => item.id === itemId)
  }

  incrementQuantity(): void{
    this.quantity++
  }

  decrementQuantity(): void{
    if(this.quantity > 1){
      this.quantity--
    }
  }

  get subtotal(): number {
    return parseFloat((this.item ? this.item.price * this. quantity: 0).toFixed(2 ))
  }

  get total(): number{
    return parseFloat((this.subtotal + this.delivery).toFixed(2))
  }
}
