import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  onSubmit(): void {

      // Process checkout data here
      this.items = this.cartService.clearCart();
      window.alert('Your order has been submitted');
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
      // navigate back to home page after checkout
      this.router.navigate(['/']);
  }
}