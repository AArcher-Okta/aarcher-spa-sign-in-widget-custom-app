import { Component } from '@angular/core';

@Component({
  selector: 'app-secure-style',
  template: `{{message}}`
})
export class ProtectedComponent {
  message;

  constructor() {
    this.message = 'Protected endpoint: This route will only be visible to users with a valid accessToken or idToken'
  }
}