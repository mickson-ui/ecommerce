import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';

@Component({
  selector: 'app-delivery-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './delivery-info.component.html',
  styleUrl: './delivery-info.component.css'
})
export class DeliveryInfoComponent {
  // deliveryForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   mobileNumber: new FormControl(''),
  //   email: new FormControl(''),
  //   city: new FormControl(''),
  //   address: new FormControl(''),
  // })
}
