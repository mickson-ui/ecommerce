import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navLinks = [
    {
      main:[
        {
          routerLink: 'categories',
          icon: 'fa-regular fa-user',
          label: 'Categories'
        },
        {
          routerLink: 'deals',
          icon: 'fa-regular fa-user',
          label: 'Deals'
        },
        {
          routerLink: 'contact',
          icon: 'fa-regular fa-user',
          label: 'Contact'
        }
    ],
      subLinks:[
        {
          routerLink: 'cart',
          icon: 'bi bi-bag',
          label: 'Cart'
        },
        {
          routerLink: 'account',
          icon: 'fa-regular fa-user',
          label: 'Account',
          icon2: 'fa-solid fa-angle-down'
        }
      ]
    }
  ]

}
