import { Component } from '@angular/core';

@Component({
  selector: 'app-secure-style',
  template: `{{message}}`
})

export class ProtectedComponent {
  message;

  constructor() {
    this.message = 'Protected endpoint: This route is protected by OktaAuthGuard and is only visible to users with a valid Access Token or ID Token.'
  }
}