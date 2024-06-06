import { QueryProvider, ThemeProvider } from "@providers";

import { Authenticator } from "@aws-amplify/ui-react";

import { Router } from "@routes";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: "code", // 'code' | 'link'
    },
  },
});

const App = () => {
  return (
    <ThemeProvider>
      <Authenticator hideSignUp>
        <QueryProvider>
          <Router />
        </QueryProvider>
      </Authenticator>
    </ThemeProvider>
  );
};

export { App };
