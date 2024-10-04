import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "d4bc7c2d-f3ca-427a-9741-5b6027002ba0",
        authority: "https://login.microsoftonline.com/112c896a-ba88-461d-a9a9-80c4d2aca596",
        redirectUri: "http://localhost:3000",
      },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
