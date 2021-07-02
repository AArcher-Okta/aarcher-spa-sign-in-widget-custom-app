# Clone repository, install dependencies

## Must replace CLIENT_ID and ISSUER with your own Okta credentials for your org and your Okta OIDC SPA application in the login.component.ts and app.component.ts
#
# This application uses Authorization Code Grant w/ PCKE flow

## SPA Application setings:
### Uses OIDC 
### Client acting on behalf of a user: Authorization code
### Sign-in redirect URI: http://localhost:4200/login/callback
### Sign-out redirect URI: http://localhost:4200
### Login initiated by: App Only

### run "ng serve" - defaults to localhost:4200