1. [property] keycloak.authenticated (boolean) : Check whether user is login (access token exists).
2. [method] keycloak.login(): Redirect users to Keycloak login page.
3. [method] keycloak.logout(): Redirect users to Keycloak logout page.
4. [property] keycloak.tokenParsed.preferred_username: Get users' username from access token.
5. [method] keycloak.hasRealmRole("admin"): Check whether users is assigned with "admin" role. 
6. [property] keycloak.token: Get Keycloak access token.
7. [property] keycloak.refreshToken: Get Keycloak access token.