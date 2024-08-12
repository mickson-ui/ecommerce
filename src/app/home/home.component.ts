import { Component } from '@angular/core';
import { ItemCardComponent } from "../item-card/item-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
