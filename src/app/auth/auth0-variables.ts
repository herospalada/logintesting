interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'DnOWEZzbTr9CI4DDbagHN1QUnU55rc5t',
  domain: 'herospalada.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
