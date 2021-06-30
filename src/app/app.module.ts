import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected.component';
import { LoginComponent } from './login.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-62376248.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  clientId: '0oa12pg1938paTMyC5d7',
  pkce: true
}

export function onAuthRequired(_oktaAuth: any, injector: { get: (arg0: typeof Router) => any; }) {
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    OktaAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
