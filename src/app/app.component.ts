import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DeliveryInfoComponent } from "./delivery-info/delivery-info.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DeliveryInfoComponent, ItemCardComponent, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkout';
}
