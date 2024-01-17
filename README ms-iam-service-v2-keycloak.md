# Setting Up ms-iam-service-v2 backend and Keycloak

## Starting Up Keycloak Server
1. Download Keycloak zip file from [Keycloak official website](https://www.keycloak.org/getting-started/getting-started-zip).
2. Unzip the file.
3. Open the terminal and go to the Keycloak file location.
4. Run `bin\kc.bat start-dev` to start the server.
5. Open the browser and go to http://localhost:8080/ . 
6. Click on `Create Realm` and import `realm-export.json` as resource file. Ensure `Enable` is toggle on. Click `Create`. The client and roles needed for the service are automatically imported.
7. Create dummy users for testing.

## Starting Up the Service
1. Create database named `talentreview` in PgAdmin.
2. Open all the required repositories:
- lib-common
- ms-auditlog-model
- ms-auditlog-sdk
- ms-iam-model
- ms-iam-sdk
- ms-iam-service-v2
3. In `/resources/application-dev.properties`, configure `spring.datasource.username`, `spring.datasource.password`, `spring.flyway.user`, `spring.flyway.password` to user's credentials of your database.
4. In the same file, ensure `keycloak.client-secret` is same as client secret in Keycloak. 
*Client Secret can be obtained from Keycloak Admin Console `Client > Credentials`.*
4. Run `MsIamServiceApplication`. Ensure there is no error and the server is started successfully.
5. Open Postman. Post a request to `http://localhost:8085/tr/iam/v1/auth/login` with request body as below (replace the data with dummy user you have created):
```
{
  "email": "email/username",
  "password": "password"
}
```
6. You should get a `200` status code of response with access token, refresh token and other information that shows the user is loggedd in successfully.

