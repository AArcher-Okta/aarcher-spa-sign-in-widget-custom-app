import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuthenticated!: boolean;

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/'
    });
  }

  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.signOut();//.then;
    // the line below will navigate will /login but once logout is complete it routes back to root '/'
    // this.router.navigateByUrl('/login');
  }
}