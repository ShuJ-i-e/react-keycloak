import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "ms-iam-service-v2",
 clientId: "rms-iam-client",
});

export default keycloak;