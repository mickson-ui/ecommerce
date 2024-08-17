import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userName = this.authService.getUserName()

    if(this.userName){
      this.navLinks[0].subLinks.forEach(link => {
        if(link.label === 'Account'){
          link.label = this.userName!
        }
      })
    }
  }


  navLinks = [
    {
      main:[
        {
          routerLink: '/categories',
          icon: 'fa-regular fa-user',
          label: 'Categories'
        },
        {
          routerLink: '/offers',
          icon: 'fa-regular fa-user',
          label: 'Offers'
        },
        {
          routerLink: '/contact',
          icon: 'fa-regular fa-user',
          label: 'Contact'
        }
    ],
      subLinks:[
        {
          routerLink: '/cart',
          icon: 'bi bi-bag',
          label: 'Cart'
        },
        {
          routerLink: '/account',
          icon: 'fa-regular fa-user',
          label: 'Account',
          icon2: 'fa-solid fa-angle-down'
        }
      ]
    }
  ]

}
