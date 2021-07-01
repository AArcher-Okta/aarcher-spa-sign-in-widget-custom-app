/* This route hosts the Sign-In Widget and redirects if the user is already logged in. 
If the user is coming from a protected page, they'll be redirected back to the page upon login. */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
/* refer to .d.ts in same directory for declaration - 
known issue? 
"error TS2307: Cannot find module '@okta/okta-signin-widget' or its corresponding type declarations."*/
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-secure',
  template: `
    <!-- Container to inject the Sign-In Widget -->
    <div id="okta-signin-container"></div>
  `
})

export class LoginComponent implements OnInit {
  authService;
  widget = new OktaSignIn({
    el: '#okta-signin-container',
    // add registration
    features: { registration:true },
    // include these scopes in ID Token Claim
    scopes: ['openid', 'profile', 'email'],
    baseUrl: 'https://dev-62376248.okta.com',
    authParams: {
      // use PKCE in Authorization Code Grant flow
      pkce: true
    },
         clientId: '0oa12pg1938paTMyC5d7',
         redirectUri: 'http://localhost:4200/login/callback'
  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.authService = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/login':
            break;
          case '/protected':
            break;
          case '/profile':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.widget.showSignInAndRedirect().catch((err: any) => {
      throw(err);
    });
  }
}