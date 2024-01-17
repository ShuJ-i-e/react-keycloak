# How to Implement Keycloak Authentication in React
## Setting Up Keycloak
### Starting Up the Server
1. Download Keycloak zip file from [Keycloak official website](https://www.keycloak.org/getting-started/getting-started-zip).
2. Unzip the file.
3. Open the terminal and go to the Keycloak file location.
4. Run `bin\kc.bat start-dev` to start the server.
5. Open the browser and go to http://localhost:8080/ . 

### Login to Keycloak
1. Go to `administration console`.
2. Setup a username and password for admin. Then you will be successfully login to the console.

### Creating New Realm
1. Click the dropdown on top left corner, and click `Create Realm`.
2. Insert realm name.
3. Ensure `Enabled` is toggle `On`.
4. Click `Create` to create the realm.

### Creating Client
*Clients are applications and services that can request authentication of a user*

1. Click on `Clients` at the left panel and click on `Create Client`.
2. Insert the `client-id` and `name` for the client.
3. Ensure `Client AUthentication` and `Authorization` are toggle `Off`.
4. Tick the checkbox of `Standard Flow` and `Direct Access Grant`.
5. Update the `Access settings` to fit the React apaplication.

### Creating User
1. Click on `Users` at the left panel and click on `Add user`.
2. Insert the username and email and click `Save`.
3. On the top panel, click on `Credentials`.
4. Click on `Set Password`.
5. Insert password and confirmation password and click `Save`.

### React Configuration
1. Open existing React application folder or create a new application using `npx create-react-app <app-name>`.
2.  Install keycloak-js, @react-keycloack/web with `yarn add keycloak-js @react-keycloak/web` or `npm install keycloak-js @react-keycloak/web`.
3. Create a file named `Keycloak.js` in the root folder. Add the following code into the file, update the `url`, `realm` and `client-id` according to your own Keycloak configuration:
```
import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "ms-iam-service-v2",
 clientId: "rms-iam-client",
});

export default keycloak;
```
4. Use `const { keycloak, initialized } = useKeycloak();` to initialize Keycloak.
5. Use the property and method below access Keycloak's resources. Utilize the information in the access token by using `tokenParsed`. Refer to the codes for sample usage:
```
1. [property] keycloak.authenticated (boolean) : Check whether user is login (access token exists).
2. [method] keycloak.login(): Redirect users to Keycloak login page.
3. [method] keycloak.logout(): Redirect users to Keycloak logout page.
4. [property] keycloak.tokenParsed.preferred_username: Get users' username from access token.
5. [property] keycloak.tokenParsed.realm_access.roles[1]: Get users' role from access token.
6. [method] keycloak.hasRealmRole("admin"): Check whether users is assigned with "admin" role. 
7. [property] keycloak.token: Get Keycloak access token.
8. [property] keycloak.refreshToken: Get Keycloak access token.
```