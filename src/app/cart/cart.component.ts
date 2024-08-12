import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
  